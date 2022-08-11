import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Post = (props) => {
    const {title, id} = props.post;
    const history = useHistory();
    const handleClick = ()=>
    {
        history.push(`post/${id}`);
    }
    return (
        <div>
            <h2>Title: {title}</h2>
            <Link to={`/post/${id}`}>Post Detail</Link>
            <br />
            <Link to={`post/${id}`}>
            <button>Post Detail</button>
            </Link>
            <br />
            <button onClick={handleClick}>Post Detail 2</button>
        </div>
    );
};

export default Post;