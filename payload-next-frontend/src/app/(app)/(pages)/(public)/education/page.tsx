import React from "react"
import Breadcrumbs from "@/myComponents/site-wide/breadcrumbs/Breadcrumbs"

const Education = () => {
	return (
		<div>
			<Breadcrumbs
				pages={[
					{
						name: "Education",
						href: "/education",
						current: true,
					},
				]}
			/>
			<div className="max-w-[700px] mx-auto mt-16 flex justify-center flex-col gap-4">
				Education
			</div>
		</div>
	)
}

export default Education
