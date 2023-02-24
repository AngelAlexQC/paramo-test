import { useSearchBar } from "../../hooks";
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
              const withoutTags = content.replace(/(<([^>]+)>)/gi, "");
              const withoutTagsResum = withoutTags.slice(0, 100);
              // highlight search term occurrences
              const highlight = withoutTagsResum.replace(
                new RegExp(value, "gi"),
                (match) => `<strong>${match}</strong>`
              );
              const resum = `${highlight}...`;
              return (
                <li key={index}>
                  <h3>{title}</h3>
                  <p dangerouslySetInnerHTML={{ __html: resum }} />
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
