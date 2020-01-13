import React, { Component } from "react";
class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav
        className="navbar navbar-light px-5 py-3"
        style={{ backgroundColor: "#e3f2fd" }}
      >
        <div className="navbar-brand">Comment-Demo</div>
        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </nav>
    );
  }
}

export default Navbar;
