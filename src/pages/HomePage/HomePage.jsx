import styles from "./HomePage.module.css";
import { HeroImage } from "../../components";

export default function HomePage() {
  return (
    <main className={styles.homePage}>
      <HeroImage />
      <section className={styles.feed}>
        <div className={styles.feedLeft}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            laboriosam obcaecati sunt repudiandae aliquam fugiat. Dolorum
            numquam voluptatum, ea, unde quibusdam, dicta iusto quam assumenda
            distinctio explicabo nihil omnis quisquam! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Beatae laboriosam obcaecati sunt
            repudiandae aliquam fugiat.
          </p>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Y1qQZbTF8iQ"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className={styles.video}
          />
        </div>
        <div className={styles.feedRight}>
          <header className={styles.feedRightHeader}>
            <img src="https://via.placeholder.com/125" alt="placeholder" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              laboriosam obcaecati sunt repudiandae aliquam fugiat. Dolorum
              numquam voluptatum, ea, unde quibusdam, dicta iusto quam assumenda
              distinctio explicabo nihil omnis quisquam!
            </p>
          </header>
          <div className={styles.feedRightBody}>
            {Array(3)
              .fill()
              .map((_, i) => (
                <img
                  src="https://via.placeholder.com/125"
                  alt="placeholder"
                  key={i}
                />
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}
