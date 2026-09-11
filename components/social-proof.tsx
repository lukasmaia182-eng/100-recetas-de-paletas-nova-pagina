import Image from "next/image"

const slides = [
  {
    src: "/images/social-1.png",
    alt: "Mujer empacando paletas cremosas en una caja lista para vender desde casa",
    text: "Lista para vender desde casa.",
  },
  {
    src: "/images/social-2.png",
    alt: "Mujer consultando las recetas de paletas desde su celular en la cocina",
    text: "Ya tengo mis recetas.",
  },
  {
    src: "/images/social-3.png",
    alt: "Mujer sonriente mostrando una tabla con sus primeras paletas cremosas",
    text: "Mis primeras paletas.",
  },
  {
    src: "/images/social-4.png",
    alt: "Manos sosteniendo la ficha de la receta paleta cremosa de mango",
    text: "Seguí el paso a paso.",
  },
  {
    src: "/images/social-5.png",
    alt: "Mujer empacando paletas con etiquetas 'Hecho con amor' y recibiendo pedidos por WhatsApp",
    text: "Mi producción en casa.",
  },
  {
    src: "/images/social-6.png",
    alt: "Mujer sosteniendo una ficha de receta de paleta cremosa de fresa en su negocio de postres",
    text: "Nuevo producto para mi menú.",
  },
]

export function SocialProof() {
  const loop = [...slides, ...slides]

  return (
    <section className="overflow-hidden py-8">
      <div className="mx-auto mb-4 max-w-md px-5">
        <h2 className="text-center font-display text-2xl font-extrabold text-chocolate text-balance sm:text-3xl">
          Ellas ya están creando sus propias paletas
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
