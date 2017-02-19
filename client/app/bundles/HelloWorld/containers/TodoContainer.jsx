import React from 'react';
import {TodoList} from '../components/todo/TodoList';
import {addTodo, generateId, findById, toggleTodo, updateTodo} from '../lib/todoHelpers';
import {TodoForm} from '../components/todo/TodoForm';

class TodoContainer extends React.Component{
  constructor(){
    super();
    this.state={
      todos: [
        {id: 1, name:'Learn react_on_rails', isComplete: false},
        {id: 2, name:'build some app', isComplete: false},
        {id: 3, name:'Ship it!', isComplete: false}
      ], currentTodo: 'current todo now!'
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmptySubmit = this.handleEmptySubmit.bind(this);

  }

  handleInputChange(e){
    this.setState({
      currentTodo: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault();
    const newId = generateId();
    const newTodo = {id: newId, name: this.state.currentTodo, isComplete: false};
    const resultTodo = addTodo(this.state.todos, newTodo);
    this.setState({
      todos: resultTodo,
      currentTodo: '',
      errorMessage: ''
    })
  }

  handleEmptySubmit(e){
    e.preventDefault();
    this.setState({
      errorMessage: 'please fill in todo list'
    })
  }
  render(){
    const submitHandler = this.state.currentTodo ? this.handleSubmit : this.handleEmptySubmit
    return (
      <div>
        <h2>Hello from todo!</h2>
        {this.state.errorMessage}
        <TodoForm handleInputChange={this.handleInputChange} currentTodo={this.state.currentTodo} handleSubmit={submitHandler} />
        Current todo: {this.state.currentTodo}
        <TodoList todos={this.state.todos} />
      </div>
    )
  }
}

export default TodoContainer;
