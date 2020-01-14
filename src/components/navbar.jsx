import React, { Component } from "react";
class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav
        className="navbar navbar-sm navbar-light px-lg-4 py-sm-3"
        style={{ backgroundColor: "#002f3b" }}
      >
        <div className="navbar-brand text-white">Comment</div>
        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn my-2 my-sm-0"
            style={{ backgroundColor: "#009dc4" }}
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
