import React, { Component } from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component {
  
  render() {
    const { label, onDel, onLabelClick, onImportantClick, done, important } = this.props;

    let itemStyle = `todo-list-item`;

    if (done) {
      itemStyle += ` done`;
    }

    if (important) {
      itemStyle += ` important`;
    }

    return (
      <span 
        className={itemStyle}
      >
        <span
          onClick={onLabelClick}
          className="todo-list-item-label"
        >
          {label}
        </span>
  
        <button 
          type="button"
          onClick={onImportantClick}
          className="btn btn-outline-success btn-sm float-right"
        >
          <i className="fa fa-exclamation" />
        </button>
  
        <button 
          type="button"
          onClick={onDel}
          className="btn btn-outline-danger btn-sm float-right"
        >
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
}
