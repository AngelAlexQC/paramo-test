import { useState, useEffect } from "react";

export default function useSearchBar() {
  const [value, setValue] = useState("");
  const [posts, setPosts] = useState([]);
  const [results, setResults] = useState([]);

  const handleValueChange = (e) => {
    // prevent initial space
    if (!value && e.target.value === " ") {
      return;
    }
    setValue(e.target.value);
  };

  useEffect(() => {
    const posts = JSON.parse(localStorage.getItem("posts"));
    setPosts(posts);
  }, []);

  useEffect(() => {
    if (value === "") {
      setResults([]);
      return;
    }
    const results = posts.filter((post) => {
      return (
        post.title.toLowerCase().includes(value.toLowerCase()) ||
        post.content.toLowerCase().includes(value.toLowerCase())
      );
    });
    setResults(results);
  }, [value]);

  return {
    value,
    results: results.map((result) => ({
      title: result.title,
      content: result.content,
    })),
    searchOnChange: handleValueChange,
  };
}
