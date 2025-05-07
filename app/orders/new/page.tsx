"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Minus, Plus, ShoppingCart, Trash2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"

// Sample menu items
const menuItems = [
  {
    id: 1,
    name: "Cappuccino",
    category: "Coffee",
    price: 4.5,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    name: "Latte",
    category: "Coffee",
    price: 4.75,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    name: "Espresso",
    category: "Coffee",
    price: 3.5,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 4,
    name: "Mocha",
    category: "Coffee",
    price: 5.25,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 5,
    name: "Croissant",
    category: "Pastry",
    price: 3.25,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 6,
    name: "Cheesecake",
    category: "Dessert",
    price: 5.5,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 7,
    name: "Chocolate Muffin",
    category: "Pastry",
    price: 3.75,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 8,
    name: "Iced Tea",
    category: "Beverage",
    price: 3.0,
    image: "/placeholder.svg?height=80&width=80",
  },
]

// Sample tables
const tables = [
  { id: 1, name: "Table 1", seats: 2 },
  { id: 2, name: "Table 2", seats: 2 },
  { id: 3, name: "Table 3", seats: 4 },
  { id: 4, name: "Table 4", seats: 4 },
  { id: 5, name: "Table 5", seats: 6 },
  { id: 6, name: "Table 6", seats: 6 },
  { id: 7, name: "Table 7", seats: 8 },
  { id: 8, name: "Table 8", seats: 8 },
]

