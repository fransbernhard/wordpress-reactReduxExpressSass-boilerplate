import React , {Component} from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import PostList from './PostList.js';

class Archive extends Component {

  render(){
    return (
      <div>
        <Header/>
        <div className="bg">
          <div className="home-wrapper">
            <h1>AAAARCHIVE</h1>
          </div>
        </div>
        <PostList />
        <Footer/>
      </div>
    );
  }
}

export default Archive;
