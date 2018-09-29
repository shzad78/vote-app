


import React from 'react'

 const TodoItem = (props) => {
  return (
    <div>
    <li>
    <input type="checkbox" checked = {true}/>
    <span> Name: {props.text} </span><br/>
    <span>Description: {props.decsciption}</span>
    </li>
    </div>
  )
}
export default TodoItem;
