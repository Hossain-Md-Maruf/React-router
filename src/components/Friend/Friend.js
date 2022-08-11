import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Friend.css';

const Friend = (props) => {
    const {id,name, email, address } = props.friend;
    const history = useHistory();
    const url = `/friend/${id}`;
    const handleFriendClick = ()=>
    {
        history.push(`/friend/${id}`);
    }
    return (
        <div className="friend">
            <h2>I'm: {name} {id}</h2>
            <h3>Email: {email}</h3>
            <h4>Address:{address.city}</h4>
            <Link to={url}>Visit Me</Link>
            <br />
            <br />
            <Link to={url}>
            <button>Visit Me</button>
            </Link>
            <br />
            <button onClick={handleFriendClick}>Visit Me 2</button>
        </div>
    );
};

export default Friend;