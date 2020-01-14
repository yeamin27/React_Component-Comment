import React, { Component } from "react";
import Avatar from "./avatar";

class UserInfo extends Component {
  state = {};
  render() {
    return (
      <div className="user-info clearfix p-2">
        <div className="float-left">
          <Avatar />
        </div>
        <div className="float-left pl-2">
          <div className="text-white">John Doe</div>
          <div>12 Jan, 2020, 12:20PM</div>
        </div>
      </div>
    );
  }
}

export default UserInfo;
