import { useState, useEffect } from "react";
import usePosts from "./usePosts";

export default function useSearchBar() {
  const [value, setValue] = useState("");
  const { posts } = usePosts();
  const [results, setResults] = useState([]);

  const handleValueChange = (e) => {
    // prevent initial space
    if (!value && e.target.value === " ") {
      return;
    }
    setValue(e.target.value);
  };

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
