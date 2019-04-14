import React, {Component} from 'react'
import './SocialMedia.css'
import fbLogo from './images/fb_logo.png';
import { withStyles } from "@material-ui/core/styles";

import Grid from '@material-ui/core/Grid'

const styles = {
    root: {
        background: "black"
    },
    input: {
        color: "white"
    }
};

class SocialMedia extends Component{

    constructor(props){
        super(props);
        this.state = {
            value: '',
            inputText: '',
            title: 'Find us on '
        };
    }

    render() {
        return (
                <Grid container direction="row" justify="center" alignItems="center" item xs={12} spacing={32} >
                    <Grid item xs={12}  className="socialMedia">
                        <h1>{this.state.title}</h1>
                        <br /><br />
                        <img src={fbLogo} alt="fbLogo" className="fbLogoStyle"/>
                    </Grid>
                </Grid>
        )
    };
}

export default withStyles(styles)(SocialMedia);