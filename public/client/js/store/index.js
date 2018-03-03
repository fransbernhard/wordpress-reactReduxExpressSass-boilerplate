// An application will create a single Redux store to hold all data and state. We can view the state of the store by calling store.getState(). The store's state should never be modified directly; instead, we call store.dispatch(action) to dispatch actions into the store.

import { createStore, applyMiddleware } from 'redux';
import reducer from "../reducers/index";
import {createLogger} from "redux-logger";
import thunk from 'redux-thunk';

const logger = createLogger();
const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
