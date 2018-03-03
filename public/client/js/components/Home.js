import React, { Component } from 'react';
import Header from './common/Header.js';
import Footer from './common/Footer.js';

import image from '../../img/bg.png';
import video from '../../img/Desert_Storm.mp4';

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
            <video autoPlay muted loop id="myVideo">
              <source src={video} type="video/mp4"/>
            </video>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Home;
