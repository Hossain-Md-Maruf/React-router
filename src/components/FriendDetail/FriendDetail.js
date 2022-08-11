import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

const FriendDetail = () => {
    const { friendId } = useParams();
    const [friend, setFriend] = useState({});
    const history = useHistory();
    useEffect(()=>
    {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
        .then(res=> res.json())
        .then(data=> setFriend(data));
    },[]);
    const handleClick = ()=>
    {
        history.push('/friends');
    }
    return (
        <div>
            <h3>Friend Detail of: {friendId}</h3>
            <h1>{friend.name}</h1>
            <h3>{friend.phone}</h3>
            <h4>{friend.website}</h4>
            <h5>{friend.company?.name}</h5> 
            <button onClick={handleClick}>See All Friends</button>
        </div>
    );
};

export default FriendDetail;