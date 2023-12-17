// TodoItem.js
import React from "react";

const TodoItem = ({ todo }) => (
  <li>
    <span> {todo.id}</span>
    {todo.title}
  </li>
);

export default TodoItem;
