import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Decrement extends Component {
  constructor(prop) {
    super(prop);
    this.state = {number: prop.start};
  }

  myDecrement = (state) => {
    if (state.number === 0) {
      return alert("Number cannot be less than zero");
    }
    else {
    this.setState({number: state.number - 1});
    }
  };

  render() {
    return (
      <div class = "decrem">
        {this.state.number}{" "}
        <button onClick={() => this.myDecrement(this.state)}>
          decrement
        </button>
      </div>
    );
  }
}

Decrement.propTypes = {
  start: PropTypes.number.isRequired,
};

export default Decrement;