import React from 'react';

class Todo extends React.Component{
  constructor(){
    super();
    this.state={
      todos: [
        {id: 1, name:'Learn react_on_rails', isComplete: false},
        {id: 2, name:'build some app', isComplete: false},
        {id: 3, name:'Ship it!', isComplete: false}
      ], currentTodo: 'current todo!'
    }
  }
  todoHandler(e){
    this.setState({
      currentTodo: e.target.value
    })
  };
  render(){
    return (
      <div>
        <h2>Hello from todo!</h2>
        <input type="text" onChange={this.todoHandler.bind(this)}/>
        Current todo:{this.state.currentTodo}
        <ul>
          {this.state.todos.map(todo => <li key={todo.id}>{todo.name}</li>)}
        </ul>
      </div>
    )
  }
}

export default Todo;
