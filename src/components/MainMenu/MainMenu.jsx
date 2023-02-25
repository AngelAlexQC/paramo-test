import styles from "./MainMenu.module.css";

import { Link } from "react-router-dom";

const ROUTES = [
  { path: "/", name: "Home" },
  { path: "/about", name: "About" },
  { path: "/blog", name: "Blog" },
  { path: "/contact", name: "Contact" },
];

export default function MainMenu() {
  return (
    <ul className={styles.MainMenu}>
      {ROUTES.map(({ path, name }) => (
        <li key={path}>
          <Link to={path}>{name}</Link>
        </li>
      ))}
    </ul>
  );
}
