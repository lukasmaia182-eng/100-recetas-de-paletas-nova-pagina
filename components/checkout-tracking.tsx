"use client"

import { createContext, useContext } from "react"

const TrackCheckoutContext = createContext(false)

export function TrackCheckoutProvider({ children }: { children: React.ReactNode }) {
  return <TrackCheckoutContext.Provider value={true}>{children}</TrackCheckoutContext.Provider>
}

export function useTrackCheckout() {
  return useContext(TrackCheckoutContext)
}
