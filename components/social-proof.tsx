import Image from "next/image"

const slides = [
  {
    src: "/images/social-1.png",
    alt: "Variedad de paletas cremosas de colores",
    text: "Recetas organizadas y fáciles de consultar.",
  },
  {
    src: "/images/social-2.png",
    alt: "Mano sosteniendo una paleta de fresa cremosa",
    text: "Ingredientes y cantidades en un solo lugar.",
  },
  {
    src: "/images/social-3.png",
    alt: "Mini paletas servidas en una fiesta",
    text: "Preparación explicada paso a paso.",
  },
  {
    src: "/images/social-4.png",
    alt: "Paleta estilo cheesecake abierta",
    text: "Opciones económicas y premium para crear un menú más variado.",
  },
]

export function SocialProof() {
  const loop = [...slides, ...slides]

  return (
    <section className="overflow-hidden py-8">
      <div className="mx-auto mb-4 max-w-md px-5">
        <h2 className="text-center font-display text-2xl font-extrabold text-chocolate text-balance sm:text-3xl">
          Mira cómo es el recetario por dentro
        </h2>
      </div>

      <div className="relative w-full">
        <div className="flex w-max animate-marquee gap-4 px-5">
          {loop.map((slide, index) => (
            <figure
              key={`${slide.src}-${index}`}
              className="w-64 shrink-0 overflow-hidden rounded-3xl bg-card shadow-lg"
            >
              <Image
                src={slide.src || "/placeholder.svg"}
                alt={slide.alt}
                width={400}
                height={400}
                className="h-48 w-full object-cover"
              />
              <figcaption className="p-4">
                <p className="font-display text-sm font-bold leading-relaxed text-chocolate">{slide.text}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
