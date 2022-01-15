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
                {'task': 'MAT235 Lecture', 'completed': false, 'id': 0},
                {'task': 'Make a React app', 'completed': true, 'id': 1},
                {'task': 'Workout', 'completed': true, 'id': 2},
                {'task': 'Apply to internship', 'completed': true, 'id': 3},
                {'task': 'Send an email', 'completed': false, 'id': 4}
            ],
            todayRating: 
            [{'clicked': false, 'color': 'white'},
            {'clicked': false, 'color': 'white'},
            {'clicked': false, 'color': 'white'}]
        }

        this.addNewTask = this.addNewTask.bind(this);
        this.handleChangeNewTask = this.handleChangeNewTask.bind(this);
        this.changeStatus = this.changeStatus.bind(this);
        this.changeColor = this.changeColor.bind(this);
    }

    handleChangeNewTask(event) {
        this.setState({newTask: event.target.value});
    }

    addNewTask() {
        var rows = this.state.todayTodo;
        rows.push({'task': this.state.newTask, 'completed': false, 'id': rows.length});
        this.setState({todayTodo: rows, newTask: ''});
    }

    findRightEmoji(completed, index) {
        if (completed === false) {
            return <td id={index} onClick={this.changeStatus}></td>;
        } else {
            return <td id={index} onClick={this.changeStatus}>&#10004;</td>;
        }
    }

    changeStatus(e) {
        var index = e.target.id;
        var rows = this.state.todayTodo;
        rows[index].completed = !rows[index].completed;
        this.setState({todayTodo: rows});
    }

    changeColor(e) {
        var index = e.target.id;
        var ratings = this.state.todayRating;
        ratings[index].clicked = !ratings[index].clicked;
        if (ratings[index].clicked === false) {
            ratings[index].color = 'white';
        } else {
            ratings[index].color = 'yellow';
        }
        this.setState({todayRating: ratings});
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
                                        {this.findRightEmoji(item.completed, item.id)}
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                    <div className="rating">
                        <h3>
                            Did you make a productive day?
                        </h3>
                        <div className="stars">
                            {}
                        </div>
                        {/* Need to make the icon clickable */}
                        <span className='icon' id='0' onClick={this.changeColor}>
                            <FontAwesomeIcon icon={faSmile} size='4x' color={this.state.todayRating[0].color} ></FontAwesomeIcon>
                        </span>
                        <span className='icon' id='1' onClick={this.changeColor}>
                            <FontAwesomeIcon icon={faSadCry} size='4x' color={this.state.todayRating[1].color}></FontAwesomeIcon>
                        </span>
                        <span className='icon' id='2' onClick={this.changeColor}>
                            <FontAwesomeIcon icon={faMeh} size='4x' color='white' color={this.state.todayRating[2].color}></FontAwesomeIcon>
                        </span>
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