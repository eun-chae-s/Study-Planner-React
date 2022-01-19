import './css/month.css';
import React from 'react';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { Grid, Paper, Box } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(3.3),
    margin: theme.spacing("auto"),
    textAlign: 'center',
    color: '#245f68'
  }));

class FormRow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Grid item xs={2.7}>
                    <Item>
                        {
                            this.props.items[0] == '' 
                            ? "Not done:)" 
                            : this.props.items[0][0]
                        }
                    </Item>
                </Grid>
                <Grid item xs={2.7}>
                    <Item>
                        {
                            this.props.items[1] == '' 
                            ? "Not done:)" 
                            : this.props.items[1][0]
                        }
                    </Item>
                </Grid>
                <Grid item xs={2.7}>
                    <Item>
                        {
                            this.props.items[2] == '' 
                            ? "Not done:)" 
                            : this.props.items[2][0]
                        }
                    </Item>
                </Grid>
                <Grid item xs={2.7}>
                    <Item>
                        {
                            (this.props.items[3] == '') ? "Not done:)" : this.props.items[3][0]
                        }
                    </Item>
                </Grid>
            </React.Fragment>
        );
    }
}

class Month extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {1: ['soso', 70], 2: ['happy', 90], 
            4: ['soso', 60], 8: ['sad', 40], 15:['happy', 80], 29:['soso', 70]
            }
        }

        this.convertData = this.convertData.bind(this);
    }

    convertData(data) {
        var arr = Array(32);
        for (var i = 0; i < 32; i++) {
            if (data[i + 1] == null) {
                arr[i] = '';
            } else {
                arr[i] = data[i + 1];
            }
        }
        var final = Array(8);
        for (var i = 0; i < 8; i++) {
            var a = Array(4);
            a[0] = arr[4 * i];
            a[1] = arr[4 * i + 1];
            a[2] = arr[4 * i + 2];
            a[3] = arr[4 * i + 3];
            final[i] = a;
        }
        return final;
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
                    <Box 
                        display="grid" 
                        sx={{ flexGrow: 1}}
                        width="100%"
                    >
                        <Grid 
                            container spacing={2}
                            alignItems="center"
                            justify="center"
                            marginLeft="15px"
                        >
                            <Grid container item spacing={3}>
                                <FormRow items={this.convertData(this.state.data)[0]} />
                            </Grid>
                            <Grid container item spacing={3}>
                                <FormRow items={this.convertData(this.state.data)[1]} />
                            </Grid>
                            <Grid container item spacing={3}>
                                <FormRow items={this.convertData(this.state.data)[2]} />
                            </Grid>
                            <Grid container item spacing={3}>
                                <FormRow items={this.convertData(this.state.data)[3]} />
                            </Grid>
                            <Grid container item spacing={3}>
                                <FormRow items={this.convertData(this.state.data)[4]} />
                            </Grid>
                            <Grid container item spacing={3}>
                                <FormRow items={this.convertData(this.state.data)[5]} />
                            </Grid>
                            <Grid container item spacing={3}>
                                <FormRow items={this.convertData(this.state.data)[6]} />
                            </Grid>
                            <Grid container item spacing={3}>
                                <FormRow items={this.convertData(this.state.data)[7]} />
                            </Grid>
                        </Grid>
                    </Box>
                </div>
            </div>
        )
    }
}

export default Month;