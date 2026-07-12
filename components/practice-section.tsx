import Image from "next/image"

const products = [
  {
    src: "/images/practice-1.png",
    alt: "Recetario '100 Paletas Rellenas y Cremosas' sobre una mesa de madera junto a fichas de recetas de fresa, coco, chocolate y maracuyá",
  },
  {
    src: "/images/practice-2.png",
    alt: "Recetario junto a fichas de cookies & cream y piña, con paletas empacadas con etiquetas 'Hecho en casa'",
  },
  {
    src: "/images/practice-3.png",
    alt: "Ficha de la receta 'Paleta Cremosa de Piña' con paletas de piña, trozos de piña fresca y moldes",
  },
]

export function PracticeSection() {
  return (
    <section className="bg-secondary px-5 py-8">
      <div className="mx-auto max-w-md">
        <h2 className="text-center font-display text-2xl font-extrabold text-chocolate text-balance sm:text-3xl">
          Mira cómo quedan en la práctica
        </h2>

        <div className="mt-5 overflow-hidden rounded-3xl shadow-lg shadow-chocolate/10">
          <Image
            src="/images/tutorial-mujer.png"
            alt="Mujer con delantal y guantes vertiendo mezcla de fresa en moldes de paletas, junto al recetario '100 Paletas Rellenas y Cremosas', paletas empacadas con etiquetas 'Hecho en casa' y variedad de paletas ya preparadas"
            width={800}
            height={600}
            className="h-auto w-full object-cover"
          />
        </div>

        <div className="mt-4 grid grid-cols-3 gap-3">
          {products.map((product) => (
            <div key={product.src} className="overflow-hidden rounded-2xl bg-card shadow-md">
              <Image
                src={product.src || "/placeholder.svg"}
                alt={product.alt}
                width={400}
                height={400}
                className="h-auto w-full object-cover"
              />
            </div>
          ))}
        </div>

        <p className="mt-4 text-center text-base leading-relaxed text-foreground text-pretty">
          Cada receta reúne los ingredientes y cantidades, la preparación paso a paso, los consejos de textura y las
          ideas de presentación para que sepas exactamente cómo va a quedar tu paleta en casa.
        </p>
      </div>
    </section>
  )
}
