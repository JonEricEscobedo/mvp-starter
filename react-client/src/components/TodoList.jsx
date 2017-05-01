import React from 'react';
import TodoListItem from './TodoListItem.jsx';

const TodoList = (props) => (
  <div>
    There are { props.items.length } things todo.
    {props.items.map((item)=> {
      return(
        <TodoListItem item={item} completed={props.completed} delete={props.delete}/>
      )
    })}
  </div>
)



export default TodoList;