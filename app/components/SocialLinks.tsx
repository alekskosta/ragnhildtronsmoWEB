import Link from "next/link";
import { FaFacebook, FaInstagram, FaSpotify } from "react-icons/fa6";

import styles from "./SocialLinks.module.css";

export default function SocialLinks() {
  return (
    <nav className={styles.socials} aria-label="Sosiale medier">
      <Link
        href="https://facebook.com/dinbruker"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
      >
        <FaFacebook />
      </Link>

      <Link
        href="https://instagram.com/dinbruker"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <FaInstagram />
      </Link>

      <Link
        href="https://open.spotify.com/artist/dinartistid"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Spotify"
      >
        <FaSpotify />
      </Link>
    </nav>
  );
}
