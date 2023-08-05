// PostDetail.js
import React, { useEffect,useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

const PostDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { posts, loading } = useSelector((state) => state.postReducer);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const post = posts.find((post) => post.id === parseInt(id));

  return (
    <div>
      <h1>Post Detail</h1>
      {post ? (
        <div>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ) : (
        <div>Post not found</div>
      )}
    </div>
  );
};

export default PostDetail;
