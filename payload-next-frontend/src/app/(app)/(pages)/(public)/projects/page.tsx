import React from "react"
import Breadcrumbs from "@/myComponents/site-wide/breadcrumbs/Breadcrumbs"

const Projects = () => {
	return (
		<div>
			<Breadcrumbs
				pages={[
					{
						name: "Projects",
						href: "/projects",
						current: true,
					},
				]}
			/>
			<div className="max-w-[700px] mx-auto mt-16 flex justify-center flex-col gap-4">
				Projects
			</div>
		</div>
	)
}

export default Projects
