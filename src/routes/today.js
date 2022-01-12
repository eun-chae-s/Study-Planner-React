import React from 'react';
import './css/today.css';
import { Link } from 'react-router-dom';

class Today extends React.Component {
    render() {
        return (
            <div>
                <div className="sidebar">
                    {/* where we put the logo */}
                    <Link to="#">
                        <a>Today</a>
                    </Link>
                    <Link to="/tomorrow">
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
                <div className="today-planner">
                    <h1>
                        What's your plan for today?
                    </h1>
                    <h3>
                        {new Date().toISOString().slice(0, 10)}
                    </h3>
                    <div className="todo-list">
                        <table>
                            <thead>
                                <tr>
                                    <th>Task</th>
                                    <th>Goal hour?</th>
                                    <th>Completed?</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>

                        </table>
                        {/* new task add */}
                        <button>
                            Add
                        </button>
                    </div>
                    <div className="timetable">
                        <h3>
                            How did you spend your day?
                        </h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default Today;