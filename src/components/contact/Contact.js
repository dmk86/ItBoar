import React, {Component} from 'react';
import './Contact.css'
import Grid from '@material-ui/core/Grid'
import Hidden from "@material-ui/core/Hidden/Hidden";
import ContactForm from './../contactForm/ContactForm'

class Contact extends Component{
    state = {
        title: 'Get in touch',
        contactText: 'If you would like to contact with me, please fill the form and send me an email.'
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value
        })
    }

    render() {
        return (
                <div className="contact" >
                    <Hidden only={['xs','sm']}>
                        <Grid container direction="row" justify="center" alignItems="flexcenter" item xs={12} spacing={32} >
                            <Grid item xs={32}>
                                <h1>{this.state.title}</h1>
                                {this.state.contactText}
                                <ContactForm />
                            </Grid>
                        </Grid>
                    </Hidden >
                    <Hidden only={['md', 'lg', 'xl']}>
                        <Grid container direction="column" justify="center" alignItems="center" item xs={12}>
                            <Grid item xs={10}>
                                <h1>{this.state.title}</h1>
                                {this.state.contactText}
                                <ContactForm />
                            </Grid>
                        </Grid>
                    </Hidden>
                </div>
        )
    }
}

export default Contact;