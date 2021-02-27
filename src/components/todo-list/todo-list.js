import React from 'react';
import TodoListItem from '../todo-list-item';
import './todo-list.css';

const TodoList = ({ todos, onDel, onLabelClick, onImportantClick }) => {

  const elements = todos.map((item) => {
    const { id, ...itemProps } = item;

    return (
      <li key={id} className="list-group-item">
        <TodoListItem 
          onDel={()=>{onDel(id)}}
          onLabelClick={()=>{onLabelClick(id)}}
          onImportantClick={()=>{onImportantClick(id)}}
          {...itemProps} 
        />
      </li>
    );
  });

  return (
    <ul className="list-group todo-list">
      { elements.length > 0 ? elements: `No tasks`}
    </ul>
  );
};

export default TodoList;
