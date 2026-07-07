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
          Prueba el recetario durante 7 días
        </h2>
        <p className="text-base leading-relaxed text-foreground text-pretty">
          Después de realizar la compra, tendrás siete días naturales para revisar el contenido. Si durante ese plazo
          consideras que el material no corresponde a lo presentado en esta página, podrás solicitar el reembolso de
          acuerdo con las condiciones de la plataforma de pago utilizada. Así puedes acceder al recetario y comprobar el
          contenido con tranquilidad.
        </p>
      </div>
    </section>
  )
}
