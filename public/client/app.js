import React, {Component} from 'react';
import {render} from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';
import './app.scss';
import Home from './js/components/Home.js';
import About from './js/components/About.js';
import Archive from './js/components/Archive.js';
import Instagram from './js/components/Instagram.js';
import Header from './js/components/common/Header.js';
import Footer from './js/components/common/Footer.js';

import { Provider } from "react-redux";
import store from "./js/store/index";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Header />
            <Switch>
              <Route exact path={'/'} component={Home}/>
              <Route exact path={'/about'} component={About}/>
              <Route exact path={'/archive'} component={Archive}/>
              <Route exact path={'/instagram'} component={Instagram}/>
              <Route render={() => { return <Redirect to="/" />}} />
            </Switch>
          <Footer />
        </div>
      </Router>
    </Provider>
  )
}

render(<App/>, document.getElementById('app'))

if (module.hot) { module.hot.accept() }
