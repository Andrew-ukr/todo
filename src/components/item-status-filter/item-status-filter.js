import React, { Component } from 'react';
import './item-status-filter.css';

export default class ItemStatusFilter extends Component {

  render() {
  const {changeFilterItems} = this.props;

  const onClick = (e) => {
    const btn  = document.querySelectorAll('.btn-filter');
    changeFilterItems(e.target.value, 'btnFilterValue');

    btn.forEach(element => {
      element.classList.remove('btn-info')
      element.classList.add('btn-outline-secondary')
    });

    e.target.classList.remove('btn-outline-secondary')
    e.target.classList.add('btn-info')
  }

    return (
      <div className="btn-group">
        <button 
          type="button"
          className="btn btn-info btn-filter"
          value="all"
          onClick={onClick}
        >
          All
        </button>
        <button 
          type="button"
          className="btn btn-outline-secondary btn-filter"
          value="active"
          onClick={onClick}
        >
          Active
        </button>
        <button 
          type="button"
          className="btn btn-outline-secondary btn-filter"
          value="done"
          onClick={onClick}
        >
          Done
        </button>
      </div>
    );
  }
};
