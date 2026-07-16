import {
  LayoutDashboard,
  Megaphone,
  Layers,
  ImageIcon,
  Package,
  ShoppingCart,
  Filter,
  Globe,
  Bot,
  Bell,
  FlaskConical,
  FileText,
  Plug,
  Settings,
  type LucideIcon,
} from "lucide-react"

export interface ItemNav {
  href: string
  label: string
  icon: LucideIcon
}

export const BASE = "/lucasmetricas"

export const navItens: ItemNav[] = [
  { href: BASE, label: "Visão Geral", icon: LayoutDashboard },
  { href: `${BASE}/campanhas`, label: "Campanhas", icon: Megaphone },
  { href: `${BASE}/conjuntos`, label: "Conjuntos de Anúncios", icon: Layers },
  { href: `${BASE}/criativos`, label: "Criativos", icon: ImageIcon },
  { href: `${BASE}/produtos`, label: "Produtos", icon: Package },
  { href: `${BASE}/vendas`, label: "Vendas", icon: ShoppingCart },
  { href: `${BASE}/funil`, label: "Funil", icon: Filter },
  { href: `${BASE}/paises`, label: "Países", icon: Globe },
  { href: `${BASE}/analista`, label: "Analista de IA", icon: Bot },
  { href: `${BASE}/alertas`, label: "Alertas", icon: Bell },
  { href: `${BASE}/testes`, label: "Testes", icon: FlaskConical },
  { href: `${BASE}/relatorios`, label: "Relatórios", icon: FileText },
  { href: `${BASE}/integracoes`, label: "Integrações", icon: Plug },
  { href: `${BASE}/configuracoes`, label: "Configurações", icon: Settings },
]
