import { usePosts } from "../../hooks";
import { getHighlightedResume } from "../../utils";
import styles from "./Blog.module.css";

export default function Blog() {
  const posts = usePosts();
  return (
    <main className={styles.blog}>
      <h1>Blog</h1>
      <section>
        {posts.map((post) => (
          <article key={post.id}>
            <h2>{post.title}</h2>
            <div
              dangerouslySetInnerHTML={{
                __html: getHighlightedResume(post.content, "react"),
              }}
            />
          </article>
        ))}
      </section>
    </main>
  );
}
