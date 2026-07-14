"use client"

import { useState } from "react"
import { packs, packCategorias, packsPorCategoria, type Pack } from "@/lib/packs"
import { PackDetail } from "./pack-detail"
import { PackMock } from "./pack-mock"
import { ArrowLeft, LayoutGrid, ListOrdered, ChevronRight, Camera, BookOpen, Compass } from "lucide-react"

type Tab = "packs" | "sumario" | "guia"

export function PacksArea() {
  const [tab, setTab] = useState<Tab>("packs")
  const [categoria, setCategoria] = useState<string>("Todas")
  const [selected, setSelected] = useState<Pack | null>(null)

  const filtered = categoria === "Todas" ? packs : packs.filter((p) => p.categoria === categoria)

  function openPack(pack: Pack) {
    setSelected(pack)
    window.scrollTo({ top: 0 })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Topbar */}
      <header className="sticky top-0 z-20 border-b border-border bg-card/95 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3">
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <Camera className="h-5 w-5" aria-hidden="true" />
            </span>
            <div className="leading-tight">
              <p className="font-display text-sm font-extrabold text-chocolate">Área de Miembros</p>
              <p className="text-xs text-muted-foreground">150 Packs para Vender Paletas en Instagram</p>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-5 py-6">
        {selected ? (
          <div>
            <BackButton onClick={() => setSelected(null)} label="Volver a los packs" />
            <div className="mt-4">
              <PackDetail pack={selected} />
            </div>
          </div>
        ) : (
          <>
            {/* Welcome */}
            <section className="rounded-3xl bg-secondary p-6 text-center sm:p-8">
              <h1 className="font-display text-2xl font-extrabold text-chocolate text-balance sm:text-3xl">
                ¡Bienvenida a tus 150 Packs!
              </h1>
              <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-foreground text-pretty">
                Aquí tienes tus 150 packs de contenido listos para publicar y vender paletas en Instagram. Cada pack
                trae objetivo, materiales, paso a paso y una vista previa del arte.
              </p>
            </section>

            {/* Tabs */}
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              <TabButton active={tab === "packs"} onClick={() => setTab("packs")} icon={<LayoutGrid className="h-4 w-4" aria-hidden="true" />}>
                Packs
              </TabButton>
              <TabButton active={tab === "sumario"} onClick={() => setTab("sumario")} icon={<ListOrdered className="h-4 w-4" aria-hidden="true" />}>
                Sumario
              </TabButton>
              <TabButton active={tab === "guia"} onClick={() => setTab("guia")} icon={<Compass className="h-4 w-4" aria-hidden="true" />}>
                Cómo usar
              </TabButton>
            </div>

            {tab === "packs" && (
              <>
                {/* Category filter */}
                <div className="mt-6 flex flex-wrap justify-center gap-2">
                  {packCategorias.map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setCategoria(cat)}
                      className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${
                        categoria === cat
                          ? "bg-primary text-primary-foreground"
                          : "bg-card text-chocolate hover:bg-secondary"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                {/* Packs grid */}
                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {filtered.map((pack) => {
                    return (
                      <button
                        key={pack.id}
                        type="button"
                        onClick={() => openPack(pack)}
                        className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card text-left shadow-sm transition-shadow hover:shadow-lg hover:shadow-chocolate/10"
                      >
                        <PackMock pack={pack} />
                        <div className="flex flex-1 flex-col p-4">
                          <span className="text-[11px] font-bold uppercase tracking-wide text-muted-foreground">
                            {pack.categoria}
                          </span>
                          <h3 className="mt-0.5 font-display text-base font-extrabold leading-tight text-chocolate text-balance">
                            {pack.titulo}
                          </h3>
                          <span className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-primary">
                            Ver pack
                            <ChevronRight
                              className="h-4 w-4 transition-transform group-hover:translate-x-1"
                              aria-hidden="true"
                            />
                          </span>
                        </div>
                      </button>
                    )
                  })}
                </div>

                <p className="mt-6 text-center text-sm text-muted-foreground">
                  {filtered.length} packs en esta categoría · 150 packs en total.
                </p>
              </>
            )}

            {tab === "sumario" && (
              <div className="mt-6 flex flex-col gap-6">
                {packsPorCategoria.map((grupo) => (
                  <section key={grupo.categoria} className="rounded-3xl border border-border bg-card p-5 sm:p-6">
                    <div className="flex items-center gap-2">
                      <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                        <BookOpen className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <h2 className="font-display text-lg font-extrabold text-chocolate">{grupo.categoria}</h2>
                      <span className="ml-auto text-xs font-semibold text-muted-foreground">
                        {grupo.items.length} packs
                      </span>
                    </div>
                    <ul className="mt-4 grid gap-1.5 sm:grid-cols-2">
                      {grupo.items.map((pack) => (
                        <li key={pack.id}>
                          <button
                            type="button"
                            onClick={() => openPack(pack)}
                            className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left transition-colors hover:bg-secondary"
                          >
                            <span className="flex h-7 w-9 shrink-0 items-center justify-center rounded-lg bg-secondary font-display text-xs font-extrabold text-chocolate">
                              {pack.id}
                            </span>
                            <span className="flex-1 text-sm font-medium leading-snug text-foreground">
                              {pack.titulo}
                            </span>
                            <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                          </button>
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            )}

            {tab === "guia" && <UsageGuide />}
          </>
        )}
      </main>

      <footer className="border-t border-border py-6 text-center">
        <p className="text-xs text-muted-foreground">
          150 Packs para Vender Paletas en Instagram · Contenido exclusivo para miembros
        </p>
      </footer>
    </div>
  )
}

function UsageGuide() {
  const pasos = [
    {
      titulo: "Elige el pack ideal",
      texto: "Entra en la pestaña Packs o el Sumario y elige la publicación según tu objetivo del día: presentar, vender, generar antojo o interacción.",
    },
    {
      titulo: "Adapta el contenido a tu marca",
      texto: "Cambia el sabor, el precio, el contacto y los colores por los de tu paletería. Mantén tu logo y tu estilo en todas las publicaciones.",
    },
    {
      titulo: "Publica en Feed y Stories",
      texto: "Usa las artes en el Feed para tu vitrina y repítelas en Stories con stickers, encuestas y cuenta regresiva para más alcance.",
    },
    {
      titulo: "Mantén la consistencia visual",
      texto: "Publica de forma constante y respeta la misma paleta de colores y tipografías para que tu perfil se vea profesional y confiable.",
    },
  ]

  return (
    <div className="mt-6 rounded-3xl border border-border bg-card p-6 sm:p-8">
      <h2 className="font-display text-xl font-extrabold text-chocolate">Cómo usar tus packs</h2>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">
        Sigue estos pasos para sacar el máximo provecho de tus 150 packs y vender más paletas en Instagram.
      </p>
      <ol className="mt-5 grid gap-4 sm:grid-cols-2">
        {pasos.map((paso, index) => (
          <li key={paso.titulo} className="flex gap-3 rounded-2xl bg-secondary p-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary font-display text-sm font-extrabold text-primary-foreground">
              {index + 1}
            </span>
            <div>
              <p className="font-display text-sm font-extrabold text-chocolate">{paso.titulo}</p>
              <p className="mt-1 text-sm leading-relaxed text-foreground text-pretty">{paso.texto}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}

function TabButton({
  active,
  onClick,
  icon,
  children,
}: {
  active: boolean
  onClick: () => void
  icon: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-2 rounded-full px-5 py-2 font-display text-sm font-bold transition-colors ${
        active ? "bg-chocolate text-creme" : "bg-card text-chocolate hover:bg-secondary"
      }`}
    >
      {icon}
      {children}
    </button>
  )
}

function BackButton({ onClick, label }: { onClick: () => void; label: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 text-sm font-semibold text-chocolate shadow-sm transition-colors hover:bg-secondary"
    >
      <ArrowLeft className="h-4 w-4" aria-hidden="true" />
      {label}
    </button>
  )
}
