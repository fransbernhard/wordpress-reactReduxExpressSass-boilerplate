import React , {Component} from 'react';
import Header from './common/Header.js';
import Footer from './common/Footer.js';
import Post from './Post.js';
import Pages from './Pages.js';

class Archive extends Component {
  constructor(){
    super();
    this.state = {
      products: [],
      pages: []
    }
  }

  componentDidMount(){
    const myInit = {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
         'Accept': 'application/json'
      }
    };

    fetch("http://localhost:3000/wordpress/wp-json/wp/v2/posts", myInit)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setState({ products: data });
      })
      .catch(function(err) {
        console.log('Error cannot get products: ' + err.message);
      });

    fetch("http://localhost:3000/wordpress/wp-json/wp/v2/pages", myInit)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setState({ pages: data });
      })
      .catch(function(err) {
        console.log('Error cannot get products: ' + err.message);
      });
  }

  render(){
    return (
      <div>
        <Header/>
        <div className="bg">
          <div className="home-wrapper">
            <h1>AAAARCHIVE</h1>
            <Post products={this.state.products} />
            <Pages pages={this.state.pages} />
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Archive;
