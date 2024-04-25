import React from "react"
import Breadcrumbs from "@/myComponents/site-wide/breadcrumbs/Breadcrumbs"

const PlugPage = () => {
	const pathname = "plug"

	return (
		<div>
			<Breadcrumbs
				pages={[
					{
						name: "Cookie Policy",
						href: "/cookie-policy",
						current: false,
					},
					{
						name:
							pathname.charAt(0).toUpperCase() +
							pathname.slice(1),
						href: `/cookie-policy/${pathname}`,
						current: true,
					},
				]}
			/>
			<div className="max-w-[700px]   mx-auto mt-16 flex justify-center flex-col gap-4">
				Plug Page
			</div>
		</div>
	)
}

export default PlugPage
