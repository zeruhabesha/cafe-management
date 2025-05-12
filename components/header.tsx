"use client"

import { useState } from "react"
import { Bell, Menu, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Sidebar from "./sidebar"
import { usePathname } from "next/navigation"
import { Badge } from "./ui/badge"

export default function Header() {
  const [notifications, setNotifications] = useState(3)
  const pathname = usePathname()

  const getPageTitle = (path: string) => {
    if (path === "/") return "Dashboard"
    if (path.startsWith("/orders")) return "Orders"
    if (path.startsWith("/menu")) return "Menu Management"
    if (path.startsWith("/inventory")) return "Inventory"
    if (path.startsWith("/customers")) return "Customers"
    if (path.startsWith("/reports")) return "Reports"
    if (path.startsWith("/settings")) return "Settings"
    return "Cafe Management"
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-40 border-b bg-slate-950 text-white">
      <div className="container flex h-14 items-center justify-between py-4">
        <div className="flex items-center gap-2 md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72 p-0">
              <Sidebar />
            </SheetContent>
          </Sheet>
          <h1 className="text-lg font-semibold">{getPageTitle(pathname)}</h1>
        </div>

        <div className="hidden md:block">
          <h1 className="text-lg font-semibold">{getPageTitle(pathname)}</h1>
        </div>

        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="relative border-slate-700 bg-slate-800 text-white hover:bg-slate-700 hover:text-white"
              >
                <Bell className="h-5 w-5" />
                {notifications > 0 && (
                  <Badge className="absolute -right-1 -top-1 h-5 w-5 rounded-full p-0 flex items-center justify-center">
                    {notifications}
                  </Badge>
                )}
                <span className="sr-only">Notifications</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Low stock alert: Coffee beans</DropdownMenuItem>
              <DropdownMenuItem>New order: Table 5 (Takeout)</DropdownMenuItem>
              <DropdownMenuItem>Payment completed: Order #1234</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="border-slate-700 bg-slate-800 text-white hover:bg-slate-700 hover:text-white"
              >
                <User className="h-5 w-5" />
                <span className="sr-only">User menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
