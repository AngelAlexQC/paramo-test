import { useParams } from "react-router-dom";
import { PostForm } from "../../components";
import { useNavigate } from "react-router-dom";
export default function EditPostPage() {
  const { id } = useParams();
  const posts = JSON.parse(localStorage.getItem("posts"));
  const post = posts.find((post) => Number(post.id) === Number(id));
  const navigate = useNavigate();

  const handleSubmit = (post) => {
    const posts = JSON.parse(localStorage.getItem("posts"));
    const newPosts = posts.map((p) =>
      Number(p.id) === Number(post.id) ? post : p
    );
    localStorage.setItem("posts", JSON.stringify(newPosts));
    navigate(`/post/${post.id}`);
  };

  return (
    <>
      <h1>Edit Post</h1>
      {post && <PostForm onSubmit={handleSubmit} post={post} />}
      {!post && <div>Post not found</div>}
    </>
  );
}
