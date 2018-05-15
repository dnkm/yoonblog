import React, {Component} from 'react';
import './Post.css'

export default class Post extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {post} = this.props;
        const {title, date, text} = post.data();
        return (
            <div className="Post">
                <h1>{title}</h1>
                <div className="date">{date.seconds}</div>
                <div className="text">{text}</div>
            </div>
        )
    }
}