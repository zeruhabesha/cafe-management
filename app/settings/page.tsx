import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import {
  Users,
  Building,
  CreditCard,
  SettingsIcon,
  PlusCircle,
  Edit,
  Trash2,
  Save,
  Globe,
  Bell,
  Lock,
  Database,
} from "lucide-react"

// Sample users data
const users = [
  {
    id: 1,
    name: "John Smith",
    email: "john@example.com",
    role: "Admin",
    status: "Active",
    lastLogin: "May 7, 2025, 10:30 AM",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah@example.com",
    role: "Manager",
    status: "Active",
    lastLogin: "May 6, 2025, 9:15 AM",
  },
  {
    id: 3,
    name: "Michael Brown",
    email: "michael@example.com",
    role: "Cashier",
    status: "Active",
    lastLogin: "May 7, 2025, 8:45 AM",
  },
  {
    id: 4,
    name: "Emily Davis",
    email: "emily@example.com",
    role: "Waiter",
    status: "Inactive",
    lastLogin: "Apr 30, 2025, 5:20 PM",
  },
  {
    id: 5,
    name: "David Wilson",
    email: "david@example.com",
    role: "Kitchen Staff",
    status: "Active",
    lastLogin: "May 7, 2025, 7:30 AM",
  },
]

// Sample branches data
const branches = [
  {
    id: 1,
    name: "Downtown Cafe",
    address: "123 Main St, Downtown",
    phone: "555-123-4567",
    manager: "Sarah Johnson",
    tables: 15,
    status: "Open",
  },
  {
    id: 2,
    name: "Uptown Cafe",
    address: "456 High St, Uptown",
    phone: "555-234-5678",
    manager: "Michael Brown",
    tables: 12,
    status: "Open",
  },
  {
    id: 3,
    name: "Riverside Cafe",
    address: "789 River Rd, Riverside",
    phone: "555-345-6789",
    manager: "Emily Davis",
    tables: 10,
    status: "Closed",
  },
]

// Sample payment methods
const paymentMethods = [
  {
    id: 1,
    name: "Cash",
    enabled: true,
    default: true,
  },
  {
    id: 2,
    name: "Credit Card",
    enabled: true,
    default: false,
  },
  {
    id: 3,
    name: "Debit Card",
    enabled: true,
    default: false,
  },
  {
    id: 4,
    name: "Mobile Payment",
    enabled: false,
    default: false,
  },
  {
    id: 5,
    name: "Gift Card",
    enabled: true,
    default: false,
  },
]

