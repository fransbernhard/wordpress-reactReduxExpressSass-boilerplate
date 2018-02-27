import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import rootReducer from "../reducers/index";

const appUrl = 'http://localhost/wordpress/';
const pagesEndPoint = `${appUrl}/wp-json/wp/v2/pages`;
const postsEndPoint = `${appUrl}/wp-json/wp/v2/posts?per_page=30`;

const store = createStore(rootReducer);

function fetchPostsWithRedux() {
    return (dispatch) => {
    dispatch(fetchPostsRequest());
    return fetchPosts().then(([response, json]) =>{
        if(response.status === 200){
        dispatch(fetchPostsSuccess(json))
      }
      else{
        dispatch(fetchPostsError())
      }
    })
  }
}

function fetchPosts() {
  const URL = postsEndPoint;
  return fetch(URL, { method: 'GET'})
     .then( response => Promise.all([response, response.json()]));
}

export default store;
