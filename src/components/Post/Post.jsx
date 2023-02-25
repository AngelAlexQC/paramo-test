import styles from "./Post.module.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }),
};

function Post({ post = { title: "Post not found", content: "" } }) {
  return (
    <>
      <nav>
        <Link to="/blog">
          <FaArrowLeft /> Back to blog
        </Link>
      </nav>
      <article className={styles.post}>
        <h1>{post.title}</h1>
        <p dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </>
  );
}

export default Post;
