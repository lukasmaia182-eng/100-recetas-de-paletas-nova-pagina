'use client'

import Image from 'next/image'

interface UpgradeOfferModalBrProps {
  isOpen: boolean
  onClose: () => void
  completeCheckoutUrl: string
  essentialCheckoutUrl: string
}

export function UpgradeOfferModalBr({
  isOpen,
  onClose,
  completeCheckoutUrl,
  essentialCheckoutUrl,
}: UpgradeOfferModalBrProps) {
  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/50 transition-opacity duration-200"
        onClick={onClose}
        role="presentation"
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div
          className="relative w-full max-w-md overflow-hidden rounded-3xl bg-card shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Fechar botão */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-foreground transition-colors hover:bg-white/30"
            aria-label="Fechar modal"
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
              <path
                d="M18 6L6 18M6 6l12 12"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Header com badge */}
          <div className="flex flex-col items-center gap-2 bg-gradient-to-r from-primary to-primary/80 px-4 py-6 text-center">
            <div className="inline-flex rounded-full bg-white/20 px-3 py-1">
              <span className="text-xs font-extrabold uppercase tracking-wide text-white">
                Oferta especial
              </span>
            </div>
            <h2 className="font-display text-xl font-extrabold text-white">
              Você está prestes a perder a melhor oportunidade!
            </h2>
          </div>

          {/* Conteúdo */}
          <div className="p-6">
            {/* Imagem do plano completo */}
            <div className="mx-auto mb-4 max-w-xs overflow-hidden rounded-2xl">
              <Image
                src="/images/br-oferta.png"
                alt="Plano Completo com bônus exclusivos"
                width={600}
                height={600}
                className="h-auto w-full object-contain"
              />
            </div>

            {/* Oferta principal */}
            <div className="mb-4 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 p-4 text-center dark:from-green-950 dark:to-emerald-950">
              <p className="text-sm font-semibold text-muted-foreground">
                Plano Completo com 4 Bônus Exclusivos
              </p>
              <p className="mt-2 line-through text-base text-muted-foreground">
                Valor de referência: <span className="font-semibold">R$ 149,90</span>
              </p>
              <p className="mt-3 font-display text-4xl font-extrabold text-primary">
                R$ 59,90
              </p>
              <p className="mt-1 text-xs font-semibold text-pistache">
                Economize R$ 90,00 (60% OFF!)
              </p>
            </div>

            {/* Diferenciais */}
            <div className="mb-4 space-y-2">
              <h3 className="font-display text-sm font-extrabold uppercase tracking-wide text-chocolate">
                O que você vai ganhar a mais:
              </h3>
              <ul className="flex flex-col gap-2">
                <li className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                    <svg viewBox="0 0 24 24" fill="none" className="h-3 w-3" aria-hidden="true">
                      <path
                        d="M20 6 9 17l-5-5"
                        stroke="currentColor"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="text-sm font-medium leading-snug text-foreground">
                    Bônus: Preço Certo para Cada Picolé
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                    <svg viewBox="0 0 24 24" fill="none" className="h-3 w-3" aria-hidden="true">
                      <path
                        d="M20 6 9 17l-5-5"
                        stroke="currentColor"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="text-sm font-medium leading-snug text-foreground">
                    Bônus: 12 Cardápios Prontos de Picolés
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                    <svg viewBox="0 0 24 24" fill="none" className="h-3 w-3" aria-hidden="true">
                      <path
                        d="M20 6 9 17l-5-5"
                        stroke="currentColor"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="text-sm font-medium leading-snug text-foreground">
                    Bônus: 50 Mensagens Prontas para Vender
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                    <svg viewBox="0 0 24 24" fill="none" className="h-3 w-3" aria-hidden="true">
                      <path
                        d="M20 6 9 17l-5-5"
                        stroke="currentColor"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="text-sm font-medium leading-snug text-foreground">
                    Bônus: 30 Combos Lucrativos de Picolés
                  </span>
                </li>
              </ul>
            </div>

            {/* Botões */}
            <div className="flex flex-col gap-3">
              <a
                href={completeCheckoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-full bg-verde-cta px-4 py-3 text-center font-display text-base font-extrabold text-white shadow-lg shadow-verde-cta/30 transition-transform hover:bg-verde-cta-dark active:scale-95"
              >
                SIM, QUERO O PLANO COMPLETO
              </a>

              <a
                href={essentialCheckoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="block rounded-full border-2 border-chocolate/30 bg-transparent px-4 py-2.5 text-center font-display text-sm font-bold text-chocolate transition-colors hover:bg-chocolate/5"
              >
                Não, continuar com R$ 19,90
              </a>
            </div>

            {/* Garantia */}
            <p className="mt-4 text-center text-xs text-muted-foreground">
              Garantia de 30 dias ou seu dinheiro de volta · Sem riscos
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
