import React, {Component} from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';

function fetchPostsWithRedux() {
  return (dispatch) => {
    dispatch(fetchPostsRequest());
    return fetchPosts().then(([response, json]) =>{
      if(response.status === 200){
        dispatch(fetchPostsSuccess(json))
      }
      else{
        dispatch(fetchPostsError())
      }
    })
  }
}

function fetchPosts() {
  const appUrl = 'http://localhost/wordpress/'; // Wordpress installation url
  const pagesEndPoint = `${appUrl}/wp-json/wp/v2/pages`;
  const postsEndPoint = `${appUrl}/wp-json/wp/v2/posts?per_page=30`;

  return fetch(postsEndPoint, { method: 'GET' })
     .then( response => Promise.all([response, response.json()]));
}

class ConnectedPostList extends React.Component {
	componentDidMount(){
  	this.props.fetchPostsWithRedux()
  }

	render(){
	  return (
    		<ul>
				{
        	this.props.posts &&
          this.props.posts.map((post) =>{
          	return(
            	<li>{post.title}</li>
            )
          })
        }
        </ul>
    )
  }
}

function mapStateToProps(state){
	return {
  	posts: state.posts
  }
}


let PostList = connect(mapStateToProps)(ConnectedPostList);

PostList.propTypes = {
  posts: PropTypes.array
}

export default PostList;
