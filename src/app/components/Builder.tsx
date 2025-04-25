'use client';

import { Section } from "@/app/UI";
import SectionSlot from "./SectionSlot";
import SendFloatingButton from "./SendFloatingButton";
import { SectionsProvider, useSections } from "@/context/SectionsContext";
import SectionSelector from "./SectionSelector";

const EmptyBuilder = () => {
  const { sections } = useSections()
  if (sections.length > 0) return null;
  return (<>
    <div className="h-full w-full flex flex-col items-center justify-center">
      <Section className="text-center">
        <h1>Diseña el futuro de tu emprendimiento con Yuntayki</h1>
        <p className="mt-1 md:mt-2">Selecciona y personaliza cada sección de tu página web aquí mismo. No te preocupes por los detalles técnicos: cuando termines tu diseño, dale a &rsquo;Enviar&rsquo; y nosotros nos encargaremos del resto.</p>
      </Section>
      <Section className="text-center mt-4 md:mt-8">
        <SectionSlot />
      </Section>
    </div>
  </>);
}

const PartialBuilder = () => {
  const { sections } = useSections()
  if (sections.length < 1) return null;
  return (<>
    {sections.map((section, index) => section.type === 'hero' || section.type === 'footer'
      ? (<SectionSelector key={index} {...section as React.ComponentProps<typeof SectionSelector>} />)
      : (
        <Section key={index} className="text-center mt-4 md:mt-8">
          <SectionSelector {...section as React.ComponentProps<typeof SectionSelector>} />
        </Section>
      )
    )}
    <Section className="text-center mt-4 md:mt-8" paddingDesktop="0.5rem" paddingMobile="0.5rem">
      <SectionSlot isPartial />
    </Section>
    <Section className="text-center mt-4 md:mt-8">
      <p>Agrega más secciones, edita el texto y sube imágenes, cuando termines, dale a &rsquo;Enviar&rsquo;.</p>
    </Section>
    <SendFloatingButton />
  </>);
}

const Builder = () => {
  return (
    <SectionsProvider>
      <EmptyBuilder />
      <PartialBuilder />
    </SectionsProvider>
  );
}


export default Builder;