import styles from "./HeroImage.module.css";
const url = "https://via.placeholder.com/1920x1080";
export default function HeroImage() {
  return (
    <div className={styles.heroImage}>
      <img src={url} alt="Hero Image" />
    </div>
  );
}
