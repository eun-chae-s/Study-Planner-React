import './css/setting.css';
import React from 'react';
import { Link } from 'react-router-dom';

class Setting extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            changeUserName: false,
            changePassword: false
        }

        this.togglePassword = this.togglePassword.bind(this);
        this.toggleUserName = this.toggleUserName.bind(this);
    }

    toggleUserName(event) {
        var status = this.state.changeUserName;
        this.setState({changeUserName: !status});
    }

    togglePassword(event) {
        var status = this.state.changePassword;
        this.setState({changePassword: !status});
    }

    render() {
        return (
            <div>
               <div className="sidebar">
                    {/* where we put the logo */}
                    <Link to="/today">
                        <a>Today</a>
                    </Link>
                    <Link to="/tomorrow">
                        <a>Tomorrow</a>
                    </Link>
                    <Link to="/month">
                        <a>This Month</a>
                    </Link>
                    <Link to="#">
                        <a>Setting</a>
                    </Link>
                    <Link to="/">
                        <a>Log out</a>
                    </Link>
                </div> 
                <div className="setting">
                    <h1>Wanna Change Something?</h1>
                    <div className="change">
                        <button id="change-username" onClick={this.toggleUserName}>Change username?</button>
                        { this.state.changeUserName ? 
                            <div className="change-name">
                                <input placeholder='Enter new username'></input>
                                <button id="change-n">Change it!</button>
                            </div> : null} 
                        <button id="change-password" onClick={this.togglePassword}>Change password?</button>
                        {
                            this.state.changePassword ? 
                            <div className="change-pw">
                                <input placeholder='Enter new password'></input>
                                <input placeholder='Type it again!'></input>
                                <button id="change-p">Change it!</button>
                            </div> : null
                        }
                        <button id="delete-account">Delete account?</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Setting;