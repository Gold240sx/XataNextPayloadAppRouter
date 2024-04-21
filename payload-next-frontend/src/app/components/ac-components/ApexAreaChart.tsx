import React from "react"
import { ApexCharts } from "@/dependencies/1_index"
const { Chart } = ApexCharts

const ApexAreaChart = () => {
	const options = {
		chart: {
			id: "area-chart",
			type: "area",
			height: 350,
			background: "#19191E",
			dropShadow: {
				enabled: true,
				color: "#000",
				top: 18,
				left: 7,
				blur: 10,
				opacity: 0.2,
			},
			zoom: {
				enabled: false,
			},
		},
		dataLabels: {
			enabled: false,
		},
		markers: {
			colors: ["#FFFFFF"],
		},
		stroke: {
			curve: "smooth",
			width: 3,
			lineCap: "round",
			fill: {
				type: "gradient",
				gradient: {
					shade: "dark",
					gradientToColors: ["#0085FF", "#F20689"],
					shadeIntensity: 1,
					type: "horizontal",
					opacityFrom: 1,
					opacityTo: 1,
					stops: [0, 65, 100],
				},
			},
		},
		fill: {
			type: "gradient",
			gradient: {
				type: "vertical",
				shadeIntensity: 1,
				gradientToColors: ["#0085FF", "#F20689"],
				inverseColors: true,
				opacityFrom: 1,
				opacityTo: 0.33,
				stops: [0, 65],
			},
		},
		xaxis: {
			axisBorder: {
				show: false,
			},
			axisTicks: {
				show: false,
			},
			labels: {
				style: {
					colors: "#aaa",
				},
			},
			categories: [
				1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000,
				2001, 2002, 2003,
			],
		},
		yaxis: {
			labels: {
				show: false,
			},
		},
		grid: {
			borderColor: "#222226",
		},
		legend: {
			horizontalAlign: "left",
		},
		theme: {
			mode: "dark",
		},
	}

	const series = [
		{
			name: "series-1",
			data: [10, 20, 15, 30, 35, 30, 45, 59, 30, 35, 25, 29, 15],
		},
	]

	return (
		<div className="app">
			<div className="row">
				<div className="mixed-chart">
					<Chart series={series} type="area" width="500" />
				</div>
			</div>
		</div>
	)
}

export default ApexAreaChart
