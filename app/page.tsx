import Image from "next/image";
import headerImage from "@/public/ragnhild_header.jpeg";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <Hero />
      <Footer />
    </div>
  );
}
