import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider"

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yuntayki | Creador de Páginas Web para Emprendedores",
  description: "Construye tu página web de manera rápida y sencilla con Yuntayki, la plataforma que potencia el crecimiento de tus emprendimientos.",
  openGraph: {
    title: "Yuntayki | Creador de Páginas Web",
    description: "La herramienta definitiva de Yuntayki para emprendedores: crea tu página web fácilmente y lleva tu proyecto al siguiente nivel.",
    url: "https://demo.yuntayki.com",
    siteName: "Yuntayki",
    // images: [
    //   {
    //     url: "https://yuntayki.com/og-image.jpg", // deberías tener una imagen Open Graph
    //     width: 1200,
    //     height: 630,
    //     alt: "Yuntayki Creador de Páginas Web",
    //   },
    // ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yuntayki | Creador de Páginas Web para Emprendedores",
    description: "Lanza tu sitio web en minutos con la herramienta de creación de páginas de Yuntayki.",
    // images: ["https://yuntayki.com/og-image.jpg"],
  },
  keywords: [
    "Yuntayki",
    "Creador de páginas web",
    "Emprendimientos",
    "Plataforma de negocios",
    "Herramientas para emprendedores",
    "Construir página web fácil"
  ],
  authors: [{ name: "Yuntayki" }],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
