import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Image from "next/image";
import { SelectSection } from "./SelectSection";
import { HeroSection, ReviewsSection, FooterSection } from "@/sections";

type SectionSelectorModalProps = {
  children?: React.ReactNode
}

const SectionSelectorModal: React.FC<SectionSelectorModalProps> = ({ children }) => {
  return (
    <Dialog>
      <DialogTrigger className="w-full">{children}</DialogTrigger>
      <DialogContent className="overflow-y-auto min-w-[95vw] max-h-[95vh] p-8">
        <DialogHeader>
          <DialogTitle>Secciones</DialogTitle>
          <DialogDescription>Has click en la sección que quieras agregar</DialogDescription>
        </DialogHeader>
        <SelectSection type="Banner principal">
          <HeroSection />
        </SelectSection>
        <SelectSection type="Reseñas">
          <ReviewsSection />
        </SelectSection>
        <SelectSection type="Footer">
          <FooterSection />
        </SelectSection>
        <a
          href="https://wa.me/51933081833?text=Hola%2C%20quiero%20crear%20mi%20página%20web%20con%20Yuntayki"
          target="_blank"
          rel="noopener noreferrer"
          className="text-center flex items-center justify-center gap-2"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          ¿Quieres una sección diferente? ¡Escríbenos! →
        </a>
      </DialogContent>
    </Dialog>
  );
};

export default SectionSelectorModal;