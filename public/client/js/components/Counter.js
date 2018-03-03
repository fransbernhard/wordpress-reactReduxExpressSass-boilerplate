import React , {Component} from 'react';
import {INCREMENT, DECREMENT} from "../action-types/constants";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Counter extends Component {

  increment = () => {
    this.props.dispatch({ type: INCREMENT });
  }

  decrement = () => {
    this.props.dispatch({ type: DECREMENT });
  }

  render(){
    return (
      <div className="counterbox">
        <h2 id="countNr">{this.props.count.count}</h2>
        <div>
          <button className="btn" onClick={this.increment}>+</button>
          <button className="btn" onClick={this.decrement}>-</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

Counter.propTypes = {
  count: PropTypes.object
}

// connect is a higher-order function, which is a fancy way of saying it returns a function when you call it. And then calling that function with a component returns a new (wrapped) component.
export default connect(mapStateToProps)(Counter);
