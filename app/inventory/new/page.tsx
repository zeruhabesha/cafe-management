"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Save, DollarSign, AlertTriangle, Calendar } from "lucide-react"
import Link from "next/link"
import { DatePicker } from "@/components/ui/date-picker"

// Sample categories
const categories = ["Ingredients", "Packaging", "Equipment", "Cleaning", "Office", "Other"]

// Sample units
const units = ["kg", "g", "l", "ml", "pieces", "boxes", "bottles", "packs"]

// Sample suppliers
const suppliers = [
  { id: 1, name: "Coffee Suppliers Inc." },
  { id: 2, name: "Local Dairy" },
  { id: 3, name: "Sweet Supplies Co." },
  { id: 4, name: "Flavor Essentials" },
  { id: 5, name: "Packaging Plus" },
  { id: 6, name: "Cafe Equipment Co." },
]

// Sample storage locations
const storageLocations = [
  "Main Storage",
  "Refrigerator",
  "Freezer",
  "Dry Storage",
  "Front Counter",
  "Kitchen",
  "Office",
]

export default function NewInventoryItemPage() {
  const [itemData, setItemData] = useState({
    name: "",
    category: "",
    unit: "",
    currentStock: "",
    reorderThreshold: "",
    supplier: "",
    costPerUnit: "",
    storageLocation: "",
    sku: "",
    barcode: "",
    description: "",
    expirationDate: undefined,
    perishable: false,
    trackExpiration: false,
    notes: "",
  })

  const handleSave = () => {
    // Here you would typically save the inventory item data to your backend
    console.log(itemData)
    alert("Inventory item created successfully!")
    // Redirect to inventory page or clear form
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/inventory">
            <Button variant="ghost" size="icon" className="mr-2">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h2 className="text-3xl font-bold tracking-tight">Add New Inventory Item</h2>
        </div>
        <Button onClick={handleSave}>
          <Save className="mr-2 h-4 w-4" />
          Save Item
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Basic Information</CardTitle>
            <CardDescription>Enter the essential details about this inventory item</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Item Name *</Label>
              <Input
                id="name"
                placeholder="e.g., Coffee Beans (Arabica)"
                value={itemData.name}
                onChange={(e) => setItemData({ ...itemData, name: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Category *</Label>
              <Select
                value={itemData.category}
                onValueChange={(value) => setItemData({ ...itemData, category: value })}
                required
              >
                <SelectTrigger id="category">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="unit">Unit of Measurement *</Label>
              <Select
                value={itemData.unit}
                onValueChange={(value) => setItemData({ ...itemData, unit: value })}
                required
              >
                <SelectTrigger id="unit">
                  <SelectValue placeholder="Select unit" />
                </SelectTrigger>
                <SelectContent>
                  {units.map((unit) => (
                    <SelectItem key={unit} value={unit}>
                      {unit}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="supplier">Supplier</Label>
              <Select
                value={itemData.supplier}
                onValueChange={(value) => setItemData({ ...itemData, supplier: value })}
              >
                <SelectTrigger id="supplier">
                  <SelectValue placeholder="Select supplier" />
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

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                className="min-h-[100px]"
                placeholder="Describe the inventory item..."
                value={itemData.description}
                onChange={(e) => setItemData({ ...itemData, description: e.target.value })}
              />
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Inventory Details</CardTitle>
            <CardDescription>Manage stock levels and tracking information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="current-stock">Current Stock *</Label>
                <Input
                  id="current-stock"
                  type="number"
                  placeholder="e.g., 10"
                  value={itemData.currentStock}
                  onChange={(e) => setItemData({ ...itemData, currentStock: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="reorder-threshold">Reorder Threshold *</Label>
                <Input
                  id="reorder-threshold"
                  type="number"
                  placeholder="e.g., 5"
                  value={itemData.reorderThreshold}
                  onChange={(e) => setItemData({ ...itemData, reorderThreshold: e.target.value })}
                  required
                />
                <p className="text-xs text-muted-foreground">System will alert when stock falls below this level</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="cost-per-unit">Cost Per Unit</Label>
                <div className="relative">
                  <DollarSign className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="cost-per-unit"
                    type="number"
                    step="0.01"
                    className="pl-8"
                    placeholder="0.00"
                    value={itemData.costPerUnit}
                    onChange={(e) => setItemData({ ...itemData, costPerUnit: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="storage-location">Storage Location</Label>
                <Select
                  value={itemData.storageLocation}
                  onValueChange={(value) => setItemData({ ...itemData, storageLocation: value })}
                >
                  <SelectTrigger id="storage-location">
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent>
                    {storageLocations.map((location) => (
                      <SelectItem key={location} value={location}>
                        {location}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Separator />

            <div className="space-y-4">
              <h3 className="text-lg font-medium">Identification</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="sku">SKU / Item Code</Label>
                  <Input
                    id="sku"
                    placeholder="e.g., COF-ARA-001"
                    value={itemData.sku}
                    onChange={(e) => setItemData({ ...itemData, sku: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="barcode">Barcode / UPC</Label>
                  <Input
                    id="barcode"
                    placeholder="e.g., 123456789012"
                    value={itemData.barcode}
                    onChange={(e) => setItemData({ ...itemData, barcode: e.target.value })}
                  />
                </div>
              </div>
            </div>

            <Separator />

            <div className="space-y-4">
              <h3 className="text-lg font-medium">Expiration Tracking</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="perishable">Perishable Item</Label>
                    <Switch
                      id="perishable"
                      checked={itemData.perishable}
                      onCheckedChange={(checked) => setItemData({ ...itemData, perishable: checked })}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">Mark if this item has a limited shelf life</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="track-expiration">Track Expiration</Label>
                    <Switch
                      id="track-expiration"
                      checked={itemData.trackExpiration}
                      onCheckedChange={(checked) => setItemData({ ...itemData, trackExpiration: checked })}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">Enable expiration date tracking for this item</p>
                </div>

                {(itemData.perishable || itemData.trackExpiration) && (
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="expiration-date">Default Shelf Life / Expiration</Label>
                    <div className="flex items-center">
                      <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                      <DatePicker
                        id="expiration-date"
                        selected={itemData.expirationDate}
                        onSelect={(date) => setItemData({ ...itemData, expirationDate: date })}
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">Set the typical expiration timeframe for this item</p>
                  </div>
                )}
              </div>
            </div>

            <Separator />

            <div className="space-y-2">
              <Label htmlFor="notes">Additional Notes</Label>
              <Textarea
                id="notes"
                className="min-h-[100px]"
                placeholder="Enter any additional information about this inventory item..."
                value={itemData.notes}
                onChange={(e) => setItemData({ ...itemData, notes: e.target.value })}
              />
            </div>

            <div className="flex items-center p-4 border rounded-md bg-amber-50 border-amber-200">
              <AlertTriangle className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0" />
              <div className="text-sm text-amber-800">
                <p className="font-medium">Important</p>
                <p>
                  Items with low stock will appear in the inventory alerts dashboard. Make sure to set an appropriate
                  reorder threshold.
                </p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button onClick={handleSave}>
              <Save className="mr-2 h-4 w-4" />
              Save Inventory Item
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
