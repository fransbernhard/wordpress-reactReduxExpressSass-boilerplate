import React, { Component } from 'react';
import {connect} from 'react-redux';
import { fetchInfo } from "../actions/index";
import { bindActionCreators } from "redux";

import InstagramPost from './InstagramPost';
import GitHubPost from './GitHubPost';

class Instagram extends Component {
  componentWillMount(){
    this.props.fetchInfo();
  }

  render() {
    return (
      <div className="container">
        <div className="wrapper">
          <InstagramPost />
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchInfo }, dispatch);
}

export default connect(null, mapDispatchToProps)(Instagram);
