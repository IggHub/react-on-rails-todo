import React from 'react';

export const TodoItem = (props) => {
  return(
    <div>
      <li><input type="checkbox" defaultChecked={false} />{props.name}</li>
    </div>
  )
}
