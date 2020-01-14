import React, { Component } from "react";
class Avatar extends Component {
  state = {};
  render() {
    return (
      <img
        src={require("./../../assets/student.png")}
        alt="profile"
			className="rounded-circle"
			style={{width: "48px", height: "48px"}}
      />
    );
  }
}

export default Avatar;
