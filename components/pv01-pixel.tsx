import Script from "next/script"

/** Único tracking da rota /pv01. Nenhum outro pixel global é carregado nesta página. */
export function Pv01Pixel() {
  return <Script id="pv01-track1click" src="https://gtm.maquinadeingresos.site/track1click.js" strategy="afterInteractive" />
}
