import React, { useEffect, useRef } from "react"

const ApexSparklineChart = ({ data, title, subtitle }: any) => {
	const chartRef = useRef(null)

	useEffect(() => {
		const options = {
			series: [{ data }],
			chart: {
				type: "area",
				height: 160,
				sparkline: {
					enabled: true,
				},
			},
			stroke: {
				curve: "straight",
			},
			fill: {
				opacity: 0.3,
			},
			yaxis: {
				min: 0,
			},
			colors: ["#DCE6EC"],
			title: {
				text: title,
				offsetX: 0,
				style: {
					fontSize: "24px",
				},
			},
			subtitle: {
				text: subtitle,
				offsetX: 0,
				style: {
					fontSize: "14px",
				},
			},
		}

		const chart = new ApexCharts(chartRef.current, options)
		chart.render()

		return () => {
			chart.destroy()
		}
	}, [data, title, subtitle])

	return (
		<div ref={chartRef} className="sparkline">
			{/* Chart will be rendered here */}
		</div>
	)
}

export default ApexSparklineChart
