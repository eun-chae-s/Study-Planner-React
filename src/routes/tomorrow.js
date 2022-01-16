import React from 'react';
import './css/tomorrow.css';
import { Link } from 'react-router-dom';

class Tomorrow extends React.Component {
    constructor(props) {
        super(props);
        // Connect to the database
        this.state = {
            newTask: '',
            tmrTodo: [
                {'task': 'MAT235 Lecture'},
            ]
        }

        this.tomorrow = new Date();
        this.tomorrow.setDate(this.tomorrow.getDate() + 1);

        this.addNewTask = this.addNewTask.bind(this);
        this.handleChangeNewTask = this.handleChangeNewTask.bind(this);
    }


    handleChangeNewTask(event) {
        this.setState({newTask: event.target.value});
    }

    addNewTask() {
        var rows = this.state.tmrTodo;
        rows.push({'task': this.state.newTask});
        this.setState({tmrTodo: rows, newTask: ''});
    }

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
                        Any plan for tomorrow?
                    </h1>
                    {/* new design for displaying date */}
                    <div className="tmr-date">
                        <h3>
                            {this.tomorrow.toISOString().slice(0, 10)}
                        </h3>
                    </div>
                    
                    <div className="tmr-add">
                        <input id="tmr-new-task" placeholder='Type new task' value={this.state.newTask} onChange={this.handleChangeNewTask}></input>
                        <button id="tmr-add-new-task" onClick={this.addNewTask}>
                            Add
                        </button>
                    </div>
                    <div className="todo-list">
                        <table>
                            <thead className='tmr'>
                                <th>Task</th>
                                <th>&#10003;</th>
                            </thead>
                            <tbody>
                                {this.state.tmrTodo.map((item) => 
                                    <tr>
                                        <td>{item.task}</td>
                                        <td></td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                    <button id='tmr-save'>Save</button>
                </div>
            </div>
        )
    }
}

export default Tomorrow;