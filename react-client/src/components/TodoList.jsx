import React from 'react';
import TodoListItem from './TodoListItem.jsx';

const TodoList = (props) => (
  <div>
    <h4> List Component </h4>
    There are { props.items.length } items.
    { props.items.map(item => <TodoListItem item={item}/>)}
  </div>
)

export default TodoList;