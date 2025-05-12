"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  BarChart3,
  Coffee,
  Home,
  Package,
  Settings,
  ShoppingCart,
  Users,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

const routes = [
  {
    label: "Dashboard",
    icon: Home,
    href: "/",
    color: "text-sky-500",
  },
  {
    label: "Orders",
    icon: ShoppingCart,
    href: "/orders",
    color: "text-violet-500",
  },
  {
    label: "Menu",
    icon: Coffee,
    href: "/menu",
    color: "text-pink-700",
  },
  {
    label: "Inventory",
    icon: Package,
    href: "/inventory",
    color: "text-orange-500",
  },
  {
    label: "Customers",
    icon: Users,
    href: "/customers",
    color: "text-emerald-500",
  },
  {
    label: "Reports",
    icon: BarChart3,
    href: "/reports",
    color: "text-blue-500",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
    color: "text-gray-500",
  },
]

export default function Sidebar() {
  const pathname = usePathname()
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <div
      className={cn(
        "fixed top-14 left-0 z-30 flex h-[calc(100vh-3.5rem)] flex-col border-r bg-slate-950 text-white transition-all duration-300",
        isCollapsed ? "w-[70px]" : "w-64",
      )}
    >
      <div className="flex-1 overflow-auto py-2">
        <nav className="grid items-start px-2 text-sm font-medium">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-slate-300 transition-all hover:text-white",
                pathname === route.href || (route.href !== "/" && pathname.startsWith(route.href))
                  ? "bg-slate-800 text-white"
                  : "",
              )}
            >
              <route.icon className={cn("h-4 w-4", route.color)} />
              {!isCollapsed && <span>{route.label}</span>}
            </Link>
          ))}
        </nav>
      </div>

      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-5 flex h-6 w-6 items-center justify-center rounded-full border border-slate-700 bg-slate-800 text-white hover:bg-slate-700"
      >
        {isCollapsed ? <ChevronRight className="h-3 w-3" /> : <ChevronLeft className="h-3 w-3" />}
      </button>

      {!isCollapsed && (
        <div className="mt-auto p-4">
          <div className="flex items-center gap-2 rounded-lg bg-slate-800 p-4">
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none text-white">Cafe Manager Pro</p>
              <p className="text-xs text-slate-400">Multi-branch support available</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