export default function NewOrderPage() {
  const [orderType, setOrderType] = useState("dine-in")
  const [selectedTable, setSelectedTable] = useState("")
  const [customerName, setCustomerName] = useState("")
  const [customerPhone, setCustomerPhone] = useState("")
  const [customerAddress, setCustomerAddress] = useState("")
  const [orderItems, setOrderItems] = useState<Array<{ item: any; quantity: number }>>([])
  const [activeCategory, setActiveCategory] = useState("All")

  const categories = ["All", ...new Set(menuItems.map((item) => item.category))]

  const filteredItems =
    activeCategory === "All" ? menuItems : menuItems.filter((item) => item.category === activeCategory)

  const addItemToOrder = (item: any) => {
    const existingItem = orderItems.find((orderItem) => orderItem.item.id === item.id)

    if (existingItem) {
      setOrderItems(
        orderItems.map((orderItem) =>
          orderItem.item.id === item.id ? { ...orderItem, quantity: orderItem.quantity + 1 } : orderItem,
        ),
      )
    } else {
      setOrderItems([...orderItems, { item, quantity: 1 }])
    }
  }

  const removeItemFromOrder = (itemId: number) => {
    setOrderItems(orderItems.filter((orderItem) => orderItem.item.id !== itemId))
  }

  const updateItemQuantity = (itemId: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItemFromOrder(itemId)
      return
    }

    setOrderItems(
      orderItems.map((orderItem) =>
        orderItem.item.id === itemId ? { ...orderItem, quantity: newQuantity } : orderItem,
      ),
    )
  }

  const calculateTotal = () => {
    return orderItems.reduce((total, { item, quantity }) => total + item.price * quantity, 0)
  }

  const handleSubmitOrder = () => {
    // Here you would typically send the order to your backend
    console.log({
      type: orderType,
      table: selectedTable,
      customerName,
      customerPhone,
      customerAddress,
      items: orderItems,
      total: calculateTotal(),
    })

    // Reset form or redirect
    alert("Order submitted successfully!")
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">New Order</h2>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="md:col-span-2 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Order Type</CardTitle>
              <CardDescription>Select the type of order you want to create</CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup defaultValue="dine-in" className="grid grid-cols-3 gap-4" onValueChange={setOrderType}>
                <div>
                  <RadioGroupItem value="dine-in" id="dine-in" className="peer sr-only" />
                  <Label
                    htmlFor="dine-in"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    <ShoppingCart className="mb-3 h-6 w-6" />
                    Dine-in
                  </Label>
                </div>

                <div>
                  <RadioGroupItem value="takeout" id="takeout" className="peer sr-only" />
                  <Label
                    htmlFor="takeout"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    <ShoppingCart className="mb-3 h-6 w-6" />
                    Takeout
                  </Label>
                </div>

                <div>
                  <RadioGroupItem value="delivery" id="delivery" className="peer sr-only" />
                  <Label
                    htmlFor="delivery"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    <ShoppingCart className="mb-3 h-6 w-6" />
                    Delivery
                  </Label>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>

          {orderType === "dine-in" && (
            <Card>
              <CardHeader>
                <CardTitle>Table Selection</CardTitle>
                <CardDescription>Select a table for the customer</CardDescription>
              </CardHeader>
              <CardContent>
                <Select onValueChange={setSelectedTable}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a table" />
                  </SelectTrigger>
                  <SelectContent>
                    {tables.map((table) => (
                      <SelectItem key={table.id} value={table.name}>
                        {table.name} ({table.seats} seats)
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>
          )}

          {(orderType === "takeout" || orderType === "delivery") && (
            <Card>
              <CardHeader>
                <CardTitle>Customer Information</CardTitle>
                <CardDescription>Enter customer details for {orderType}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      placeholder="Customer name"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      placeholder="Phone number"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                    />
                  </div>
                </div>

                {orderType === "delivery" && (
                  <div className="space-y-2">
                    <Label htmlFor="address">Delivery Address</Label>
                    <Textarea
                      id="address"
                      placeholder="Delivery address"
                      value={customerAddress}
                      onChange={(e) => setCustomerAddress(e.target.value)}
                    />
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          <Card>
            <CardHeader>
              <CardTitle>Menu Items</CardTitle>
              <CardDescription>Select items to add to the order</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex space-x-2 overflow-x-auto pb-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={activeCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {filteredItems.map((item) => (
                  <Card key={item.id} className="overflow-hidden">
                    <div className="flex items-center p-4">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="h-16 w-16 rounded-md object-cover"
                      />
                      <div className="ml-4 flex-1">
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-sm text-muted-foreground">${item.price.toFixed(2)}</p>
                        <Badge className="mt-1">{item.category}</Badge>
                      </div>
                    </div>
                    <CardFooter className="bg-muted/50 p-2">
                      <Button variant="ghost" size="sm" className="w-full" onClick={() => addItemToOrder(item)}>
                        Add to Order
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="sticky top-4">
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
              <CardDescription>Review your order before submitting</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {orderType === "dine-in" && (
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Table:</span>
                  <span className="font-medium">{selectedTable || "Not selected"}</span>
                </div>
              )}

              {(orderType === "takeout" || orderType === "delivery") && (
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Customer:</span>
                    <span className="font-medium">{customerName || "Not provided"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Phone:</span>
                    <span className="font-medium">{customerPhone || "Not provided"}</span>
                  </div>
                  {orderType === "delivery" && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Address:</span>
                      <span className="font-medium text-right max-w-[200px]">{customerAddress || "Not provided"}</span>
                    </div>
                  )}
                </div>
              )}

              <div className="border-t pt-4">
                <h3 className="font-medium mb-2">Items</h3>
                {orderItems.length === 0 ? (
                  <p className="text-sm text-muted-foreground">No items added yet</p>
                ) : (
                  <ul className="space-y-2">
                    {orderItems.map(({ item, quantity }) => (
                      <li key={item.id} className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-6 w-6"
                            onClick={() => updateItemQuantity(item.id, quantity - 1)}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-6 text-center">{quantity}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-6 w-6"
                            onClick={() => updateItemQuantity(item.id, quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                        <span className="flex-1 mx-2">{item.name}</span>
                        <span className="text-right">${(item.price * quantity).toFixed(2)}</span>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6 ml-2"
                          onClick={() => removeItemFromOrder(item.id)}
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="border-t pt-4">
                <div className="flex justify-between font-medium">
                  <span>Total:</span>
                  <span>${calculateTotal().toFixed(2)}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full"
                disabled={
                  orderItems.length === 0 ||
                  (orderType === "dine-in" && !selectedTable) ||
                  (orderType === "takeout" && (!customerName || !customerPhone)) ||
                  (orderType === "delivery" && (!customerName || !customerPhone || !customerAddress))
                }
                onClick={handleSubmitOrder}
              >
                Submit Order
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
