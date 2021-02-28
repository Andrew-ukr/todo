import React, { Component } from 'react';
import './search-panel.css';

export default class SearchPanel extends Component {
  render() {
    return (
      <input 
        type="search"
        className="form-control search-input"
        placeholder="Type to search" 
        onChange={(e)=>{this.props.changeFilterItems(e.target.value, 'inputSearchValue')}}
      />
    );
  }
}