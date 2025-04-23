import SectionSelectorModal from "./SectionSelectorModal";

import styles from "./EmptySection.module.scss";

type EmptySectionProps = object

const EmptySection: React.FC<EmptySectionProps> = () => {
  return (
    <SectionSelectorModal>
      <div className={styles.emptySection}>
        <h2>¡Agrega tu primera sección!</h2>
      </div>
    </SectionSelectorModal>
  );
};

export default EmptySection;