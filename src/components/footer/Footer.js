import React, {Component} from 'react'
import './Footer.css'

import Newsletter from '../newsletter/Newsletter';

class Footer extends Component{
    render() {
        return (
            <div className="footer">
                <div className="footerContent"></div>
                <span id="footerSpan">Designed by <a href="https://4coders.pl" target="_blank">4Coders</a></span>
            </div>
        );
    }
}

export default Footer;