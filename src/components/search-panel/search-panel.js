import React, { Component } from 'react';
import './search-panel.css';

;

export default class SearchPanel extends Component {
  getInputValue = (e) => {
    this.props.onFilterPost(e.target.value)
  }

  render() {
    return (
      <input 
        type="search"
        className="form-control search-input"
        placeholder="Type to search" 
        onChange={this.getInputValue}
      />
    );
  }
}

