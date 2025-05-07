import { CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus, Search, Filter, Star, Gift } from "lucide-react"
import Link from "next/link"
import { Input } from "@/components/ui/input"

const customers = [
  {
    id: 1,
    name: "John Smith",
    email: "john.smith@example.com",
    phone: "555-123-4567",
    visits: 12,
    lastVisit: "May 5, 2025",
    totalSpent: "$245.80",
    loyaltyPoints: 120,
    status: "Regular",
    preferences: ["Cappuccino", "Croissant"],
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah.j@example.com",
    phone: "555-234-5678",
    visits: 8,
    lastVisit: "May 3, 2025",
    totalSpent: "$178.25",
    loyaltyPoints: 80,
    status: "Regular",
    preferences: ["Latte", "Cheesecake"],
  },
  {
    id: 3,
    name: "Michael Brown",
    email: "michael.b@example.com",
    phone: "555-345-6789",
    visits: 5,
    lastVisit: "Apr 28, 2025",
    totalSpent: "$87.50",
    loyaltyPoints: 50,
    status: "Occasional",
    preferences: ["Espresso"],
  },
  {
    id: 4,
    name: "Emily Davis",
    email: "emily.d@example.com",
    phone: "555-456-7890",
    visits: 20,
    lastVisit: "May 7, 2025",
    totalSpent: "$312.75",
    loyaltyPoints: 200,
    status: "VIP",
    preferences: ["Mocha", "Chocolate Muffin"],
  },
  {
    id: 5,
    name: "David Wilson",
    email: "david.w@example.com",
    phone: "555-567-8901",
    visits: 3,
    lastVisit: "Apr 20, 2025",
    totalSpent: "$45.30",
    loyaltyPoints: 30,
    status: "New",
    preferences: ["Iced Tea"],
  },
  {
    id: 6,
    name: "Jennifer Lee",
    email: "jennifer.l@example.com",
    phone: "555-678-9012",
    visits: 15,
    lastVisit: "May 6, 2025",
    totalSpent: "$267.90",
    loyaltyPoints: 150,
    status: "VIP",
    preferences: ["Cappuccino", "Croissant"],
  },
  {
    id: 7,
    name: "Robert Taylor",
    email: "robert.t@example.com",
    phone: "555-789-0123",
    visits: 7,
    lastVisit: "May 1, 2025",
    totalSpent: "$124.60",
    loyaltyPoints: 70,
    status: "Regular",
    preferences: ["Latte"],
  },
  {
    id: 8,
    name: "Lisa Anderson",
    email: "lisa.a@example.com",
    phone: "555-890-1234",
    visits: 2,
    lastVisit: "Apr 15, 2025",
    totalSpent: "$28.75",
    loyaltyPoints: 20,
    status: "New",
    preferences: ["Mocha"],
  },
]

const loyaltyTiers = [
  {
    name: "Bronze",
    points: 0,
    benefits: ["Earn 1 point per $1 spent", "Birthday reward"],
  },
  {
    name: "Silver",
    points: 100,
    benefits: ["Earn 1.5 points per $1 spent", "Birthday reward", "Free upgrade once a month"],
  },
  {
    name: "Gold",
    points: 200,
    benefits: ["Earn 2 points per $1 spent", "Birthday reward", "Free upgrade twice a month", "Priority service"],
  },
  {
    name: "Platinum",
    points: 500,
    benefits: [
      "Earn 3 points per $1 spent",
      "Birthday reward",
      "Unlimited free upgrades",
      "Priority service",
      "Exclusive events",
    ],
  },
]

const rewards = [
  {
    id: 1,
    name: "Free Coffee",
    points: 50,
    description: "Redeem for any small coffee",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    name: "Free Pastry",
    points: 75,
    description: "Redeem for any pastry item",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    name: "Free Specialty Drink",
    points: 100,
    description: "Redeem for any specialty drink",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 4,
    name: "25% Off Coupon",
    points: 150,
    description: "25% off your entire order",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 5,
    name: "Free Lunch Combo",
    points: 200,
    description: "Redeem for any lunch combo",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 6,
    name: "Exclusive Mug",
    points: 300,
    description: "Limited edition cafe mug",
    image: "/placeholder.svg?height=80&width=80",
  },
]

