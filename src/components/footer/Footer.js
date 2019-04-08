import React, {Component} from 'react'
import './Footer.css'

import Newsletter from './../newsletter/Newsletter'

import Hidden from "@material-ui/core/Hidden";
import Grid from "@material-ui/core/Grid";

class Footer extends Component{
    render() {
        return (
            <div className="footer">
                <Hidden only={['xs','sm']}>
                    <div container direction="row" className="footerContent">
                        <Grid className="left"><Newsletter /></Grid>
                        <Grid className="center">Social Media</Grid>
                        <Grid className="right">??</Grid>
                    </div>
                </Hidden>
                <Hidden only={['md', 'lg', 'xl']}>
                    <div container direction="column" className="footerContent">
                        <Grid className="top"><Newsletter /></Grid>
                        <Grid className="middle">Social Media</Grid>
                        <Grid className="bottom">??</Grid>
                    </div>
                </Hidden>
                <span id="footerSpan">Designed by <a href="https://4coders.pl" target="_blank">4Coders</a></span>
            </div>
        );
    }
}

export default Footer;