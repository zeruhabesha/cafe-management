"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  ArrowLeft,
  Save,
  Edit,
  Trash2,
  Plus,
  Minus,
  Coffee,
  Tag,
  DollarSign,
  Utensils,
  Clock,
  BarChart,
  FileText,
  ImageIcon,
  AlertTriangle,
  Star,
} from "lucide-react"
import Link from "next/link"

// Sample menu item data
const menuItem = {
  id: 4,
  name: "Mocha",
  category: "Coffee",
  price: 5.25,
  description: "Espresso with chocolate and steamed milk",
  image: "/placeholder.svg?height=300&width=300",
  available: true,
  preparationTime: 5, // minutes
  calories: 215,
  ingredients: [
    { id: 1, name: "Espresso", quantity: "60ml" },
    { id: 2, name: "Chocolate Syrup", quantity: "30ml" },
    { id: 3, name: "Steamed Milk", quantity: "180ml" },
    { id: 4, name: "Whipped Cream", quantity: "15g" },
  ],
  allergens: ["Milk"],
  nutritionalInfo: {
    calories: 215,
    fat: 7,
    carbs: 32,
    protein: 8,
    sugar: 27,
  },
  tags: ["Hot", "Sweet", "Popular"],
  variants: [
    { id: 1, name: "Small", price: 4.25 },
    { id: 2, name: "Medium", price: 5.25 },
    { id: 3, name: "Large", price: 6.25 },
    { id: 4, name: "Iced", price: 5.75 },
  ],
  relatedItems: [
    { id: 2, name: "Latte", category: "Coffee", price: 4.75 },
    { id: 3, name: "Espresso", category: "Coffee", price: 3.5 },
    { id: 6, name: "Cheesecake", category: "Dessert", price: 5.5 },
  ],
  salesData: [
    { month: "Jan", sales: 120 },
    { month: "Feb", sales: 145 },
    { month: "Mar", sales: 132 },
    { month: "Apr", sales: 168 },
    { month: "May", sales: 175 },
  ],
}

// Sample categories
const categories = ["Coffee", "Tea", "Pastry", "Dessert", "Beverage", "Sandwich", "Salad"]

// Sample ingredients
const availableIngredients = [
  { id: 1, name: "Espresso", unit: "ml" },
  { id: 2, name: "Chocolate Syrup", unit: "ml" },
  { id: 3, name: "Steamed Milk", unit: "ml" },
  { id: 4, name: "Whipped Cream", unit: "g" },
  { id: 5, name: "Coffee Beans", unit: "g" },
  { id: 6, name: "Sugar", unit: "g" },
  { id: 7, name: "Vanilla Extract", unit: "ml" },
  { id: 8, name: "Caramel Syrup", unit: "ml" },
  { id: 9, name: "Cinnamon", unit: "g" },
  { id: 10, name: "Cocoa Powder", unit: "g" },
]

// Sample allergens
const allergenOptions = ["Milk", "Eggs", "Nuts", "Soy", "Wheat", "Gluten", "Fish", "Shellfish"]

