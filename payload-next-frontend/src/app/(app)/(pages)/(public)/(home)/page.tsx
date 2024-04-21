"use client"
import React, { useState } from "react"
import Image from "next/image"
import Chart from "@/components/chart"
import Section from "@/components/Section"

export default function Home() {
	const [theme, setTheme] = useState("light")
	return (
		<main
			className={`${theme} manual-transition flex flex-col items-center justify-between grow h-full ease-in-out duration-300 transition-all`}>
			<Section
				theme="light"
				setTheme={setTheme}
				className="w-full flex items-center justify-center ">
				<div className="-mt-32">
					<h1 className="text-4xl font-bold text-center">
						Welcome to Payload
					</h1>
				</div>
			</Section>
			<Section theme="dark" setTheme={setTheme} className="w-full">
				<div className="z-10 items-center justify-between w-full max-w-5xl font-mono text-sm lg:flex">
					{/* <button
					data-tooltip-target="tooltip-light"
					data-tooltip-style="light"
					type="button"
					className="text-white bg-gradient-to-br from-pink-500 to-voilet-500 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 text-center inline-flex items-center shadow-md shadow-gray-300 hover:scale-[1.02] transition-transform">
					Light tooltip
				</button> */}

					{/* <Chart /> */}

					<div
						id="tooltip-light"
						role="tooltip"
						className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 tooltip">
						Tooltip content
						<div className="tooltip-arrow" data-popper-arrow></div>
					</div>
				</div>
			</Section>
		</main>
	)
}
