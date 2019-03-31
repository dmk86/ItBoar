import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import Grid from "@material-ui/core/Grid";

import './Post.css'

import postImageUrl from './start.jpg'

class Post extends Component {
    constructor() {
        super();
        this.state = ({
                post: {
                    image: postImageUrl,
                    titleShortDesc: 'Początek',
                    titleMain: 'Bo od czegoś trzeba zacząć...',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rutrum nisi in arcu porttitor egestas. Morbi eu\n' +
                        ' augue et nisi ultricies commodo in quis felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie felis vel ligula\n' +
                        ' luctus venenatis. Donec finibus massa at lectus maximus pellentesque. Aliquam ut ex magna. Nulla facilisi. Integer sed elit id nisi\n' +
                        ' tincidunt tempus. Duis enim justo, ultricies vel risus et, dignissim euismod mi.Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n' +
                        ' Etiam rutrum nisi in arcu porttitor egestas.eu augue et nisi ultricies commodo in quis felis. Lorem ipsum dolor sit amet, consectetur\n' +
                        ' adipiscing elit. Sed molestie felis vel ligula luctus venenatis. Donec finibus massa at lectus maximus pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rutrum nisi in arcu porttitor egestas. Morbi eu\\n\' +\n' +
                        '                        \' augue et nisi ultricies commodo in quis felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie felis vel ligula\\n\' +\n' +
                        '                        \' luctus venenatis. Donec finibus massa at lectus maximus pellentesque. Aliquam ut ex magna. Nulla facilisi. Integer sed elit id nisi\\n\' +\n' +
                        '                        \' tincidunt tempus. Duis enim justo, ultricies vel risus et, dignissim euismod mi.Lorem ipsum dolor sit amet, consectetur adipiscing elit.\\n\' +\n' +
                        '                        \' Etiam rutrum nisi in arcu porttitor egestas.eu augue et nisi ultricies commodo in quis felis. Lorem ipsum dolor sit amet, consectetur\\n\' +\n' +
                        '                        \' adipiscing elit. Sed molestie felis vel ligula luctus venenatis. Donec finibus massa at lectus maximus pellentesque...',
                    back: 'Back',
                    author: 'Dzik w IT',
                    date: '06.01.2019'
                }
        })

        // this.setState({post: [post]})
    }

    render() {
        return (
                <div className="blog">
                    <div className="blogHeader">
                        <img alt="Post image" id="headerImg" src={this.state.post.image}/>
                    </div>
                    <div className="blogTitle">
                        <p id="titleDescription">{this.state.post.titleShortDesc}</p>
                        <p id="titleMain">{this.state.post.titleMain}</p>
                    </div>
                    <div className="blogContent">{this.state.post.content}
                    </div>
                    <div className="blogMore">
                        <Link to="/" id="backBtn">{this.state.post.back}</Link>
                    </div>
                    <div className="blogFooter">
                        <p id="blogContent">{this.state.post.author}<span id="date"></span>{this.state.post.date}</p>
                    </div>
                </div>
        );
    }
}

export default Post;