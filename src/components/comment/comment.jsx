import React, { Component } from "react";

import UserInfo from "./userInfo";
import CommentBody from "./commentBody";
import Actions from "./actions";

class Comment extends Component {
  state = {};
  render() {
    return (
      <div
        className="border rounded-lg my-2"
        style={{ backgroundColor: "#007e9d" }}
      >
        <UserInfo />
        <CommentBody />
        <Actions />
      </div>
    );
  }
}

export default Comment;
