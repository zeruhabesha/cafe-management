import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus, Filter, AlertTriangle, ShoppingCart } from "lucide-react"
import Link from "next/link"
import { Progress } from "@/components/ui/progress"

const inventoryItems = [
  {
    id: 1,
    name: "Coffee Beans (Arabica)",
    category: "Ingredients",
    stock: 15,
    unit: "kg",
    threshold: 20,
    supplier: "Coffee Suppliers Inc.",
    lastOrdered: "Apr 28, 2025",
    price: 24.99,
  },
  {
    id: 2,
    name: "Milk",
    category: "Ingredients",
    stock: 8,
    unit: "liters",
    threshold: 10,
    supplier: "Local Dairy",
    lastOrdered: "May 5, 2025",
    price: 3.99,
  },
  {
    id: 3,
    name: "Sugar",
    category: "Ingredients",
    stock: 5,
    unit: "kg",
    threshold: 10,
    supplier: "Sweet Supplies Co.",
    lastOrdered: "Apr 20, 2025",
    price: 2.5,
  },
  {
    id: 4,
    name: "Chocolate Syrup",
    category: "Ingredients",
    stock: 3,
    unit: "bottles",
    threshold: 5,
    supplier: "Sweet Supplies Co.",
    lastOrdered: "Apr 15, 2025",
    price: 8.75,
  },
  {
    id: 5,
    name: "Vanilla Extract",
    category: "Ingredients",
    stock: 2,
    unit: "bottles",
    threshold: 3,
    supplier: "Flavor Essentials",
    lastOrdered: "Apr 10, 2025",
    price: 12.99,
  },
  {
    id: 6,
    name: "Paper Cups (12oz)",
    category: "Packaging",
    stock: 150,
    unit: "pieces",
    threshold: 200,
    supplier: "Packaging Plus",
    lastOrdered: "Apr 5, 2025",
    price: 0.15,
  },
  {
    id: 7,
    name: "Paper Cups (16oz)",
    category: "Packaging",
    stock: 200,
    unit: "pieces",
    threshold: 200,
    supplier: "Packaging Plus",
    lastOrdered: "Apr 5, 2025",
    price: 0.18,
  },
  {
    id: 8,
    name: "Napkins",
    category: "Packaging",
    stock: 500,
    unit: "pieces",
    threshold: 300,
    supplier: "Packaging Plus",
    lastOrdered: "Mar 28, 2025",
    price: 0.05,
  },
  {
    id: 9,
    name: "Coffee Filters",
    category: "Equipment",
    stock: 300,
    unit: "pieces",
    threshold: 100,
    supplier: "Cafe Equipment Co.",
    lastOrdered: "Mar 15, 2025",
    price: 0.1,
  },
  {
    id: 10,
    name: "To-Go Lids",
    category: "Packaging",
    stock: 180,
    unit: "pieces",
    threshold: 200,
    supplier: "Packaging Plus",
    lastOrdered: "Apr 5, 2025",
    price: 0.08,
  },
]

const categories = [...new Set(inventoryItems.map((item) => item.category))]

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

const purchases = [
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

export default function InventoryPage() {
  const lowStockItems = inventoryItems.filter((item) => item.stock < item.threshold)

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Inventory Management</h2>
        <div className="flex items-center gap-2">
          <Link href="/inventory/purchase">
            <Button variant="outline">
              <ShoppingCart className="mr-2 h-4 w-4" />
              New Purchase
            </Button>
          </Link>
          <Link href="/inventory/new">
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Item
            </Button>
          </Link>
        </div>
      </div>

      {lowStockItems.length > 0 && (
        <Card className="border-orange-200 bg-orange-50">
          <CardHeader className="pb-2">
            <CardTitle className="text-orange-800 flex items-center">
              <AlertTriangle className="mr-2 h-5 w-5" />
              Low Stock Alert
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {lowStockItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between p-3 bg-white rounded-lg border">
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <span>
                        {item.stock} / {item.threshold} {item.unit}
                      </span>
                    </div>
                  </div>
                  <Link href="/inventory/purchase">
                    <Button size="sm" variant="outline">
                      Reorder
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      <Tabs defaultValue="inventory" className="space-y-4">
        <TabsList>
          <TabsTrigger value="inventory">Inventory</TabsTrigger>
          <TabsTrigger value="suppliers">Suppliers</TabsTrigger>
          <TabsTrigger value="purchases">Purchase History</TabsTrigger>
        </TabsList>

        <TabsContent value="inventory" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Inventory Items</CardTitle>
                <CardDescription>Manage your inventory stock levels</CardDescription>
              </div>
              <Button variant="outline" size="sm">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Stock Level</TableHead>
                    <TableHead>Unit</TableHead>
                    <TableHead>Supplier</TableHead>
                    <TableHead>Last Ordered</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {inventoryItems.map((item) => {
                    const percentage = (item.stock / item.threshold) * 100
                    return (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium">{item.name}</TableCell>
                        <TableCell>{item.category}</TableCell>
                        <TableCell>
                          <div className="w-40">
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-sm">
                                {item.stock} / {item.threshold}
                              </span>
                              <Badge
                                variant={percentage < 50 ? "destructive" : percentage < 75 ? "outline" : "default"}
                                className="text-xs"
                              >
                                {percentage < 50 ? "Low" : percentage < 75 ? "Medium" : "Good"}
                              </Badge>
                            </div>
                            <Progress
                              value={percentage}
                              className={
                                percentage < 50 ? "bg-red-100" : percentage < 75 ? "bg-yellow-100" : "bg-green-100"
                              }
                            />
                          </div>
                        </TableCell>
                        <TableCell>{item.unit}</TableCell>
                        <TableCell>{item.supplier}</TableCell>
                        <TableCell>{item.lastOrdered}</TableCell>
                        <TableCell>${item.price.toFixed(2)}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button variant="ghost" size="sm">
                              Edit
                            </Button>
                            <Button variant="ghost" size="sm">
                              Adjust
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    )
                  })}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="suppliers" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Suppliers</CardTitle>
              <CardDescription>Manage your supplier information</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Contact Person</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Address</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {suppliers.map((supplier) => (
                    <TableRow key={supplier.id}>
                      <TableCell className="font-medium">{supplier.name}</TableCell>
                      <TableCell>{supplier.contact}</TableCell>
                      <TableCell>{supplier.phone}</TableCell>
                      <TableCell>{supplier.email}</TableCell>
                      <TableCell className="max-w-xs truncate">{supplier.address}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="ghost" size="sm">
                            Edit
                          </Button>
                          <Link href="/inventory/purchase">
                            <Button variant="ghost" size="sm">
                              Order
                            </Button>
                          </Link>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="purchases" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Purchase History</CardTitle>
              <CardDescription>Track your inventory purchases</CardDescription>
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
                  {purchases.map((purchase) => (
                    <TableRow key={purchase.id}>
                      <TableCell className="font-medium">{purchase.id}</TableCell>
                      <TableCell>{purchase.supplier}</TableCell>
                      <TableCell>{purchase.date}</TableCell>
                      <TableCell>{purchase.items}</TableCell>
                      <TableCell>{purchase.total}</TableCell>
                      <TableCell>
                        <Badge variant={purchase.status === "Received" ? "default" : "outline"}>
                          {purchase.status}
                        </Badge>
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
