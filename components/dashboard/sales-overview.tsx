"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  {
    name: "Jan",
    total: 2400,
  },
  {
    name: "Feb",
    total: 1398,
  },
  {
    name: "Mar",
    total: 9800,
  },
  {
    name: "Apr",
    total: 3908,
  },
  {
    name: "May",
    total: 4800,
  },
  {
    name: "Jun",
    total: 3800,
  },
  {
    name: "Jul",
    total: 4300,
  },
  {
    name: "Aug",
    total: 5300,
  },
  {
    name: "Sep",
    total: 4900,
  },
  {
    name: "Oct",
    total: 3800,
  },
  {
    name: "Nov",
    total: 4800,
  },
  {
    name: "Dec",
    total: 5200,
  },
]

export default function SalesOverview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Tooltip />
        <Line type="monotone" dataKey="total" stroke="#8884d8" strokeWidth={2} activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  )
}
