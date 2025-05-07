import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus, Edit, Trash2, QrCode } from "lucide-react"
import Link from "next/link"

const menuItems = [
  {
    id: 1,
    name: "Cappuccino",
    category: "Coffee",
    price: 4.5,
    description: "Espresso with steamed milk and a deep layer of foam",
    image: "/placeholder.svg?height=80&width=80",
    available: true,
  },
  {
    id: 2,
    name: "Latte",
    category: "Coffee",
    price: 4.75,
    description: "Espresso with steamed milk and a light layer of foam",
    image: "/placeholder.svg?height=80&width=80",
    available: true,
  },
  {
    id: 3,
    name: "Espresso",
    category: "Coffee",
    price: 3.5,
    description: "Concentrated coffee served in a small cup",
    image: "/placeholder.svg?height=80&width=80",
    available: true,
  },
  {
    id: 4,
    name: "Mocha",
    category: "Coffee",
    price: 5.25,
    description: "Espresso with chocolate and steamed milk",
    image: "/placeholder.svg?height=80&width=80",
    available: true,
  },
  {
    id: 5,
    name: "Croissant",
    category: "Pastry",
    price: 3.25,
    description: "Buttery, flaky pastry",
    image: "/placeholder.svg?height=80&width=80",
    available: true,
  },
  {
    id: 6,
    name: "Cheesecake",
    category: "Dessert",
    price: 5.5,
    description: "Creamy cheesecake with a graham cracker crust",
    image: "/placeholder.svg?height=80&width=80",
    available: true,
  },
  {
    id: 7,
    name: "Chocolate Muffin",
    category: "Pastry",
    price: 3.75,
    description: "Moist chocolate muffin with chocolate chips",
    image: "/placeholder.svg?height=80&width=80",
    available: false,
  },
  {
    id: 8,
    name: "Iced Tea",
    category: "Beverage",
    price: 3.0,
    description: "Refreshing iced tea",
    image: "/placeholder.svg?height=80&width=80",
    available: true,
  },
]

const categories = [...new Set(menuItems.map((item) => item.category))]

export default function MenuPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Menu Management</h2>
        <div className="flex items-center gap-2">
          <Link href="/menu/qr">
            <Button variant="outline">
              <QrCode className="mr-2 h-4 w-4" />
              Generate QR Menu
            </Button>
          </Link>
          <Link href="/menu/new">
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Item
            </Button>
          </Link>
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Items</TabsTrigger>
          {categories.map((category) => (
            <TabsTrigger key={category} value={category}>
              {category}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>All Menu Items</CardTitle>
              <CardDescription>Manage your entire menu in one place</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Image</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {menuItems.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          className="h-10 w-10 rounded-md object-cover"
                        />
                      </TableCell>
                      <TableCell className="font-medium">{item.name}</TableCell>
                      <TableCell>{item.category}</TableCell>
                      <TableCell>${item.price.toFixed(2)}</TableCell>
                      <TableCell className="max-w-xs truncate">{item.description}</TableCell>
                      <TableCell>
                        <Badge variant={item.available ? "default" : "outline"}>
                          {item.available ? "Available" : "Unavailable"}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="ghost" size="icon">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {categories.map((category) => (
          <TabsContent key={category} value={category} className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>{category} Items</CardTitle>
                <CardDescription>Manage {category.toLowerCase()} items</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Image</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Description</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {menuItems
                      .filter((item) => item.category === category)
                      .map((item) => (
                        <TableRow key={item.id}>
                          <TableCell>
                            <img
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              className="h-10 w-10 rounded-md object-cover"
                            />
                          </TableCell>
                          <TableCell className="font-medium">{item.name}</TableCell>
                          <TableCell>${item.price.toFixed(2)}</TableCell>
                          <TableCell className="max-w-xs truncate">{item.description}</TableCell>
                          <TableCell>
                            <Badge variant={item.available ? "default" : "outline"}>
                              {item.available ? "Available" : "Unavailable"}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end gap-2">
                              <Button variant="ghost" size="icon">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="icon">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