export default function SettingsPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
        <Button>
          <Save className="mr-2 h-4 w-4" />
          Save Changes
        </Button>
      </div>

      <Tabs defaultValue="users" className="space-y-4">
        <TabsList>
          <TabsTrigger value="users">
            <Users className="mr-2 h-4 w-4" />
            Users
          </TabsTrigger>
          <TabsTrigger value="branches">
            <Building className="mr-2 h-4 w-4" />
            Branches
          </TabsTrigger>
          <TabsTrigger value="payments">
            <CreditCard className="mr-2 h-4 w-4" />
            Payments
          </TabsTrigger>
          <TabsTrigger value="system">
            <SettingsIcon className="mr-2 h-4 w-4" />
            System
          </TabsTrigger>
        </TabsList>

        <TabsContent value="users" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>User Management</CardTitle>
                <CardDescription>Manage user accounts and permissions</CardDescription>
              </div>
              <Button>
                <PlusCircle className="mr-2 h-4 w-4" />
                Add User
              </Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Last Login</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell className="font-medium">{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{user.role}</TableCell>
                      <TableCell>
                        <Badge variant={user.status === "Active" ? "default" : "outline"}>{user.status}</Badge>
                      </TableCell>
                      <TableCell>{user.lastLogin}</TableCell>
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

          <Card>
            <CardHeader>
              <CardTitle>Role Permissions</CardTitle>
              <CardDescription>Configure access levels for each role</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label className="text-base">Admin</Label>
                  <p className="text-sm text-muted-foreground">Full access to all features and settings</p>
                </div>
                <Separator />
                <div>
                  <Label className="text-base">Manager</Label>
                  <p className="text-sm text-muted-foreground">Access to most features except system settings</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="flex items-center justify-between space-x-2">
                      <Label htmlFor="manager-orders" className="flex-1">
                        Orders Management
                      </Label>
                      <Switch id="manager-orders" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between space-x-2">
                      <Label htmlFor="manager-menu" className="flex-1">
                        Menu Management
                      </Label>
                      <Switch id="manager-menu" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between space-x-2">
                      <Label htmlFor="manager-inventory" className="flex-1">
                        Inventory Management
                      </Label>
                      <Switch id="manager-inventory" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between space-x-2">
                      <Label htmlFor="manager-customers" className="flex-1">
                        Customer Management
                      </Label>
                      <Switch id="manager-customers" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between space-x-2">
                      <Label htmlFor="manager-reports" className="flex-1">
                        Reports & Analytics
                      </Label>
                      <Switch id="manager-reports" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between space-x-2">
                      <Label htmlFor="manager-users" className="flex-1">
                        User Management
                      </Label>
                      <Switch id="manager-users" />
                    </div>
                  </div>
                </div>
                <Separator />
                <div>
                  <Label className="text-base">Cashier</Label>
                  <p className="text-sm text-muted-foreground">Limited access to orders and customers</p>
                </div>
                <Separator />
                <div>
                  <Label className="text-base">Waiter</Label>
                  <p className="text-sm text-muted-foreground">Access to orders and menu only</p>
                </div>
                <Separator />
                <div>
                  <Label className="text-base">Kitchen Staff</Label>
                  <p className="text-sm text-muted-foreground">Access to orders and inventory only</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="branches" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Branch Management</CardTitle>
                <CardDescription>Manage your cafe locations</CardDescription>
              </div>
              <Button>
                <PlusCircle className="mr-2 h-4 w-4" />
                Add Branch
              </Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Address</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead>Manager</TableHead>
                    <TableHead>Tables</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {branches.map((branch) => (
                    <TableRow key={branch.id}>
                      <TableCell className="font-medium">{branch.name}</TableCell>
                      <TableCell>{branch.address}</TableCell>
                      <TableCell>{branch.phone}</TableCell>
                      <TableCell>{branch.manager}</TableCell>
                      <TableCell>{branch.tables}</TableCell>
                      <TableCell>
                        <Badge variant={branch.status === "Open" ? "default" : "outline"}>{branch.status}</Badge>
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

          <Card>
            <CardHeader>
              <CardTitle>Branch Settings</CardTitle>
              <CardDescription>Configure settings for all branches</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="default-branch">Default Branch</Label>
                  <Select defaultValue="1">
                    <SelectTrigger id="default-branch">
                      <SelectValue placeholder="Select a branch" />
                    </SelectTrigger>
                    <SelectContent>
                      {branches.map((branch) => (
                        <SelectItem key={branch.id} value={branch.id.toString()}>
                          {branch.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="inventory-sync">Inventory Synchronization</Label>
                  <Select defaultValue="manual">
                    <SelectTrigger id="inventory-sync">
                      <SelectValue placeholder="Select sync method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="manual">Manual</SelectItem>
                      <SelectItem value="daily">Daily</SelectItem>
                      <SelectItem value="realtime">Real-time</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between space-x-2">
                  <Label htmlFor="shared-menu" className="flex-1">
                    Shared Menu Across Branches
                  </Label>
                  <Switch id="shared-menu" defaultChecked />
                </div>
                <p className="text-sm text-muted-foreground">
                  When enabled, all branches will share the same menu items and prices
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between space-x-2">
                  <Label htmlFor="cross-branch-orders" className="flex-1">
                    Allow Cross-Branch Orders
                  </Label>
                  <Switch id="cross-branch-orders" />
                </div>
                <p className="text-sm text-muted-foreground">
                  When enabled, customers can place orders for pickup at different branches
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="payments" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Payment Methods</CardTitle>
              <CardDescription>Configure accepted payment methods</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Method</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Default</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paymentMethods.map((method) => (
                    <TableRow key={method.id}>
                      <TableCell className="font-medium">{method.name}</TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Switch id={`payment-${method.id}`} defaultChecked={method.enabled} />
                          <Label htmlFor={`payment-${method.id}`}>{method.enabled ? "Enabled" : "Disabled"}</Label>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Switch id={`default-${method.id}`} defaultChecked={method.default} />
                          <Label htmlFor={`default-${method.id}`}>{method.default ? "Yes" : "No"}</Label>
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          Configure
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Payment Gateway</CardTitle>
              <CardDescription>Configure your payment processor</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="payment-gateway">Payment Gateway</Label>
                  <Select defaultValue="stripe">
                    <SelectTrigger id="payment-gateway">
                      <SelectValue placeholder="Select a gateway" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="stripe">Stripe</SelectItem>
                      <SelectItem value="paypal">PayPal</SelectItem>
                      <SelectItem value="square">Square</SelectItem>
                      <SelectItem value="custom">Custom</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="currency">Currency</Label>
                  <Select defaultValue="usd">
                    <SelectTrigger id="currency">
                      <SelectValue placeholder="Select currency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="usd">USD ($)</SelectItem>
                      <SelectItem value="eur">EUR (€)</SelectItem>
                      <SelectItem value="gbp">GBP (£)</SelectItem>
                      <SelectItem value="cad">CAD ($)</SelectItem>
                      <SelectItem value="aud">AUD ($)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="api-key">API Key</Label>
                <Input id="api-key" type="password" value="••••••••••••••••••••••" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="webhook-url">Webhook URL</Label>
                <Input id="webhook-url" value="https://yourcafe.com/api/payment-webhook" />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between space-x-2">
                  <Label htmlFor="test-mode" className="flex-1">
                    Test Mode
                  </Label>
                  <Switch id="test-mode" />
                </div>
                <p className="text-sm text-muted-foreground">When enabled, payments will be processed in test mode</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tax Settings</CardTitle>
              <CardDescription>Configure tax rates and rules</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="tax-rate">Default Tax Rate (%)</Label>
                  <Input id="tax-rate" type="number" defaultValue="8.5" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tax-calculation">Tax Calculation</Label>
                  <Select defaultValue="inclusive">
                    <SelectTrigger id="tax-calculation">
                      <SelectValue placeholder="Select calculation method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="inclusive">Tax Inclusive</SelectItem>
                      <SelectItem value="exclusive">Tax Exclusive</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between space-x-2">
                  <Label htmlFor="tax-receipt" className="flex-1">
                    Show Tax on Receipt
                  </Label>
                  <Switch id="tax-receipt" defaultChecked />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="system" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
              <CardDescription>Configure system-wide settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="cafe-name">Cafe Name</Label>
                  <Input id="cafe-name" defaultValue="My Cafe" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-email">Contact Email</Label>
                  <Input id="contact-email" type="email" defaultValue="contact@mycafe.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" defaultValue="555-123-4567" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="timezone">Timezone</Label>
                  <Select defaultValue="america_new_york">
                    <SelectTrigger id="timezone">
                      <SelectValue placeholder="Select timezone" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="america_new_york">America/New York (UTC-5)</SelectItem>
                      <SelectItem value="america_chicago">America/Chicago (UTC-6)</SelectItem>
                      <SelectItem value="america_denver">America/Denver (UTC-7)</SelectItem>
                      <SelectItem value="america_los_angeles">America/Los Angeles (UTC-8)</SelectItem>
                      <SelectItem value="europe_london">Europe/London (UTC+0)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="logo">Logo</Label>
                <div className="flex items-center gap-4">
                  <img
                    src="/placeholder.svg?height=50&width=50"
                    alt="Cafe logo"
                    className="h-12 w-12 rounded-md object-cover"
                  />
                  <Button variant="outline">Upload New Logo</Button>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between space-x-2">
                  <Label htmlFor="maintenance-mode" className="flex-1">
                    Maintenance Mode
                  </Label>
                  <Switch id="maintenance-mode" />
                </div>
                <p className="text-sm text-muted-foreground">
                  When enabled, the system will be unavailable to users except administrators
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader className="flex flex-row items-center">
                <Globe className="mr-2 h-5 w-5" />
                <div>
                  <CardTitle>Localization</CardTitle>
                  <CardDescription>Language and regional settings</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="language">Language</Label>
                  <Select defaultValue="en">
                    <SelectTrigger id="language">
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="es">Spanish</SelectItem>
                      <SelectItem value="fr">French</SelectItem>
                      <SelectItem value="de">German</SelectItem>
                      <SelectItem value="zh">Chinese</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="date-format">Date Format</Label>
                  <Select defaultValue="mdy">
                    <SelectTrigger id="date-format">
                      <SelectValue placeholder="Select date format" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mdy">MM/DD/YYYY</SelectItem>
                      <SelectItem value="dmy">DD/MM/YYYY</SelectItem>
                      <SelectItem value="ymd">YYYY/MM/DD</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="time-format">Time Format</Label>
                  <Select defaultValue="12h">
                    <SelectTrigger id="time-format">
                      <SelectValue placeholder="Select time format" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="12h">12-hour (AM/PM)</SelectItem>
                      <SelectItem value="24h">24-hour</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center">
                <Bell className="mr-2 h-5 w-5" />
                <div>
                  <CardTitle>Notifications</CardTitle>
                  <CardDescription>Configure system notifications</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between space-x-2">
                    <Label htmlFor="new-order" className="flex-1">
                      New Order Notifications
                    </Label>
                    <Switch id="new-order" defaultChecked />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between space-x-2">
                    <Label htmlFor="low-inventory" className="flex-1">
                      Low Inventory Alerts
                    </Label>
                    <Switch id="low-inventory" defaultChecked />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between space-x-2">
                    <Label htmlFor="daily-summary" className="flex-1">
                      Daily Summary Email
                    </Label>
                    <Switch id="daily-summary" defaultChecked />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notification-email">Notification Email</Label>
                  <Input id="notification-email" type="email" defaultValue="alerts@mycafe.com" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center">
                <Lock className="mr-2 h-5 w-5" />
                <div>
                  <CardTitle>Security</CardTitle>
                  <CardDescription>Configure security settings</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between space-x-2">
                    <Label htmlFor="two-factor" className="flex-1">
                      Two-Factor Authentication
                    </Label>
                    <Switch id="two-factor" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password-policy">Password Policy</Label>
                  <Select defaultValue="strong">
                    <SelectTrigger id="password-policy">
                      <SelectValue placeholder="Select policy" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="basic">Basic (8+ characters)</SelectItem>
                      <SelectItem value="medium">Medium (8+ chars, mixed case)</SelectItem>
                      <SelectItem value="strong">Strong (8+ chars, mixed case, numbers)</SelectItem>
                      <SelectItem value="very-strong">Very Strong (12+ chars, mixed case, numbers, symbols)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="session-timeout">Session Timeout (minutes)</Label>
                  <Input id="session-timeout" type="number" defaultValue="30" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center">
                <Database className="mr-2 h-5 w-5" />
                <div>
                  <CardTitle>Backup & Restore</CardTitle>
                  <CardDescription>Manage system backups</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between space-x-2">
                    <Label htmlFor="auto-backup" className="flex-1">
                      Automatic Backups
                    </Label>
                    <Switch id="auto-backup" defaultChecked />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="backup-frequency">Backup Frequency</Label>
                  <Select defaultValue="daily">
                    <SelectTrigger id="backup-frequency">
                      <SelectValue placeholder="Select frequency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hourly">Hourly</SelectItem>
                      <SelectItem value="daily">Daily</SelectItem>
                      <SelectItem value="weekly">Weekly</SelectItem>
                      <SelectItem value="monthly">Monthly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="backup-retention">Backup Retention (days)</Label>
                  <Input id="backup-retention" type="number" defaultValue="30" />
                </div>

                <div className="flex justify-between">
                  <Button variant="outline">Create Manual Backup</Button>
                  <Button variant="outline">Restore from Backup</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
