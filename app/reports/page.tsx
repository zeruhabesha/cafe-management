import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, Calendar, Filter, BarChart3, LineChart } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Bar,
  BarChart as RechartsBarChart,
  Line,
  LineChart as RechartsLineChart,
  Pie,
  PieChart as RechartsPieChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
  Legend,
} from "recharts"

const salesData = [
  { name: "Mon", sales: 1200 },
  { name: "Tue", sales: 1800 },
  { name: "Wed", sales: 1500 },
  { name: "Thu", sales: 2000 },
  { name: "Fri", sales: 2400 },
  { name: "Sat", sales: 2800 },
  { name: "Sun", sales: 1900 },
]

const monthlyData = [
  { name: "Jan", sales: 12000 },
  { name: "Feb", sales: 14000 },
  { name: "Mar", sales: 16000 },
  { name: "Apr", sales: 18000 },
  { name: "May", sales: 21000 },
  { name: "Jun", sales: 25000 },
  { name: "Jul", sales: 28000 },
  { name: "Aug", sales: 30000 },
  { name: "Sep", sales: 26000 },
  { name: "Oct", sales: 22000 },
  { name: "Nov", sales: 18000 },
  { name: "Dec", sales: 24000 },
]

const categoryData = [
  { name: "Coffee", value: 45 },
  { name: "Pastry", value: 25 },
  { name: "Dessert", value: 15 },
  { name: "Beverage", value: 15 },
]

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]

const topSellingItems = [
  {
    name: "Cappuccino",
    category: "Coffee",
    quantity: 120,
    revenue: "$540.00",
    profit: "$324.00",
    profitMargin: "60%",
  },
  {
    name: "Latte",
    category: "Coffee",
    quantity: 98,
    revenue: "$465.50",
    profit: "$279.30",
    profitMargin: "60%",
  },
  {
    name: "Espresso",
    category: "Coffee",
    quantity: 86,
    revenue: "$301.00",
    profit: "$180.60",
    profitMargin: "60%",
  },
  {
    name: "Mocha",
    category: "Coffee",
    quantity: 75,
    revenue: "$393.75",
    profit: "$236.25",
    profitMargin: "60%",
  },
  {
    name: "Croissant",
    category: "Pastry",
    quantity: 65,
    revenue: "$211.25",
    profit: "$105.63",
    profitMargin: "50%",
  },
  {
    name: "Cheesecake",
    category: "Dessert",
    quantity: 54,
    revenue: "$297.00",
    profit: "$148.50",
    profitMargin: "50%",
  },
  {
    name: "Chocolate Muffin",
    category: "Pastry",
    quantity: 48,
    revenue: "$180.00",
    profit: "$90.00",
    profitMargin: "50%",
  },
  {
    name: "Iced Tea",
    category: "Beverage",
    quantity: 42,
    revenue: "$126.00",
    profit: "$75.60",
    profitMargin: "60%",
  },
]

const orderTypeData = [
  { name: "Dine-in", value: 55 },
  { name: "Takeout", value: 30 },
  { name: "Delivery", value: 15 },
]

