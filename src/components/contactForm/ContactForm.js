import React, {Component} from 'react';
import './ContactForm.css'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const required = value => (value != null ? undefined : 'Required')
const email = value =>
    (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? 'Invalid email'
        : undefined);

class ContactForm extends Component {

    state = {
        name: '',
        email: '',
        phone: '',
        message: '',
        validName: false,
        validEmail: false,
        validMessage: false,
        formErrors: {email: '', name: '', message: ''}
    };

    handleChange = name => event => {
        const value = event.target.value;
        this.setState({
                [name]: value
            },
            () => {
                this.validateField(name, value)
            }
        )
    };

    onSubmit = e => {
        e.preventDefault();
    };

    render() {
        return (
            <form noValidate autoComplete="off" justify="center" alignItems="center" onSubmit={this.onSubmit}>
                <TextField
                    id="standard-name"
                    label="Name"
                    className="contactTextField"
                    value={this.state.name}
                    placeholder="Enter name"
                    onChange={this.handleChange('name')}
                    margin="normal"
                    variant="outlined"
                    validate={[required]}
                />
                <TextField
                    id="standard-name"
                    label="Phone"
                    className="contactTextField"
                    value={this.state.phone}
                    placeholder="Enter phone"
                    onChange={this.handleChange('phone')}
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    id="standard-name"
                    label="Email"
                    type="Email"
                    className="contactTextField"
                    placeholder="Enter email"
                    value={this.state.email}
                    onChange={this.handleChange('email')}
                    margin="normal"
                    variant="outlined"
                    validate={[required, email]}
                />
                <TextField
                    id="standard-textarea"
                    label="Message"
                    required
                    placeholder="Enter message"
                    multiline
                    className="contactTextField"
                    margin="normal"
                    rows={10}
                    fullWidth={true}
                    variant="outlined"
                    value={this.state.message}
                    onChange={this.handleChange('message')}
                />
                <Button variant="outlined" color="primary" className="button" type="submit">
                    Send
                </Button>
            </form>
        )
    }

    validateField(name, value) {
        let fieldValidationErrors = this.state.formErrors;
        let validEmail = this.state.validEmail;
        let validName = this.state.validName;
        let validMessage = this.state.validMessage;

        switch (name) {
            case 'email':
                validEmail = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = validEmail ? '' : ' is invalid';
                break;
            case 'name':
                validName = value.length >= 3;
                fieldValidationErrors.name = validName ? '' : ' is too short';
                break;
            case 'name':
                validName = value.length >= 30;
                fieldValidationErrors.message = validMessage ? '' : ' is too short';
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            validEmail: validEmail,
            validName: validName,
            validMessage: validMessage
        }, this.validateForm);
    }

    validateForm() {
        this.setState({formValid: this.state.validName && this.state.validEmail && this.state.validMessage});
    }
}

export default ContactForm;