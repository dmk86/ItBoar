import React, {Component} from 'react';
import './Contact.css'
import Grid from '@material-ui/core/Grid'
import Hidden from "@material-ui/core/Hidden/Hidden";
import TextField from '@material-ui/core/TextField';

class Contact extends Component{
    state = {
        name: '',
        email: '',
        phone: '',
        text: ''
    };

    render() {
        return (
                <div className="contact">
                    <Hidden only={['xs','sm']}>
                        <Grid container direction="row" justify="center" alignItems="flex-start" item xs={12} spacing={32} >
                            <Grid item xs={32}>
                                <form noValidate autoComplete="off" justify="center" alignItems="center" >
                                    <TextField
                                        id="standard-name"
                                        label="Name"
                                        className="textField"
                                        value=""//{this.state.name}
                                        // onChange={this.handleChange('name')}
                                        margin="normal"
                                        required
                                    />
                                    <TextField
                                        id="standard-name"
                                        label="Phone"
                                        className="textField"
                                        value=""//{this.state.name}
                                        // onChange={this.handleChange('name')}
                                        margin="normal"
                                    />
                                    <TextField
                                        id="standard-name"
                                        label="Email"
                                        className="textField"
                                        value=""//{this.state.name}
                                        // onChange={this.handleChange('name')}
                                        margin="normal"
                                        required
                                    />
                                    <TextField
                                    id="standard-textarea"
                                    label="Text"
                                    required
                                    placeholder="Placeholder"
                                    multiline
                                    className="textField"
                                    margin="normal"
                                    rows={10}
                                    fullWidth={ true}
                                    />
                                </form>
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
        )
    }
}

export default Contact;