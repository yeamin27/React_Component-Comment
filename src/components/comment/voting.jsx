import React, { Component } from "react";
import { MDBIcon } from "mdbreact";
import "./../../App.css";

class Voting extends Component {
  state = {};
  render() {
    return (
      <div className="voting">
        <MDBIcon icon="thumbs-up" className="px-2" />
        <span className="text px-2">25</span>
        <MDBIcon icon="thumbs-down" className="px-2" />
      </div>
    );
  }
}

export default Voting;
