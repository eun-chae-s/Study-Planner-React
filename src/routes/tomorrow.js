import React from 'react';
import './css/tomorrow.css';
import { Link } from 'react-router-dom';

class Tomorrow extends React.Component {
    render() {
        return (
            <div>
                <div className="sidebar">
                    {/* where we put the logo */}
                    <Link to="/today">
                        <a>Today</a>
                    </Link>
                    <Link to="#">
                        <a>Tomorrow</a>
                    </Link>
                    <Link to="/month">
                        <a>This Month</a>
                    </Link>
                    <Link to="/setting">
                        <a>Setting</a>
                    </Link>
                    <Link to="/">
                        <a>Log out</a>
                    </Link>
                </div>
                <div className="tomorrow-planner">
                    <h1>
                        Are you ready for tomorrow?
                    </h1>
                    <div className="todo-list">

                    </div>
                    <div className="timetable">

                    </div>
                </div>
            </div>
        )
    }
}

export default Tomorrow;