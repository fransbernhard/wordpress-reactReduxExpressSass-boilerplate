// actions should be plain objects containing a type field, e.g. {type: 'INCREMENT'}. You can define any types you want. We often pass extra data in a payload field, e.g. {type: 'SET_VALUE', payload: 42}.
import * as types from "../action-types/constants";
import thunk from 'redux-thunk';
import axios from "axios";

// const API_KEY = "6a78596d062df78380eff5944c4e5567";
// const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const increment = () => {type: types.INCREMENT}
export const decrement = () => {type: types.DECREMENT}

export const fetchPostsRequest = () => {type: types.FETCH_REQUEST}
export const fetchPostsError = () => {type: types.FETCH_ERROR}
export const fetchPostsSuccess = payload => ({
  type: types.FETCH_SUCCESS,
  instaPosts: payload
})

export const fetchPostsWithRedux = () => {
	return (dispatch) => {
  	dispatch(fetchPostsRequest());
    return fetchPosts().then(([res, json]) =>{
    	if(res.status === 200){
      	dispatch(fetchPostsSuccess(json))
      }
      else{
      	dispatch(fetchPostsError())
      }
    })
  }
}

export const fetchPosts = () => {
  const URL = "https://jsonplaceholder.typicode.com/posts";
  return fetch(URL, { method: 'GET'})
     .then( response => Promise.all([response, response.json()]));
}


const ROOT_URL = 'https://jsonplaceholder.typicode.com/posts';
export const fetchInfo = () => {
  // const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(ROOT_URL);
  return {
    type: types.FETCH_INFO,
    payload: request
  };
}
