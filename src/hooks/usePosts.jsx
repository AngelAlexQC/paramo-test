import { useState, useEffect } from "react";

export default function usePosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const posts = JSON.parse(localStorage.getItem("posts"));
    setPosts(posts);
  }, []);

  return posts;
}
