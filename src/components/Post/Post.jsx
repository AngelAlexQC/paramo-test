import styles from "./Post.module.css";
function Post({ title, content }) {
  if (!title || !content) {
    throw new Error("Post must have a title and content");
  }
  return (
    <article className={styles.post}>
      <h2>{title}</h2>
      <p dangerouslySetInnerHTML={{ __html: content }} />
    </article>
  );
}

export default Post;
