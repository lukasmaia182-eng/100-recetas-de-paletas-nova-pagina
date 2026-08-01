import Image from "next/image"

const defaultProducts = [
  {
    src: "/images/br-practica-2.png",
    alt: "Caixa de presente kraft com laço dourado e etiqueta 'Feito com amor para você', com um picolé de chocolate e avelãs embrulhado em papel decorado, ao lado do livro 'Picolés Gourmet Recheados Lucrativos'.",
  },
  {
    src: "/images/br-practica-3.png",
    alt: "Caixa de presente kraft aberta com um picolé de chocolate e avelãs, ao lado de um caixote de madeira com picolés gourmet de vários sabores.",
  },
  {
    src: "/images/br-practica-4.png",
    alt: "Duas caixas de presente kraft com laços dourados e um picolé de pistache, cercadas de bowls com toppings e uma tábua de mármore com picolés gourmet prontos.",
  },
]

interface PracticeSectionBrProps {
  mainImageSrc?: string
  mainImageAlt?: string
  products?: { src: string; alt: string }[]
}

export function PracticeSectionBr({
  mainImageSrc = "/images/br-practica-1.png",
  mainImageAlt = "Mulher com avental decorando um picolé de pistache, sobre uma mesa com o livro 'Picolés Gourmet Recheados Lucrativos' e variedade de picolés gourmet recheados.",
  products = defaultProducts,
}: PracticeSectionBrProps) {
  return (
    <section className="bg-secondary px-5 py-8">
      <div className="mx-auto max-w-md">
        <h2 className="text-center font-display text-2xl font-extrabold text-chocolate text-balance sm:text-3xl">
          Veja como elas ficam na prática
        </h2>

        <div className="mt-5 overflow-hidden rounded-3xl shadow-lg shadow-chocolate/10">
          <Image
            src={mainImageSrc || "/placeholder.svg"}
            alt={mainImageAlt}
            width={800}
            height={600}
            className="h-auto w-full object-cover"
          />
        </div>

        <div className="mt-4 grid grid-cols-3 gap-3">
          {products.map((product) => (
            <div key={product.src} className="aspect-square overflow-hidden rounded-2xl bg-card shadow-md">
              <Image
                src={product.src || "/placeholder.svg"}
                alt={product.alt}
                width={400}
                height={400}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>

        <p className="mt-4 text-center text-base leading-relaxed text-foreground text-pretty">
          Cada receita reúne os ingredientes e as quantidades, o preparo passo a passo, as dicas de textura e as ideias
          de apresentação para você saber exatamente como seu picolé vai ficar em casa.
        </p>
      </div>
    </section>
  )
}
