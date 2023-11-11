// src/components/TodoItem.js
import React from 'react';
import { BiCheck } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';

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
      <button className='check-btn' onClick={() => markComplete(index)}><BiCheck/></button>
      <button className='delete-btn' onClick={() => deleteTodo(index)}><MdDelete/></button>
    </li>
  );
}

export default TodoItem;
