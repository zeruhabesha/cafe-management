"use client"

import { TableCell } from "@/components/ui/table"

import { TableBody } from "@/components/ui/table"

import { TableHead } from "@/components/ui/table"

import { TableRow } from "@/components/ui/table"

import { TableHeader } from "@/components/ui/table"

import { Table } from "@/components/ui/table"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Building, CreditCard, Users, Lock, Bell, Globe } from "lucide-react"

export default function SettingsPage() {
  const [cafeInfo, setCafeInfo] = useState({
    name: "My Cafe",
    address: "123 Coffee St, Cafe City",
    phone: "555-123-4567",
    email: "info@mycafe.com",
    website: "https://mycafe.com",
    openingHours: "Mon-Fri: 7am-8pm, Sat-Sun: 8am-9pm",
    description: "A cozy cafe serving the best coffee and pastries in town.",
  });
  
  const [paymentSettings, setPaymentSettings] = useState({
    acceptCash: true,
    acceptCard: true,
    acceptMobile: false,
    taxRate: "15",
    currency: "USD",
    receiptFooter: "Thank you for visiting My Cafe!",
  });
  
  const [userSettings, setUserSettings] = useState({
    name: "Admin User",
    email: "admin@mycafe.com",
    role: "admin",
    notifications: true,
    twoFactor: false,
  });
  
  const [systemSettings, setSystemSettings] = useState({
    language: "en",
    theme: "light",
    autoLogout: "30",
    backupFrequency: "daily",
    printReceipts: true,
    showTips: true,
  });
  
  const handleCafeInfoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setCafeInfo({
      ...cafeInfo,
      [e.target.name]: e.target.value,
    });
  };
  
  const handlePaymentSettingsChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPaymentSettings({
      ...paymentSettings,
      [e.target.name]: e.target.value,
    });
  };
  
  const handlePaymentToggle = (field: string) => {
    setPaymentSettings({
      ...paymentSettings,
      [field]: !paymentSettings[field as keyof typeof paymentSettings],
    });
  };
  
  const handleUserSettingsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserSettings({
      ...userSettings,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleUserToggle = (field: string) => {
    setUserSettings({
      ...userSettings,
      [field]: !userSettings[field as keyof typeof userSettings],
    });
  };
  
  const handleSystemSettingsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSystemSettings({
      ...systemSettings,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleSystemToggle = (field: string) => {
    setSystemSettings({
      ...systemSettings,
      [field]: !systemSettings[field as keyof typeof systemSettings],
    });
  };

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
      </div>
      
      <Tabs defaultValue="cafe" className="space-y-4">
        <TabsList>
          <TabsTrigger value="cafe">
            <Building className="mr-2 h-4 w-4" />
            Cafe Information
          </TabsTrigger>
          <TabsTrigger value="payment">
            <CreditCard className="mr-2 h-4 w-4" />
            Payment
          </TabsTrigger>
          <TabsTrigger value="users">
            <Users className="mr-2 h-4 w-4" />
            Users & Roles
          </TabsTrigger>
          <TabsTrigger value="system">
            <Globe className="mr-2 h-4 w-4" />
            System
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="cafe" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Cafe Information</CardTitle>
              <CardDescription>
                Manage your cafe's basic information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Cafe Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={cafeInfo.name}
                    onChange={handleCafeInfoChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={cafeInfo.phone}
                    onChange={handleCafeInfoChange}
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={cafeInfo.email}
                    onChange={handleCafeInfoChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="website">Website</Label>
                  <Input
                    id="website"
                    name="website"
                    value={cafeInfo.website}
                    onChange={handleCafeInfoChange}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Textarea
                  id="address"
                  name="address"
                  value={cafeInfo.address}
                  onChange={handleCafeInfoChange}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="openingHours">Opening Hours</Label>
                <Textarea
                  id="openingHours"
                  name="openingHours"
                  value={cafeInfo.openingHours}
                  onChange={handleCafeInfoChange}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={cafeInfo.description}
                  onChange={handleCafeInfoChange}
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancel</Button>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Cafe Logo & Branding</CardTitle>
              <CardDescription>
                Customize your cafe's visual identity
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="space-y-4">
                  <Label>Logo</Label>
                  <div className="flex items-center justify-center h-40 w-full border-2 border-dashed rounded-md">
                    <div className="flex flex-col items-center">
                      <svg
                        className="h-10 w-10 text-muted-foreground"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        ></path>
                      </svg>
                      <span className="mt-2 text-sm text-muted-foreground">
                        Click to upload or drag and drop
                      </span>
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Recommended size: 512x512px. Max file size: 2MB.
                  </div>
                </div>
                
                <div className="space-y-4">
                  <Label>Cover Image</Label>
                  <div className="flex items-center justify-center h-40 w-full border-2 border-dashed rounded-md">
                    <div className="flex flex-col items-center">
                      <svg
                        className="h-10 w-10 text-muted-foreground"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        ></path>
                      </svg>
                      <span className="mt-2 text-sm text-muted-foreground">
                        Click to upload or drag and drop
                      </span>
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Recommended size: 1200x600px. Max file size: 5MB.
                  </div>
                </div>
              </div>
              
              <Separator className="my-4" />
              
              <div className="space-y-2">
                <Label htmlFor="primaryColor">Primary Color</Label>
                <div className="flex items-center gap-2">
                  <Input
                    id="primaryColor"
                    type="color"
                    defaultValue="#8884d8"
                    className="w-12 h-10 p-1"
                  />
                  <Input defaultValue="#8884d8" className="flex-1" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="secondaryColor">Secondary Color</Label>
                <div className="flex items-center gap-2">
                  <Input
                    id="secondaryColor"
                    type="color"
                    defaultValue="#82ca9d"
                    className="w-12 h-10 p-1"
                  />
                  <Input defaultValue="#82ca9d" className="flex-1" />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Reset</Button>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="payment" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Payment Methods</CardTitle>
              <CardDescription>
                Configure accepted payment methods
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Accept Cash</Label>
                    <p className="text-sm text-muted-foreground">
                      Allow cash payments
                    </p>
                  </div>
                  <Switch
                    checked={paymentSettings.acceptCash}
                    onCheckedChange={() => handlePaymentToggle("acceptCash")}
                  />
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Accept Card Payments</Label>
                    <p className="text-sm text-muted-foreground">
                      Allow credit/debit card payments
                    </p>
                  </div>
                  <Switch
                    checked={paymentSettings.acceptCard}
                    onCheckedChange={() => handlePaymentToggle("acceptCard")}
                  />
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Accept Mobile Payments</Label>
                    <p className="text-sm text-muted-foreground">
                      Allow mobile payment methods (e.g., Telebirr)
                    </p>
                  </div>
                  <Switch
                    checked={paymentSettings.acceptMobile}
                    onCheckedChange={() => handlePaymentToggle("acceptMobile")}
                  />
                </div>
              </div>
              
              <Separator className="my-4" />
              
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="taxRate">Tax Rate (%)</Label>
                  <Input
                    id="taxRate"
                    name="taxRate"
                    type="number"
                    value={paymentSettings.taxRate}
                    onChange={handlePaymentSettingsChange}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="currency">Currency</Label>
                  <Select
                    defaultValue={paymentSettings.currency}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select currency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="USD">USD - US Dollar</SelectItem>
                      <SelectItem value="EUR">EUR - Euro</SelectItem>
                      <SelectItem value="GBP">GBP - British Pound</SelectItem>
                      <SelectItem value="ETB">ETB - Ethiopian Birr</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="receiptFooter">Receipt Footer Text</Label>
                <Textarea
                  id="receiptFooter"
                  name="receiptFooter"
                  value={paymentSettings.receiptFooter}
                  onChange={handlePaymentSettingsChange}
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancel</Button>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Payment Integrations</CardTitle>
              <CardDescription>
                Connect with payment processors
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-md border p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="rounded-full bg-gray-100 p-2">
                      <CreditCard className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-medium">Credit Card Processor</p>
                      <p className="text-sm text-muted-foreground">
                        Not connected
                      </p>
                    </div>
                  </div>
                  <Button variant="outline">Connect</Button>
                </div>
              </div>
              
              <div className="rounded-md border p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="rounded-full bg-gray-100 p-2">
                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.24 21.34V15.1c-3.23-.14-4.74-1.83-5.48-4.29l2.46-.84c.4 1.67 1.51 2.9 3.02 3.1v-6.5c-2.62-.55-5.39-1.23-5.39-4.55 0-2.84 2.4-4.31 5.39-4.45V2.5h2.02v.07c2.92.09 4.82 1.42 5.51 4.07l-2.42.81c-.4-1.55-1.37-2.38-3.09-2.56v6.24c2.82.34 5.52 1.34 5.52 4.87 0 2.9-2.51 4.54-5.52 4.71v.63h-2.02zm0-9.95V5.9c-1.7.17-2.52.88-2.52 2.07 0 1.33 1.12 1.78 2.52 2.12zm2.02 3.67v6.57c1.84-.13 2.74-1.1 2.74-2.27 0-1.52-1.16-2.02-2.74-2.3z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Telebirr Integration</p>
                      <p className="text-sm text-muted-foreground">
                        Not connected
                      </p>
                    </div>
                  </div>
                  <Button variant="outline">Connect</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="users" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>User Management</CardTitle>
              <CardDescription>
                Manage user accounts and permissions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Admin User</TableCell>
                    <TableCell>admin@mycafe.com</TableCell>
                    <TableCell>Admin</TableCell>
                    <TableCell>Active</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        Edit
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">John Smith</TableCell>
                    <TableCell>john@mycafe.com</TableCell>
                    <TableCell>Manager</TableCell>
                    <TableCell>Active</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        Edit
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Sarah Johnson</TableCell>
                    <TableCell>sarah@mycafe.com</TableCell>
                    <TableCell>Cashier</TableCell>
                    <TableCell>Active</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        Edit
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Michael Brown</TableCell>
                    <TableCell>michael@mycafe.com</TableCell>
                    <TableCell>Waiter</TableCell>
                    <TableCell>Active</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        Edit
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <div className="mt-4 flex justify-end">
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Add User
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Role Management</CardTitle>
              <CardDescription>
                Configure user roles and permissions
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-md border p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Admin</h3>
                    <p className="text-sm text-muted-foreground">
                      Full access to all features
                    </p>
                  </div>
                  <Button variant="outline" size="sm">
                    Edit Permissions
                  </Button>
                </div>
              </div>
              
              <div className="rounded-md border p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Manager</h3>
                    <p className="text-sm text-muted-foreground">
                      Access to most features except system settings
                    </p>
                  </div>
                  <Button variant="outline" size="sm">
                    Edit Permissions
                  </Button>
                </div>
              </div>
              
              <div className="rounded-md border p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Cashier</h3>
                    <p className="text-sm text-muted-foreground">
                      Access to orders and payments
                    </p>
                  </div>
                  <Button variant="outline" size="sm">
                    Edit Permissions
                  </Button>
                </div>
              </div>
              
              <div className="rounded-md border p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Waiter</h3>
                    <p className="text-sm text-muted-foreground">
                      Access to orders only
                    </p>
                  </div>
                  <Button variant="outline" size="sm">
                    Edit Permissions
                  </Button>
                </div>
              </div>
              
              <div className="mt-4 flex justify-end">
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Role
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Your Account</CardTitle>
              <CardDescription>
                Manage your account settings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="userName">Name</Label>
                  <Input
                    id="userName"
                    name="name"
                    value={userSettings.name}
                    onChange={handleUserSettingsChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="userEmail">Email</Label>
                  <Input
                    id="userEmail"
                    name="email"
                    type="email"
                    value={userSettings.email}
                    onChange={handleUserSettingsChange}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="userRole">Role</Label>
                <Select defaultValue={userSettings.role}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin">Admin</SelectItem>
                    <SelectItem value="manager">Manager</SelectItem>
                    <SelectItem value="cashier">Cashier</SelectItem>
                    <SelectItem value="waiter">Waiter</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Separator className="my-4" />
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="flex items-center">
                      <Bell className="mr-2 h-4 w-4" />
                      Notifications
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Receive notifications about orders and inventory
                    </p>
                  </div>
                  <Switch
                    checked={userSettings.notifications}
                    onCheckedChange={() => handleUserToggle("notifications")}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="flex items-center">
                      <Lock className="mr-2 h-4 w-4" />
                      Two-Factor Authentication
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Add an extra layer of security to your account
                    </p>
                  </div>
                  <Switch
                    checked={userSettings.twoFactor}
                    onCheckedChange={() => handleUserToggle("twoFactor")}
                  />
                </div>
              </div>
              
              <Separator className="my-4" />
              
              <div className="space-y-2">
                <Label htmlFor="currentPassword">Current Password</Label>
                <Input id="currentPassword" type="password" />
              </div>
              
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="newPassword">New Password</Label>
                  <Input id="newPassword" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input id="confirmPassword" type="password" />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancel</Button>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="system" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>System Settings</CardTitle>
              <CardDescription>
                Configure general system settings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="language">Language</Label>
                  <Select defaultValue={systemSettings.language}>
                    <SelectTrigger\
