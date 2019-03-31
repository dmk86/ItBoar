import React, {Component} from 'react';
import './About.css'
import Grid from '@material-ui/core/Grid'
import Hidden from "@material-ui/core/Hidden/Hidden";

class About extends Component{
    render() {
        return (
                <div className="contact">
                    <Hidden only={['xs','sm']}>
                        <Grid container direction="row" justify="center" alignItems="center" item xs={6} spacing={32} >
                            <Grid item xs={4}>
                                About
                            </Grid>
                        </Grid>
                    </Hidden >
                    <Hidden only={['md', 'lg', 'xl']}>
                        <Grid container direction="column" justify="center" alignItems="center" item xs={12}>
                            <Grid item xs={10}>
                                About
                            </Grid>
                        </Grid>
                    </Hidden>
            </div>
        )
    }
}

export default About;