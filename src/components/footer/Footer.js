import React, {Component} from 'react'
import './Footer.css'

import Newsletter from './../newsletter/Newsletter'
import SocialMedia from './../socialMedia/SocialMedia'
import RecentPost from './../recentPost/recentPost'

import Hidden from "@material-ui/core/Hidden";
import Grid from "@material-ui/core/Grid";

class Footer extends Component{
    render() {
        return (
            <div className="footer">
                <Hidden only={['xs','sm']}>
                    <div container direction="row" className="footerContent">
                        {/*<Grid className="left"><Newsletter /></Grid>
                        <Grid className="center"><SocialMedia /></Grid>
                        <Grid className="right"><RecentPost /></Grid>*/}
                    </div>
                </Hidden>
                <Hidden only={['md', 'lg', 'xl']}>
                    <div container direction="column" className="footerContentXs">
                        {/*<Grid className="top"><Newsletter /></Grid>
                        <Grid className="middle"><SocialMedia /></Grid>
                        <Grid className="bottom"><RecentPost /></Grid>*/}
                    </div>
                </Hidden>
                <span className="footerSpan">Designed by <a href="https://4coders.pl" target="_blank">4Coders</a></span>
            </div>
        );
    }
}

export default Footer;