import React from "react"
import { ApexCharts } from "@/dependencies/1_index"
const { ReactApexChart } = ApexCharts

const PieChart = ({ data, labels, title }: any) => {
	const chartOptions = {
		chart: {
			type: "pie",
		},
		responsive: [
			{
				breakpoint: 480,
				options: {
					chart: {
						width: 200,
					},
					legend: {
						position: "bottom",
					},
				},
			},
		],
		labels: labels,
		title: {
			text: title || "Pie Chart",
		},
	}

	const chartSeries = data

	return (
		<div className="pie-chart">
			<ReactApexChart series={chartSeries} type="pie" height={350} />
		</div>
	)
}

export default PieChart
