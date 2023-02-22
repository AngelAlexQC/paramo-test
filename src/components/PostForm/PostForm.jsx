import React, { useState } from "react";
import styles from "./PostForm.module.css";
function PostForm({ onSubmit, post = {} }) {
  const [title, setTitle] = useState(post.title || "");
  const [content, setContent] = useState(post.content || "");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ title, content });
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
        />
      </div>
      <div>
        <label htmlFor="content">Content:</label>
        <textarea
          id="content"
          value={content}
          onChange={(event) => setContent(event.target.value)}
        />
      </div>
      <button type="submit">Save</button>
    </form>
  );
}

export default PostForm;
