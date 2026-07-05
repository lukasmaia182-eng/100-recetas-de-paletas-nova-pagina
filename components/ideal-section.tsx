const items = [
  {
    title: "Empezar sin miedo a equivocarte",
    text: "Recetas organizadas y explicadas para que aciertes la textura desde la primera vez.",
  },
  {
    title: "Preparar paletas más cremosas",
    text: "Consejos prácticos para reducir cristales de hielo y lograr un relleno suave y cremoso.",
  },
  {
    title: "Crear un menú variado y atractivo",
    text: "Sabores cremosos, de chocolate, dulce de leche, frutales y premium para no aburrirte.",
  },
  {
    title: "Ganar dinero vendiendo paletas",
    text: "Recetas económicas para empezar y opciones premium para cobrar más por cada paleta.",
  },
]

export function IdealSection() {
  return (
    <section className="px-5 py-12">
      <div className="mx-auto max-w-md">
        <h2 className="text-center font-display text-2xl font-extrabold text-chocolate text-balance sm:text-3xl">
          Ideal para ti que deseas
        </h2>

        <ul className="mt-7 flex flex-col gap-4">
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
