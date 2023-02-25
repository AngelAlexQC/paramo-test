import { Post } from "../../components";
import { useParams } from "react-router-dom";

export default function PostPage() {
  const { id } = useParams();
  const posts = JSON.parse(localStorage.getItem("posts"));
  const post = posts.find((post) => Number(post.id) === Number(id));
  return post ? <Post post={post} /> : <div>Post not found</div>;
}