export default function ReportsPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Reports & Analytics</h2>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Calendar className="mr-2 h-4 w-4" />
            Date Range
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Select defaultValue="daily">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select period" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="daily">Daily</SelectItem>
            <SelectItem value="weekly">Weekly</SelectItem>
            <SelectItem value="monthly">Monthly</SelectItem>
            <SelectItem value="yearly">Yearly</SelectItem>
          </SelectContent>
        </Select>

        <Button variant="outline" size="icon">
          <Filter className="h-4 w-4" />
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$15,231.89</div>
            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,248</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Order Value</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$12.20</div>
            <p className="text-xs text-muted-foreground">+5% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Profit Margin</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">58.3%</div>
            <p className="text-xs text-muted-foreground">+2.5% from last month</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="sales" className="space-y-4">
        <TabsList>
          <TabsTrigger value="sales">Sales</TabsTrigger>
          <TabsTrigger value="items">Items</TabsTrigger>
          <TabsTrigger value="orders">Orders</TabsTrigger>
        </TabsList>

        <TabsContent value="sales" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Sales Overview</CardTitle>
                  <CardDescription>Daily sales for the current week</CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <LineChart className="h-4 w-4 text-muted-foreground" />
                </div>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={350}>
                  <RechartsBarChart data={salesData}>
                    <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis
                      stroke="#888888"
                      fontSize={12}
                      tickLine={false}
                      axisLine={false}
                      tickFormatter={(value) => `$${value}`}
                    />
                    <Tooltip />
                    <Bar dataKey="sales" fill="#8884d8" radius={[4, 4, 0, 0]} />
                  </RechartsBarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Sales by Category</CardTitle>
                <CardDescription>Distribution of sales across categories</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center">
                <ResponsiveContainer width="100%" height={300}>
                  <RechartsPieChart>
                    <Pie
                      data={categoryData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {categoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </RechartsPieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Monthly Sales Trend</CardTitle>
              <CardDescription>Sales performance over the past 12 months</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                <RechartsLineChart data={monthlyData}>
                  <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `$${value}`}
                  />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="sales"
                    stroke="#8884d8"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    activeDot={{ r: 8 }}
                  />
                </RechartsLineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="items" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Top Selling Items</CardTitle>
              <CardDescription>Your best performing menu items</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Item</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Quantity Sold</TableHead>
                    <TableHead>Revenue</TableHead>
                    <TableHead>Profit</TableHead>
                    <TableHead>Profit Margin</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {topSellingItems.map((item) => (
                    <TableRow key={item.name}>
                      <TableCell className="font-medium">{item.name}</TableCell>
                      <TableCell>{item.category}</TableCell>
                      <TableCell>{item.quantity}</TableCell>
                      <TableCell>{item.revenue}</TableCell>
                      <TableCell>{item.profit}</TableCell>
                      <TableCell>{item.profitMargin}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Sales by Category</CardTitle>
                <CardDescription>Distribution of sales across categories</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center">
                <ResponsiveContainer width="100%" height={300}>
                  <RechartsPieChart>
                    <Pie
                      data={categoryData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {categoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </RechartsPieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Item Performance</CardTitle>
                <CardDescription>Top 5 items by revenue</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <RechartsBarChart
                    data={topSellingItems.slice(0, 5).map((item) => ({
                      name: item.name,
                      revenue: Number.parseFloat(item.revenue.replace("$", "")),
                    }))}
                    layout="vertical"
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <XAxis type="number" tickFormatter={(value) => `$${value}`} />
                    <YAxis type="category" dataKey="name" width={100} />
                    <Tooltip />
                    <Bar dataKey="revenue" fill="#8884d8" />
                  </RechartsBarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="orders" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Orders by Type</CardTitle>
                <CardDescription>Distribution of order types</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center">
                <ResponsiveContainer width="100%" height={300}>
                  <RechartsPieChart>
                    <Pie
                      data={orderTypeData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {orderTypeData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </RechartsPieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Average Order Value</CardTitle>
                <CardDescription>By order type</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <RechartsBarChart
                    data={[
                      { name: "Dine-in", value: 15.75 },
                      { name: "Takeout", value: 12.3 },
                      { name: "Delivery", value: 18.45 },
                    ]}
                  >
                    <XAxis dataKey="name" />
                    <YAxis tickFormatter={(value) => `$${value}`} />
                    <Tooltip />
                    <Bar dataKey="value" fill="#8884d8" />
                  </RechartsBarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Order Time Distribution</CardTitle>
                <CardDescription>Orders by time of day</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <RechartsLineChart
                    data={[
                      { name: "6 AM", value: 5 },
                      { name: "8 AM", value: 25 },
                      { name: "10 AM", value: 15 },
                      { name: "12 PM", value: 30 },
                      { name: "2 PM", value: 20 },
                      { name: "4 PM", value: 15 },
                      { name: "6 PM", value: 35 },
                      { name: "8 PM", value: 25 },
                      { name: "10 PM", value: 10 },
                    ]}
                  >
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="value" stroke="#8884d8" />
                  </RechartsLineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Order Trends</CardTitle>
              <CardDescription>Weekly order volume over time</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                <RechartsLineChart
                  data={[
                    { week: "Week 1", dineIn: 120, takeout: 80, delivery: 40 },
                    { week: "Week 2", dineIn: 130, takeout: 90, delivery: 45 },
                    { week: "Week 3", dineIn: 125, takeout: 85, delivery: 50 },
                    { week: "Week 4", dineIn: 140, takeout: 95, delivery: 55 },
                    { week: "Week 5", dineIn: 150, takeout: 100, delivery: 60 },
                    { week: "Week 6", dineIn: 145, takeout: 105, delivery: 65 },
                    { week: "Week 7", dineIn: 160, takeout: 110, delivery: 70 },
                    { week: "Week 8", dineIn: 170, takeout: 115, delivery: 75 },
                  ]}
                >
                  <XAxis dataKey="week" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="dineIn" stroke="#8884d8" />
                  <Line type="monotone" dataKey="takeout" stroke="#82ca9d" />
                  <Line type="monotone" dataKey="delivery" stroke="#ffc658" />
                </RechartsLineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
