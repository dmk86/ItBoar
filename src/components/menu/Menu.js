import React, {Component} from 'react';
import './Menu.css'

class Menu extends Component {
    constructor(props){
        super(props);
        this.state = {
            active: true
        }
    }

    render() {
        return (
            <div id="boarMenu" className="menu">
                <ul>
                    <li><a href="#">Main</a></li>
                    <li><a href="#" className="active">Blog</a></li>
                    <li><a href="#">Programuj z Dzikiem</a></li>
                    <li><a href="#">Kontakt</a></li>
                </ul>
            </div>
        );
    }
}

export default Menu;