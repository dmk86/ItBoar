import React, {Component} from 'react'
import './recentPost.css'

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

class RecentPost extends Component{

    constructor(props){
        super(props);
        this.state = {
            value: '',
            inputText: '',
            title: 'Recent Posts',
            text: 'If you would like to get latest information from blog, please subscribe.'
        };

        this.onchange = this.onchange.bind(this);
    }

    render() {
        return (
                <Grid container direction="row" justify="center" alignItems="center" item xs={12} spacing={32} >
                    <Grid item xs={12}  className="recent">
                        <h1>{this.state.title}</h1>
                        {this.state.text}<br />
                        <a href = "">Początek - bo od czegoś trzeba zacząć</a><br />
                        <a href = "">Takie sobie przemyślenia</a><br />
                        <a href = "">Scrum, scrum... srum. Czyli dlaczego nie działa</a>
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

export default withStyles(styles)(RecentPost);