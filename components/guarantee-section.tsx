import Image from "next/image"

export function GuaranteeSection() {
  return (
    <section className="px-5 py-12">
      <div className="mx-auto flex max-w-md flex-col items-center gap-5 rounded-3xl bg-secondary p-7 text-center">
        <Image
          src="/images/guarantee.png"
          alt="Sello de garantía de 7 días"
          width={200}
          height={200}
          className="h-32 w-32 object-contain"
        />
        <h2 className="font-display text-2xl font-extrabold text-chocolate text-balance">
          Garantía total de 7 días
        </h2>
        <p className="text-base leading-relaxed text-foreground text-pretty">
          Prueba todas las recetas sin riesgo. Si no te encanta, escríbenos dentro de 7 días y te devolvemos el 100% de
          tu dinero. Toda la seguridad está de tu lado.
        </p>
      </div>
    </section>
  )
}
