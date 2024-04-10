"use client"
// import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { Recharts } from "@/dependencyIndex"
const {
	Line,
	LineChart,
	ResponsiveContainer,
	XAxis,
	YAxis,
	Tooltip,
	Legend,
	CartesianGrid,
} = Recharts

const data = [
	{ name: "2017", react: 32, angular: 37, vue: 60, svelte: 80 },
	{ name: "2018", react: 78, angular: 29, vue: 46, svelte: 40 },
	{ name: "2019", react: 45, angular: 47, vue: 28, svelte: 60 },
	{ name: "2020", react: 87, angular: 40, vue: 35, svelte: 50 },
	{ name: "2021", react: 55, angular: 60, vue: 80, svelte: 70 },
]

export function ReChartsLineChartDemo() {
	return (
		<ResponsiveContainer width="100%" height={350}>
			<LineChart data={data}>
				<Line
					type="monotone"
					dataKey="react"
					stroke="#8884d8"
					strokeWidth={3}
				/>
				<Line
					type="monotone"
					dataKey="angular"
					stroke="#07B6D4"
					strokeWidth={3}
				/>
				<Line
					type="monotone"
					dataKey="vue"
					stroke="#F20689"
					strokeWidth={3}
				/>
				<Line
					type="monotone"
					dataKey="svelte"
					stroke="#adfa1d"
					strokeWidth={3}
				/>
				<CartesianGrid
					stroke={`#ccc`}
					strokeDasharray="5 5"
					className="dark:stroke-lime-800"
				/>
				<Tooltip />
				<Legend />
				<XAxis
					dataKey="name"
					stroke="#888888"
					fontSize={12}
					tickLine={false}
					axisLine={false}
				/>
				<YAxis
					stroke="#888888"
					fontSize={12}
					tickLine={false}
					axisLine={false}
					tickFormatter={(value) => `$${value}`}
				/>
			</LineChart>
		</ResponsiveContainer>
	)
}
