import { cn } from "@/lib/utils";
import SectionSelectorModal from "./SectionSelectorModal";

import styles from "./SectionSlot.module.scss";

type SectionSlotProps = {
  isPartial?: boolean
}

const SectionSlot: React.FC<SectionSlotProps> = ({ isPartial }) => {
  const emptyBuilderText = "¡Agrega tu primera sección!";
  const partialBuilderText = "Agrega una sección";
  return (
    <SectionSelectorModal>
      <div className={cn(styles.sectionSlot, isPartial ? styles.sectionSlotPartial : null)}>
        <h2>{isPartial ? partialBuilderText : emptyBuilderText}</h2>
      </div>
    </SectionSelectorModal>
  );
};

export default SectionSlot;