import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

import styles from "./HeroSection.module.scss"

export type HeroProps = {
  title?: string
  description?: string
  button?: {
    label?: string
    href?: string
  }
}

const Hero: React.FC<HeroProps> = ({ title, description, button }) => {
  return (
    <section className={cn("w-full py-20 text-center px-4 md:px-12", styles.heroSectionShadow)}>
      <div className="max-w-3xl mx-auto">
        {title && <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>}
        {description && <p className="text-lg md:text-xl text-muted-foreground mb-6">{description}</p>}
        {button?.label && (
          <Button size="lg" asChild variant="secondary">
            <a href={button.href || "#"}>{button.label}</a>
          </Button>
        )}
      </div>
    </section>
  )
}

export default Hero