import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
    const {postId} = useParams();
    const [post, setPost] = useState({});
    useEffect(()=>
    {
      const url =  `https://jsonplaceholder.typicode.com/posts/${postId}`;
      fetch(url)
      .then(res=>res.json())
      .then(data=> setPost(data)); 
    },[]);
    return (
        <div>
            <h2>This is post Detail {postId}</h2>
            <h3>Title: {post.title}</h3>
            <h5>{post.body}</h5>
        </div>
    );
};

export default PostDetail;