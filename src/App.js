import React, { Component } from 'react';
import Decrement from './Decrement';
import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <div class = "heads">
          <h1>Decrement these numbers: </h1>
          <Decrement start={10}/>
          <Decrement start={20}/>
          <Decrement start={30}/>
          <Decrement start={40}/>
          <Decrement start={50}/>
        </div>  
      </>
    );
  }
}

export default App;
