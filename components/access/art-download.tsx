"use client"

import { useRef, useState } from "react"
import { toPng } from "html-to-image"
import { Download, Loader2 } from "lucide-react"

export function ArtDownload({
  fileName,
  label = "Baixar arte",
  buttonClassName = "",
  children,
}: {
  fileName: string
  label?: string
  buttonClassName?: string
  children: React.ReactNode
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [loading, setLoading] = useState(false)

  async function handleDownload() {
    const node = ref.current
    if (!node) return
    setLoading(true)
    try {
      // Duas passadas melhoram a incorporação de fontes/imagens no primeiro clique.
      await toPng(node, { pixelRatio: 3, cacheBust: true })
      const dataUrl = await toPng(node, { pixelRatio: 3, cacheBust: true })
      const link = document.createElement("a")
      link.download = fileName
      link.href = dataUrl
      link.click()
    } catch (error) {
      console.log("[v0] Erro ao gerar arte:", (error as Error)?.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col items-center">
      <div ref={ref} className="w-full">
        {children}
      </div>
      <button
        type="button"
        onClick={handleDownload}
        disabled={loading}
        className={`mt-3 inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-xs font-extrabold uppercase tracking-wide transition-opacity disabled:opacity-60 ${buttonClassName}`}
      >
        {loading ? (
          <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
        ) : (
          <Download className="h-4 w-4" aria-hidden="true" />
        )}
        {loading ? "Gerando..." : label}
      </button>
    </div>
  )
}
