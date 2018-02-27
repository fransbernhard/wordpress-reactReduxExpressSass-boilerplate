import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_ERROR } from "../action-types/constants";

function fetchPostsRequest(){
  return {
    type: FETCH_REQUEST
  }
}

function fetchPostsSuccess(payload) {
  return {
    type: FETCH_SUCCESS,
    payload
  }
}

function fetchPostsError() {
  return {
    type: FETCH_ERROR
  }
}

// function fetchPostsWithRedux() {
//     return (dispatch) => {
//     dispatch(fetchPostsRequest());
//     return fetchPosts().then(([response, json]) =>{
//         if(response.status === 200){
//         dispatch(fetchPostsSuccess(json))
//       }
//       else{
//         dispatch(fetchPostsError())
//       }
//     })
//   }
// }
//
// function fetchPosts() {
//   const URL = "https://jsonplaceholder.typicode.com/posts";
//   return fetch(URL, { method: 'GET'})
//      .then( response => Promise.all([response, response.json()]));
// }