export default function CustomersPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Customer Management</h2>
        <div className="flex items-center gap-2">
          <Link href="/customers/new">
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Customer
            </Button>
          </Link>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search customers..." className="pl-8" />
        </div>
        <Button variant="outline" size="icon">
          <Filter className="h-4 w-4" />
        </Button>
      </div>

      <Tabs defaultValue="customers" className="space-y-4">
        <TabsList>
          <TabsTrigger value="customers">Customers</TabsTrigger>
          <TabsTrigger value="loyalty">Loyalty Program</TabsTrigger>
          <TabsTrigger value="rewards">Rewards</TabsTrigger>
        </TabsList>

        <TabsContent value="customers" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Customer Database</CardTitle>
              <CardDescription>Manage your customer information and preferences</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead>Visits</TableHead>
                    <TableHead>Last Visit</TableHead>
                    <TableHead>Total Spent</TableHead>
                    <TableHead>Loyalty</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Preferences</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {customers.map((customer) => (
                    <TableRow key={customer.id}>
                      <TableCell className="font-medium">{customer.name}</TableCell>
                      <TableCell>
                        {customer.email}
                        <br />
                        <span className="text-xs text-muted-foreground">{customer.phone}</span>
                      </TableCell>
                      <TableCell>{customer.visits}</TableCell>
                      <TableCell>{customer.lastVisit}</TableCell>
                      <TableCell>{customer.totalSpent}</TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-500 mr-1" />
                          <span>{customer.loyaltyPoints} pts</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            customer.status === "VIP"
                              ? "default"
                              : customer.status === "Regular"
                                ? "secondary"
                                : "outline"
                          }
                        >
                          {customer.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1">
                          {customer.preferences.map((pref) => (
                            <Badge key={pref} variant="outline" className="text-xs">
                              {pref}
                            </Badge>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <Link href={`/customers/${customer.id}`}>
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

        <TabsContent value="loyalty" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Loyalty Program</CardTitle>
              <CardDescription>Manage your customer loyalty program tiers and benefits</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {loyaltyTiers.map((tier) => (
                  <Card key={tier.name} className="overflow-hidden">
                    <CardHeader
                      className={`bg-gradient-to-r ${
                        tier.name === "Bronze"
                          ? "from-amber-700 to-amber-800"
                          : tier.name === "Silver"
                            ? "from-gray-400 to-gray-500"
                            : tier.name === "Gold"
                              ? "from-yellow-400 to-yellow-500"
                              : "from-gray-600 to-gray-700"
                      } text-white`}
                    >
                      <CardTitle className="flex items-center">
                        <Star className="mr-2 h-5 w-5" />
                        {tier.name}
                      </CardTitle>
                      <CardDescription className="text-white/80">{tier.points}+ points</CardDescription>
                    </CardHeader>
                    <CardContent className="p-4">
                      <ul className="space-y-2">
                        {tier.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start">
                            <div className="mr-2 mt-0.5 h-2 w-2 rounded-full bg-primary" />
                            <span className="text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Loyalty Statistics</CardTitle>
              <CardDescription>Overview of your loyalty program performance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Total Enrolled Customers</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{customers.length}</div>
                    <p className="text-xs text-muted-foreground">+3 this week</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Average Points per Customer</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {Math.round(customers.reduce((sum, c) => sum + c.loyaltyPoints, 0) / customers.length)}
                    </div>
                    <p className="text-xs text-muted-foreground">+15 from last month</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Rewards Redeemed</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">42</div>
                    <p className="text-xs text-muted-foreground">This month</p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="rewards" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Reward Catalog</CardTitle>
              <CardDescription>Manage the rewards available to your customers</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {rewards.map((reward) => (
                  <Card key={reward.id} className="overflow-hidden">
                    <div className="flex items-center p-4">
                      <img
                        src={reward.image || "/placeholder.svg"}
                        alt={reward.name}
                        className="h-16 w-16 rounded-md object-cover"
                      />
                      <div className="ml-4">
                        <h3 className="font-medium">{reward.name}</h3>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Gift className="mr-1 h-3 w-3" />
                          <span>{reward.points} points</span>
                        </div>
                        <p className="text-sm mt-1">{reward.description}</p>
                      </div>
                    </div>
                    <CardFooter className="bg-muted/50 p-2 flex justify-between">
                      <Button variant="ghost" size="sm">
                        Edit
                      </Button>
                      <Button variant="ghost" size="sm">
                        Disable
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
