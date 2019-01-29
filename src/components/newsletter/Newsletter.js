import React, {Component} from 'react'
import './Newsletter.css'

// TODO - make newsletter

class Newsletter extends Component{
    constructor(props){
        super(props);
        this.state = {
            value: '',
            inputText: ''
        };

        this.onchange = this.onchange.bind(this);
    }

    render() {
        return (
            <form>
                <label>Email: </label><input type="text" name="newsletterEmail" value={this.state.value} onChange={this.onchange} ></input>
                <button id="send" onClick={this.addToNewsletter()}>Send</button>
            </form>
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

export default Newsletter;