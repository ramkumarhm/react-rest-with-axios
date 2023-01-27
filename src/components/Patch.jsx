import React, { useRef } from "react";
import axios from "axios";

const Patch = () => {
  const patchRef = useRef("foo1");

  const handelFromPatch = (e) => {
    e.preventDefault();
    axios
      .patch("https://jsonplaceholder.typicode.com/posts/1", {
        body: {
          title: patchRef.current,
        },
      })
      .then((res) => console.log("Res", res.data))
      .catch((err) => console.log("Err", err));
  };

  return (
    <div className="container Patch">
      <form onSubmit={handelFromPatch}>
        <div className="row justify-content-center p-3">
          <div className="col-4">
            <input
              type="text"
              className="form-control"
              ref={patchRef}
              onChange={(e) => (patchRef.current = e.target.value)}
              required
            />
          </div>
          <div className="col-4 ">
            <button className="btn btn-warning">Patch</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Patch;
