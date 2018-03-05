import React, { Component } from 'react';
import { connect } from "react-redux";

class InstagramPost extends Component {
  render() {
    console.log(this.props.info);
    this.props.info.map((p,i) => {
      console.log("PROPS ID: " + p.id);
    })
    this.props.info.forEach(function(el) {
      console.log("ELEMENT: " + el.id);
    });

    return (
      <div>
        <h1>POSTS</h1>
        <ul className="uls">
          {
            this.props.info.map((inf, i) =>
              <li key={i}>{inf.userId}</li>
            )
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ info }) => {
  return { info }
}

export default connect(mapStateToProps)(InstagramPost);