export default function MenuItemDetailPage({ params }: { params: { id: string } }) {
  const [isEditing, setIsEditing] = useState(false)
  const [itemData, setItemData] = useState(menuItem)
  const [newIngredient, setNewIngredient] = useState({ id: "", quantity: "" })
  const [newVariant, setNewVariant] = useState({ name: "", price: "" })
  const [newTag, setNewTag] = useState("")

  const handleSave = () => {
    // Here you would typically save the menu item data to your backend
    setIsEditing(false)
    alert("Menu item updated successfully!")
  }

  const handleAddIngredient = () => {
    if (newIngredient.id && newIngredient.quantity) {
      const ingredient = availableIngredients.find((i) => i.id.toString() === newIngredient.id)
      if (ingredient) {
        setItemData({
          ...itemData,
          ingredients: [
            ...itemData.ingredients,
            {
              id: ingredient.id,
              name: ingredient.name,
              quantity: `${newIngredient.quantity}${ingredient.unit}`,
            },
          ],
        })
        setNewIngredient({ id: "", quantity: "" })
      }
    }
  }

  const handleRemoveIngredient = (id: number) => {
    setItemData({
      ...itemData,
      ingredients: itemData.ingredients.filter((i) => i.id !== id),
    })
  }

  const handleAddVariant = () => {
    if (newVariant.name && newVariant.price) {
      setItemData({
        ...itemData,
        variants: [
          ...itemData.variants,
          {
            id: itemData.variants.length + 1,
            name: newVariant.name,
            price: Number.parseFloat(newVariant.price),
          },
        ],
      })
      setNewVariant({ name: "", price: "" })
    }
  }

  const handleRemoveVariant = (id: number) => {
    setItemData({
      ...itemData,
      variants: itemData.variants.filter((v) => v.id !== id),
    })
  }

  const handleAddTag = () => {
    if (newTag && !itemData.tags.includes(newTag)) {
      setItemData({
        ...itemData,
        tags: [...itemData.tags, newTag],
      })
      setNewTag("")
    }
  }

  const handleRemoveTag = (tag: string) => {
    setItemData({
      ...itemData,
      tags: itemData.tags.filter((t) => t !== tag),
    })
  }

  const handleToggleAllergen = (allergen: string) => {
    if (itemData.allergens.includes(allergen)) {
      setItemData({
        ...itemData,
        allergens: itemData.allergens.filter((a) => a !== allergen),
      })
    } else {
      setItemData({
        ...itemData,
        allergens: [...itemData.allergens, allergen],
      })
    }
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/menu">
            <Button variant="ghost" size="icon" className="mr-2">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h2 className="text-3xl font-bold tracking-tight">Menu Item Details</h2>
        </div>
        <div className="flex items-center gap-2">
          {isEditing ? (
            <>
              <Button variant="outline" onClick={() => setIsEditing(false)}>
                Cancel
              </Button>
              <Button onClick={handleSave}>
                <Save className="mr-2 h-4 w-4" />
                Save Changes
              </Button>
            </>
          ) : (
            <>
              <Button variant="outline" className="text-red-500 hover:text-red-500 hover:bg-red-50">
                <Trash2 className="mr-2 h-4 w-4" />
                Delete
              </Button>
              <Button onClick={() => setIsEditing(true)}>
                <Edit className="mr-2 h-4 w-4" />
                Edit Item
              </Button>
            </>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Card className="md:col-span-1">
          <CardHeader>
            <div className="flex items-center justify-center">
              <div className="relative w-full aspect-square rounded-md overflow-hidden border">
                <img
                  src={itemData.image || "/placeholder.svg?height=300&width=300"}
                  alt={itemData.name}
                  className="object-cover w-full h-full"
                />
                {isEditing && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                    <Button variant="secondary">
                      <ImageIcon className="mr-2 h-4 w-4" />
                      Change Image
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Item Name</Label>
              {isEditing ? (
                <Input
                  id="name"
                  value={itemData.name}
                  onChange={(e) => setItemData({ ...itemData, name: e.target.value })}
                />
              ) : (
                <div className="flex items-center">
                  <Coffee className="mr-2 h-5 w-5 text-muted-foreground" />
                  <h3 className="text-xl font-semibold">{itemData.name}</h3>
                </div>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              {isEditing ? (
                <Select
                  value={itemData.category}
                  onValueChange={(value) => setItemData({ ...itemData, category: value })}
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
              ) : (
                <Badge>{itemData.category}</Badge>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="price">Base Price</Label>
              {isEditing ? (
                <div className="relative">
                  <DollarSign className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="price"
                    type="number"
                    step="0.01"
                    className="pl-8"
                    value={itemData.price}
                    onChange={(e) => setItemData({ ...itemData, price: Number.parseFloat(e.target.value) })}
                  />
                </div>
              ) : (
                <div className="flex items-center">
                  <DollarSign className="mr-1 h-4 w-4 text-muted-foreground" />
                  <span className="text-lg font-semibold">${itemData.price.toFixed(2)}</span>
                </div>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              {isEditing ? (
                <Textarea
                  id="description"
                  className="min-h-[100px]"
                  value={itemData.description}
                  onChange={(e) => setItemData({ ...itemData, description: e.target.value })}
                />
              ) : (
                <p className="text-sm text-muted-foreground">{itemData.description}</p>
              )}
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="available">Availability</Label>
                <Switch
                  id="available"
                  checked={itemData.available}
                  onCheckedChange={(checked) => setItemData({ ...itemData, available: checked })}
                  disabled={!isEditing}
                />
              </div>
              <p className="text-xs text-muted-foreground">
                {itemData.available
                  ? "This item is currently available for ordering"
                  : "This item is currently unavailable for ordering"}
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="prep-time">Preparation Time (minutes)</Label>
              {isEditing ? (
                <div className="relative">
                  <Clock className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="prep-time"
                    type="number"
                    className="pl-8"
                    value={itemData.preparationTime}
                    onChange={(e) => setItemData({ ...itemData, preparationTime: Number.parseInt(e.target.value) })}
                  />
                </div>
              ) : (
                <div className="flex items-center">
                  <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                  <span>{itemData.preparationTime} minutes</span>
                </div>
              )}
            </div>

            <div className="space-y-2">
              <Label>Tags</Label>
              <div className="flex flex-wrap gap-1">
                {itemData.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                    {tag}
                    {isEditing && (
                      <button onClick={() => handleRemoveTag(tag)} className="ml-1 rounded-full hover:bg-muted p-0.5">
                        <Minus className="h-3 w-3" />
                      </button>
                    )}
                  </Badge>
                ))}
                {isEditing && (
                  <div className="flex items-center gap-2 mt-2 w-full">
                    <Input
                      placeholder="New tag"
                      value={newTag}
                      onChange={(e) => setNewTag(e.target.value)}
                      className="flex-1"
                    />
                    <Button size="sm" variant="outline" onClick={handleAddTag}>
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="md:col-span-2 space-y-4">
          <Tabs defaultValue="details" className="space-y-4">
            <TabsList>
              <TabsTrigger value="details">
                <FileText className="mr-2 h-4 w-4" />
                Details
              </TabsTrigger>
              <TabsTrigger value="ingredients">
                <Utensils className="mr-2 h-4 w-4" />
                Ingredients
              </TabsTrigger>
              <TabsTrigger value="variants">
                <Tag className="mr-2 h-4 w-4" />
                Variants
              </TabsTrigger>
              <TabsTrigger value="analytics">
                <BarChart className="mr-2 h-4 w-4" />
                Analytics
              </TabsTrigger>
            </TabsList>

            <TabsContent value="details" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Nutritional Information</CardTitle>
                  <CardDescription>Nutritional details per serving</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    <Card>
                      <CardHeader className="p-3">
                        <CardTitle className="text-sm font-medium">Calories</CardTitle>
                      </CardHeader>
                      <CardContent className="p-3 pt-0">
                        {isEditing ? (
                          <Input
                            type="number"
                            value={itemData.nutritionalInfo.calories}
                            onChange={(e) =>
                              setItemData({
                                ...itemData,
                                nutritionalInfo: {
                                  ...itemData.nutritionalInfo,
                                  calories: Number.parseInt(e.target.value),
                                },
                              })
                            }
                          />
                        ) : (
                          <div className="text-2xl font-bold">{itemData.nutritionalInfo.calories}</div>
                        )}
                        <p className="text-xs text-muted-foreground">kcal</p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="p-3">
                        <CardTitle className="text-sm font-medium">Fat</CardTitle>
                      </CardHeader>
                      <CardContent className="p-3 pt-0">
                        {isEditing ? (
                          <Input
                            type="number"
                            value={itemData.nutritionalInfo.fat}
                            onChange={(e) =>
                              setItemData({
                                ...itemData,
                                nutritionalInfo: {
                                  ...itemData.nutritionalInfo,
                                  fat: Number.parseInt(e.target.value),
                                },
                              })
                            }
                          />
                        ) : (
                          <div className="text-2xl font-bold">{itemData.nutritionalInfo.fat}g</div>
                        )}
                        <p className="text-xs text-muted-foreground">Total Fat</p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="p-3">
                        <CardTitle className="text-sm font-medium">Carbs</CardTitle>
                      </CardHeader>
                      <CardContent className="p-3 pt-0">
                        {isEditing ? (
                          <Input
                            type="number"
                            value={itemData.nutritionalInfo.carbs}
                            onChange={(e) =>
                              setItemData({
                                ...itemData,
                                nutritionalInfo: {
                                  ...itemData.nutritionalInfo,
                                  carbs: Number.parseInt(e.target.value),
                                },
                              })
                            }
                          />
                        ) : (
                          <div className="text-2xl font-bold">{itemData.nutritionalInfo.carbs}g</div>
                        )}
                        <p className="text-xs text-muted-foreground">Total Carbs</p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="p-3">
                        <CardTitle className="text-sm font-medium">Protein</CardTitle>
                      </CardHeader>
                      <CardContent className="p-3 pt-0">
                        {isEditing ? (
                          <Input
                            type="number"
                            value={itemData.nutritionalInfo.protein}
                            onChange={(e) =>
                              setItemData({
                                ...itemData,
                                nutritionalInfo: {
                                  ...itemData.nutritionalInfo,
                                  protein: Number.parseInt(e.target.value),
                                },
                              })
                            }
                          />
                        ) : (
                          <div className="text-2xl font-bold">{itemData.nutritionalInfo.protein}g</div>
                        )}
                        <p className="text-xs text-muted-foreground">Protein</p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="p-3">
                        <CardTitle className="text-sm font-medium">Sugar</CardTitle>
                      </CardHeader>
                      <CardContent className="p-3 pt-0">
                        {isEditing ? (
                          <Input
                            type="number"
                            value={itemData.nutritionalInfo.sugar}
                            onChange={(e) =>
                              setItemData({
                                ...itemData,
                                nutritionalInfo: {
                                  ...itemData.nutritionalInfo,
                                  sugar: Number.parseInt(e.target.value),
                                },
                              })
                            }
                          />
                        ) : (
                          <div className="text-2xl font-bold">{itemData.nutritionalInfo.sugar}g</div>
                        )}
                        <p className="text-xs text-muted-foreground">Sugar</p>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Allergens</CardTitle>
                  <CardDescription>Allergen information for this item</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {allergenOptions.map((allergen) => (
                      <div key={allergen} className="flex items-center">
                        <Button
                          variant={itemData.allergens.includes(allergen) ? "default" : "outline"}
                          size="sm"
                          className={`${itemData.allergens.includes(allergen) ? "bg-red-500 hover:bg-red-600" : ""}`}
                          onClick={() => isEditing && handleToggleAllergen(allergen)}
                          disabled={!isEditing}
                        >
                          {allergen}
                          {itemData.allergens.includes(allergen) && <AlertTriangle className="ml-2 h-3 w-3" />}
                        </Button>
                      </div>
                    ))}
                  </div>
                  {!isEditing && itemData.allergens.length === 0 && (
                    <p className="text-sm text-muted-foreground">No allergens listed for this item</p>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Related Items</CardTitle>
                  <CardDescription>Items frequently ordered with this one</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {itemData.relatedItems.map((item) => (
                      <Card key={item.id}>
                        <div className="p-4 flex items-center">
                          <div className="w-12 h-12 rounded-md overflow-hidden mr-3">
                            <img
                              src="/placeholder.svg?height=48&width=48"
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="font-medium">{item.name}</h4>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Badge variant="outline" className="mr-2 text-xs">
                                {item.category}
                              </Badge>
                              <span>${item.price.toFixed(2)}</span>
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="ingredients" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Ingredients List</CardTitle>
                  <CardDescription>Ingredients used in this menu item</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Ingredient</TableHead>
                        <TableHead>Quantity</TableHead>
                        {isEditing && <TableHead className="text-right">Actions</TableHead>}
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {itemData.ingredients.map((ingredient) => (
                        <TableRow key={ingredient.id}>
                          <TableCell className="font-medium">{ingredient.name}</TableCell>
                          <TableCell>{ingredient.quantity}</TableCell>
                          {isEditing && (
                            <TableCell className="text-right">
                              <Button variant="ghost" size="sm" onClick={() => handleRemoveIngredient(ingredient.id)}>
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </TableCell>
                          )}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>

                  {isEditing && (
                    <div className="mt-4 flex items-end gap-2">
                      <div className="space-y-2 flex-1">
                        <Label htmlFor="ingredient">Ingredient</Label>
                        <Select
                          value={newIngredient.id}
                          onValueChange={(value) => setNewIngredient({ ...newIngredient, id: value })}
                        >
                          <SelectTrigger id="ingredient">
                            <SelectValue placeholder="Select ingredient" />
                          </SelectTrigger>
                          <SelectContent>
                            {availableIngredients.map((ingredient) => (
                              <SelectItem key={ingredient.id} value={ingredient.id.toString()}>
                                {ingredient.name} ({ingredient.unit})
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2 w-24">
                        <Label htmlFor="quantity">Quantity</Label>
                        <Input
                          id="quantity"
                          value={newIngredient.quantity}
                          onChange={(e) => setNewIngredient({ ...newIngredient, quantity: e.target.value })}
                        />
                      </div>
                      <Button className="mb-0.5" onClick={handleAddIngredient}>
                        <Plus className="h-4 w-4" />
                        Add
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Preparation Instructions</CardTitle>
                  <CardDescription>How to prepare this menu item</CardDescription>
                </CardHeader>
                <CardContent>
                  {isEditing ? (
                    <Textarea
                      className="min-h-[200px]"
                      placeholder="Enter preparation instructions..."
                      defaultValue="1. Pull a double shot of espresso into a cup.
2. Add 30ml of chocolate syrup and stir to combine.
3. Steam 180ml of milk until hot with a small amount of foam.
4. Pour the steamed milk into the espresso and chocolate mixture.
5. Top with whipped cream if desired.
6. Serve immediately."
                    />
                  ) : (
                    <div className="space-y-2">
                      <p className="text-sm">1. Pull a double shot of espresso into a cup.</p>
                      <p className="text-sm">2. Add 30ml of chocolate syrup and stir to combine.</p>
                      <p className="text-sm">3. Steam 180ml of milk until hot with a small amount of foam.</p>
                      <p className="text-sm">4. Pour the steamed milk into the espresso and chocolate mixture.</p>
                      <p className="text-sm">5. Top with whipped cream if desired.</p>
                      <p className="text-sm">6. Serve immediately.</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="variants" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Item Variants</CardTitle>
                  <CardDescription>Different sizes and options for this menu item</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Variant Name</TableHead>
                        <TableHead>Price</TableHead>
                        {isEditing && <TableHead className="text-right">Actions</TableHead>}
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {itemData.variants.map((variant) => (
                        <TableRow key={variant.id}>
                          <TableCell className="font-medium">{variant.name}</TableCell>
                          <TableCell>${variant.price.toFixed(2)}</TableCell>
                          {isEditing && (
                            <TableCell className="text-right">
                              <Button variant="ghost" size="sm" onClick={() => handleRemoveVariant(variant.id)}>
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </TableCell>
                          )}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>

                  {isEditing && (
                    <div className="mt-4 flex items-end gap-2">
                      <div className="space-y-2 flex-1">
                        <Label htmlFor="variant-name">Variant Name</Label>
                        <Input
                          id="variant-name"
                          placeholder="e.g., Large, Iced, etc."
                          value={newVariant.name}
                          onChange={(e) => setNewVariant({ ...newVariant, name: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2 w-32">
                        <Label htmlFor="variant-price">Price</Label>
                        <div className="relative">
                          <DollarSign className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="variant-price"
                            type="number"
                            step="0.01"
                            className="pl-8"
                            placeholder="0.00"
                            value={newVariant.price}
                            onChange={(e) => setNewVariant({ ...newVariant, price: e.target.value })}
                          />
                        </div>
                      </div>
                      <Button className="mb-0.5" onClick={handleAddVariant}>
                        <Plus className="h-4 w-4" />
                        Add
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Customization Options</CardTitle>
                  <CardDescription>Additional options customers can select</CardDescription>
                </CardHeader>
                <CardContent>
                  {isEditing ? (
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label>Milk Options</Label>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="flex items-center space-x-2">
                            <Switch id="milk-whole" defaultChecked />
                            <Label htmlFor="milk-whole">Whole Milk</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Switch id="milk-skim" defaultChecked />
                            <Label htmlFor="milk-skim">Skim Milk</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Switch id="milk-almond" defaultChecked />
                            <Label htmlFor="milk-almond">Almond Milk</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Switch id="milk-soy" defaultChecked />
                            <Label htmlFor="milk-soy">Soy Milk</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Switch id="milk-oat" defaultChecked />
                            <Label htmlFor="milk-oat">Oat Milk</Label>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label>Sweetener Options</Label>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="flex items-center space-x-2">
                            <Switch id="sweet-sugar" defaultChecked />
                            <Label htmlFor="sweet-sugar">Sugar</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Switch id="sweet-honey" defaultChecked />
                            <Label htmlFor="sweet-honey">Honey</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Switch id="sweet-splenda" defaultChecked />
                            <Label htmlFor="sweet-splenda">Splenda</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Switch id="sweet-stevia" defaultChecked />
                            <Label htmlFor="sweet-stevia">Stevia</Label>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label>Add-On Options</Label>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="flex items-center space-x-2">
                            <Switch id="addon-whip" defaultChecked />
                            <Label htmlFor="addon-whip">Whipped Cream</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Switch id="addon-cinnamon" defaultChecked />
                            <Label htmlFor="addon-cinnamon">Cinnamon</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Switch id="addon-caramel" defaultChecked />
                            <Label htmlFor="addon-caramel">Caramel Drizzle</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Switch id="addon-chocolate" defaultChecked />
                            <Label htmlFor="addon-chocolate">Chocolate Drizzle</Label>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">Milk Options</h4>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline">Whole Milk</Badge>
                          <Badge variant="outline">Skim Milk</Badge>
                          <Badge variant="outline">Almond Milk</Badge>
                          <Badge variant="outline">Soy Milk</Badge>
                          <Badge variant="outline">Oat Milk</Badge>
                        </div>
                      </div>

                      <Separator />

                      <div>
                        <h4 className="font-medium mb-2">Sweetener Options</h4>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline">Sugar</Badge>
                          <Badge variant="outline">Honey</Badge>
                          <Badge variant="outline">Splenda</Badge>
                          <Badge variant="outline">Stevia</Badge>
                        </div>
                      </div>

                      <Separator />

                      <div>
                        <h4 className="font-medium mb-2">Add-On Options</h4>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline">Whipped Cream</Badge>
                          <Badge variant="outline">Cinnamon</Badge>
                          <Badge variant="outline">Caramel Drizzle</Badge>
                          <Badge variant="outline">Chocolate Drizzle</Badge>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Sales Performance</CardTitle>
                  <CardDescription>Sales data for this menu item</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] flex items-center justify-center border rounded-md">
                    <div className="text-center text-muted-foreground">
                      <BarChart className="mx-auto h-8 w-8 mb-2" />
                      <p>Sales chart would be displayed here</p>
                      <p className="text-sm">Showing monthly sales data</p>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">Total Sales</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">740</div>
                        <p className="text-xs text-muted-foreground">Units sold (last 6 months)</p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">Revenue</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">$3,885.00</div>
                        <p className="text-xs text-muted-foreground">Total revenue (last 6 months)</p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">Popularity</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">#2</div>
                        <p className="text-xs text-muted-foreground">Rank in Coffee category</p>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Customer Feedback</CardTitle>
                  <CardDescription>Reviews and ratings for this item</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center mb-4">
                    <div className="text-4xl font-bold mr-4">4.7</div>
                    <div className="flex-1">
                      <div className="flex items-center">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`h-5 w-5 ${star <= 4 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                            />
                          ))}
                        </div>
                        <span className="ml-2 text-sm text-muted-foreground">Based on 128 reviews</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                        <div className="bg-primary h-2.5 rounded-full w-[85%]"></div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 border rounded-lg">
                      <div className="flex items-center mb-2">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`h-4 w-4 ${star <= 5 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                            />
                          ))}
                        </div>
                        <span className="ml-2 text-sm font-medium">Sarah J.</span>
                        <span className="ml-auto text-xs text-muted-foreground">2 days ago</span>
                      </div>
                      <p className="text-sm">
                        The perfect balance of chocolate and coffee. My go-to drink every morning!
                      </p>
                    </div>

                    <div className="p-4 border rounded-lg">
                      <div className="flex items-center mb-2">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`h-4 w-4 ${star <= 4 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                            />
                          ))}
                        </div>
                        <span className="ml-2 text-sm font-medium">Michael T.</span>
                        <span className="ml-auto text-xs text-muted-foreground">1 week ago</span>
                      </div>
                      <p className="text-sm">
                        Great flavor but sometimes inconsistent between visits. Would be 5 stars if it was more
                        consistent.
                      </p>
                    </div>

                    <div className="p-4 border rounded-lg">
                      <div className="flex items-center mb-2">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`h-4 w-4 ${star <= 5 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                            />
                          ))}
                        </div>
                        <span className="ml-2 text-sm font-medium">Emily R.</span>
                        <span className="ml-auto text-xs text-muted-foreground">2 weeks ago</span>
                      </div>
                      <p className="text-sm">
                        Absolutely delicious! I love that I can customize it with almond milk and it still tastes
                        amazing.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
