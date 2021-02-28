import React, { Component } from 'react';
import './item-add-form.css';

export default class ItemAddForm extends Component {
  state = {
    input: ''
  }

  onInputChange = (e) => {
    this.setState(({input})=>{
      return({
        input: e.target.value
      })
    });
  }

  onSubmit = (e)=>{
    e.preventDefault();
    // this.props.addItemPost(e.target.firstElementChild.value) 2-ий варіант вказати значення input не використовуючи state
    this.props.addItemPost(this.state.input) 
    e.target.reset()
  }

  render() {
    return (
      <form 
        className="item-add-form d-flex"
        onSubmit={this.onSubmit}
      >

        <input 
          className="form-control search-input"
          type="text" 
          name="input-to-do"placeholder="Type new task"
          onInput={this.onInputChange}
          required
        />

        <button
          type='submit'
          className="btn btn-outline-secondary"
        >
          Add task
        </button>

      </form>
    )
  }
}
