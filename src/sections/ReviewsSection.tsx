import { Card, CardContent } from "@/components/ui/card"

const reviews = [
  {
    name: "Juan Pérez",
    text: "Yuntayki me ahorró horas de trabajo. El builder es una locura.",
  },
  {
    name: "Ana Torres",
    text: "No sabía que necesitaba esto hasta que lo probé. Ahora no vuelvo atrás.",
  },
  {
    name: "Carlos López",
    text: "Interfaz limpia, fácil de usar y los resultados son top.",
  },
]

function Reviews() {
  return (
    <section className="w-full py-16 bg-muted px-4 md:px-12">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-10">Lo que dice la gente</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((review, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <p className="text-muted-foreground italic">&quot;{review.text}&quot;</p>
                <p className="mt-4 font-semibold">{review.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews;