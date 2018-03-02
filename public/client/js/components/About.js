import React , {Component} from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Counter from './Counter.js';

class About extends Component {
  render(){
    return (
      <div>
        <Header/>
        <div className="bg">
          <div className="home-wrapper">
            <h1>AAAAABBBBBOOOOUUUUUT</h1>
            <Counter/>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default About;
