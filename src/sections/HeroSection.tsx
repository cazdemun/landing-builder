import { Button } from "@/components/ui/button"

function Hero() {
  return (
    <section className="w-full py-20 text-center px-4 md:px-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Bienvenido a Yuntayki
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-6">
          {"Construye landings más rápido que tu competencia puede decir \"¿cómo lo hiciste?\""}
        </p>
        <Button size="lg">Empezar ahora</Button>
      </div>
    </section>
  )
}

export default Hero