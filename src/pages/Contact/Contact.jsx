import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

import styles from "./Contact.module.css";
const networks = [
  {
    icon: <FaFacebookSquare size={40} />,
    url: "https://www.facebook.com",
  },
  {
    icon: <FaTwitterSquare size={40} />,
    url: "https://www.twitter.com",
  },
  {
    icon: <FaInstagramSquare size={40} />,
    url: "https://www.instagram.com",
  },
  {
    icon: <FaLinkedin size={40} />,
    url: "https://www.linkedin.com",
  },
  {
    icon: <FaGithub size={40} />,
    url: "https://www.github.com",
  },
];

export default function ContactPage() {
  return (
    <main>
      <h1>Contact Us</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptates, voluptatibus, quae, quod voluptate quia consequuntur
        accusantium quidem voluptatem dolorum magnam! Quia, voluptate. Quia
        voluptates, quod voluptatibus quae, atque, quia voluptatem quibusdam
        accusantium nesciunt quidem voluptate. Quisquam, quae.
      </p>
      <ul className={styles.networks}>
        {networks.map((network) => (
          <li key={network.url}>{network.icon}</li>
        ))}
      </ul>
    </main>
  );
}
