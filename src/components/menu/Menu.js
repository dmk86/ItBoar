import React, {Component} from 'react';
import './Menu.css'

class Menu extends Component {
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