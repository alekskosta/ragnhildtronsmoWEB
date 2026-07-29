import styles from "./Hero.module.css";
import SocialLinks from "./SocialLinks";

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.head1}>
        <div className={styles.text}>
          <h1>Ragnhild Tronsmo</h1>

          <p>Arvelinjer - Debutalbum ute høsten 2026</p>
          <p>Kontakt: ragnhildth@gmail.com</p>
        </div>
        <SocialLinks />
      </div>

      <div className={styles.head2}>
        <picture>
          <source
            media="(max-width: 972px)"
            srcSet="/ragnhild_header_mobil.jpg"
          />

          <img
            src="/ragnhild_header.jpeg"
            alt="Ragnhild Tronsmo"
            className={styles.img}
          />
        </picture>
      </div>
    </section>
  );
}
