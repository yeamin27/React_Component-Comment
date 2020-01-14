import React, { Component } from "react";

class CommentEditor extends Component {
  state = {};
  render() {
    return (
      <div style={{ backgroundColor: "#006e89" }}>
        <div className="container container-lg">
          <h3 className="py-2">Comment</h3>
          <form>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputName">Name*</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputName"
                  required
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputEmail">Email*</label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail"
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-12">
                <label htmlFor="inputComment">Comment*</label>
                <textarea
                  className="form-control"
                  id="inputComment"
                  cols="12"
                  rows="4"
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md">
                <button
                  type="submit"
                  className="btn"
                  style={{ backgroundColor: "#002f3b", color: "white" }}
                >
                  Post
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default CommentEditor;
