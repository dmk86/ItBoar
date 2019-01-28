import React, {Component} from 'react';
import './Article.css'

import Post from '../post/Post'

class Article extends Component{
    render() {
        return (
            <div className="article">
                <Post/>
            </div>
        )
    }
}

export default Article;