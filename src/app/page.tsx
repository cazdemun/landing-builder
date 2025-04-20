import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>¡Muy pronto podrás construir tu propia página web aquí en Yuntayki!</h1>
        <p>Estamos preparando una herramienta increíble para que puedas lanzar tu sitio web de manera fácil, rápida y profesional.</p>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://wa.me/51933081833?text=Hola%2C%20quiero%20crear%20mi%20página%20web%20con%20Yuntayki"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          ¿No puedes esperar? ¡Contáctame! →
        </a>
      </footer>
    </div>
  );
}
