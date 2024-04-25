import React from "react"
import Breadcrumbs from "@/myComponents/site-wide/breadcrumbs/Breadcrumbs"

const About = () => {
	return (
		<div>
			<Breadcrumbs
				pages={[
					{
						name: "About",
						href: "/about",
						current: true,
					},
				]}
			/>
			<div className="max-w-[700px]  mx-auto mt-16 flex justify-center flex-col gap-4">
				About Page
			</div>
		</div>
	)
}

export default About
