import Image from "next/image"

const slides = [
  {
    src: "/images/social-1.png",
    alt: "Variedad de paletas cremosas de colores",
    name: "Rosa M.",
    text: "Ya estoy vendiendo mis paletas los fines de semana. Las recetas son facilísimas.",
  },
  {
    src: "/images/social-2.png",
    alt: "Mano sosteniendo una paleta de fresa cremosa",
    name: "Carla V.",
    text: "Nunca había logrado esa textura tan cremosa. Mi familia quedó encantada.",
  },
  {
    src: "/images/social-3.png",
    alt: "Mini paletas servidas en una fiesta",
    name: "Daniela P.",
    text: "Hice las mini paletas para un cumpleaños y todos me pidieron encargos.",
  },
  {
    src: "/images/social-4.png",
    alt: "Paleta estilo cheesecake abierta",
    name: "Lucía T.",
    text: "Las recetas premium me ayudaron a cobrar más por cada paleta. Vale la pena.",
  },
]

export function SocialProof() {
  const loop = [...slides, ...slides]

  return (
    <section className="overflow-hidden py-12">
      <div className="mx-auto mb-7 max-w-md px-5">
        <h2 className="text-center font-display text-2xl font-extrabold text-chocolate text-balance sm:text-3xl">
          Mujeres que ya están preparando y vendiendo
        </h2>
      </div>

      <div className="relative w-full">
        <div className="flex w-max animate-marquee gap-4 px-5">
          {loop.map((slide, index) => (
            <figure
              key={`${slide.name}-${index}`}
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
                <div className="mb-1 flex gap-0.5 text-primary" aria-label="5 de 5 estrellas">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-foreground">{slide.text}</p>
                <p className="mt-2 font-display text-sm font-bold text-chocolate">{slide.name}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path d="M12 2l2.9 6.2 6.6.9-4.8 4.6 1.2 6.6L12 18.9 6.1 21l1.2-6.6L2.5 9.8l6.6-.9L12 2z" />
    </svg>
  )
}
