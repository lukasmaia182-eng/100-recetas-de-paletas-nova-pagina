import Image from "next/image"

export function GuaranteeSectionBr() {
  return (
    <section className="px-5 py-8">
      <div className="mx-auto flex max-w-md flex-col items-center gap-4 rounded-3xl bg-secondary p-7 text-center">
        <Image
          src="/images/guarantee.png"
          alt="Selo de garantia de 7 dias"
          width={200}
          height={200}
          className="h-32 w-32 object-contain"
          loading="lazy"
          sizes="128px"
        />
        <h2 className="font-display text-2xl font-extrabold text-chocolate text-balance">
          Teste o livro de receitas por 7 dias
        </h2>
        <p className="text-base leading-relaxed text-foreground text-pretty">
          Depois de fazer a compra, você terá sete dias corridos para conferir o conteúdo. Se dentro desse prazo você
          achar que o material não corresponde ao que foi apresentado nesta página, poderá solicitar o reembolso de
          acordo com as condições da plataforma de pagamento utilizada. Assim você acessa o material e confere tudo com
          tranquilidade.
        </p>
      </div>
    </section>
  )
}
