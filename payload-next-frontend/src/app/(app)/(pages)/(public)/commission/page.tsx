import React from "react"
import Breadcrumbs from "@/myComponents/site-wide/breadcrumbs/Breadcrumbs"

const Commission = () => {
	return (
		<div>
			<Breadcrumbs
				pages={[
					{
						name: "Comission",
						href: "/commission",
						current: true,
					},
				]}
			/>
			<div className="max-w-[700px] mx-auto mt-16 flex justify-center flex-col gap-4">
				Commission
			</div>
		</div>
	)
}

export default Commission
