import React from 'react';
import image from '../../img/bg.png';
import video from '../../img/Desert_Storm.mp4';

const Home = () => {
  return (
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
  )
}

export default Home;
