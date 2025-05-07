import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus, Filter } from "lucide-react"
import Link from "next/link"

const orders = [
  {
    id: "ORD-001",
    customer: "Table 3",
    status: "Completed",
    total: "$24.50",
    time: "12:30 PM",
    date: "May 7, 2025",
    type: "Dine-in",
    items: 4,
  },
  {
    id: "ORD-002",
    customer: "John Smith",
    status: "In Progress",
    total: "$18.20",
    time: "12:45 PM",
    date: "May 7, 2025",
    type: "Takeout",
    items: 2,
  },
  {
    id: "ORD-003",
    customer: "Table 7",
    status: "Completed",
    total: "$32.75",
    time: "1:15 PM",
    date: "May 7, 2025",
    type: "Dine-in",
    items: 5,
  },
  {
    id: "ORD-004",
    customer: "Sarah Johnson",
    status: "Preparing",
    total: "$15.90",
    time: "1:30 PM",
    date: "May 7, 2025",
    type: "Delivery",
    items: 3,
  },
  {
    id: "ORD-005",
    customer: "Table 2",
    status: "Completed",
    total: "$27.30",
    time: "1:45 PM",
    date: "May 7, 2025",
    type: "Dine-in",
    items: 4,
  },
  {
    id: "ORD-006",
    customer: "Michael Brown",
    status: "Delivered",
    total: "$22.15",
    time: "2:00 PM",
    date: "May 6, 2025",
    type: "Delivery",
    items: 3,
  },
  {
    id: "ORD-007",
    customer: "Table 5",
    status: "Completed",
    total: "$19.80",
    time: "2:15 PM",
    date: "May 6, 2025",
    type: "Dine-in",
    items: 3,
  },
  {
    id: "ORD-008",
    customer: "Emily Davis",
    status: "Completed",
    total: "$12.45",
    time: "3:00 PM",
    date: "May 6, 2025",
    type: "Takeout",
    items: 2,
  },
]

export default function OrdersPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Orders</h2>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Link href="/orders/new">
            <Button size="sm">
              <Plus className="mr-2 h-4 w-4" />
              New Order
            </Button>
          </Link>
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Orders</TabsTrigger>
          <TabsTrigger value="dine-in">Dine-in</TabsTrigger>
          <TabsTrigger value="takeout">Takeout</TabsTrigger>
          <TabsTrigger value="delivery">Delivery</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>All Orders</CardTitle>
              <CardDescription>Manage all your orders in one place</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Order ID</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Date & Time</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Items</TableHead>
                    <TableHead>Total</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {orders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell className="font-medium">{order.id}</TableCell>
                      <TableCell>{order.customer}</TableCell>
                      <TableCell>
                        {order.date}
                        <br />
                        <span className="text-xs text-muted-foreground">{order.time}</span>
                      </TableCell>
                      <TableCell>{order.type}</TableCell>
                      <TableCell>{order.items}</TableCell>
                      <TableCell>{order.total}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            order.status === "Completed" || order.status === "Delivered"
                              ? "default"
                              : order.status === "In Progress"
                                ? "secondary"
                                : "outline"
                          }
                        >
                          {order.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Link href={`/orders/${order.id}`}>
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="dine-in" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Dine-in Orders</CardTitle>
              <CardDescription>Manage table orders</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Order ID</TableHead>
                    <TableHead>Table</TableHead>
                    <TableHead>Date & Time</TableHead>
                    <TableHead>Items</TableHead>
                    <TableHead>Total</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {orders
                    .filter((order) => order.type === "Dine-in")
                    .map((order) => (
                      <TableRow key={order.id}>
                        <TableCell className="font-medium">{order.id}</TableCell>
                        <TableCell>{order.customer}</TableCell>
                        <TableCell>
                          {order.date}
                          <br />
                          <span className="text-xs text-muted-foreground">{order.time}</span>
                        </TableCell>
                        <TableCell>{order.items}</TableCell>
                        <TableCell>{order.total}</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              order.status === "Completed"
                                ? "default"
                                : order.status === "In Progress"
                                  ? "secondary"
                                  : "outline"
                            }
                          >
                            {order.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Link href={`/orders/${order.id}`}>
                            <Button variant="ghost" size="sm">
                              View
                            </Button>
                          </Link>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="takeout" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Takeout Orders</CardTitle>
              <CardDescription>Manage pickup orders</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Order ID</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Date & Time</TableHead>
                    <TableHead>Items</TableHead>
                    <TableHead>Total</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {orders
                    .filter((order) => order.type === "Takeout")
                    .map((order) => (
                      <TableRow key={order.id}>
                        <TableCell className="font-medium">{order.id}</TableCell>
                        <TableCell>{order.customer}</TableCell>
                        <TableCell>
                          {order.date}
                          <br />
                          <span className="text-xs text-muted-foreground">{order.time}</span>
                        </TableCell>
                        <TableCell>{order.items}</TableCell>
                        <TableCell>{order.total}</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              order.status === "Completed"
                                ? "default"
                                : order.status === "In Progress"
                                  ? "secondary"
                                  : "outline"
                            }
                          >
                            {order.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Link href={`/orders/${order.id}`}>
                            <Button variant="ghost" size="sm">
                              View
                            </Button>
                          </Link>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="delivery" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Delivery Orders</CardTitle>
              <CardDescription>Manage delivery orders</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Order ID</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Date & Time</TableHead>
                    <TableHead>Items</TableHead>
                    <TableHead>Total</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {orders
                    .filter((order) => order.type === "Delivery")
                    .map((order) => (
                      <TableRow key={order.id}>
                        <TableCell className="font-medium">{order.id}</TableCell>
                        <TableCell>{order.customer}</TableCell>
                        <TableCell>
                          {order.date}
                          <br />
                          <span className="text-xs text-muted-foreground">{order.time}</span>
                        </TableCell>
                        <TableCell>{order.items}</TableCell>
                        <TableCell>{order.total}</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              order.status === "Delivered"
                                ? "default"
                                : order.status === "In Progress"
                                  ? "secondary"
                                  : "outline"
                            }
                          >
                            {order.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Link href={`/orders/${order.id}`}>
                            <Button variant="ghost" size="sm">
                              View
                            </Button>
                          </Link>
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
