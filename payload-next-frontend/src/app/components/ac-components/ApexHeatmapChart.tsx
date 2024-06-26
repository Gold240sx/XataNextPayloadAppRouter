import { ApexCharts } from "@/dependencies/1_index"
const { ReactApexChart } = ApexCharts

interface isDarkMode {
	isDarkMode: boolean
}

const ApexHeatmapChart = ({ isDarkMode }: isDarkMode) => {
	const strokeColor = isDarkMode ? "#000" : "#F6F6FB"
	const accentColor = isDarkMode ? "#07B6D4" : ""

	const options = {
		chart: {
			type: "heatmap",
			height: 150,
			background: strokeColor,
		},
		dataLabels: {
			enabled: false,
		},
		colors: ["#07B6D4"],
		className: "stroke-transparent dark:stroke-zinc-800",
		stroke: {
			colors: [strokeColor],
			width: 4,
		},
		title: {
			text: "HeatMap Chart (Single color)",
			color: "white",
		},
		xaxis: {
			labels: {
				show: false, // Hide x-axis labels
			},
			axisTicks: {
				show: true, // Hide x-axis ticks
				opacity: "50%",
			},
		},
		yaxis: {
			labels: {
				style: {
					colors: accentColor, // Set the Y-axis text color here
				},
			},
		},
		plotOptions: {
			heatmap: {
				radius: 4, // Adjust the radius to add spacing (1 or 2 pixels)
				enableShades: true, // Enable shades
				shadeIntensity: 0.5, // Set shade intensity from 0 to 1 (default 0.5)
				opacityFrom: 1, // Set opacity to 1 (default 1)
				opacityTo: 1, // Set opacity to 1 (default 1)
				// enableShades: false, // Disable shading to remove extra effects
				// colorScale: {
				//     ranges: [
				//         {
				//             from: 0,
				//             to: 50,
				//             color: "#008FFB",
				//         },
				//         {
				//             from: 51,
				//             to: 100,
				//             color: "#00E396",
				//         },
				//         {
				//             from: 101,
				//             to: 150,
				//             color: "#FEB019",
				//         },
				//         {
				//             from: 151,
				//             to: 200,
				//             color: "#FF4560",
				//         },
				//     ],
				// }
			},
		},
	}

	const series = [
		{
			name: "Saturday",
			data: [
				{ x: "Week 1", y: 10 },
				{ x: "Week 2", y: 20 },
				{ x: "Week 3", y: 30 },
				{ x: "Week 4", y: 10 },
				{ x: "Week 5", y: 20 },
				{ x: "Week 6", y: 30 },
				{ x: "Week 7", y: 60 },
				{ x: "Week 8", y: 70 },
				{ x: "Week 9", y: 80 },
				{ x: "Week 10", y: 90 },
				{ x: "Week 11", y: 100 },
				{ x: "Week 12", y: 110 },
				{ x: "Week 13", y: 120 },
				{ x: "Week 14", y: 130 },
				{ x: "Week 15", y: 140 },
				{ x: "Week 16", y: 150 },
				{ x: "Week 17", y: 160 },
				{ x: "Week 18", y: 170 },
				{ x: "Week 19", y: 180 },
				{ x: "Week 20", y: 190 },
				{ x: "Week 21", y: 200 },
				{ x: "Week 22", y: 210 },
				{ x: "Week 23", y: 220 },
				{ x: "Week 24", y: 230 },
				{ x: "Week 25", y: 240 },
				{ x: "Week 26", y: 250 },
				{ x: "Week 27", y: 260 },
				{ x: "Week 28", y: 270 },
				{ x: "Week 29", y: 280 },
				{ x: "Week 30", y: 290 },
				{ x: "Week 31", y: 300 },
				{ x: "Week 32", y: 310 },
				{ x: "Week 33", y: 320 },
				{ x: "Week 34", y: 330 },
				{ x: "Week 35", y: 340 },
				{ x: "Week 36", y: 350 },
				{ x: "Week 37", y: 360 },
				{ x: "Week 38", y: 370 },
				{ x: "Week 39", y: 380 },
				{ x: "Week 40", y: 390 },
				{ x: "Week 41", y: 400 },
				{ x: "Week 42", y: 410 },
				{ x: "Week 43", y: 420 },
				{ x: "Week 44", y: 430 },
				{ x: "Week 45", y: 440 },
				{ x: "Week 46", y: 450 },
				{ x: "Week 47", y: 460 },
				{ x: "Week 48", y: 470 },
				{ x: "Week 49", y: 480 },
				{ x: "Week 50", y: 2 },
				{ x: "Week 51", y: 500 },
				{ x: "Week 52", y: 510 },
			],
		},
		{
			name: "Friday",
			data: [
				{ x: "Week 1", y: 10 },
				{ x: "Week 2", y: 20 },
				{ x: "Week 3", y: 30 },
				{ x: "Week 4", y: 10 },
				{ x: "Week 5", y: 20 },
				{ x: "Week 6", y: 30 },
				{ x: "Week 7", y: 60 },
				{ x: "Week 8", y: 70 },
				{ x: "Week 9", y: 80 },
				{ x: "Week 10", y: 90 },
				{ x: "Week 11", y: 100 },
				{ x: "Week 12", y: 110 },
				{ x: "Week 13", y: 120 },
				{ x: "Week 14", y: 130 },
				{ x: "Week 15", y: 140 },
				{ x: "Week 16", y: 150 },
				{ x: "Week 17", y: 160 },
				{ x: "Week 18", y: 170 },
				{ x: "Week 19", y: 180 },
				{ x: "Week 20", y: 190 },
				{ x: "Week 21", y: 200 },
				{ x: "Week 22", y: 210 },
				{ x: "Week 23", y: 220 },
				{ x: "Week 24", y: 230 },
				{ x: "Week 25", y: 240 },
				{ x: "Week 26", y: 250 },
				{ x: "Week 27", y: 260 },
				{ x: "Week 28", y: 270 },
				{ x: "Week 29", y: 280 },
				{ x: "Week 30", y: 290 },
				{ x: "Week 31", y: 300 },
				{ x: "Week 32", y: 310 },
				{ x: "Week 33", y: 320 },
				{ x: "Week 34", y: 330 },
				{ x: "Week 35", y: 340 },
				{ x: "Week 36", y: 350 },
				{ x: "Week 37", y: 360 },
				{ x: "Week 38", y: 370 },
				{ x: "Week 39", y: 380 },
				{ x: "Week 40", y: 390 },
				{ x: "Week 41", y: 400 },
				{ x: "Week 42", y: 410 },
				{ x: "Week 43", y: 420 },
				{ x: "Week 44", y: 430 },
				{ x: "Week 45", y: 440 },
				{ x: "Week 46", y: 450 },
				{ x: "Week 47", y: 460 },
				{ x: "Week 48", y: 470 },
				{ x: "Week 49", y: 480 },
				{ x: "Week 50", y: 490 },
				{ x: "Week 51", y: 500 },
				{ x: "Week 52", y: 510 },
			],
		},
		{
			name: "Thursday",
			data: [
				{ x: "Week 1", y: 10 },
				{ x: "Week 2", y: 20 },
				{ x: "Week 3", y: 30 },
				{ x: "Week 4", y: 10 },
				{ x: "Week 5", y: 20 },
				{ x: "Week 6", y: 30 },
				{ x: "Week 7", y: 60 },
				{ x: "Week 8", y: 70 },
				{ x: "Week 9", y: 80 },
				{ x: "Week 10", y: 90 },
				{ x: "Week 11", y: 100 },
				{ x: "Week 12", y: 110 },
				{ x: "Week 13", y: 120 },
				{ x: "Week 14", y: 130 },
				{ x: "Week 15", y: 140 },
				{ x: "Week 16", y: 150 },
				{ x: "Week 17", y: 160 },
				{ x: "Week 18", y: 170 },
				{ x: "Week 19", y: 180 },
				{ x: "Week 20", y: 190 },
				{ x: "Week 21", y: 200 },
				{ x: "Week 22", y: 210 },
				{ x: "Week 23", y: 220 },
				{ x: "Week 24", y: 230 },
				{ x: "Week 25", y: 240 },
				{ x: "Week 26", y: 250 },
				{ x: "Week 27", y: 260 },
				{ x: "Week 28", y: 270 },
				{ x: "Week 29", y: 280 },
				{ x: "Week 30", y: 290 },
				{ x: "Week 31", y: 300 },
				{ x: "Week 32", y: 310 },
				{ x: "Week 33", y: 320 },
				{ x: "Week 34", y: 330 },
				{ x: "Week 35", y: 340 },
				{ x: "Week 36", y: 350 },
				{ x: "Week 37", y: 360 },
				{ x: "Week 38", y: 370 },
				{ x: "Week 39", y: 380 },
				{ x: "Week 40", y: 390 },
				{ x: "Week 41", y: 400 },
				{ x: "Week 42", y: 410 },
				{ x: "Week 43", y: 420 },
				{ x: "Week 44", y: 430 },
				{ x: "Week 45", y: 440 },
				{ x: "Week 46", y: 450 },
				{ x: "Week 47", y: 460 },
				{ x: "Week 48", y: 470 },
				{ x: "Week 49", y: 480 },
				{ x: "Week 50", y: 490 },
				{ x: "Week 51", y: 500 },
				{ x: "Week 52", y: 510 },
			],
		},
		{
			name: "Wednesday",
			data: [
				{ x: "Week 1", y: 10 },
				{ x: "Week 2", y: 20 },
				{ x: "Week 3", y: 30 },
				{ x: "Week 4", y: 10 },
				{ x: "Week 5", y: 20 },
				{ x: "Week 6", y: 30 },
				{ x: "Week 7", y: 60 },
				{ x: "Week 8", y: 70 },
				{ x: "Week 9", y: 80 },
				{ x: "Week 10", y: 90 },
				{ x: "Week 11", y: 100 },
				{ x: "Week 12", y: 110 },
				{ x: "Week 13", y: 120 },
				{ x: "Week 14", y: 130 },
				{ x: "Week 15", y: 140 },
				{ x: "Week 16", y: 150 },
				{ x: "Week 17", y: 160 },
				{ x: "Week 18", y: 170 },
				{ x: "Week 19", y: 180 },
				{ x: "Week 20", y: 190 },
				{ x: "Week 21", y: 200 },
				{ x: "Week 22", y: 210 },
				{ x: "Week 23", y: 220 },
				{ x: "Week 24", y: 230 },
				{ x: "Week 25", y: 240 },
				{ x: "Week 26", y: 250 },
				{ x: "Week 27", y: 260 },
				{ x: "Week 28", y: 270 },
				{ x: "Week 29", y: 280 },
				{ x: "Week 30", y: 290 },
				{ x: "Week 31", y: 300 },
				{ x: "Week 32", y: 310 },
				{ x: "Week 33", y: 320 },
				{ x: "Week 34", y: 330 },
				{ x: "Week 35", y: 340 },
				{ x: "Week 36", y: 350 },
				{ x: "Week 37", y: 360 },
				{ x: "Week 38", y: 370 },
				{ x: "Week 39", y: 380 },
				{ x: "Week 40", y: 390 },
				{ x: "Week 41", y: 400 },
				{ x: "Week 42", y: 410 },
				{ x: "Week 43", y: 420 },
				{ x: "Week 44", y: 430 },
				{ x: "Week 45", y: 440 },
				{ x: "Week 46", y: 450 },
				{ x: "Week 47", y: 460 },
				{ x: "Week 48", y: 470 },
				{ x: "Week 49", y: 480 },
				{ x: "Week 50", y: 490 },
				{ x: "Week 51", y: 500 },
				{ x: "Week 52", y: 510 },
			],
		},
		{
			name: "Tuesday",
			data: [
				{ x: "Week 1", y: 10 },
				{ x: "Week 2", y: 20 },
				{ x: "Week 3", y: 30 },
				{ x: "Week 4", y: 10 },
				{ x: "Week 5", y: 20 },
				{ x: "Week 6", y: 30 },
				{ x: "Week 7", y: 60 },
				{ x: "Week 8", y: 70 },
				{ x: "Week 9", y: 80 },
				{ x: "Week 10", y: 90 },
				{ x: "Week 11", y: 100 },
				{ x: "Week 12", y: 110 },
				{ x: "Week 13", y: 120 },
				{ x: "Week 14", y: 130 },
				{ x: "Week 15", y: 140 },
				{ x: "Week 16", y: 150 },
				{ x: "Week 17", y: 160 },
				{ x: "Week 18", y: 170 },
				{ x: "Week 19", y: 180 },
				{ x: "Week 20", y: 190 },
				{ x: "Week 21", y: 200 },
				{ x: "Week 22", y: 210 },
				{ x: "Week 23", y: 220 },
				{ x: "Week 24", y: 230 },
				{ x: "Week 25", y: 240 },
				{ x: "Week 26", y: 250 },
				{ x: "Week 27", y: 260 },
				{ x: "Week 28", y: 270 },
				{ x: "Week 29", y: 280 },
				{ x: "Week 30", y: 290 },
				{ x: "Week 31", y: 300 },
				{ x: "Week 32", y: 310 },
				{ x: "Week 33", y: 320 },
				{ x: "Week 34", y: 330 },
				{ x: "Week 35", y: 340 },
				{ x: "Week 36", y: 350 },
				{ x: "Week 37", y: 360 },
				{ x: "Week 38", y: 370 },
				{ x: "Week 39", y: 380 },
				{ x: "Week 40", y: 390 },
				{ x: "Week 41", y: 400 },
				{ x: "Week 42", y: 410 },
				{ x: "Week 43", y: 420 },
				{ x: "Week 44", y: 430 },
				{ x: "Week 45", y: 440 },
				{ x: "Week 46", y: 450 },
				{ x: "Week 47", y: 460 },
				{ x: "Week 48", y: 470 },
				{ x: "Week 49", y: 480 },
				{ x: "Week 50", y: 490 },
				{ x: "Week 51", y: 500 },
				{ x: "Week 52", y: 510 },
			],
		},
		{
			name: "Monday",
			data: [
				{ x: "Week 1", y: 10 },
				{ x: "Week 2", y: 20 },
				{ x: "Week 3", y: 30 },
				{ x: "Week 4", y: 10 },
				{ x: "Week 5", y: 20 },
				{ x: "Week 6", y: 30 },
				{ x: "Week 7", y: 60 },
				{ x: "Week 8", y: 70 },
				{ x: "Week 9", y: 80 },
				{ x: "Week 10", y: 90 },
				{ x: "Week 11", y: 100 },
				{ x: "Week 12", y: 110 },
				{ x: "Week 13", y: 120 },
				{ x: "Week 14", y: 130 },
				{ x: "Week 15", y: 140 },
				{ x: "Week 16", y: 150 },
				{ x: "Week 17", y: 160 },
				{ x: "Week 18", y: 170 },
				{ x: "Week 19", y: 180 },
				{ x: "Week 20", y: 190 },
				{ x: "Week 21", y: 200 },
				{ x: "Week 22", y: 210 },
				{ x: "Week 23", y: 220 },
				{ x: "Week 24", y: 230 },
				{ x: "Week 25", y: 240 },
				{ x: "Week 26", y: 250 },
				{ x: "Week 27", y: 260 },
				{ x: "Week 28", y: 270 },
				{ x: "Week 29", y: 280 },
				{ x: "Week 30", y: 290 },
				{ x: "Week 31", y: 300 },
				{ x: "Week 32", y: 310 },
				{ x: "Week 33", y: 320 },
				{ x: "Week 34", y: 330 },
				{ x: "Week 35", y: 340 },
				{ x: "Week 36", y: 350 },
				{ x: "Week 37", y: 360 },
				{ x: "Week 38", y: 370 },
				{ x: "Week 39", y: 380 },
				{ x: "Week 40", y: 390 },
				{ x: "Week 41", y: 400 },
				{ x: "Week 42", y: 410 },
				{ x: "Week 43", y: 420 },
				{ x: "Week 44", y: 430 },
				{ x: "Week 45", y: 440 },
				{ x: "Week 46", y: 450 },
				{ x: "Week 47", y: 460 },
				{ x: "Week 48", y: 470 },
				{ x: "Week 49", y: 480 },
				{ x: "Week 50", y: 490 },
				{ x: "Week 51", y: 500 },
				{ x: "Week 52", y: 510 },
			],
		},
		{
			name: "Sunday",
			data: [
				// Your heatmap data here, for example:
				{ x: "Week 1", y: 10 },
				{ x: "Week 2", y: 20 },
				{ x: "Week 3", y: 30 },
				{ x: "Week 4", y: 10 },
				{ x: "Week 5", y: 20 },
				{ x: "Week 6", y: 30 },
				{ x: "Week 7", y: 60 },
				{ x: "Week 8", y: 70 },
				{ x: "Week 9", y: 80 },
				{ x: "Week 10", y: 90 },
				{ x: "Week 11", y: 100 },
				{ x: "Week 12", y: 110 },
				{ x: "Week 13", y: 120 },
				{ x: "Week 14", y: 130 },
				{ x: "Week 15", y: 140 },
				{ x: "Week 16", y: 150 },
				{ x: "Week 17", y: 160 },
				{ x: "Week 18", y: 170 },
				{ x: "Week 19", y: 180 },
				{ x: "Week 20", y: 190 },
				{ x: "Week 21", y: 200 },
				{ x: "Week 22", y: 210 },
				{ x: "Week 23", y: 220 },
				{ x: "Week 24", y: 230 },
				{ x: "Week 25", y: 240 },
				{ x: "Week 26", y: 250 },
				{ x: "Week 27", y: 260 },
				{ x: "Week 28", y: 270 },
				{ x: "Week 29", y: 280 },
				{ x: "Week 30", y: 290 },
				{ x: "Week 31", y: 300 },
				{ x: "Week 32", y: 310 },
				{ x: "Week 33", y: 320 },
				{ x: "Week 34", y: 330 },
				{ x: "Week 35", y: 340 },
				{ x: "Week 36", y: 350 },
				{ x: "Week 37", y: 360 },
				{ x: "Week 38", y: 370 },
				{ x: "Week 39", y: 380 },
				{ x: "Week 40", y: 390 },
				{ x: "Week 41", y: 400 },
				{ x: "Week 42", y: 410 },
				{ x: "Week 43", y: 420 },
				{ x: "Week 44", y: 430 },
				{ x: "Week 45", y: 440 },
				{ x: "Week 46", y: 450 },
				{ x: "Week 47", y: 460 },
				{ x: "Week 48", y: 470 },
				{ x: "Week 49", y: 480 },
				{ x: "Week 50", y: 490 },
				{ x: "Week 51", y: 500 },
				{ x: "Week 52", y: 510 },
			],
		},
	]

	return (
		<div>
			<ReactApexChart series={series} type="heatmap" height={200} />
		</div>
	)
}

export default ApexHeatmapChart
