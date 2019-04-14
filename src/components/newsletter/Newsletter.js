import React, {Component} from 'react'
import './Newsletter.css'

import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField';
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button/Button";

const styles = {
    root: {
        background: "black"
    },
    input: {
        color: "white"
    }
};

class Newsletter extends Component{

    constructor(props){
        super(props);
        this.state = {
            value: '',
            inputText: '',
            title: 'Newsletter',
            text: 'If you would like to get latest information from blog, please subscribe.'
        };

        this.onchange = this.onchange.bind(this);
    }

    render() {
        return (
                <Grid container direction="row" justify="center" alignItems="center" item xs={12} spacing={32} >
                    <Grid item xs={12}  className="newsletter">
                        <h1>{this.state.title}</h1>
                        <p> {this.state.text} </p>
                        <form noValidate autoComplete="off" justify="center" alignItems="center" className="form">
                            <TextField id="standard-name"
                                       label="Email"
                                       className="textField"
                                       value={this.state.value}
                                       onChange={this.onchange}
                                       margin="normal"
                                       required
                                       InputProps={{
                                           className: "input"
                                       }}
                            />
                            <br /><br />
                            <Button variant="outlined" color="primary" className="button">
                                Send
                            </Button>
                        </form>
                    </Grid>
                </Grid>


        )
    };

    addToNewsletter(){
        // TODO - adding user and sending to him newsletter
    }

    onchange(event){
        this.setState({
            value: event.target.value,
            inputText: event.target.value
        })
    }
}

export default withStyles(styles)(Newsletter);