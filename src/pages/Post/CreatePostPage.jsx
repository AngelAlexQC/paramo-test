import { useNavigate } from "react-router-dom";
import { PostForm } from "../../components";

export default function CreatePostPage() {
  const navigate = useNavigate();
  const handleSubmit = (post) => {
    // create new id
    const posts = JSON.parse(localStorage.getItem("posts") || "[]");
    const newId = posts.length + 1;
    const newPost = { ...post, id: newId };
    const newPosts = [...posts, newPost];
    localStorage.setItem("posts", JSON.stringify(newPosts));
    navigate(`/post/${newId}`);
  };
  return (
    <>
      <h1>Create Post</h1>
      <PostForm onSubmit={handleSubmit} />
    </>
  );
}
