import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Image from "next/image";
import { SelectSection as SectionSelectorWrapper } from "./SelectSection";
import { useSections } from "@/context/SectionsContext";
import SectionSelector, { dialogSections } from "./SectionSelector";

type SectionSelectorModalProps = {
  children?: React.ReactNode
}

const SectionSelectorModal: React.FC<SectionSelectorModalProps> = ({ children }) => {
  const { addSection } = useSections();

  return (
    <Dialog>
      <DialogTrigger className="w-full">{children}</DialogTrigger>
      <DialogContent className="overflow-y-auto min-w-[100vw] max-h-[100vh] p-8">
        <DialogHeader>
          <DialogTitle>Secciones</DialogTitle>
          <DialogDescription>Has click en la sección que quieras agregar</DialogDescription>
        </DialogHeader>
        {dialogSections.map((section) => (
          <DialogClose key={section.type} onClick={() => addSection(section)}>
            <SectionSelectorWrapper type={section.type}>
              <SectionSelector {...section} />
            </SectionSelectorWrapper>
          </DialogClose>
        ))}
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