"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Textarea } from "@/components/ui/textarea"
import { DatePicker } from "@/components/ui/date-picker"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus, Minus, Trash2, Save, FileText, ShoppingCart, Calendar } from "lucide-react"

// Sample suppliers data
const suppliers = [
  {
    id: 1,
    name: "Coffee Suppliers Inc.",
    contact: "John Smith",
    phone: "555-123-4567",
    email: "john@coffeesuppliers.com",
    address: "123 Bean St, Coffee City",
  },
  {
    id: 2,
    name: "Local Dairy",
    contact: "Sarah Johnson",
    phone: "555-234-5678",
    email: "sarah@localdairy.com",
    address: "456 Milk Ave, Dairy Town",
  },
  {
    id: 3,
    name: "Sweet Supplies Co.",
    contact: "Michael Brown",
    phone: "555-345-6789",
    email: "michael@sweetsupplies.com",
    address: "789 Sugar Rd, Sweet City",
  },
  {
    id: 4,
    name: "Flavor Essentials",
    contact: "Emily Davis",
    phone: "555-456-7890",
    email: "emily@flavoressentials.com",
    address: "101 Flavor Blvd, Essence City",
  },
  {
    id: 5,
    name: "Packaging Plus",
    contact: "David Wilson",
    phone: "555-567-8901",
    email: "david@packagingplus.com",
    address: "202 Package St, Box Town",
  },
  {
    id: 6,
    name: "Cafe Equipment Co.",
    contact: "Jennifer Lee",
    phone: "555-678-9012",
    email: "jennifer@cafeequipment.com",
    address: "303 Machine Rd, Equipment City",
  },
]

// Sample inventory items
const inventoryItems = [
  {
    id: 1,
    name: "Coffee Beans (Arabica)",
    category: "Ingredients",
    unit: "kg",
    price: 24.99,
    supplier: "Coffee Suppliers Inc.",
  },
  {
    id: 2,
    name: "Milk",
    category: "Ingredients",
    unit: "liters",
    price: 3.99,
    supplier: "Local Dairy",
  },
  {
    id: 3,
    name: "Sugar",
    category: "Ingredients",
    unit: "kg",
    price: 2.5,
    supplier: "Sweet Supplies Co.",
  },
  {
    id: 4,
    name: "Chocolate Syrup",
    category: "Ingredients",
    unit: "bottles",
    price: 8.75,
    supplier: "Sweet Supplies Co.",
  },
  {
    id: 5,
    name: "Vanilla Extract",
    category: "Ingredients",
    unit: "bottles",
    price: 12.99,
    supplier: "Flavor Essentials",
  },
  {
    id: 6,
    name: "Paper Cups (12oz)",
    category: "Packaging",
    unit: "pieces",
    price: 0.15,
    supplier: "Packaging Plus",
  },
  {
    id: 7,
    name: "Paper Cups (16oz)",
    category: "Packaging",
    unit: "pieces",
    price: 0.18,
    supplier: "Packaging Plus",
  },
  {
    id: 8,
    name: "Napkins",
    category: "Packaging",
    unit: "pieces",
    price: 0.05,
    supplier: "Packaging Plus",
  },
  {
    id: 9,
    name: "Coffee Filters",
    category: "Equipment",
    unit: "pieces",
    price: 0.1,
    supplier: "Cafe Equipment Co.",
  },
  {
    id: 10,
    name: "To-Go Lids",
    category: "Packaging",
    unit: "pieces",
    price: 0.08,
    supplier: "Packaging Plus",
  },
]

// Sample purchase orders
const purchaseOrders = [
  {
    id: "PO-001",
    supplier: "Coffee Suppliers Inc.",
    date: "Apr 28, 2025",
    items: 2,
    total: "$549.80",
    status: "Received",
  },
  {
    id: "PO-002",
    supplier: "Local Dairy",
    date: "May 5, 2025",
    items: 1,
    total: "$79.80",
    status: "Received",
  },
  {
    id: "PO-003",
    supplier: "Sweet Supplies Co.",
    date: "Apr 20, 2025",
    items: 2,
    total: "$112.50",
    status: "Received",
  },
  {
    id: "PO-004",
    supplier: "Packaging Plus",
    date: "Apr 5, 2025",
    items: 3,
    total: "$89.00",
    status: "Received",
  },
  {
    id: "PO-005",
    supplier: "Flavor Essentials",
    date: "Apr 10, 2025",
    items: 1,
    total: "$129.90",
    status: "Received",
  },
  {
    id: "PO-006",
    supplier: "Coffee Suppliers Inc.",
    date: "May 7, 2025",
    items: 1,
    total: "$249.90",
    status: "Pending",
  },
]

