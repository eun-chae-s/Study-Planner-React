import React from 'react';
import './css/today.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile, faSadCry, faMeh } from '@fortawesome/free-solid-svg-icons';

class Today extends React.Component {
    constructor(props) {
        super(props);
        // Connect to the database
        this.state = {
            newTask: '',
            todayTodo: [
                {'task': 'MAT235 Lecture', 'completed': 'not yet'},
                {'task': 'Make a React app', 'completed': 'yes'},
                {'task': 'Workout', 'completed': 'no'},
                {'task': 'Apply to internship', 'completed': 'next'},
                {'task': 'Send an email', 'completed': 'not yet'}
            ]
        }

        this.addNewTask = this.addNewTask.bind(this);
        this.handleChangeNewTask = this.handleChangeNewTask.bind(this);
    }

    handleChangeNewTask(event) {
        this.setState({newTask: event.target.value});
    }

    addNewTask() {
        var rows = this.state.todayTodo;
        rows.push({'task': this.state.newTask, 'completed': 'not yet'});
        this.setState({todayTodo: rows, newTask: ''});
    }

    findRightEmoji(completed) {
        if (completed === 'not yet') {
            return <td></td>;
        } else if (completed === 'no') {
            return <td>&#10008;</td>;
        } else if (completed === 'yes') {
            return <td>&#10004;</td>;
        } else {
            return <td>&#10137;</td>;
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
                    <div className="today-date">
                        <h3>
                            {new Date().toISOString().slice(0, 10)}
                        </h3>
                    </div>
                    
                    <div className="add">
                        <input id="new-task" placeholder='Type new task' value={this.state.newTask} onChange={this.handleChangeNewTask}></input>
                        <button id="add-new-task" onClick={this.addNewTask}>
                            Add
                        </button>
                    </div>
                    <div className="todo-list">
                        <table>
                            <thead>
                                <th>Task</th>
                                <th>&#10003;</th>
                            </thead>
                            <tbody>
                                {this.state.todayTodo.map((item) => 
                                    <tr>
                                        <td>{item.task}</td>
                                        {this.findRightEmoji(item.completed)}
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                    <div className="rating">
                        <h3>
                            How was your day?
                        </h3>
                        {/* Need to make the icon clickable */}
                        <FontAwesomeIcon icon={faSmile} size='4x' color='white'></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faSadCry} size='4x' color='white'></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faMeh} size='4x' color='yellow'></FontAwesomeIcon>
                    </div>
                    
                    <button id='save'>Save</button>
                    {/* Spotify API */}
                    {/* <div>
                        <h3>
                            Today's Song?
                        </h3>
                        <input id='song-search' placeholder='Type the title of the song'></input>
                        <button id='search'>search</button>
                    </div> */}
                </div>
            </div>
        )
    }
}

export default Today;