import Image from "next/image";
import Section from "@/app/UI/Section";

import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header} />
      <main className={styles.main}>
        <Section className={styles.textAlignCenter}>
          <h1>¡Muy pronto podrás construir tu propia página web aquí en Yuntayki!</h1>
          <p>Estamos preparando una herramienta increíble para que puedas lanzar tu sitio web de manera fácil, rápida y profesional.</p>
        </Section>
        <Section className={styles.textAlignCenter}>
          Holi
        </Section>
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
          ¿No puedes esperar? ¡Contáctanos! →
        </a>
      </footer>
    </div>
  );
}
