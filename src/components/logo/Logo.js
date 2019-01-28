import React, {Component} from 'react';
import './Logo.css'
import logo from './logo.png';

class Logo extends Component {
    render() {
        return (
            <div className="logo">
                <img alt="Logo" src={logo} className="logoImg"/>
            </div>
        );
    }
}

export default Logo;