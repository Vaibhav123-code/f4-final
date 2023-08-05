// postReducer.js

const initialState = {
  posts: [],
  loading: true,
  error: null,
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_POSTS_SUCCESS':
      return {
        ...state,
        posts: action.payload,
        loading: false,
        error: null,
      };
    case 'FETCH_POSTS_FAILURE':
      return {
        ...state,
        posts: [],
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default postReducer;
