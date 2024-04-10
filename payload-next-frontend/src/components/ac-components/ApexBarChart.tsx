import { ApexCharts } from "@/dependencies/1_index"
const { Chart } = ApexCharts

const ApexBarChart = ({ horizontal }: any) => {
	const options = {
		chart: {
			id: "basic-bar",
		},
		plotOptions: {
			bar: {
				borderRadius: 4,
				horizontal: horizontal,
			},
		},
		xaxis: {
			categories: [1991, 1992, 1993, 1994, 1995],
		},
	}

	const series = [
		{
			name: "series-1",
			data: [30, 40, 45, 50, 49],
		},
	]

	return <Chart options={options} series={series} type="bar" width="500" />
}

export default ApexBarChart
