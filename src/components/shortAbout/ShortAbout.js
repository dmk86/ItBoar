import React, {Component} from 'react'
import './ShortAbout.css'

class ShortAbout extends Component {
    render() {
        return (
                <div className="aboutFrame">
                    <div className="aboutImage"></div>
                    <div className="aboutName">Dzik</div>
                    <div className="aboutText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mauris purus, venenatis et mollis ac, pretium non
                        nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mauris purus, venenatis et mollis ac, pretium non nisi.
                    </div>
                </div>
        )
    }
}

export default ShortAbout;