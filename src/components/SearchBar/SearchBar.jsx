import { useSearchBar } from "../../hooks";

export default function SearchBar() {
  const { value, results, searchOnChange, search } = useSearchBar();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    search();
  };

  return (
    <div className="SearchBar">
      <label htmlFor="search">Search the site</label>
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={searchOnChange} />
        <button onClick={search}>Search</button>
        <ul className="results">
          {results.map((result, index) => (
            <li key={index}>{result}</li>
          ))}
        </ul>
      </form>
    </div>
  );
}
