import Image from "next/image"

const products = [
  { src: "/images/product-1.png", alt: "Paleta de chocolate rellena con maní" },
  { src: "/images/product-2.png", alt: "Paleta de dulce de leche con nueces" },
  { src: "/images/product-3.png", alt: "Paleta premium de pistacho" },
]

export function PracticeSection() {
  return (
    <section className="bg-secondary px-5 py-12">
      <div className="mx-auto max-w-md">
        <h2 className="text-center font-display text-2xl font-extrabold text-chocolate text-balance sm:text-3xl">
          Mira cómo quedan en la práctica
        </h2>

        <div className="mt-6 overflow-hidden rounded-3xl shadow-lg shadow-chocolate/10">
          <Image
            src="/images/tutorial.png"
            alt="Manos preparando paletas cremosas en la cocina"
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

        <p className="mt-5 text-center text-base leading-relaxed text-foreground text-pretty">
          Cada receta muestra el relleno cremoso, la combinación de sabores y el resultado final que vas a lograr en
          casa.
        </p>
      </div>
    </section>
  )
}
