import { ApexCharts } from "@/dependencyIndex"
const { ReactApexChart } = ApexCharts

const ApexGroupedBarChart = ({ categories, horizontal }: any) => {
	const options = {
		series: [
			{
				name: "Series 1",
				data: [44, 55, 41, 64, 22, 43, 21],
			},
			{
				name: "Series 2",
				data: [53, 32, 33, 52, 13, 44, 32],
			},
		],
		chart: {
			type: "bar",
			height: 430,
		},
		plotOptions: {
			bar: {
				horizontal: horizontal,
				borderRadius: 4,
				columnWidth: "55%",
				endingShape: "rounded",
				dataLabels: {
					position: "top",
				},
			},
		},
		dataLabels: {
			enabled: true,
			offsetX: -6,
			style: {
				fontSize: "12px",
				colors: ["#fff"],
			},
		},
		stroke: {
			show: true,
			width: 2,
			colors: ["transparent"],
		},
		xaxis: {
			categories: categories,
		},
		yaxis: {
			title: {
				text: "Values",
			},
		},
		fill: {
			opacity: 1,
		},
		tooltip: {
			y: {
				formatter: function (val: any) {
					return val
				},
			},
		},
	}

	const series = [
		{
			name: "Series 1",
			data: [44, 55, 41, 67],
		},
		{
			name: "Series 2",
			data: [13, 23, 20, 8],
		},
	]

	return (
		<div className="">
			<h1>Grouped Bar Chart Example</h1>
			<ReactApexChart series={series} type="bar" height={430} />
		</div>
	)
}

export default ApexGroupedBarChart
