/** @format */

import React from "react";
import { connect } from "react-redux";

const ShowCounter = ({ counter }) => {
  return (
    <div>
      <h4>{counter}</h4>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};

export default connect(mapStateToProps)(ShowCounter);
