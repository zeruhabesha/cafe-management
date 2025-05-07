"use client"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

const data = [
  {
    name: "Cappuccino",
    total: 120,
  },
  {
    name: "Latte",
    total: 98,
  },
  {
    name: "Espresso",
    total: 86,
  },
  {
    name: "Mocha",
    total: 75,
  },
  {
    name: "Croissant",
    total: 65,
  },
  {
    name: "Cheesecake",
    total: 54,
  },
]

export default function TopSellingItems() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
        <Tooltip />
        <Bar dataKey="total" fill="#8884d8" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
