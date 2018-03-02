import React from 'react';
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

import { Provider } from "react-redux";
import store from "./js/store/index";

// Provider:  magically make the store available to all container components in the application without passing it explicitly
const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path={'/'} component={Home}/>
          <Route exact path={'/about'} component={About}/>
          <Route exact path={'/archive'} component={Archive}/>
          <Route render={() => { return <Redirect to="/" />}} />
        </Switch>
      </Router>
    </Provider>
  )
}

render (<App/>, document.getElementById('app'))

if (module.hot) {
	module.hot.accept();
}

// export default App;
