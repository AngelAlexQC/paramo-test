import styles from "./Post.module.css";
import PropTypes from "prop-types";

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }),
};

function Post({ post = { title: "Post not found", content: "" } }) {
  return (
    <article className={styles.post}>
      <h1>{post.title}</h1>
      <p dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
}

export default Post;
