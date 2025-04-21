import { ReactNode } from "react";
import styles from "./Section.module.scss";
import { cn } from "./utils";

interface SectionProps {
  children?: ReactNode;
  className?: string;
  paddingMobile?: string;
  paddingDesktop?: string;
}

const Section = ({
  children,
  className,
  paddingMobile,
  paddingDesktop,
}: SectionProps) => {
  if (
    !children ||
    (Array.isArray(children) && children.every((child) => child === undefined))
  ) {
    return null;
  }

  const style: React.CSSProperties & { [key: string]: string } = {
    ...(paddingMobile ? { "--padding-horizontal-mobile": paddingMobile } : {}),
    ...(paddingDesktop ? { "--padding-horizontal-desktop": paddingDesktop } : {}),
  };

  return (
    <section className={cn(styles.section, className)} style={style}>
      {children}
    </section>
  );
};

export default Section;
