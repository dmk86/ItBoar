import React, {Component} from 'react'
import './Newsletter.css'

import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button/Button";

class Newsletter extends Component{
    constructor(props){
        super(props);
        this.state = {
            value: '',
            inputText: ''
        };

        this.onchange = this.onchange.bind(this);
    }

    render() {
        return (
            <div>
                <Grid container direction="row" justify="flex-start" alignItems="center" item xs={12} spacing={32} >
                    {/*If you would like to get latest information from blog, please subscribe.*/}
                    <form noValidate autoComplete="off" justify="center" alignItems="center" className="form">
                        <TextField id="standard-name"
                                   label="Email"
                                   className="textField"
                                   value={this.state.value}
                                   onChange={this.onchange}
                                   margin="normal"
                                   required
                        />

                        <br /><br />
                        <Button variant="outlined" color="primary" className="button">
                            Send
                        </Button>
                    </form>
                </Grid>
            </div>

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

export default Newsletter;