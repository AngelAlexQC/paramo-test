import React, { useState } from "react";
import styles from "./PostForm.module.css";
import PropTypes from "prop-types";

PostForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  post: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
  }),
};
function PostForm({
  onSubmit,
  post = {
    id: 0,
    title: "",
    content: "",
  },
}) {
  if (typeof onSubmit !== "function") {
    throw new Error("PostForm must have an onSubmit function");
  }
  const [title, setTitle] = useState(post.title || "");
  const [content, setContent] = useState(post.content || "");
  const [contentError, setContentError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Check if the content is valid HTML
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, "text/html");
    if (doc.body.innerHTML === "") {
      setContentError("Content must be valid HTML");
      return;
    }
    setContentError("");
    onSubmit({ id: post.id, title, content });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          required
          placeholder="My first post"
        />
      </div>
      <div>
        <label htmlFor="content">Content:</label>
        <textarea
          id="content"
          value={content}
          onChange={(event) => setContent(event.target.value)}
          required
          placeholder="<strong>This is my first post</strong>"
        />
        {contentError && <p className={styles.error}>{contentError}</p>}
      </div>
      <button type="submit">Save</button>
    </form>
  );
}

export default PostForm;
