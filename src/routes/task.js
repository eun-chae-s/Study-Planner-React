import React from 'react';
import './css/task.css';

class Task extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            task: props.task, completion: props.completion
        }
    }

    render() {
        return (
            <div className='task'>
                <a>{this.state.task}</a>
                <a>finished</a>
            </div>
        );
    }
}

export default Task;