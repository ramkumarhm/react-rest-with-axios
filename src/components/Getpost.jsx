import React, { useRef } from "react";
import axios from "axios";

const Getpost = () => {
  const handleGetTodo = (uid) => {
    axios
      // .get(`https://jsonplaceholder.typicode.com/posts?id=1`, {
      //  .get(`https://jsonplaceholder.typicode.com/posts?id=${uid}`, {
      .get(`https://jsonplaceholder.typicode.com/posts`, {
        params: {
          id: uid,
        },
      })
      .then((res) => console.log("res", res.data))
      .catch((err) => console.log("err", err));
  };

  const handlePostTodos = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        body: {
          title: "foo",
          body: "bar",
          userId: 1,
        },
      })
      .then((x) => console.log("res post", x.data))
      .catch((err) => console.log("error", err));
  };

  return (
    <div className="Getpost">
      <div className="container">
        <div className="row text-white justify-content-center">
          <div className="col-12 text-center p-2">
            <h2 className="bg-primary p-2">Axios Illustration</h2>
          </div>
          <div className="col-3 p-2">
            <button
              className="btn btn-success"
              onClick={() => handleGetTodo(10)}
            >
              Get Todos
            </button>
          </div>
          <div className="col-3 p-2">
            <button className="btn btn-secondary" onClick={handlePostTodos}>
              Create Todos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Getpost;
