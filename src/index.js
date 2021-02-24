import React from 'react';
import ReactDOM from 'react-dom';
import ToDoList from './components/todo-list.js'
import ToDoHeader from './components/todo-header.js'
import ToDoInput from './components/todo-input.js'


const App = () => {
  const logged = false;
  const logIn = <span>log in please</span>;
  const logOut = <span>log out</span>;
  
  return (
    <>
      { logged ? logOut : logIn }
      <ToDoHeader />
      <ToDoInput />
      <ToDoList />
    </>
  );
}

ReactDOM.render(
  <App/>, 
  document.querySelector('#root'));