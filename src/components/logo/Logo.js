import React, {Component} from 'react';
import './Logo.css'

import logo from './logo.png';
import logoSmall from './logoSmall.png';
import logoMiddle from './logoMiddle.png';
import Hidden from '@material-ui/core/Hidden';
import withWidth from '@material-ui/core/withWidth';

class Logo extends Component {
    render() {
        return (
            <div>
                <Hidden only={['xs','sm', 'md']}>
                    <div className="logo">
                        <img alt="Logo" src={logo} className="logoImg"/>
                    </div>
                </Hidden>
                <Hidden only={['xs', 'lg', 'xl']}>
                    <div className="logoMiddle">
                        <img alt="Logo" src={logoMiddle} className="logoMiddleImg"/>
                    </div>
                </Hidden>
                <Hidden only={['sm', 'md', 'lg', 'xl']}>
                    <div className="logoSmall">
                        <img alt="Logo" src={logoSmall} className="logoSmallImg"/>
                    </div>
                </Hidden>
            </div>
        );
    }
}

export default withWidth()(Logo);