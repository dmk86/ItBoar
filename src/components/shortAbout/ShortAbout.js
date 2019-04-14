import React, {Component} from 'react'
import './ShortAbout.css'
import Hidden from "@material-ui/core/Hidden/Hidden";

class ShortAbout extends Component {
    render() {
        return (
                <div className="aboutFrame">
                    <div className="aboutImage"></div>
                    <div className="aboutName">Dzik</div>
                    <Hidden only={['xs','sm', 'md']}>
                        <div className="aboutText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mauris purus, venenatis et mollis ac, pretium non
                            nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mauris purus, venenatis et mollis ac, pretium non nisi.
                        </div>
                    </Hidden>
                    <Hidden only={['lg', 'xl']}>
                        <div className="aboutTextSmall">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mauris purus, venenatis et mollis ac, pretium non
                            nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mauris purus, venenatis et mollis ac, pretium non nisi.
                        </div>
                    </Hidden>
                </div>
        )
    }
}

export default ShortAbout;