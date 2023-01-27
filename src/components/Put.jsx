import React, { useRef } from "react";
import axios from "axios";

const Put = () => {
  const bodyRef = useRef("bar");
  const titleRef = useRef("foo");
  const userRef = useRef(1);
  const idRef = useRef(1);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    axios
      .put("https://jsonplaceholder.typicode.com/posts/1", {
        body: {
          title: titleRef.current,
          user: userRef.current,
          id: idRef.current,
          body: bodyRef.current,
        },
      })
      .then((res) => console.log("Res", res.data))
      .catch((err) => console.log("Err", err));
  };

  return (
    <div className="Put">
      <form
        className="row justify-content-center align-items-end"
        onSubmit={handleFormSubmit}
      >
        <div className="col-2">
          <input
            type="text"
            placeholder="Title"
            ref={titleRef}
            onChange={(e) => (titleRef.current = e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="col-2">
          <input
            type="text"
            placeholder="Body"
            ref={bodyRef}
            onChange={(e) => (bodyRef.current = e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="col-2">
          <input
            type="text"
            placeholder="Id"
            ref={idRef}
            onChange={(e) => (idRef.current = e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="col-2">
          <input
            type="text"
            placeholder="Id"
            ref={userRef}
            onChange={(e) => (userRef.current = e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="col-2">
          <button className="btn btn-success">Put(Update)</button>
        </div>
      </form>
    </div>
  );
};

export default Put;
