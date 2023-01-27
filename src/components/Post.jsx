import React, { useRef } from "react";
import axios from "axios";
const Post = () => {
  const bodyRef = useRef("bar");
  const titleRef = useRef("foo");

  const idRef = useRef(1);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    postFormData();
  };

  const postFormData = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        body: {
          title: titleRef.current,
          body: bodyRef.current,
          userId: idRef.current,
        },
      })
      .then((x) => console.log("res post", x.data))
      .catch((err) => console.log("error", err));
  };
  return (
    <div className="Post">
      <form
        className="row justify-content-center align-items-end"
        onSubmit={handleFormSubmit}
      >
        <div className="col-3">
          <input
            type="text"
            placeholder="Title"
            ref={titleRef}
            onChange={(e) => (titleRef.current = e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="col-3">
          <input
            type="text"
            placeholder="Body"
            ref={bodyRef}
            onChange={(e) => (bodyRef.current = e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="col-3">
          <input
            type="text"
            placeholder="Id"
            ref={idRef}
            onChange={(e) => (idRef.current = e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="col-3">
          <button className="btn btn-success">Add Form Todo</button>
        </div>
      </form>
    </div>
  );
};

export default Post;
