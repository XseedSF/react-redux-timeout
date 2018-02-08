import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../actions';

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    }
  }
  handleFormChange(ev) {
    const newState = {};
    newState[ev.currentTarget.name] = ev.currentTarget.value;
    this.setState(newState);
  }
  handleLogin = () => {
    if(this.state.name.length > 0) {
      this.props.login(this.state.name);
    }
    else {
      alert('You need to enter your name');
    }
  }
  handleLogout = () => {
    this.props.logout();
  }
  render() {
    return (
      <div>
        {this.props.loggedUserName ? 
          <div>
            <p> Welcome {this.props.loggedUserName}</p>
            <button onClick={this.handleLogout}> Logout </button>
          </div> :
          <div>
            <div>
              <input 
                type="text" 
                name="name"
                value={this.state.inputValue} 
                onChange={e => this.handleFormChange(e)} 
              />
            </div>
            <button onClick={this.handleLogin}> Login </button>
          </div>
        }
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return {
    loggedUserName: auth.loggedUserName
  };
}

export default connect(mapStateToProps, actions)(LoginComponent);