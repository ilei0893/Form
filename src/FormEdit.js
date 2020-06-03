import React, { Component } from 'react';

class FormEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
        firstName: props.first, 
        lastName: props.last, 
        edit: false,
        oFName: props.first,
        oLName: props.last,
    }
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(events) {
      this.setState({
          [events.target.name]: events.target.value
      });
  }

  edit(events) {
      this.setState({
          edit: !this.state.edit,
          oFName: this.state.firstName,
          oLName: this.state.lastName
      });
  }

  cancelButton(events) {
      this.setState({
          edit: false,
          firstName: this.state.oFName,
          lastName: this.state.oLName

      })
  }

  render() {
      return <>
        <div>
        {this.state.edit ? 
        <div>
          <input type= 'text' name= "firstName" value= {this.state.firstName} onChange= {this.handleNameChange} />
          <input type= 'text' name= "lastName" value= {this.state.lastName} onChange= {this.handleNameChange} />
          <button onClick={() => this.edit(this.state)}>Save</button>
          <button onClick={() => this.cancelButton(this.state)}>Cancel</button>
        </div>
        : <div>
            <p>First Name: {this.state.firstName}</p> 
            <p>Last Name: {this.state.lastName}</p>
            <button onClick={() => this.edit(this.state)}>edit</button>
        </div>
        }

        </div>

      </>
  }
}

export default FormEdit;
