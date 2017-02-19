import React from 'react';

export const TodoForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <input type="text" onChange={props.handleInputChange}/>
      </form>
    </div>
  )
}
