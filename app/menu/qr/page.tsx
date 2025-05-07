"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, QrCode, Share2 } from "lucide-react"

export default function QRMenuPage() {
  const [restaurantName, setRestaurantName] = useState("My Cafe")
  const [menuUrl, setMenuUrl] = useState("https://example.com/menu")

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">QR Code Menu</h2>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Generate QR Code Menu</CardTitle>
            <CardDescription>Create a QR code for your digital menu</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="restaurant-name">Restaurant Name</Label>
              <Input id="restaurant-name" value={restaurantName} onChange={(e) => setRestaurantName(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="menu-url">Menu URL</Label>
              <Input id="menu-url" value={menuUrl} onChange={(e) => setMenuUrl(e.target.value)} />
              <p className="text-xs text-muted-foreground">
                This is the URL that customers will be directed to when they scan the QR code.
              </p>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Reset</Button>
            <Button>Generate QR Code</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>QR Code Preview</CardTitle>
            <CardDescription>Scan this code to view your digital menu</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center p-6">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <QrCode className="h-48 w-48" />
            </div>
            <p className="mt-4 text-center font-medium">{restaurantName}</p>
            <p className="text-sm text-muted-foreground text-center">{menuUrl}</p>
          </CardContent>
          <CardFooter className="flex justify-center gap-4">
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Download
            </Button>
            <Button variant="outline" size="sm">
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
          </CardFooter>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>QR Code Usage</CardTitle>
          <CardDescription>How to use QR codes in your cafe</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="table" className="space-y-4">
            <TabsList>
              <TabsTrigger value="table">Table Tents</TabsTrigger>
              <TabsTrigger value="menu">Menu Cards</TabsTrigger>
              <TabsTrigger value="window">Window Display</TabsTrigger>
            </TabsList>

            <TabsContent value="table" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border rounded-lg p-4 flex flex-col items-center">
                  <img
                    src="/placeholder.svg?height=150&width=150"
                    alt="Table tent example"
                    className="rounded-md mb-4"
                  />
                  <h3 className="font-medium">Table Tent Cards</h3>
                  <p className="text-sm text-center text-muted-foreground mt-2">
                    Place QR code tent cards on each table for easy access
                  </p>
                </div>

                <div className="border rounded-lg p-4 flex flex-col items-center">
                  <img
                    src="/placeholder.svg?height=150&width=150"
                    alt="Table stand example"
                    className="rounded-md mb-4"
                  />
                  <h3 className="font-medium">Table Stands</h3>
                  <p className="text-sm text-center text-muted-foreground mt-2">
                    Use acrylic stands with QR codes for a premium look
                  </p>
                </div>

                <div className="border rounded-lg p-4 flex flex-col items-center">
                  <img src="/placeholder.svg?height=150&width=150" alt="Sticker example" className="rounded-md mb-4" />
                  <h3 className="font-medium">Table Stickers</h3>
                  <p className="text-sm text-center text-muted-foreground mt-2">
                    Apply QR code stickers directly to tables for permanence
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="menu" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border rounded-lg p-4 flex flex-col items-center">
                  <img
                    src="/placeholder.svg?height=150&width=150"
                    alt="Menu card example"
                    className="rounded-md mb-4"
                  />
                  <h3 className="font-medium">Menu Cards</h3>
                  <p className="text-sm text-center text-muted-foreground mt-2">
                    Add QR codes to physical menu cards for digital options
                  </p>
                </div>

                <div className="border rounded-lg p-4 flex flex-col items-center">
                  <img
                    src="/placeholder.svg?height=150&width=150"
                    alt="Menu insert example"
                    className="rounded-md mb-4"
                  />
                  <h3 className="font-medium">Menu Inserts</h3>
                  <p className="text-sm text-center text-muted-foreground mt-2">
                    Create special inserts with QR codes for seasonal items
                  </p>
                </div>

                <div className="border rounded-lg p-4 flex flex-col items-center">
                  <img
                    src="/placeholder.svg?height=150&width=150"
                    alt="Menu cover example"
                    className="rounded-md mb-4"
                  />
                  <h3 className="font-medium">Menu Covers</h3>
                  <p className="text-sm text-center text-muted-foreground mt-2">
                    Print QR codes on menu covers for immediate visibility
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="window" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border rounded-lg p-4 flex flex-col items-center">
                  <img
                    src="/placeholder.svg?height=150&width=150"
                    alt="Window decal example"
                    className="rounded-md mb-4"
                  />
                  <h3 className="font-medium">Window Decals</h3>
                  <p className="text-sm text-center text-muted-foreground mt-2">
                    Apply QR code decals to windows for passersby
                  </p>
                </div>

                <div className="border rounded-lg p-4 flex flex-col items-center">
                  <img src="/placeholder.svg?height=150&width=150" alt="Poster example" className="rounded-md mb-4" />
                  <h3 className="font-medium">Posters</h3>
                  <p className="text-sm text-center text-muted-foreground mt-2">
                    Create posters with QR codes for your entrance
                  </p>
                </div>

                <div className="border rounded-lg p-4 flex flex-col items-center">
                  <img
                    src="/placeholder.svg?height=150&width=150"
                    alt="Sandwich board example"
                    className="rounded-md mb-4"
                  />
                  <h3 className="font-medium">Sandwich Boards</h3>
                  <p className="text-sm text-center text-muted-foreground mt-2">
                    Add QR codes to outdoor signage to attract customers
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
