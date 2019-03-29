import React, {Component} from 'react';
import './Contact.css'
import Grid from '@material-ui/core/Grid'
import Menu from "../menu/Menu";
import Logo from "../logo/Logo";
import Footer from "../footer/Footer";
import Hidden from "@material-ui/core/Hidden/Hidden";

class Contact extends Component{
    render() {
        return (
                <div>
                        <Menu/>
                        <Logo/>
                        <div className="contact">
                            <Hidden only={['xs','sm']}>
                                <Grid container direction="row" justify="center" alignItems="center" item xs={6} spacing={32} >
                                    <Grid item xs={4}>
                                        contact
                                    </Grid>
                                </Grid>
                            </Hidden >
                            <Hidden only={['md', 'lg', 'xl']}>
                                <Grid container direction="column" justify="center" alignItems="center" item xs={12}>
                                    <Grid item xs={10}>
                                        contact
                                    </Grid>
                                </Grid>
                            </Hidden>
                        </div>
                        <Footer/>
                </div>
        )
    }
}

export default Contact;