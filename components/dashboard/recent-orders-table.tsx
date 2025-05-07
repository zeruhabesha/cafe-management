import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const recentOrders = [
  {
    id: "ORD-001",
    customer: "Table 3",
    status: "Completed",
    total: "$24.50",
    time: "12:30 PM",
    type: "Dine-in",
  },
  {
    id: "ORD-002",
    customer: "John Smith",
    status: "In Progress",
    total: "$18.20",
    time: "12:45 PM",
    type: "Takeout",
  },
  {
    id: "ORD-003",
    customer: "Table 7",
    status: "Completed",
    total: "$32.75",
    time: "1:15 PM",
    type: "Dine-in",
  },
  {
    id: "ORD-004",
    customer: "Sarah Johnson",
    status: "Preparing",
    total: "$15.90",
    time: "1:30 PM",
    type: "Delivery",
  },
  {
    id: "ORD-005",
    customer: "Table 2",
    status: "Completed",
    total: "$27.30",
    time: "1:45 PM",
    type: "Dine-in",
  },
]

export default function RecentOrdersTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Order</TableHead>
          <TableHead>Customer</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Total</TableHead>
          <TableHead>Type</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {recentOrders.map((order) => (
          <TableRow key={order.id}>
            <TableCell className="font-medium">{order.id}</TableCell>
            <TableCell>{order.customer}</TableCell>
            <TableCell>
              <Badge
                variant={
                  order.status === "Completed" ? "default" : order.status === "In Progress" ? "secondary" : "outline"
                }
              >
                {order.status}
              </Badge>
            </TableCell>
            <TableCell>{order.total}</TableCell>
            <TableCell>{order.type}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
