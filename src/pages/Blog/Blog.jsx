import { usePosts } from "../../hooks";
import { getHighlightedResume } from "../../utils";
import styles from "./Blog.module.css";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

export default function Blog() {
  const posts = usePosts();
  return (
    <main className={styles.blog}>
      <header className={styles.header}>
        <h1>Blog</h1>
        <button>
          <Link to="/post/create">
            <FaPlus /> Create Post
          </Link>
        </button>
      </header>
      <section>
        {posts.map((post) => (
          <article key={post.id}>
            <h2>{post.title}</h2>
            <div
              dangerouslySetInnerHTML={{
                __html: getHighlightedResume(post.content, "react"),
              }}
            />
            <Link to={`/post/${post.id}`}>Read more</Link>
          </article>
        ))}
      </section>
    </main>
  );
}
