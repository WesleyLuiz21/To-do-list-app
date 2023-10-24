// src/components/TodoItem.js
import React from 'react';

function TodoItem({ index, todo, markComplete, deleteTodo }) {
  return (
    <li>
      <span
        style={{
          textDecoration: todo.completed ? 'line-through' : 'none',
        }}
      >
        {todo.text}
      </span>
      <button onClick={() => markComplete(index)}>Complete</button>
      <button onClick={() => deleteTodo(index)}>Delete</button>
    </li>
  );
}

export default TodoItem;
