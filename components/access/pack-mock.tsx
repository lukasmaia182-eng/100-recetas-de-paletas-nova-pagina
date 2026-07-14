import { IceCream, Heart } from "lucide-react"
import type { Pack } from "@/lib/packs"
import { getPackTheme } from "./pack-theme"

export function PackMock({ pack, size = "card" }: { pack: Pack; size?: "card" | "full" }) {
  const theme = getPackTheme(pack.theme)
  const full = size === "full"

  return (
    <div className={`flex aspect-square w-full flex-col ${theme.soft} p-5`}>
      {/* Top bar de la "plantilla" */}
      <div className="flex items-center justify-between">
        <span className={`inline-flex items-center gap-1.5 ${theme.text}`}>
          <span className={`flex h-6 w-6 items-center justify-center rounded-full ${theme.solid} ${theme.onSolid}`}>
            <IceCream className="h-3.5 w-3.5" aria-hidden="true" />
          </span>
          <span className="text-[11px] font-bold">Tu Paletería</span>
        </span>
        <span
          className={`rounded-full ${theme.solid} px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-wider ${theme.onSolid}`}
        >
          {pack.formato}
        </span>
      </div>

      {/* Centro: título del arte */}
      <div className="flex flex-1 flex-col items-center justify-center text-center">
        <span
          className={`mb-3 flex h-12 w-12 items-center justify-center rounded-2xl ${theme.solid} ${theme.onSolid} shadow-sm`}
        >
          <IceCream className="h-6 w-6" aria-hidden="true" />
        </span>
        <p
          className={`font-display font-extrabold leading-tight ${theme.text} text-balance ${
            full ? "text-2xl sm:text-3xl" : "text-lg"
          }`}
        >
          {pack.titulo}
        </p>
        <p className={`mt-1 text-[11px] font-semibold uppercase tracking-wide ${theme.text} opacity-70`}>
          {pack.numero}
        </p>
      </div>

      {/* Footer: llamado a la acción */}
      <div className="flex items-center justify-between">
        <span
          className={`inline-flex items-center gap-1.5 rounded-full ${theme.solid} px-3 py-1.5 text-[11px] font-bold ${theme.onSolid}`}
        >
          {pack.cta}
        </span>
        <Heart className={`h-4 w-4 ${theme.text}`} aria-hidden="true" />
      </div>
    </div>
  )
}
