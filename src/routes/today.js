import React from 'react';
import './css/today.css';
import Task from './task';
import { Link } from 'react-router-dom';

class Today extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todayTodo: []
        }
    }
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
                    {/* new design for displaying date */}
                    <h3>
                        {new Date().toISOString().slice(0, 10)}
                    </h3>
                    <div className="add">
                        <input id="new-task" placeholder='Type new task'></input>
                        <button id="add-new-task">
                            Add
                        </button>
                    </div>

                    <div className="todo-list">
                        <ul>
                            <li><Task task='hello' completion='finished'></Task></li>
                        </ul>
                    </div>
                    <div className="timetable">
                        <h3>
                            Rate your day!
                        </h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default Today;