"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { BarChart3, Coffee, Home, Package, Settings, ShoppingCart, Users } from "lucide-react"

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

  return (
    <div className="flex h-full flex-col border-r bg-background">
      <div className="flex h-14 items-center border-b px-4">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Coffee className="h-6 w-6" />
          <span>Cafe Manager</span>
        </Link>
      </div>
      <div className="flex-1 overflow-auto py-2">
        <nav className="grid items-start px-2 text-sm font-medium">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
                pathname === route.href || (route.href !== "/" && pathname.startsWith(route.href))
                  ? "bg-muted text-primary"
                  : "",
              )}
            >
              <route.icon className={cn("h-4 w-4", route.color)} />
              <span>{route.label}</span>
            </Link>
          ))}
        </nav>
      </div>
      <div className="mt-auto p-4">
        <div className="flex items-center gap-2 rounded-lg bg-muted p-4">
          <div className="space-y-1">
            <p className="text-sm font-medium leading-none">Cafe Manager Pro</p>
            <p className="text-xs text-muted-foreground">Multi-branch support available</p>
          </div>
        </div>
      </div>
    </div>
  )
}
