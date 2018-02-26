import React, { Component } from 'react';
import Header from './Header.js';
import Footer from './Footer.js';

class Home extends Component {

  render(){

    return (
      <div>
        <Header/>
        <div className="bg">
          <div className="home-content">
            <h1>HOMES</h1>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Home;
