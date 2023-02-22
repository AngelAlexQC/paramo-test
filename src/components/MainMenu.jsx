import "./MainMenu.css";
const ROUTES = [
  { path: "/", name: "Home" },
  { path: "/about", name: "About" },
  { path: "/blog", name: "Blog" },
  { path: "/contact", name: "Contact" },
];

export default function MainMenu() {
  return (
    <ul>
      {ROUTES.map(({ path, name }) => (
        <li key={path}>
          <a href={path}>{name}</a>
        </li>
      ))}
    </ul>
  );
}
