import React, {Component} from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';

import './app.css';

export default class App extends Component {
  /**
   * лічильник id для елемента одного поста
   */
  idCount = 1;

  /**
   * функція для створення одного елемента поста  
   */
  createItemObj = (inputValue) => {
    return({label: inputValue, id: this.idCount++, important: false, done: false})
  }
  
  state = {
    todoData : [
      this.createItemObj('Drink Coffee'),
      this.createItemObj('Make Awesome App'),
      this.createItemObj('Have a lunch'),
    ],
  };

  delItemPost = (id) => {
    this.setState(({todoData}) =>{
      return({
        todoData: todoData.filter(item => item.id !== id)
      });
    });
  };

  addItemPost = (inputValue) => {
    this.setState(({todoData}) =>{
      return({
        todoData: [...todoData, this.createItemObj(inputValue)]
      })
    });
  };

  onClickItem = (arr, item, id) => {
    let indx = arr.findIndex(item => item.id === id);
    let newArr = [...arr];
    newArr[indx][item] = !(newArr[indx][item]);
    console.log(newArr)
    return newArr
  }

  onLabelClick = (id) => {
    this.setState(({todoData})=>{
      return({
        todoData: this.onClickItem(todoData, 'done' , id)
      })
    });
  };
  
  onImportantClick = (id) => {
    this.setState(({todoData})=>{
      return({
        todoData: this.onClickItem(todoData, 'important' , id)
      })
    });
  };

  render() {
    const {todoData} = this.state;
    return (
      <div className="todo-app">
        <AppHeader 
          toDo={1} done={3} 
        />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
  
        <TodoList 
          todos={todoData}
          onDel={this.delItemPost}
          onLabelClick={this.onLabelClick}
          onImportantClick={this.onImportantClick}

        />
        <ItemAddForm 
          addItemPost={this.addItemPost}
        />
      </div>
    );
  }
}