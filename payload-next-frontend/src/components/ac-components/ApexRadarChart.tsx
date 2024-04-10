import React from "react"
import { ApexCharts } from "@/lib/dependencies/1_index"
const { ReactApexChart } = ApexCharts

const RadarChart = ({ data, categories, title }: any) => {
	const chartOptions = {
		chart: {
			type: "radar",
		},
		height: 350,
		plotOptions: {
			radar: {
				polygons: {
					strokeColor: "#e8e8e8",
					fill: {
						colors: ["#f8f8f8", "#fff"],
					},
				},
			},
		},
		labels: {
			show: false,
			style: {
				colors: ["#a8a8a8"],
				fontSize: "11px",
				fontFamily: "Arial",
			},
		},
		// xaxis: {
		// 	categories: categories,
		// },
		// yaxis: {
		// 	show: false,
		// },
		// title: {
		// 	text: title || "Radar Chart",
		// },
		markers: {
			size: 5,
			hover: {
				size: 10,
			},
		},
	}

	const chartSeries = [
		{
			name: "Radar Data",
			data: data,
		},
	]

	return (
		<div className="radar-chart">
			<ReactApexChart series={chartSeries} type="radar" height={350} />
		</div>
	)
}

export default RadarChart
