import Image from "next/image";
import Head from "next/head";
import Builder from "../components/Builder";

import styles from "./App.module.scss";

export default function App() {
  return (
    <div className={styles.page}>
      <Head>
        <link
          rel="canonical"
          href="https://demo.yuntayki.com"
          key="canonical"
        />
      </Head>
      <header className={styles.header} />
      <main className={styles.main}>
        <Builder />
      </main>
      <footer className={styles.footer}>
        <a
          href="https://wa.me/51933081833?text=Hola%2C%20quiero%20crear%20mi%20página%20web%20con%20Yuntayki"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.textAlignCenter}
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          ¿Tienes una idea especial? ¡Contáctanos! →
        </a>
      </footer>
    </div>
  );
}
