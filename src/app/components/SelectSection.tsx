// components/SelectSection.tsx
import React from "react"
import styles from "./SelectSection.module.scss"

interface SelectSectionProps {
  type: string
  children: React.ReactNode
}

export function SelectSection({ type, children }: SelectSectionProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.label}>{type}</div>
      <div className={styles.overlay} />
      <div className={styles.content}>{children}</div>
    </div>
  )
}
