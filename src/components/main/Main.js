import React, {Component} from 'react';
import './Main.css'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden';
import withWidth from '@material-ui/core/withWidth';

import Article from '../article/Article'
import About from '../about/About'

class Main extends Component{
    render(){
        return (
            <div>
                <Hidden only={['xs','sm']}>
                    <Grid container direction="row" justify="center" alignItems="flex-start" item xs={12} spacing={32} >
                        <Grid item xs={6}>
                            <Article/>
                        </Grid>
                        <Grid item xs={4}>
                            <About/>
                        </Grid>
                    </Grid>
                </Hidden >
                <Hidden only={['md', 'lg', 'xl']}>
                    <Grid container direction="column" justify="center" alignItems="center" item xs={12}>
                        <Grid item xs={10}>
                            <Article/>
                        </Grid>
                        <Grid item xs={10}>
                            <About/>
                        </Grid>
                    </Grid>
                </Hidden>
            </div>
        )
    }
}

export default withWidth()(Main);