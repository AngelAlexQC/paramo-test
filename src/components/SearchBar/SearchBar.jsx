import { useSearchBar } from "../../hooks";
import { getHighlightedResume } from "../../utils";
import styles from "./SearchBar.module.css";
export default function SearchBar() {
  const { value, results, searchOnChange } = useSearchBar();
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.searchBar}>
      <label htmlFor="search">Search the site</label>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={searchOnChange}
          name="search"
          id="search"
          placeholder="Enter keyword"
        />
        <button type="submit">Search</button>
        {results.length > 0 && (
          <ul>
            {results.map(({ title, content }, index) => {
              return (
                <li key={index}>
                  <h3>{title}</h3>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: getHighlightedResume(content, value),
                    }}
                  />
                  <a href="/">Read more</a>
                </li>
              );
            })}
          </ul>
        )}
      </form>
    </div>
  );
}


