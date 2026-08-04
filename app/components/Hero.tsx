import styles from "./Hero.module.css";
import SocialLinks from "./SocialLinks";

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.head1}>
        <div className={styles.text}>
          <h1>Ragnhild Tronsmo</h1>

          <p>Formødre - Singel ute 21.08</p>
          <p>Arvelinjer - Album ute 18.09</p>
        </div>
        <div className={styles.socialDiv}>
          <SocialLinks />
          <small className={styles.contact}>
            Kontakt: ragnhildth@gmail.com
          </small>
        </div>
      </div>

      <div className={styles.head2}>
        <picture>
          <source
            media="(max-width: 972px)"
            srcSet="/ragnhild_header_mobil4.jpg"
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
