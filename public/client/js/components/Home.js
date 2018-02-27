import React, { Component } from 'react';
import Header from './Header.js';
import Footer from './Footer.js';

import image from '../../img/bg.png';

class Home extends Component {

  render(){

    return (
      <div>
        <Header/>
        <div className="bg">
          <div className="home-wrapper">
            <h1>I AM HOME CONTENT</h1>
            <img className="img" src={image} />
            <div className="test_bg"></div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Home;
