"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Star, Gift, Edit, Save, User, ShoppingBag, Clock, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"

// Sample customer data
const customer = {
  id: 4,
  name: "Emily Davis",
  email: "emily.d@example.com",
  phone: "555-456-7890",
  address: "789 Oak St, Anytown, USA",
  visits: 20,
  lastVisit: "May 7, 2025",
  totalSpent: "$312.75",
  loyaltyPoints: 200,
  status: "VIP",
  preferences: ["Mocha", "Chocolate Muffin"],
  notes: "Prefers almond milk in coffee. Regular work meetings on Tuesdays.",
  joinDate: "January 15, 2024",
}

// Sample order history
const orderHistory = [
  {
    id: "ORD-1234",
    date: "May 7, 2025",
    items: ["Mocha", "Chocolate Muffin", "Croissant"],
    total: "$18.75",
    type: "Dine-in",
  },
  {
    id: "ORD-1156",
    date: "May 1, 2025",
    items: ["Cappuccino", "Blueberry Muffin"],
    total: "$9.25",
    type: "Takeout",
  },
  {
    id: "ORD-1089",
    date: "Apr 25, 2025",
    items: ["Mocha", "Chocolate Muffin", "Iced Tea"],
    total: "$15.50",
    type: "Dine-in",
  },
  {
    id: "ORD-1042",
    date: "Apr 18, 2025",
    items: ["Latte", "Croissant", "Apple Pie"],
    total: "$14.75",
    type: "Dine-in",
  },
  {
    id: "ORD-987",
    date: "Apr 10, 2025",
    items: ["Mocha", "Cheesecake"],
    total: "$12.25",
    type: "Takeout",
  },
]

// Sample rewards
const availableRewards = [
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
]

