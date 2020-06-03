import React, { Component } from 'react';
import './App.css';
import FormEdit from './FormEdit.js';

class App extends Component {
  render() {
    return (
      <FormEdit firstName = {"Hello"} lastName = {""} edit = {false}/>
    );
  }
}

export default App;
