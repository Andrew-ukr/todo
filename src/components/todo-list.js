import React from 'react'
import ListItem from './todo-list-item.js';

const ToDoList = () => {

  return (
    <ul>
      <li>
        < ListItem 
          label="Drink coffee"/>
      </li>
      <li>
        < ListItem 
          label="Learn React" 
          important/>
      </li>
      <li>
        < ListItem 
          label="Read books"/></li>
    </ul>
  );
};

export default ToDoList;