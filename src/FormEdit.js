import React, { Component } from 'react';

class FormEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {firstName: props.first, lastName: props.last, editName: props.edit}
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(events) {
      this.setState({
          [events.target.name]: events.target.value
      });
  }

  editButton(events) {
      
  }


  render() {
      return <>
        <input type= 'text' name= "firstName" onChange= {this.handleNameChange} />
        <input type= 'text' name= "lastName" onChange= {this.handleNameChange} />
        <button onClick={() => this.editButton(this.state)}>edit</button>
      </>
  }
}

export default FormEdit;
