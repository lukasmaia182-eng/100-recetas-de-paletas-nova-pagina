const lines = [
  "Sin anunciar.",
  "Sin hacer promoción.",
  "Empiezas…",
  "Y de repente…",
  "hay gente esperando.",
]

export function StoryHookSection() {
  return (
    <section className="px-5 py-12">
      <div className="mx-auto max-w-md rounded-3xl bg-chocolate px-6 py-10 text-center shadow-xl shadow-chocolate/20">
        <p className="mb-6 inline-flex items-center gap-2 rounded-full bg-creme/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-creme">
          <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
          Así empieza
        </p>

        <div className="flex flex-col gap-2">
          {lines.map((line) => (
            <p
              key={line}
              className="font-display text-2xl font-extrabold leading-snug text-creme text-balance sm:text-3xl"
            >
              {line}
            </p>
          ))}
        </div>

        <p className="mt-6 font-display text-2xl font-extrabold leading-snug text-primary text-balance sm:text-3xl">
          Y el dinero empieza a entrar cada semana.
        </p>

        <div className="mx-auto mt-8 h-px w-16 bg-creme/20" />

        <p className="mt-8 text-base leading-relaxed text-creme/90 text-pretty sm:text-lg">
          Todo esto porque <span className="font-bold text-creme">cabe en tu rutina</span>, la rutina genera{" "}
          <span className="font-bold text-creme">hábito</span> y el hábito genera{" "}
          <span className="font-bold text-primary">ingresos recurrentes</span>.
        </p>
      </div>
    </section>
  )
}
