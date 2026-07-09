"use client"

import Image from "next/image"
import { useRef } from "react"

type Bubble =
  | { from: "in" | "out"; type: "text"; text: string; time: string }
  | { from: "in" | "out"; type: "image"; src: string; alt: string; duration?: string; time: string }

type Chat = {
  name: string
  initials: string
  color: string
  bubbles: Bubble[]
}

const chats: Chat[] = [
  {
    name: "Sonia M.",
    initials: "SM",
    color: "bg-rose-400",
    bubbles: [
      { from: "in", type: "image", src: "/images/pv2/chat-1.png", alt: "Paleta casera con un café", time: "16:22" },
      { from: "in", type: "text", text: "Que alegría, no tenía idea de que era tan fácil prepararlas en casa.", time: "16:23" },
      { from: "in", type: "text", text: "Me quedaron cremosas y sin cristales de hielo a la primera.", time: "16:23" },
      { from: "out", type: "text", text: "¡Qué bueno leer eso! Me alegra un montón.", time: "16:25" },
      { from: "in", type: "text", text: "Ya se las mostré a mi familia. Gracias por el recetario.", time: "16:26" },
    ],
  },
  {
    name: "Gabi Souza",
    initials: "GS",
    color: "bg-amber-400",
    bubbles: [
      { from: "in", type: "text", text: "¿¿¿Qué material es este???", time: "19:02" },
      {
        from: "in",
        type: "image",
        src: "/images/pv2/chat-2.png",
        alt: "Varias paletas rellenas en la cocina",
        duration: "0:54",
        time: "19:03",
      },
      { from: "out", type: "text", text: "¡Son las 100 recetas! ¿Cuál es tu favorita hasta ahora?", time: "19:03" },
      { from: "in", type: "text", text: "¡La de maracuyá! Quedó increíble.", time: "19:04" },
      { from: "in", type: "text", text: "Ya le pasé el link a mi mamá y a mi hermana jajaja", time: "19:04" },
    ],
  },
  {
    name: "Fernanda",
    initials: "F",
    color: "bg-teal-400",
    bubbles: [
      { from: "in", type: "text", text: "Solo pasaba a agradecer 🙏", time: "18:04" },
      {
        from: "in",
        type: "text",
        text: "Empecé a vender paletas en mi cuadra y ya tengo pedidos todas las semanas.",
        time: "18:04",
      },
      {
        from: "in",
        type: "image",
        src: "/images/pv2/chat-3.png",
        alt: "Paleta de chocolate cremosa en un plato",
        duration: "0:29",
        time: "18:05",
      },
      { from: "out", type: "text", text: "¡Qué emoción leer esto! Felicidades 💚", time: "18:10" },
      { from: "in", type: "text", text: "De verdad, gracias. Esto significa mucho para mí.", time: "18:11" },
    ],
  },
]

function ChatCard({ chat }: { chat: Chat }) {
  return (
    <div className="flex w-72 shrink-0 flex-col overflow-hidden rounded-2xl bg-[#efeae2] shadow-lg sm:w-80">
      {/* Header */}
      <div className="flex items-center gap-2 bg-[#f6f5f3] px-3 py-2.5">
        <span aria-hidden="true" className="text-lg text-muted-foreground">
          &lsaquo;
        </span>
        <div className={`flex h-9 w-9 items-center justify-center rounded-full ${chat.color} text-sm font-bold text-white`}>
          {chat.initials}
        </div>
        <div className="flex-1 leading-tight">
          <p className="text-sm font-semibold text-chocolate">{chat.name}</p>
          <p className="text-[11px] text-muted-foreground">online</p>
        </div>
        <div className="flex items-center gap-1 text-[10px] font-medium text-muted-foreground">
          <span>4G</span>
        </div>
      </div>

      {/* Messages */}
      <div className="flex flex-col gap-2 px-3 py-4">
        {chat.bubbles.map((bubble, index) => (
          <div key={index} className={`flex ${bubble.from === "out" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[85%] rounded-xl px-2.5 py-1.5 text-[13px] leading-snug shadow-sm ${
                bubble.from === "out" ? "bg-[#d9fdd3] text-chocolate" : "bg-white text-chocolate"
              }`}
            >
              {bubble.type === "text" ? (
                <p>{bubble.text}</p>
              ) : (
                <div className="relative overflow-hidden rounded-lg">
                  <Image
                    src={bubble.src || "/placeholder.svg"}
                    alt={bubble.alt}
                    width={300}
                    height={220}
                    className="h-40 w-full object-cover"
                  />
                  {bubble.duration ? (
                    <span className="absolute inset-0 flex items-center justify-center">
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-black/45 text-white">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </span>
                    </span>
                  ) : null}
                  {bubble.duration ? (
                    <span className="absolute bottom-1.5 left-1.5 rounded bg-black/45 px-1.5 py-0.5 text-[10px] text-white">
                      {bubble.duration}
                    </span>
                  ) : null}
                </div>
              )}
              <span className="mt-0.5 block text-right text-[10px] text-muted-foreground">{bubble.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function Pv2Chats() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollBy = (dir: 1 | -1) => {
    scrollRef.current?.scrollBy({ left: dir * 320, behavior: "smooth" })
  }

  return (
    <section className="overflow-hidden py-12">
      <div className="mx-auto mb-7 max-w-md px-5">
        <h2 className="text-center font-display text-2xl font-extrabold text-chocolate text-balance sm:text-3xl">
          Mira lo que dicen quienes ya lo están usando
        </h2>
      </div>

      <div className="relative">
        <button
          type="button"
          onClick={() => scrollBy(-1)}
          aria-label="Anterior"
          className="absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-verde-cta text-lg text-white shadow-md"
        >
          &lsaquo;
        </button>

        <div
          ref={scrollRef}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-5 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {chats.map((chat) => (
            <div key={chat.name} className="snap-center">
              <ChatCard chat={chat} />
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={() => scrollBy(1)}
          aria-label="Siguiente"
          className="absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-verde-cta text-lg text-white shadow-md"
        >
          &rsaquo;
        </button>
      </div>
    </section>
  )
}
