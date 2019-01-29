import React, {Component} from 'react'
import './About.css'

class About extends Component {
    render() {
        return (
            <div className="about">
                <div className="aboutFrame">
                    <div className="aboutImage"></div>
                    <div className="aboutName">Dzik</div>
                    <div className="aboutText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mauris purus, venenatis et mollis ac, pretium non
                        nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mauris purus, venenatis et mollis ac, pretium non nisi.
                    </div>
                </div>
            </div>
        )
    }
}

export default About;