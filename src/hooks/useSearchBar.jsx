import { useState, useEffect, useCallback } from "react";

export default function useSearchBar() {
  const [value, setValue] = useState("");
  const [records, setRecords] = useState([]);
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const resultsFromLocalStorage = localStorage.getItem("results");
    if (!resultsFromLocalStorage) return;
    const results = JSON.parse(resultsFromLocalStorage);
    if (!Array.isArray(results)) return;
    setRecords(results);
  }, []);

  const searchOnChange = (event) => {
    setValue(event.target.value);
  };

  const search = useCallback(() => {
    if (!value) setResults([]);
    const results = records.filter((record) =>
      record.toLowerCase().includes(value.toLowerCase())
    );
    setResults(results);
  }, [value, records]);

  return { value, results, searchOnChange, search };
}
