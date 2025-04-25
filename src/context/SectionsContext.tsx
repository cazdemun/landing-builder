'use client'

import { createContext, useContext, useState, ReactNode } from "react"

export type SectionData = {
  type: string
} & Record<string, string | object>

type SectionsContextType = {
  sections: SectionData[]
  addSection: (section: SectionData) => void
  updateSection: (index: number, newProps: Record<string, string | object>) => void
  removeSection: (index: number) => void
}

const SectionsContext = createContext<SectionsContextType | null>(null)

export const useSections = () => {
  const context = useContext(SectionsContext)
  if (!context) throw new Error("useSections debe usarse dentro de SectionsProvider")
  return context
}

export const SectionsProvider = ({ children }: { children: ReactNode }) => {
  const [sections, setSections] = useState<SectionData[]>([])

  const addSection = (section: SectionData) => {
    setSections(prev => [...prev, section])
  }

  const updateSection = (index: number, newProps: Record<string, string | object>) => {
    setSections(prev =>
      prev.map((section, i) =>
        i === index ? { ...section, ...newProps } : section
      )
    )
  }

  const removeSection = (index: number) => {
    setSections(prev => prev.filter((_, i) => i !== index))
  }

  return (
    <SectionsContext.Provider value={{ sections, addSection, updateSection, removeSection }}>
      {children}
    </SectionsContext.Provider>
  )
}
