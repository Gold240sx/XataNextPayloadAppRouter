import { ApexCharts } from "@/lib/dependencies/1_index"
const { ReactApexChart } = ApexCharts

const ApexRadialBarChart = ({ data, labels, title }: any) => {
	const chartOptions = {
		chart: {
			type: "radialBar",
		},
		labels: labels,
		title: {
			text: title || "Radial Bar Chart",
		},
	}

	const chartSeries = data

	return (
		<div className="radial-bar-chart">
			<ReactApexChart
				series={chartSeries}
				type="radialBar"
				height={350}
			/>
		</div>
	)
}

export default ApexRadialBarChart
