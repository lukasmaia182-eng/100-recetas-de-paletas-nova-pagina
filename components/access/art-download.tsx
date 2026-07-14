"use client"

import { useState } from "react"
import Image from "next/image"
import { Download, Loader2 } from "lucide-react"

type ArtDownloadProps = {
  /** URL da imagem de arte a exibir e baixar */
  src: string
  /** Nome do arquivo baixado */
  fileName: string
  /** Texto do botão */
  label: string
  /** Texto alternativo da imagem */
  alt: string
  /** Proporção do container da pré-visualização */
  aspect: "square" | "story"
  /** Classes extras para o botão (cores do tema) */
  buttonClassName?: string
}

export function ArtDownload({ src, fileName, label, alt, aspect, buttonClassName = "" }: ArtDownloadProps) {
  const [loading, setLoading] = useState(false)

  async function handleDownload() {
    try {
      setLoading(true)
      const res = await fetch(src, { cache: "force-cache" })
      const blob = await res.blob()
      const url = URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = fileName
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
    } catch {
      // fallback: abre a imagem em nova aba para o usuário salvar manualmente
      window.open(src, "_blank")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col gap-3">
      <div
        className={`relative overflow-hidden rounded-2xl border border-border shadow-sm ${
          aspect === "square" ? "aspect-square" : "aspect-[9/16]"
        }`}
      >
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 420px"
          className="object-cover"
        />
      </div>
      <button
        type="button"
        onClick={handleDownload}
        disabled={loading}
        className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-extrabold uppercase tracking-wide shadow-sm transition-opacity hover:opacity-90 disabled:opacity-60 ${buttonClassName}`}
      >
        {loading ? (
          <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
        ) : (
          <Download className="h-4 w-4" aria-hidden="true" />
        )}
        {loading ? "Preparando..." : label}
      </button>
    </div>
  )
}
