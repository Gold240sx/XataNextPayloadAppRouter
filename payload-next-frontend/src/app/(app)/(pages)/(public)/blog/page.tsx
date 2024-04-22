import React from "react"
import Breadcrumbs from "@/myComponents/site-wide/breadcrumbs/Breadcrumbs"

const Blogs = () => {
	return (
		<div>
			<Breadcrumbs
				pages={[
					{
						name: "Blog",
						href: "/blog",
						current: true,
					},
				]}
			/>
			<div className="max-w-[700px] mx-auto mt-16 flex justify-center flex-col gap-4">
				Blogs
			</div>
		</div>
	)
}

export default Blogs
