import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link
      style={{
        display: "flex",
      }}
      to="/"
    >
      <img src="https://via.placeholder.com/150x75" alt="logo" />;
    </Link>
  );
}
