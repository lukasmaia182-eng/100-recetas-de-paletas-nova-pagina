import { cn } from "@/lib/utils"

export function CtaButtonBrpv1({
  children,
  href,
  className,
  location,
  id = "botao-compra",
}: {
  children?: React.ReactNode
  href: string
  className?: string
  location?: string
  id?: string
}) {
  return (
    <a
      id={id}
      data-gtm="buy-button"
      data-gtm-location={location}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group inline-flex w-full items-center justify-center gap-2 rounded-full bg-chocolate px-8 py-4 text-center font-display text-base font-extrabold uppercase tracking-wide text-creme shadow-lg shadow-chocolate/25 transition-all hover:bg-[#4a281e] active:scale-95 sm:text-lg",
        className,
      )}
    >
      <span className="text-balance leading-tight">{children ?? "Quero acessar as 100 receitas"}</span>
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1">
        <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  )
}
