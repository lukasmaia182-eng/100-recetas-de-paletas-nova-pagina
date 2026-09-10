'use client'

import { useState } from 'react'
import { OfferCardBr } from './offer-card-br'
import { UpgradeOfferModalBr } from './upgrade-offer-modal-br'

const CHECKOUT_URL_ESSENCIAL = 'https://pay.cakto.com.br/m4f7cwc_1034537'
const CHECKOUT_URL_COMPLETO = 'https://pay.cakto.com.br/8uc2vxk'

export function Br2Offers() {
  const [isUpgradeOpen, setIsUpgradeOpen] = useState(false)

  return (
    <>
      <div
        onClickCapture={(event) => {
          const target = event.target as HTMLElement
          if (target.closest('a[href="#"]')) {
            event.preventDefault()
            setIsUpgradeOpen(true)
          }
        }}
      >
        <OfferCardBr
        planName="Plano Essencial"
        price="R$ 19,90"
        checkoutUrl="#"
        includedItems={[
          '100 Recetas de paletas gourmet',
          'Archivos en PDF listos para imprimir',
          'Material organizado por sabor',
          'Fácil de aplicar en casa',
        ]}
        showBonuses={false}
        />
      </div>
      <OfferCardBr
        planName="Plano Completo"
        price="R$ 59,90"
        refPrice="R$ 149,90"
        checkoutUrl={CHECKOUT_URL_COMPLETO}
        sectionId="oferta-completo"
      />
      <UpgradeOfferModalBr
        isOpen={isUpgradeOpen}
        onClose={() => setIsUpgradeOpen(false)}
        completeCheckoutUrl={CHECKOUT_URL_COMPLETO}
        essentialCheckoutUrl={CHECKOUT_URL_ESSENCIAL}
      />
    </>
  )
}
