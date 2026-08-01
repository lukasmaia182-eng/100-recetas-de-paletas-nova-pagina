import Image from "next/image"

const defaultSlides = [
  {
    src: "/images/br-social-1.png",
    alt: "Mulher com avental embalando paletas recheadas gourmet em uma caixa de presente kraft, pronta para vender de casa",
    text: "Pronta para vender de casa.",
  },
  {
    src: "/images/br-social-2.png",
    alt: "Mulher segurando duas paletas gourmet, uma de pistache e outra de chocolate",
    text: "Já tenho minhas receitas.",
  },
  {
    src: "/images/br-social-3.png",
    alt: "Mulher sorrindo mostrando um prato com suas primeiras paletas recheadas gourmet de vários sabores",
    text: "Minhas primeiras paletas.",
  },
  {
    src: "/images/br-social-4.png",
    alt: "Mãos decorando uma paleta de chocolate com avelãs, seguindo o passo a passo com bowls de toppings",
    text: "Segui o passo a passo.",
  },
  {
    src: "/images/br-social-5.png",
    alt: "Produção em casa com várias caixas de presente kraft cheias de paletas gourmet prontas para entrega",
    text: "Minha produção em casa.",
  },
  {
    src: "/images/br-social-6.png",
    alt: "Mulher segurando uma paleta de pistache, um novo produto para o cardápio do seu negócio",
    text: "Novo produto pro meu cardápio.",
  },
]

interface SocialProofBrProps {
  slides?: { src: string; alt: string; text: string }[]
}

export function SocialProofBr({ slides = defaultSlides }: SocialProofBrProps) {
  const loop = [...slides, ...slides]

  return (
    <section className="overflow-hidden py-8">
      <div className="mx-auto mb-4 max-w-md px-5">
        <h2 className="text-center font-display text-2xl font-extrabold text-chocolate text-balance sm:text-3xl">
          Elas já estão fazendo as próprias paletas
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
