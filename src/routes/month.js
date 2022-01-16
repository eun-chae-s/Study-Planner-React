import './css/month.css';
import React from 'react';
import { Link } from 'react-router-dom';

class Month extends React.Component {
    constructor(props) {
        super(props);
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
                    <Link to="#">
                        <a>This Month</a>
                    </Link>
                    <Link to="/setting">
                        <a>Setting</a>
                    </Link>
                    <Link to="/">
                        <a>Log out</a>
                    </Link>
                </div> 
                <div className="this-month-planners">
                    <h1>Here's your progress!</h1>
                </div>
            </div>
        )
    }
}

export default Month;