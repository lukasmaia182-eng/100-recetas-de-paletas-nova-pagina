"use client"

import { useState } from "react"
import Image from "next/image"
import { recipes, categorias, type Recipe } from "@/lib/recipes"
import { bonuses, type Bonus } from "@/lib/bonuses"
import { RecipeDetail } from "./recipe-detail"
import { BonusDetail } from "./bonus-detail"
import { ArrowLeft, BookOpen, Gift, ChevronRight, IceCream } from "lucide-react"

type Tab = "recetas" | "bonos"

export function MembersArea() {
  const [tab, setTab] = useState<Tab>("recetas")
  const [categoria, setCategoria] = useState<string>("Todas")
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null)
  const [selectedBonus, setSelectedBonus] = useState<Bonus | null>(null)

  const filteredRecipes =
    categoria === "Todas" ? recipes : recipes.filter((r) => r.categoria === categoria)

  function resetSelection() {
    setSelectedRecipe(null)
    setSelectedBonus(null)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Topbar */}
      <header className="sticky top-0 z-20 border-b border-border bg-card/95 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3">
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <IceCream className="h-5 w-5" aria-hidden="true" />
            </span>
            <div className="leading-tight">
              <p className="font-display text-sm font-extrabold text-chocolate">Área de Miembros</p>
              <p className="text-xs text-muted-foreground">100 Paletas Rellenas y Cremosas</p>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-5 py-6">
        {selectedRecipe ? (
          <div>
            <BackButton onClick={resetSelection} label="Volver a las recetas" />
            <div className="mt-4">
              <RecipeDetail recipe={selectedRecipe} />
            </div>
          </div>
        ) : selectedBonus ? (
          <div>
            <BackButton onClick={resetSelection} label="Volver a los bonos" />
            <div className="mt-4">
              <BonusDetail bonus={selectedBonus} />
            </div>
          </div>
        ) : (
          <>
            {/* Welcome */}
            <section className="rounded-3xl bg-secondary p-6 text-center sm:p-8">
              <h1 className="font-display text-2xl font-extrabold text-chocolate text-balance sm:text-3xl">
                ¡Bienvenida a tu acceso!
              </h1>
              <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-foreground text-pretty">
                Aquí tienes todas tus recetas ilustradas paso a paso y tus bonos exclusivos. Elige una receta y empieza
                a preparar y vender hoy mismo.
              </p>
            </section>

            {/* Tabs */}
            <div className="mt-6 flex justify-center gap-2">
              <TabButton active={tab === "recetas"} onClick={() => setTab("recetas")} icon={<BookOpen className="h-4 w-4" aria-hidden="true" />}>
                Recetas
              </TabButton>
              <TabButton active={tab === "bonos"} onClick={() => setTab("bonos")} icon={<Gift className="h-4 w-4" aria-hidden="true" />}>
                Bonos
              </TabButton>
            </div>

            {tab === "recetas" ? (
              <>
                {/* Category filter */}
                <div className="mt-6 flex flex-wrap justify-center gap-2">
                  {categorias.map((cat) => (
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

                {/* Recipe grid */}
                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredRecipes.map((recipe) => (
                    <button
                      key={recipe.id}
                      type="button"
                      onClick={() => {
                        setSelectedRecipe(recipe)
                        window.scrollTo({ top: 0 })
                      }}
                      className="group overflow-hidden rounded-3xl border border-border bg-card text-left shadow-sm transition-shadow hover:shadow-lg hover:shadow-chocolate/10"
                    >
                      <div className="relative overflow-hidden">
                        <Image
                          src={recipe.image || "/placeholder.svg"}
                          alt={`${recipe.titulo} ${recipe.subtitulo}`}
                          width={500}
                          height={400}
                          className="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <span className="absolute left-3 top-3 rounded-lg bg-chocolate/90 px-2.5 py-1 font-display text-[10px] font-extrabold uppercase tracking-widest text-creme">
                          {recipe.numero}
                        </span>
                        <span className="absolute right-3 top-3 rounded-full bg-primary px-2.5 py-1 text-[10px] font-bold text-primary-foreground">
                          {recipe.categoria}
                        </span>
                      </div>
                      <div className="p-4">
                        <h3 className="font-display text-lg font-extrabold leading-tight text-chocolate">
                          {recipe.titulo}
                        </h3>
                        <p className="text-sm font-medium italic text-primary">{recipe.subtitulo}</p>
                        <span className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-primary">
                          Ver receta
                          <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                        </span>
                      </div>
                    </button>
                  ))}
                </div>

                <p className="mt-6 text-center text-sm text-muted-foreground">
                  Nuevas recetas se agregan constantemente a tu acceso.
                </p>
              </>
            ) : (
              /* Bonos grid */
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {bonuses.map((bonus) => (
                  <button
                    key={bonus.id}
                    type="button"
                    onClick={() => {
                      setSelectedBonus(bonus)
                      window.scrollTo({ top: 0 })
                    }}
                    className="group flex flex-col rounded-3xl border border-border bg-card p-5 text-left shadow-sm transition-shadow hover:shadow-lg hover:shadow-chocolate/10"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                      <Gift className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="mt-3 font-display text-lg font-extrabold leading-tight text-chocolate text-balance">
                      {bonus.titulo}
                    </h3>
                    <p className="mt-1 flex-1 text-sm leading-relaxed text-foreground">{bonus.descripcion}</p>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-primary">
                      Abrir bono
                      <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </button>
                ))}
              </div>
            )}
          </>
        )}
      </main>

      <footer className="border-t border-border py-6 text-center">
        <p className="text-xs text-muted-foreground">
          100 Paletas Rellenas y Cremosas · Contenido exclusivo para miembros
        </p>
      </footer>
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
