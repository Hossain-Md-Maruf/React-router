import React from 'react';
import './Friend.css';

const Friend = (props) => {
    const {name, email, address } = props.friend;
    return (
        <div className="friend">
            <h2>Name: {name}</h2>
            <h3>Email: {email}</h3>
            <h4>Address:{address.city}</h4>
        </div>
    );
};

export default Friend;