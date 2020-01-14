import React from 'react';
import './App.css';

import Navbar from "./components/navbar";
import CommentEditor from "./components/commentEditor";
import Comments from "./components/comments";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <CommentEditor />
      <Comments />
    </React.Fragment>
  );
}

export default App;