export default function PurchasePage() {
  const [selectedSupplier, setSelectedSupplier] = useState("")
  const [purchaseItems, setPurchaseItems] = useState<Array<{ item: any; quantity: number }>>([])
  const [notes, setNotes] = useState("")
  const [expectedDeliveryDate, setExpectedDeliveryDate] = useState<Date | undefined>(undefined)

  // Filter items based on selected supplier
  const filteredItems = selectedSupplier
    ? inventoryItems.filter(
        (item) => item.supplier === suppliers.find((s) => s.id.toString() === selectedSupplier)?.name,
      )
    : inventoryItems

  const addItemToPurchase = (item: any) => {
    const existingItem = purchaseItems.find((purchaseItem) => purchaseItem.item.id === item.id)

    if (existingItem) {
      setPurchaseItems(
        purchaseItems.map((purchaseItem) =>
          purchaseItem.item.id === item.id ? { ...purchaseItem, quantity: purchaseItem.quantity + 1 } : purchaseItem,
        ),
      )
    } else {
      setPurchaseItems([...purchaseItems, { item, quantity: 1 }])
    }
  }

  const removeItemFromPurchase = (itemId: number) => {
    setPurchaseItems(purchaseItems.filter((purchaseItem) => purchaseItem.item.id !== itemId))
  }

  const updateItemQuantity = (itemId: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItemFromPurchase(itemId)
      return
    }

    setPurchaseItems(
      purchaseItems.map((purchaseItem) =>
        purchaseItem.item.id === itemId ? { ...purchaseItem, quantity: newQuantity } : purchaseItem,
      ),
    )
  }

  const calculateTotal = () => {
    return purchaseItems.reduce((total, { item, quantity }) => total + item.price * quantity, 0)
  }

  const handleSubmitPurchase = () => {
    // Here you would typically send the purchase order to your backend
    console.log({
      supplier: selectedSupplier,
      items: purchaseItems,
      notes,
      expectedDeliveryDate,
      total: calculateTotal(),
    })

    // Reset form or redirect
    alert("Purchase order submitted successfully!")
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Purchase Order</h2>
      </div>

      <Tabs defaultValue="new" className="space-y-4">
        <TabsList>
          <TabsTrigger value="new">
            <ShoppingCart className="mr-2 h-4 w-4" />
            New Purchase
          </TabsTrigger>
          <TabsTrigger value="history">
            <FileText className="mr-2 h-4 w-4" />
            Purchase History
          </TabsTrigger>
        </TabsList>

        <TabsContent value="new" className="space-y-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="md:col-span-2 space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Supplier Information</CardTitle>
                  <CardDescription>Select a supplier for this purchase order</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="supplier">Supplier</Label>
                    <Select value={selectedSupplier} onValueChange={setSelectedSupplier}>
                      <SelectTrigger id="supplier">
                        <SelectValue placeholder="Select a supplier" />
                      </SelectTrigger>
                      <SelectContent>
                        {suppliers.map((supplier) => (
                          <SelectItem key={supplier.id} value={supplier.id.toString()}>
                            {supplier.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {selectedSupplier && (
                    <div className="rounded-lg border p-4">
                      <h3 className="font-medium mb-2">
                        {suppliers.find((s) => s.id.toString() === selectedSupplier)?.name}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                        <div>
                          <span className="text-muted-foreground">Contact:</span>{" "}
                          {suppliers.find((s) => s.id.toString() === selectedSupplier)?.contact}
                        </div>
                        <div>
                          <span className="text-muted-foreground">Phone:</span>{" "}
                          {suppliers.find((s) => s.id.toString() === selectedSupplier)?.phone}
                        </div>
                        <div>
                          <span className="text-muted-foreground">Email:</span>{" "}
                          {suppliers.find((s) => s.id.toString() === selectedSupplier)?.email}
                        </div>
                        <div>
                          <span className="text-muted-foreground">Address:</span>{" "}
                          {suppliers.find((s) => s.id.toString() === selectedSupplier)?.address}
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="expected-delivery">Expected Delivery Date</Label>
                    <div className="flex items-center">
                      <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                      <DatePicker
                        id="expected-delivery"
                        selected={expectedDeliveryDate}
                        onSelect={setExpectedDeliveryDate}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notes">Notes</Label>
                    <Textarea
                      id="notes"
                      placeholder="Add any special instructions or notes for this purchase order"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Items</CardTitle>
                  <CardDescription>Select items to add to the purchase order</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {selectedSupplier ? (
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Item</TableHead>
                          <TableHead>Category</TableHead>
                          <TableHead>Unit</TableHead>
                          <TableHead>Price</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredItems.length > 0 ? (
                          filteredItems.map((item) => (
                            <TableRow key={item.id}>
                              <TableCell className="font-medium">{item.name}</TableCell>
                              <TableCell>{item.category}</TableCell>
                              <TableCell>{item.unit}</TableCell>
                              <TableCell>${item.price.toFixed(2)}</TableCell>
                              <TableCell className="text-right">
                                <Button variant="ghost" size="sm" onClick={() => addItemToPurchase(item)}>
                                  <Plus className="h-4 w-4" />
                                  <span className="sr-only">Add</span>
                                </Button>
                              </TableCell>
                            </TableRow>
                          ))
                        ) : (
                          <TableRow>
                            <TableCell colSpan={5} className="text-center py-4 text-muted-foreground">
                              No items available from this supplier
                            </TableCell>
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  ) : (
                    <div className="text-center py-4 text-muted-foreground">
                      Please select a supplier to view available items
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="sticky top-4">
                <CardHeader>
                  <CardTitle>Purchase Summary</CardTitle>
                  <CardDescription>Review your purchase order</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {selectedSupplier ? (
                    <>
                      <div className="text-sm">
                        <div className="flex justify-between mb-2">
                          <span className="text-muted-foreground">Supplier:</span>
                          <span className="font-medium">
                            {suppliers.find((s) => s.id.toString() === selectedSupplier)?.name}
                          </span>
                        </div>
                        {expectedDeliveryDate && (
                          <div className="flex justify-between mb-2">
                            <span className="text-muted-foreground">Expected Delivery:</span>
                            <span className="font-medium">{expectedDeliveryDate.toLocaleDateString()}</span>
                          </div>
                        )}
                      </div>

                      <div className="border-t pt-4">
                        <h3 className="font-medium mb-2">Items</h3>
                        {purchaseItems.length === 0 ? (
                          <p className="text-sm text-muted-foreground">No items added yet</p>
                        ) : (
                          <ul className="space-y-2">
                            {purchaseItems.map(({ item, quantity }) => (
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
                                  onClick={() => removeItemFromPurchase(item.id)}
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
                    </>
                  ) : (
                    <p className="text-sm text-muted-foreground">Please select a supplier to continue</p>
                  )}
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full"
                    disabled={!selectedSupplier || purchaseItems.length === 0}
                    onClick={handleSubmitPurchase}
                  >
                    <Save className="mr-2 h-4 w-4" />
                    Submit Purchase Order
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="history" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Purchase History</CardTitle>
              <CardDescription>View and manage your purchase orders</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>PO Number</TableHead>
                    <TableHead>Supplier</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Items</TableHead>
                    <TableHead>Total</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {purchaseOrders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell className="font-medium">{order.id}</TableCell>
                      <TableCell>{order.supplier}</TableCell>
                      <TableCell>{order.date}</TableCell>
                      <TableCell>{order.items}</TableCell>
                      <TableCell>{order.total}</TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <div
                            className={`mr-2 h-2 w-2 rounded-full ${
                              order.status === "Received" ? "bg-green-500" : "bg-yellow-500"
                            }`}
                          />
                          {order.status}
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          View
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
