import Image from "next/image";
import Head from "next/head";
import { cn } from "@/lib/utils";
import { Section } from "@/app/UI";
import EmptySection from "../components/EmptySection";
import SendFloatingButton from "../components/SendFloatingButton";

import styles from "./App.module.scss";

export const promoTitle = "¡Muy pronto podrás construir tu propia página web aquí en Yuntayki!";
export const promoDescription = "Estamos preparando una herramienta increíble para que puedas lanzar tu sitio web de manera fácil, rápida y profesional.";
export const promoFooterLink = "¿No puedes esperar? ¡Contáctanos!";

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
        <Section className={styles.textAlignCenter}>
          <h1>Diseña el futuro de tu emprendimiento con Yuntayki</h1>
          <p className="mt-1 md:mt-2">Selecciona y personaliza cada sección de tu página web aquí mismo. No te preocupes por los detalles técnicos: cuando termines tu diseño, dale a &rsquo;Enviar&rsquo; y nosotros nos encargaremos del resto.</p>
        </Section>
        <Section className={cn(styles.textAlignCenter, 'mt-4 md:mt-8')}>
          <EmptySection />
        </Section>
        <SendFloatingButton />
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
