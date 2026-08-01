const items = [
  {
    title: "Montar um cardápio variado",
    text: "Tenha opções cremosas, com frutas, econômicas e premium para diferentes clientes.",
  },
  {
    title: "Melhorar a textura",
    text: "Siga quantidades e recomendações que ajudam a reduzir os erros mais comuns.",
  },
  {
    title: "Evitar testes desnecessários",
    text: "Não desperdice tempo nem ingredientes inventando cada combinação do zero.",
  },
  {
    title: "Começar do zero como iniciante",
    text: "Consulte instruções claras e organizadas, mesmo que você nunca tenha feito paletas recheadas.",
  },
]

export function IdealSectionBr() {
  return (
    <section className="px-5 py-8">
      <div className="mx-auto max-w-md">
        <h2 className="text-center font-display text-2xl font-extrabold text-chocolate text-balance sm:text-3xl">
          Este livro de receitas foi feito para você que…
        </h2>

        <ul className="mt-5 flex flex-col gap-3">
          {items.map((item, index) => (
            <li key={item.title} className="flex gap-4 rounded-2xl bg-card p-4 shadow-sm">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary font-display text-base font-extrabold text-primary-foreground">
                {index + 1}
              </span>
              <div>
                <h3 className="font-display text-lg font-bold leading-tight text-chocolate">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
