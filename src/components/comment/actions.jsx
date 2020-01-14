import React, { Component } from "react";
import { MDBIcon } from "mdbreact";
import Voting from "./voting";

class Actions extends Component {
  state = {};
  render() {
    return (
      <div
        className="d-flex flex-row align-items-center rounded-bottom p-2"
        style={{ backgroundColor: "#008db0" }}
      >
        <div style={{ width: "100%" }}>
          <Voting />
        </div>

        <div className="d-flex flex-row align-items-center">
          <MDBIcon icon="pencil-alt" className="px-2" size="lg" />
          <MDBIcon icon="trash-alt" className="red-text px-2" size="lg" />
        </div>
      </div>
    );
  }
}

export default Actions;
