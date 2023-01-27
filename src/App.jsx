import React from "react";

import Patch from "./components/Patch";
import Delete from "./components/Delete";
import Post from "./components/Post";
import Getpost from "./components/Getpost";
import Put from "./components/Put";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Getpost />
      <Post />
      <Patch />
      <Delete />
      <Put />
    </div>
  );
}

export default App;
