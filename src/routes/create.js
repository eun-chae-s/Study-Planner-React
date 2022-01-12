import React from 'react';
import './css/create.css';
import { Link } from 'react-router-dom';

class CreateAccount extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            newUserName : '',
            newPassword: ''
        }

        this.handleChangeNewUsername = this.handleChangeNewUsername.bind(this);
        this.handleChangeNewPassword = this.handleChangeNewPassword.bind(this);
    }

    handleChangeNewUsername(event) {
        this.setState({newUserName: event.target.value});
      }
    
      handleChangeNewPassword(event) {
        this.setState({newPassword: event.target.value});
      }

    render() {
        return (
            <div id="new">
                <div id="new-welcome">
                    <h1>Nice to meet you!</h1>
                    <h2>Do you want to join our community?</h2>
                    <h2>Then, please create your own account!</h2>
                </div>
                <form id="create-new-account">
                    <label>
                        Username:
                        <input type="text" value={this.state.newUserName} onChange={this.handleChangeNewUsername}></input>
                    </label>
                    <label>
                        Password:
                        <input type="password" value={this.state.newPassword} onChange={this.handleChangeNewPassword}></input>
                    </label>
                    <Link to="/">
                        <button>Create Account</button>
                    </Link>
                    </form>
            </div>
        )
    }
}

export default CreateAccount;