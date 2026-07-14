import Image from "next/image"
import { Heart, MessageCircle, Send, Bookmark, Crown, MoreHorizontal, X } from "lucide-react"
import type { Pack } from "@/lib/packs"
import { getPackTheme } from "./pack-theme"

const TAGS = ["Cremosa", "Artesanal", "Irresistible", "Hecha con amor"]

/* Thumbnail usado na grade de packs */
export function PackMock({ pack }: { pack: Pack }) {
  const theme = getPackTheme(pack.theme)
  return (
    <div
      className="relative aspect-square w-full overflow-hidden"
      style={{ background: `linear-gradient(140deg, ${theme.bgFrom}, ${theme.bgTo})` }}
    >
      <span
        className={`absolute left-3 top-3 z-10 rounded-lg ${theme.solid} px-2.5 py-1 font-display text-[10px] font-extrabold uppercase tracking-widest ${theme.onSolid} shadow-sm`}
      >
        {pack.numero}
      </span>
      <Image
        src={theme.image || "/placeholder.svg"}
        alt={`Paleta para ${pack.titulo}`}
        fill
        sizes="(max-width: 640px) 100vw, 320px"
        className="object-contain p-4 drop-shadow-md transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/45 to-transparent p-3 pt-8">
        <p className="font-serif text-sm font-bold leading-tight text-white text-balance">{pack.titulo}</p>
      </div>
    </div>
  )
}

/* Post para Feed de Instagram */
export function FeedMock({ pack }: { pack: Pack }) {
  const theme = getPackTheme(pack.theme)
  return (
    <div className="w-full overflow-hidden rounded-2xl bg-card shadow-lg ring-1 ring-black/5">
      {/* Header */}
      <div className="flex items-center gap-2 px-3 py-2.5">
        <span className={`flex h-8 w-8 items-center justify-center rounded-full ${theme.soft}`}>
          <Crown className={`h-4 w-4 ${theme.text}`} aria-hidden="true" />
        </span>
        <div className="leading-tight">
          <p className="text-xs font-extrabold text-chocolate">Tu Marca</p>
          <p className="text-[10px] text-muted-foreground">@tumarca</p>
        </div>
        <MoreHorizontal className="ml-auto h-4 w-4 text-muted-foreground" aria-hidden="true" />
      </div>

      {/* Contenido */}
      <div className="px-4 pb-3 text-center" style={{ background: `linear-gradient(160deg, ${theme.bgFrom}, ${theme.bgTo})` }}>
        <p className="pt-2 font-serif text-[11px] font-semibold uppercase tracking-[0.2em] text-chocolate/70">
          Paleta artesanal
        </p>
        <h4 className={`font-serif text-2xl font-extrabold leading-none ${theme.text} text-balance`}>{pack.titulo}</h4>
        <p className={`mt-1.5 text-[10px] font-bold uppercase tracking-wide ${theme.text}`}>
          Cremosa por fuera, irresistible por dentro
        </p>

        <div className="relative mx-auto mt-1 aspect-square w-full max-w-[220px]">
          <Image
            src={theme.image || "/placeholder.svg"}
            alt={`Arte de ${pack.titulo}`}
            fill
            sizes="220px"
            className="object-contain drop-shadow-lg"
          />
          <span className="absolute left-1 top-2 flex h-11 w-11 flex-col items-center justify-center rounded-full bg-card/90 text-center font-display text-[8px] font-extrabold leading-none text-chocolate shadow ring-1 ring-amarillo/50">
            100%
            <span className="text-[7px]">ARTESANAL</span>
          </span>
          <span className="absolute bottom-2 right-1 flex h-12 w-12 items-center justify-center rounded-full bg-card font-serif text-base font-extrabold text-chocolate shadow-md ring-2 ring-amarillo/60">
            $8
          </span>
        </div>
      </div>

      {/* Tags */}
      <div className="grid grid-cols-4 gap-1 border-y border-border px-2 py-2">
        {TAGS.map((t) => (
          <div key={t} className="flex flex-col items-center gap-0.5">
            <Heart className={`h-3.5 w-3.5 ${theme.text}`} aria-hidden="true" />
            <span className="text-[7px] font-bold uppercase tracking-wide text-chocolate">{t}</span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="px-3 py-2.5">
        <div className={`flex items-center justify-center gap-1.5 rounded-full ${theme.solid} py-2 ${theme.onSolid}`}>
          <span className="text-[11px] font-extrabold uppercase tracking-wide">Haz tu pedido por WhatsApp</span>
        </div>
        <div className="mt-2 flex items-center gap-3 px-1">
          <Heart className="h-4 w-4 text-chocolate" aria-hidden="true" />
          <MessageCircle className="h-4 w-4 text-chocolate" aria-hidden="true" />
          <Send className="h-4 w-4 text-chocolate" aria-hidden="true" />
          <Bookmark className="ml-auto h-4 w-4 text-chocolate" aria-hidden="true" />
        </div>
      </div>
    </div>
  )
}

/* Story para Instagram */
export function StoryMock({ pack }: { pack: Pack }) {
  const theme = getPackTheme(pack.theme)
  return (
    <div className="mx-auto w-full max-w-[220px] overflow-hidden rounded-[28px] border-[6px] border-chocolate bg-chocolate shadow-xl">
      <div
        className="flex flex-col"
        style={{ background: `linear-gradient(165deg, ${theme.bgFrom}, ${theme.bgTo})` }}
      >
        {/* Header */}
        <div className="flex items-center gap-1.5 px-3 pt-3">
          <span className={`flex h-6 w-6 items-center justify-center rounded-full ${theme.soft}`}>
            <Crown className={`h-3 w-3 ${theme.text}`} aria-hidden="true" />
          </span>
          <span className="text-[9px] font-bold text-chocolate">Tu Marca</span>
          <span className="text-[9px] text-muted-foreground">2 h</span>
          <X className="ml-auto h-3.5 w-3.5 text-chocolate" aria-hidden="true" />
        </div>

        {/* Título */}
        <div className="px-3 pt-2 text-center">
          <h4 className={`font-serif text-xl font-extrabold leading-none ${theme.text} text-balance`}>
            {pack.titulo}
          </h4>
          <p className="mt-1 text-[9px] font-bold uppercase tracking-wide text-chocolate/70">Pídela hoy mismo</p>
        </div>

        {/* Imagem */}
        <div className="relative mx-auto aspect-square w-full max-w-[170px]">
          <Image
            src={theme.image || "/placeholder.svg"}
            alt={`Story de ${pack.titulo}`}
            fill
            sizes="170px"
            className="object-contain drop-shadow-lg"
          />
          <span className="absolute right-1 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-card font-serif text-sm font-extrabold text-chocolate shadow ring-2 ring-amarillo/60">
            $8
          </span>
        </div>

        {/* CTA */}
        <div className="px-3 pb-2">
          <div className={`flex items-center justify-center rounded-full ${theme.solid} py-1.5 ${theme.onSolid}`}>
            <span className="text-[10px] font-extrabold uppercase tracking-wide">Pide el tuyo por WhatsApp</span>
          </div>
        </div>

        {/* Barra de mensaje */}
        <div className="flex items-center gap-2 border-t border-black/10 px-3 py-2">
          <span className="flex-1 rounded-full bg-card/70 px-2 py-1 text-[8px] text-muted-foreground">
            Enviar mensaje
          </span>
          <Heart className="h-3 w-3 text-chocolate" aria-hidden="true" />
          <Send className="h-3 w-3 text-chocolate" aria-hidden="true" />
        </div>
      </div>
    </div>
  )
}
