const items = [
  {
    title: "Crear un menú variado",
    text: "Ten opciones cremosas, frutales, económicas y premium para diferentes clientes.",
  },
  {
    title: "Mejorar la textura",
    text: "Sigue cantidades y recomendaciones que ayudan a reducir errores comunes.",
  },
  {
    title: "Evitar pruebas innecesarias",
    text: "No desperdicies tiempo ni ingredientes inventando cada combinación desde cero.",
  },
  {
    title: "Comenzar como principiante",
    text: "Consulta instrucciones claras y organizadas, aunque nunca hayas preparado paletas rellenas.",
  },
]

export function IdealSection() {
  return (
    <section className="px-5 py-8">
      <div className="mx-auto max-w-md">
        <h2 className="text-center font-display text-2xl font-extrabold text-chocolate text-balance sm:text-3xl">
          Este recetario fue creado para ti que…
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