export default function CustomerDetailPage({ params }: { params: { id: string } }) {
  const [isEditing, setIsEditing] = useState(false)
  const [customerData, setCustomerData] = useState(customer)

  const handleSave = () => {
    // Here you would typically save the customer data to your backend
    setIsEditing(false)
    alert("Customer information updated successfully!")
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/customers">
            <Button variant="ghost" size="icon" className="mr-2">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h2 className="text-3xl font-bold tracking-tight">Customer Profile</h2>
        </div>
        {isEditing ? (
          <Button onClick={handleSave}>
            <Save className="mr-2 h-4 w-4" />
            Save Changes
          </Button>
        ) : (
          <Button onClick={() => setIsEditing(true)}>
            <Edit className="mr-2 h-4 w-4" />
            Edit Profile
          </Button>
        )}
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Card className="md:col-span-1">
          <CardHeader>
            <div className="flex items-center justify-center">
              <Avatar className="h-24 w-24">
                <AvatarImage src="/placeholder.svg?height=96&width=96" alt={customerData.name} />
                <AvatarFallback>
                  {customerData.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
            </div>
            <CardTitle className="text-center mt-4">{customerData.name}</CardTitle>
            <CardDescription className="text-center">
              <Badge variant={customerData.status === "VIP" ? "default" : "outline"}>{customerData.status}</Badge>
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center">
              <Mail className="mr-2 h-4 w-4 text-muted-foreground" />
              {isEditing ? (
                <Input
                  value={customerData.email}
                  onChange={(e) => setCustomerData({ ...customerData, email: e.target.value })}
                />
              ) : (
                <span>{customerData.email}</span>
              )}
            </div>
            <div className="flex items-center">
              <Phone className="mr-2 h-4 w-4 text-muted-foreground" />
              {isEditing ? (
                <Input
                  value={customerData.phone}
                  onChange={(e) => setCustomerData({ ...customerData, phone: e.target.value })}
                />
              ) : (
                <span>{customerData.phone}</span>
              )}
            </div>
            <div className="flex items-start">
              <MapPin className="mr-2 h-4 w-4 text-muted-foreground mt-1" />
              {isEditing ? (
                <Textarea
                  value={customerData.address}
                  onChange={(e) => setCustomerData({ ...customerData, address: e.target.value })}
                  className="min-h-[80px]"
                />
              ) : (
                <span>{customerData.address}</span>
              )}
            </div>

            <Separator />

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Star className="mr-2 h-4 w-4 text-yellow-500" />
                  <span>Loyalty Points</span>
                </div>
                <Badge variant="outline" className="ml-auto">
                  {customerData.loyaltyPoints} pts
                </Badge>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <User className="mr-2 h-4 w-4 text-muted-foreground" />
                  <span>Member Since</span>
                </div>
                <span className="text-sm">{customerData.joinDate}</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <ShoppingBag className="mr-2 h-4 w-4 text-muted-foreground" />
                  <span>Total Visits</span>
                </div>
                <span className="text-sm">{customerData.visits}</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                  <span>Last Visit</span>
                </div>
                <span className="text-sm">{customerData.lastVisit}</span>
              </div>
            </div>

            <Separator />

            <div className="space-y-2">
              <Label>Preferences</Label>
              {isEditing ? (
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select preferences" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cappuccino">Cappuccino</SelectItem>
                    <SelectItem value="latte">Latte</SelectItem>
                    <SelectItem value="mocha">Mocha</SelectItem>
                    <SelectItem value="espresso">Espresso</SelectItem>
                    <SelectItem value="croissant">Croissant</SelectItem>
                    <SelectItem value="muffin">Chocolate Muffin</SelectItem>
                  </SelectContent>
                </Select>
              ) : (
                <div className="flex flex-wrap gap-1">
                  {customerData.preferences.map((pref) => (
                    <Badge key={pref} variant="outline">
                      {pref}
                    </Badge>
                  ))}
                </div>
              )}
            </div>

            <div className="space-y-2">
              <Label>Notes</Label>
              {isEditing ? (
                <Textarea
                  value={customerData.notes}
                  onChange={(e) => setCustomerData({ ...customerData, notes: e.target.value })}
                  className="min-h-[100px]"
                />
              ) : (
                <p className="text-sm text-muted-foreground">{customerData.notes}</p>
              )}
            </div>
          </CardContent>
        </Card>

        <div className="md:col-span-2 space-y-4">
          <Tabs defaultValue="orders" className="space-y-4">
            <TabsList>
              <TabsTrigger value="orders">Order History</TabsTrigger>
              <TabsTrigger value="rewards">Rewards</TabsTrigger>
              <TabsTrigger value="marketing">Marketing</TabsTrigger>
            </TabsList>

            <TabsContent value="orders" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Order History</CardTitle>
                  <CardDescription>View customer's past orders</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Order ID</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Items</TableHead>
                        <TableHead>Total</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {orderHistory.map((order) => (
                        <TableRow key={order.id}>
                          <TableCell className="font-medium">{order.id}</TableCell>
                          <TableCell>{order.date}</TableCell>
                          <TableCell>
                            <div className="flex flex-wrap gap-1">
                              {order.items.map((item, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {item}
                                </Badge>
                              ))}
                            </div>
                          </TableCell>
                          <TableCell>{order.total}</TableCell>
                          <TableCell>{order.type}</TableCell>
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
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View All Orders
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Spending Analysis</CardTitle>
                  <CardDescription>Customer spending patterns</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm font-medium">Total Spent</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold">{customerData.totalSpent}</div>
                          <p className="text-xs text-muted-foreground">Lifetime value</p>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm font-medium">Average Order</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold">$15.64</div>
                          <p className="text-xs text-muted-foreground">Per visit</p>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm font-medium">Visit Frequency</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold">Weekly</div>
                          <p className="text-xs text-muted-foreground">2.5 visits per week</p>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-sm font-medium">Most Ordered Items</h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="bg-primary/20 text-primary hover:bg-primary/30 border-none">Mocha (8)</Badge>
                        <Badge className="bg-primary/20 text-primary hover:bg-primary/30 border-none">
                          Chocolate Muffin (6)
                        </Badge>
                        <Badge className="bg-primary/20 text-primary hover:bg-primary/30 border-none">
                          Croissant (4)
                        </Badge>
                        <Badge className="bg-primary/20 text-primary hover:bg-primary/30 border-none">
                          Cappuccino (3)
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="rewards" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Loyalty Rewards</CardTitle>
                  <CardDescription>Available rewards for redemption</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {availableRewards.map((reward) => (
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
                        <CardFooter className="bg-muted/50 p-2">
                          <Button
                            variant="default"
                            size="sm"
                            className="w-full"
                            disabled={customerData.loyaltyPoints < reward.points}
                          >
                            {customerData.loyaltyPoints >= reward.points
                              ? "Redeem"
                              : `Need ${reward.points - customerData.loyaltyPoints} more points`}
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Reward History</CardTitle>
                  <CardDescription>Previously redeemed rewards</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Reward</TableHead>
                        <TableHead>Date Redeemed</TableHead>
                        <TableHead>Points Used</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Free Coffee</TableCell>
                        <TableCell>Apr 15, 2025</TableCell>
                        <TableCell>50</TableCell>
                        <TableCell>
                          <Badge>Redeemed</Badge>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Free Pastry</TableCell>
                        <TableCell>Mar 22, 2025</TableCell>
                        <TableCell>75</TableCell>
                        <TableCell>
                          <Badge>Redeemed</Badge>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">25% Off Coupon</TableCell>
                        <TableCell>Feb 10, 2025</TableCell>
                        <TableCell>150</TableCell>
                        <TableCell>
                          <Badge>Redeemed</Badge>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="marketing" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Communication Preferences</CardTitle>
                  <CardDescription>Manage customer communication settings</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email-marketing">Email Marketing</Label>
                    <Select defaultValue="subscribed">
                      <SelectTrigger id="email-marketing">
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="subscribed">Subscribed</SelectItem>
                        <SelectItem value="unsubscribed">Unsubscribed</SelectItem>
                        <SelectItem value="bounced">Bounced</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="sms-marketing">SMS Marketing</Label>
                    <Select defaultValue="subscribed">
                      <SelectTrigger id="sms-marketing">
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="subscribed">Subscribed</SelectItem>
                        <SelectItem value="unsubscribed">Unsubscribed</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Marketing Tags</Label>
                    <div className="flex flex-wrap gap-1">
                      <Badge>Coffee Lover</Badge>
                      <Badge>Frequent Visitor</Badge>
                      <Badge>High Value</Badge>
                      <Badge variant="outline">+ Add Tag</Badge>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Update Preferences</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Campaign History</CardTitle>
                  <CardDescription>Past marketing campaigns sent to this customer</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Campaign</TableHead>
                        <TableHead>Date Sent</TableHead>
                        <TableHead>Channel</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Spring Coffee Festival</TableCell>
                        <TableCell>Apr 20, 2025</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>
                          <Badge variant="outline">Opened</Badge>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Loyalty Program Update</TableCell>
                        <TableCell>Mar 15, 2025</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>
                          <Badge variant="outline">Clicked</Badge>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Valentine's Day Special</TableCell>
                        <TableCell>Feb 10, 2025</TableCell>
                        <TableCell>SMS</TableCell>
                        <TableCell>
                          <Badge variant="outline">Delivered</Badge>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
