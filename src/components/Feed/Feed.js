import React, { useEffect, useState } from 'react';
import './Feed.scss';
import Post from './Post/Post';
import axios from 'axios';

export default function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/posts').then((response) => {
      console.log(response.data.posts);
      setPosts(response.data.posts);
    })

  }, [])

  return (
    <div className="feed">
      {posts && posts.map(post => <Post key={post.id} title={post.title} body={post.body} />)}
    </div>
  )
}