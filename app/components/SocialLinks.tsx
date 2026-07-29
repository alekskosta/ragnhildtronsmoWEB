import Link from "next/link";
import { FaFacebook, FaInstagram, FaSpotify } from "react-icons/fa6";

import styles from "./SocialLinks.module.css";

export default function SocialLinks() {
  return (
    <nav className={styles.socials} aria-label="Sosiale medier">
      <Link
        href="https://www.facebook.com/p/Ragnhild-Tronsmo-61571919862161"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
      >
        <FaFacebook />
      </Link>

      <Link
        href="https://www.instagram.com/ragnhildtronsmo"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <FaInstagram />
      </Link>

      <Link
        href="https://open.spotify.com/artist/4PAqOaTxizYIFoMUGGET5h?si=Alj1GXiCQhmvelJnK9CETA"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Spotify"
      >
        <FaSpotify />
      </Link>
    </nav>
  );
}
