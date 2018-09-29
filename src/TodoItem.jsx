


import React from 'react'

 const TodoItem = (props) => {
  return (
    <div>
    <li>
    Name: {props.text} <br/>
    Description: {props.decsciption}
    </li>
    </div>
  )
}
export default TodoItem;
