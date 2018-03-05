import React, { Component } from 'react';

class GitHubPost extends Component {
  render() {
    return (
      <div>
        <h1>Mina repon</h1>
        <ul className="uls">
          {this.props.gPosts.map((post, i) =>
            <li key={i}><a href={post.svn_url}>{post.name}</a></li>
          )}
        </ul>
      </div>
    );
  }
}

export default GitHubPost;
