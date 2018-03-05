import React, { Component } from 'react';
import { connect } from "react-redux";

class InstagramPost extends Component {
  render() {
    console.log("PROPS: " + this.props.info);

    return (
      <div>
        <h1>Min instao</h1>
        <ul className="uls">
          {Object.keys(this.props.info).map((inf, i) => {
            <li key={i}>{inf.id}</li>
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ info }) => {
  return { info }
}

export default connect(mapStateToProps)(InstagramPost);
