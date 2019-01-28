import React, {Component} from 'react';
import './Post.css'

import img from './start.jpg'

class Post extends Component{
    render() {
        return (
            <div className="post">
                <div className="postHeader">
                    <img id="headerImg" src={img}/>
                </div>
                <div className="postTitle">
                    <p id="titleDescription">Początek</p>
                    <p id="titleMain">Bo od czegoś trzeba zacząć...</p>
                </div>
                <div className="postContent">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rutrum nisi in arcu porttitor egestas. Morbi eu
                    augue et nisi ultricies commodo in quis felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie felis vel ligula
                    luctus venenatis. Donec finibus massa at lectus maximus pellentesque. Aliquam ut ex magna. Nulla facilisi. Integer sed elit id nisi
                    tincidunt tempus. Duis enim justo, ultricies vel risus et, dignissim euismod mi.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam rutrum nisi in arcu porttitor egestas.eu augue et nisi ultricies commodo in quis felis. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Sed molestie felis vel ligula luctus venenatis. Donec finibus massa at lectus maximus pellentesque...
                </div>
                <div className="postMore">
                    <button id="moreBtn">Show more</button>
                </div>
                <div className="postFooter">
                    <p id="footerContent">Dzik w IT<span id="date"></span>06.01.2019</p>
                </div>
            </div>
        );
    }
}

export default Post;