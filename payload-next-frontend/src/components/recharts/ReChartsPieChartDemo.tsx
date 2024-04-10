import { useState } from "react"
import { Recharts } from "@/lib/dependencies/1_index"
const { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } = Recharts

const data = [
	{ name: "Group A", value: 400 },
	{ name: "Group B", value: 300 },
	{ name: "Group C", value: 300 },
	{ name: "Group D", value: 200 },
]

const COLORS = {
	base: ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"],
	hover: ["#0099FF", "#00CC99", "#FFCC33", "#FF9966"],
}

const RADIAN = Math.PI / 180
const renderCustomizedLabel = ({
	cx,
	cy,
	midAngle,
	innerRadius,
	outerRadius,
	percent,
	index,
}: any) => {
	const radius = innerRadius + (outerRadius - innerRadius) * 0.5
	const x = cx + radius * Math.cos(-midAngle * RADIAN)
	const y = cy + radius * Math.sin(-midAngle * RADIAN)

	return (
		<text
			x={x}
			y={y}
			className="text-center pointer-events-none"
			fill="white"
			textAnchor={x > cx ? "start" : "end"}
			dominantBaseline="central">
			{`${(percent * 100).toFixed(0)}%`}
		</text>
	)
}

const ReChartsPieChartDemo = () => {
	const [activeIndex, setActiveIndex] = useState(null)

	const handleMouseEnter = (data: any, index: any) => {
		setActiveIndex(index)
		renderCustomizedLabel
	}

	const handleMouseLeave = () => {
		setActiveIndex(null)
	}

	return (
		<div style={{ width: "100%", height: 300 }}>
			<ResponsiveContainer>
				<PieChart className="border">
					{/* <PieChart className="border" height={280} w={400}> */}
					<Pie
						data={data}
						// cx={130}
						// cy={85}
						labelLine={false}
						label={renderCustomizedLabel}
						// outerRadius={80}
						// fill="#8884d8"
						dataKey="value">
						{data.map(
							(
								_,
								index // _ = entry
							) => (
								<Cell
									key={`cell-${index}`}
									fill={
										activeIndex === index
											? COLORS.hover[
													index % COLORS.hover.length
											  ]
											: COLORS.base[
													index % COLORS.base.length
											  ]
									}
									onMouseEnter={() =>
										handleMouseEnter(_, index)
									}
									onMouseLeave={handleMouseLeave}
								/>
							)
						)}
					</Pie>
					<Tooltip />
					<Legend />
				</PieChart>
			</ResponsiveContainer>
		</div>
	)
}

export default ReChartsPieChartDemo
