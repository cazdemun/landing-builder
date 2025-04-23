import styles from "./EmptySection.module.scss";

type DummySectionProps = object

const DummySection: React.FC<DummySectionProps> = () => {
  return (
    <div className={styles.emptySection}>
      <h2>Dummy</h2>
    </div>
  );
};

export default DummySection;