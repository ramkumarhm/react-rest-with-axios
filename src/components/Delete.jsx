import React, { useRef } from "react";
import axios from "axios";

const Delete = () => {
  const delRef = useRef("");
  const handelFromDel = (e) => {
    e.preventDefault();
    axios
      .delete("https://jsonplaceholder.typicode.com/posts/1", {
        body: {
          title: delRef.current,
        },
      })
      .then((res) => console.log("Res", res))
      .catch((err) => console.log("Err", err));
  };
  return (
    <div className="container Delete">
      <form onSubmit={handelFromDel}>
        <div className="row justify-content-center p-4">
          <div className="col-4">
            <input
              type="text"
              className="form-control"
              ref={delRef}
              onChange={(e) => (delRef.current = e.target.value)}
              required
            />
          </div>
          <div className="col">
            <button className="btn btn-danger">Delete</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Delete;
