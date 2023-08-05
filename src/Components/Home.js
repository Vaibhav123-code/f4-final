// Home.js
import React, { useEffect,useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

const Home = () => {
  const dispatch = useDispatch();
  const { posts, loading } = useSelector((state) => state.postReducer);

  useEffect(() => {
    console.log("hello")
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Home</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <a href={`/detail/${post.id}`}>{post.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
