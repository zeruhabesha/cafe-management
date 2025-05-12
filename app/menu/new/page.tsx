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
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Save, Plus, Minus, DollarSign, Clock, ImageIcon, AlertTriangle } from "lucide-react"
import Link from "next/link"

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

export default function NewMenuItemPage() {
  const [itemData, setItemData] = useState({
    name: "",
    category: "",
    price: "",
    description: "",
    available: true,
    preparationTime: "",
    ingredients: [],
    allergens: [],
    nutritionalInfo: {
      calories: "",
      fat: "",
      carbs: "",
      protein: "",
      sugar: "",
    },
    tags: [],
    variants: [],
  })
  const [newIngredient, setNewIngredient] = useState({ id: "", quantity: "" })
  const [newVariant, setNewVariant] = useState({ name: "", price: "" })
  const [newTag, setNewTag] = useState("")

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

  const handleRemoveIngredient = (id) => {
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

  const handleRemoveVariant = (id) => {
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

  const handleRemoveTag = (tag) => {
    setItemData({
      ...itemData,
      tags: itemData.tags.filter((t) => t !== tag),
    })
  }

  const handleToggleAllergen = (allergen) => {
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

  const handleSave = () => {
    // Here you would typically save the menu item data to your backend
    console.log(itemData)
    alert("Menu item created successfully!")
    // Redirect to menu page or clear form
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
          <h2 className="text-3xl font-bold tracking-tight">Add New Menu Item</h2>
        </div>
        <Button onClick={handleSave}>
          <Save className="mr-2 h-4 w-4" />
          Save Item
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Card className="md:col-span-1">
          <CardHeader>
            <div className="flex items-center justify-center">
              <div className="relative w-full aspect-square rounded-md overflow-hidden border bg-muted">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button variant="secondary">
                    <ImageIcon className="mr-2 h-4 w-4" />
                    Upload Image
                  </Button>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Item Name *</Label>
              <Input
                id="name"
                placeholder="e.g., Cappuccino"
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
              <Label htmlFor="price">Base Price *</Label>
              <div className="relative">
                <DollarSign className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  id="price"
                  type="number"
                  step="0.01"
                  className="pl-8"
                  placeholder="0.00"
                  value={itemData.price}
                  onChange={(e) => setItemData({ ...itemData, price: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                className="min-h-[100px]"
                placeholder="Describe the menu item..."
                value={itemData.description}
                onChange={(e) => setItemData({ ...itemData, description: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="available">Availability</Label>
                <Switch
                  id="available"
                  checked={itemData.available}
                  onCheckedChange={(checked) => setItemData({ ...itemData, available: checked })}
                />
              </div>
              <p className="text-xs text-muted-foreground">
                {itemData.available
                  ? "This item will be available for ordering"
                  : "This item will be unavailable for ordering"}
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="prep-time">Preparation Time (minutes)</Label>
              <div className="relative">
                <Clock className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  id="prep-time"
                  type="number"
                  className="pl-8"
                  placeholder="e.g., 5"
                  value={itemData.preparationTime}
                  onChange={(e) => setItemData({ ...itemData, preparationTime: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Tags</Label>
              <div className="flex flex-wrap gap-1">
                {itemData.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                    {tag}
                    <button onClick={() => handleRemoveTag(tag)} className="ml-1 rounded-full hover:bg-muted p-0.5">
                      <Minus className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
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
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Additional Details</CardTitle>
            <CardDescription>Complete the information about this menu item</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">Nutritional Information</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="calories">Calories</Label>
                  <Input
                    id="calories"
                    type="number"
                    placeholder="kcal"
                    value={itemData.nutritionalInfo.calories}
                    onChange={(e) =>
                      setItemData({
                        ...itemData,
                        nutritionalInfo: {
                          ...itemData.nutritionalInfo,
                          calories: e.target.value,
                        },
                      })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="fat">Fat (g)</Label>
                  <Input
                    id="fat"
                    type="number"
                    placeholder="g"
                    value={itemData.nutritionalInfo.fat}
                    onChange={(e) =>
                      setItemData({
                        ...itemData,
                        nutritionalInfo: {
                          ...itemData.nutritionalInfo,
                          fat: e.target.value,
                        },
                      })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="carbs">Carbs (g)</Label>
                  <Input
                    id="carbs"
                    type="number"
                    placeholder="g"
                    value={itemData.nutritionalInfo.carbs}
                    onChange={(e) =>
                      setItemData({
                        ...itemData,
                        nutritionalInfo: {
                          ...itemData.nutritionalInfo,
                          carbs: e.target.value,
                        },
                      })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="protein">Protein (g)</Label>
                  <Input
                    id="protein"
                    type="number"
                    placeholder="g"
                    value={itemData.nutritionalInfo.protein}
                    onChange={(e) =>
                      setItemData({
                        ...itemData,
                        nutritionalInfo: {
                          ...itemData.nutritionalInfo,
                          protein: e.target.value,
                        },
                      })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="sugar">Sugar (g)</Label>
                  <Input
                    id="sugar"
                    type="number"
                    placeholder="g"
                    value={itemData.nutritionalInfo.sugar}
                    onChange={(e) =>
                      setItemData({
                        ...itemData,
                        nutritionalInfo: {
                          ...itemData.nutritionalInfo,
                          sugar: e.target.value,
                        },
                      })
                    }
                  />
                </div>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="text-lg font-medium mb-2">Allergens</h3>
              <p className="text-sm text-muted-foreground mb-4">Select all allergens present in this item</p>
              <div className="flex flex-wrap gap-2">
                {allergenOptions.map((allergen) => (
                  <div key={allergen} className="flex items-center">
                    <Button
                      variant={itemData.allergens.includes(allergen) ? "default" : "outline"}
                      size="sm"
                      className={`${itemData.allergens.includes(allergen) ? "bg-red-500 hover:bg-red-600" : ""}`}
                      onClick={() => handleToggleAllergen(allergen)}
                    >
                      {allergen}
                      {itemData.allergens.includes(allergen) && <AlertTriangle className="ml-2 h-3 w-3" />}
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="text-lg font-medium mb-2">Ingredients</h3>
              <div className="space-y-4">
                {itemData.ingredients.length > 0 ? (
                  <div className="border rounded-md">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-2">Ingredient</th>
                          <th className="text-left p-2">Quantity</th>
                          <th className="text-right p-2">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {itemData.ingredients.map((ingredient) => (
                          <tr key={ingredient.id} className="border-b last:border-0">
                            <td className="p-2">{ingredient.name}</td>
                            <td className="p-2">{ingredient.quantity}</td>
                            <td className="p-2 text-right">
                              <Button variant="ghost" size="sm" onClick={() => handleRemoveIngredient(ingredient.id)}>
                                <Minus className="h-4 w-4" />
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="text-center py-4 text-muted-foreground border rounded-md">
                    No ingredients added yet
                  </div>
                )}

                <div className="flex items-end gap-2">
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
                      placeholder="Amount"
                    />
                  </div>
                  <Button className="mb-0.5" onClick={handleAddIngredient}>
                    <Plus className="h-4 w-4" />
                    Add
                  </Button>
                </div>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="text-lg font-medium mb-2">Variants</h3>
              <p className="text-sm text-muted-foreground mb-4">Add different sizes or options for this item</p>

              <div className="space-y-4">
                {itemData.variants.length > 0 ? (
                  <div className="border rounded-md">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-2">Variant Name</th>
                          <th className="text-left p-2">Price</th>
                          <th className="text-right p-2">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {itemData.variants.map((variant) => (
                          <tr key={variant.id} className="border-b last:border-0">
                            <td className="p-2">{variant.name}</td>
                            <td className="p-2">${Number.parseFloat(variant.price).toFixed(2)}</td>
                            <td className="p-2 text-right">
                              <Button variant="ghost" size="sm" onClick={() => handleRemoveVariant(variant.id)}>
                                <Minus className="h-4 w-4" />
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="text-center py-4 text-muted-foreground border rounded-md">No variants added yet</div>
                )}

                <div className="flex items-end gap-2">
                  <div className="space-y-2 flex-1">
                    <Label htmlFor="variant-name">Variant Name</Label>
                    <Input
                      id="variant-name"
                      placeholder="e.g., Small, Large, Iced"
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
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="text-lg font-medium mb-2">Preparation Instructions</h3>
              <Textarea className="min-h-[150px]" placeholder="Enter step-by-step preparation instructions..." />
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button onClick={handleSave}>
              <Save className="mr-2 h-4 w-4" />
              Save Menu Item
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
