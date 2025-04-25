import { HeroSection, ReviewsSection, FooterSection } from "@/sections";

export const dialogSections = [
  {
    type: 'hero',
    title: "Bienvenido a Yuntayki",
    description: "Construye landings más rápido que tu competencia puede decir \"¿cómo lo hiciste?\"",
    button: {
      label: "Empezar ahora",
      href: "/"
    }
  },
  {
    type: 'reviews',
    title: "Lo que dicen nuestros clientes",
    description: "No solo lo decimos nosotros, lo dicen nuestros clientes",
  },
  {
    type: 'footer',
    title: "Footer",
    description: "El footer es la parte inferior de tu página web",
  }
] as const;

const SectionSelector: React.FC<typeof dialogSections[number]> = ({ type, ...props }) => {
  if (type === 'hero') return <HeroSection {...props} />;
  if (type === 'reviews') return <ReviewsSection />;
  if (type === 'footer') return <FooterSection />;
  return null;
}

export default SectionSelector;