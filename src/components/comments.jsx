import React, { Component } from "react";

import Comment from "./comment/comment";
class Comments extends Component {
  state = {};
  render() {
    return (
      <div style={{ backgroundColor: "#009dc4"}}>
        <div className="container container-lg py-2">
          <Comment />
          <Comment />
          <Comment />
          <Comment />
        </div>
      </div>
    );
  }
}

export default Comments;
