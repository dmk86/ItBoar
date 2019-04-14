import React, {Component} from 'react';
import './Menu.css'

import {withStyles} from '@material-ui/core/styles';
import Hidden from "@material-ui/core/Hidden";
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'react-router-dom'
import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import InboxIcon from '@material-ui/icons/MoveToInbox';


import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Grid from "@material-ui/core/Grid/Grid";

const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 20,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 8px',
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
});

class Menu extends Component {
    constructor(props){
        super(props);
        this.state = {
            active: true,
            open: false
        }
    }

    handleDrawerOpen = () => {
        this.setState({open: true})
    };

    handleDrawerClose = () => {
        this.setState({open: false})
    };

    render() {
        const {classes, theme} = this.props;
        const {open} = this.state;

        return (
            <div>
                <Grid container direction="column" justify="center" alignItems="center" item xs={12}>
                    <Hidden only={['xs', 'sm']}>
                        <CssBaseline/>
                        <AppBar
                            position="fixed"
                            // className={classNames(classes.appBar)}
                            className="menu"
                        >
                            <ul>
                                {[]}
                                <li><Link to="/">Main</Link></li>
                                <li><Link to="/blog" className="active">Blog</Link></li>
                                <li><Link to="/proggramWithBoar">Programuj z Dzikiem</Link></li>
                                <li><Link to="/contact">Kontakt</Link></li>
                            </ul>
                        </AppBar>
                    </Hidden>

                    <Hidden only={['md', 'lg', 'xl']}>
                        <AppBar position="static" className="menu">
                            <Toolbar>
                                <IconButton aria-label="Menu" onClick={this.handleDrawerOpen}>
                                    <MenuIcon/>
                                </IconButton>
                                <Drawer
                                    className={classes.drawer}
                                    variant="persistent"
                                    anchor="left"
                                    open={open}
                                >
                                    <div className={classes.drawerHeader}>
                                        <IconButton onClick={this.handleDrawerClose}>
                                            {theme.direction === 'ltr' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
                                        </IconButton>
                                    </div>
                                    <Divider/>
                                    <List>
                                        {['Main', 'Blog', 'Programuj z dzikiem', 'Kontakt'].map((text, index) => (
                                            <ListItem button key={text}>
                                                <ListItemIcon>{index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}</ListItemIcon>
                                                <ListItemText primary={text}/>
                                            </ListItem>
                                        ))}
                                    </List>
                                </Drawer>
                            </Toolbar>
                        </AppBar>
                    </Hidden>
                </Grid>
            </div>
        );
    }
}

Menu.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(Menu);