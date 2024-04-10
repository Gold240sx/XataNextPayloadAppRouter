import React from "react"
import { ApexCharts } from "@/dependencies/1_index"
const { ReactApexChart } = ApexCharts

const ApexDonutChart = ({ data, labels, title }: any) => {
	const chartOptions = {
		chart: {
			type: "donut",
		},
		labels: labels,
		title: {
			text: title || "Donut Chart",
		},
		legend: {
			show: true,
			position: "bottom",
		},
		plotOptions: {
			pie: {
				// adjust inner circle height
				donut: {
					size: "3%",
				},
			},
		},
	}

	const chartSeries = data

	return (
		<div className="donut-chart">
			<ReactApexChart series={chartSeries} type="donut" height={350} />
		</div>
	)
}

export default ApexDonutChart
