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

    /**
   * основна база данних state
   */
  state = {
    todoData : [
      this.createItemObj('Drink Coffee'),
      this.createItemObj('Make Awesome App'),
      this.createItemObj('Have a lunch'),
    ],
    inputSearchValue: '',
    btnFilterValue: 'all',
    search: false,
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

  /**
   * функція зміни властивостей елемента поста important , done
   */
  changeItemProp = (arr, item, id) => {
    let indx = arr.findIndex(item => item.id === id);
    let newArr = [...arr];
    newArr[indx][item] = !(newArr[indx][item]);
    return newArr;
  }

  onLabelClick = (id) => {
    this.setState(({todoData})=>{
      return({
        todoData: this.changeItemProp(todoData, 'done' , id)
      })
    });
  };
  
  onImportantClick = (id) => {
    this.setState(({todoData})=>{
      return({
        todoData: this.changeItemProp(todoData, 'important' , id)
      })
    });
  };
  
  changeFilterItems = (value, stateItem) => {
    this.setState({
      [stateItem]: value
    })

    this.setState(({todoData,inputSearchValue, btnFilterValue}) => {
      if (inputSearchValue !== '' || btnFilterValue !== 'all') {
      let newArr = todoData.filter(item => {
        if (inputSearchValue === '') {
          return item
        } else {
          return item.label.toLowerCase().includes(inputSearchValue.toLowerCase())
        }
      });

      newArr = newArr.filter(item => {
        switch (btnFilterValue) {
          case 'all':
          return item
          case 'active':
            return !item.done
          case 'done':
            return item.done
          default:
            return item
        }
      })

        return({
          search: newArr
        });
        
      } else {
        return({
          search: false
        })
      }
    })
  }
  
  
  render() {
    const {todoData, search} = this.state;
    const doneCount  = todoData.filter(item => item.done).length;
    const leftCount  = todoData.length - doneCount;

    const visiblePosts = !search ? todoData: search ;

    return (
      <div 
        className="todo-app"
      >
        <AppHeader 
          toDo={leftCount} 
          done={doneCount}
        />
        
        <div className="top-panel d-flex">
          <SearchPanel
            changeFilterItems={this.changeFilterItems}
          />
          <ItemStatusFilter 
            changeFilterItems={this.changeFilterItems}
          />
        </div>
  
        <TodoList 
          todos={visiblePosts}
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