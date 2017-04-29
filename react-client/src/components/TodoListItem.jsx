import React from 'react';

const TodoListItem = (props) => (
  <div>
    { props.item.description }
  </div>
)

export default TodoListItem;