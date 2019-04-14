import React, {Component} from 'react';
import {Link} from 'react-router-dom'

import './Blog.css'

import postImageUrl from './start.jpg'

class Blog extends Component {
    constructor() {
        super();
        this.state = ({
            post: [
                {
                    image: postImageUrl,
                    titleShortDesc: 'Początek',
                    titleMain: 'Bo od czegoś trzeba zacząć...',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rutrum nisi in arcu porttitor egestas. Morbi eu\n' +
                        ' augue et nisi ultricies commodo in quis felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie felis vel ligula\n' +
                        ' luctus venenatis. Donec finibus massa at lectus maximus pellentesque. Aliquam ut ex magna. Nulla facilisi. Integer sed elit id nisi\n' +
                        ' tincidunt tempus. Duis enim justo, ultricies vel risus et, dignissim euismod mi.Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n' +
                        ' Etiam rutrum nisi in arcu porttitor egestas.eu augue et nisi ultricies commodo in quis felis. Lorem ipsum dolor sit amet, consectetur\n' +
                        ' adipiscing elit. Sed molestie felis vel ligula luctus venenatis. Donec finibus massa at lectus maximus pellentesque...',
                    more: 'Read more ...',
                    author: 'Dzik w IT',
                    date: '06.01.2019'
                }
            ]
        })

        // this.setState({post: [post]})
    }

    render() {
        return (
                <div className="blog">
                    <div className="blogHeader">
                        <img alt="Post image" id="headerImg" src={this.state.post[0].image}/>
                    </div>
                    <div className="blogTitle">
                        <span className="titleDescription">{this.state.post[0].titleShortDesc}</span><br />
                        <span className="titleMain">{this.state.post[0].titleMain}</span>
                    </div>
                    <div className="blogContent">{this.state.post[0].content}
                    </div>
                    <div className="blogMore">
                        <Link to="/post/1" id="moreBtn">{this.state.post[0].more}</Link>
                    </div>
                    <div className="blogFooter">
                        <span className="blogFooterContent">{this.state.post[0].author}</span>
                        <span className="date">{this.state.post[0].date}</span>
                    </div>
                </div>
        );
    }
}

export default Blog;