import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';
import './app.scss';
import Home from './js/components/Home.js';
import About from './js/components/About.js';
import { Provider } from "react-redux";

import store from "./js/store/index";
import { addArticle } from "./js/actions/index";
// window.store = store;
// window.addArticle = addArticle;

class App extends Component {
  render(){
    return (
      // <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path={'/'} component={Home}/>
          <Route exact path={'/about'} component={About}/>
          <Route render={() => { return <Redirect to="/" />}} />
        </Switch>
      </Router>
    // </Provider>
    )
  }
}

ReactDOM.render (
  <App/>,
  document.getElementById('app')
)

if (module.hot) {
	module.hot.accept();
}

export default App;
