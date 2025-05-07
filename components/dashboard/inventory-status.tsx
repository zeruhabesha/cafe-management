import { Progress } from "@/components/ui/progress"

const inventoryItems = [
  {
    name: "Coffee Beans (Arabica)",
    stock: 15,
    threshold: 20,
    unit: "kg",
  },
  {
    name: "Milk",
    stock: 8,
    threshold: 10,
    unit: "liters",
  },
  {
    name: "Sugar",
    stock: 5,
    threshold: 10,
    unit: "kg",
  },
  {
    name: "Chocolate Syrup",
    stock: 3,
    threshold: 5,
    unit: "bottles",
  },
  {
    name: "Vanilla Extract",
    stock: 2,
    threshold: 3,
    unit: "bottles",
  },
]

export default function InventoryStatus() {
  return (
    <div className="space-y-4">
      {inventoryItems.map((item) => {
        const percentage = (item.stock / item.threshold) * 100
        return (
          <div key={item.name} className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">{item.name}</span>
              <span className="text-sm text-muted-foreground">
                {item.stock} / {item.threshold} {item.unit}
              </span>
            </div>
            <Progress
              value={percentage}
              className={percentage < 30 ? "bg-red-100" : percentage < 70 ? "bg-yellow-100" : "bg-green-100"}
            />
          </div>
        )
      })}
    </div>
  )
}
