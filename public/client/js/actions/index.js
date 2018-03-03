// actions should be plain objects containing a type field, e.g. {type: 'INCREMENT'}. You can define any types you want. You may also include other fields in the action object. By convention, we often pass extra data in a payload field, e.g. {type: 'SET_VALUE', payload: 42}. Read more about action conventions here: Flux Standard Actions. https://github.com/redux-utilities/flux-standard-action

import * as types from "../action-types/constants";

export const increment = () => {
  return {
    type: types.INCREMENT
  }
}

export const decrement = () => {
  return {
    type: types.DECREMENT
  }
}

export const fetchPostsRequest = () => {
  return {
    type: types.FETCH_REQUEST
  }
}

export const fetchPostsSuccess = payload => {
  return {
    type: types.FETCH_SUCCESS,
    payload
  }
}

export const fetchPostsError = () => {
  return {
    type: types.FETCH_ERROR
  }
}
