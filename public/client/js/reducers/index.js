// You then define a function to handle actions, and update the store accordingly. You can choose how to update the state depending on which type of action your reducer function receives. Redux will pass this function the current state of the store, and the action you dispatched, expecting an updated state object to be returned: (state, action) => newState. We call this function a reducer function.

import { combineReducers } from 'redux'
import posts from './posts'
import count from './count'
import infoReducer from './info'

const mimiApp = combineReducers({
  posts,
  count,
  info: infoReducer
})

export default mimiApp;
