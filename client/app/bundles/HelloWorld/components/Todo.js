import React from 'react';

class Todo extends React.Component{
  constructor(){
    super();
    this.state={
      todos: 'hello'
    }
  }
  render(){
    return (
      <div>
        <h2>Hello from todo!</h2>
        <input type="text" />
        
        {this.state.todos}
      </div>
    )
  }
}

export default Todo;
