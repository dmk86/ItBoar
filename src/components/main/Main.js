import React, {Component} from 'react';
import './Main.css'

import Article from '../article/Article'
import About from '../about/About'

class Main extends Component{
    render(){
        return (
            <div className="content">
                <Article/>
                <About/>
            </div>
        )
    }
}

export default Main;