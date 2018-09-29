import React from 'react';
import TodoItem from './TodoItem';



 const TodoList = (props)=>{

    console.log(props.items[0].id);
  
    return (
        <ul>
            {props.items.map(item=>(
                
                <TodoItem key={item.id} text={item.description} done= {item.done} />
            ))

            }
        </ul>
      
    )
  
}
export default TodoList;
