import React, {Component} from 'react';
import './Menu.css'

import Hidden from "@material-ui/core/Hidden";
import withWidth from '@material-ui/core/withWidth';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'react-router-dom'


class Menu extends Component {
    constructor(props){
        super(props);
        this.state = {
            active: true
        }
    }

    render() {
        return (
            <div>
                <Hidden only={['xs','sm']}>
                    <div id="boarMenu" className="menu">
                        <ul>
                            <li><Link to ="/">Main</Link></li>
                            <li><Link to ="/blog" className="active">Blog</Link></li>
                            <li><Link to ="/proggramWithBoar">Programuj z Dzikiem</Link></li>
                            <li><Link to ="/contact">Kontakt</Link></li>
                        </ul>
                    </div>
                </Hidden>

                <Hidden only={['md', 'lg', 'xl']}>
                    <AppBar position="static">
                        <Toolbar className="menu">
                            <IconButton color="rgba(34, 34, 34, 1)" aria-label="Menu">
                                <MenuIcon />
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                </Hidden>
            </div>
        );
    }
}

export default withWidth()(Menu);