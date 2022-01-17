import './css/month.css';
import React from 'react';
import { Link } from 'react-router-dom';

class Month extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {1: ['soso', 70], 2: ['happy', 90], 
            4: ['soso', 60], 8: ['sad', 40], 15:['happy', 80], 29:['soso', 70]
            }
        }
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
                    <h2>{new Date().toISOString().slice(0, 7)}</h2>
                    <div className="collection">
                        {Array.from({length:31},(v,k)=>k+1).map((num) => {
                            if (this.state.data[num] != null) {
                                <div className={"item" + num}>
                                    {this.state.data[num][0]}
                                    {this.state.data[num][1]}
                                </div>
                            } else {
                                <div className={"item" + num}>
                                    hello
                                </div>
                            }
                            
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default Month;