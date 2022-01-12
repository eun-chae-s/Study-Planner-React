import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: '', password:''};

    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleChangeUsername(event) {
    this.setState({username: event.target.value});
  }

  handleChangePassword(event) {
    this.setState({password: event.target.value});
  }

  render() {
    return (
      <div className="Login">
        <h1>Welcome!</h1>
        <h1>Are You Ready for Today?</h1>
        <form>
          <label>
            Username:
            <input type="text" value={this.state.username} onChange={this.handleChangeUsername}></input>
          </label>
          <label>
            Password:
            <input type="password" value={this.state.password} onChange={this.handleChangePassword}></input>
          </label>
          <Link to="/today">
            <button>Log In</button>
          </Link>
          <Link to="/create-new-account">
            <button>New?</button>
          </Link>
        </form>
        {/* Put the logo of the app here! */}
      </div>
    );
  }
}

export default LogIn;
