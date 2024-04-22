import React from "react"
import Breadcrumbs from "@/myComponents/site-wide/breadcrumbs/Breadcrumbs"

const Blog = ({ params }: { params: { id: string } }) => {
	return (
		<div>
			<Breadcrumbs
				pages={[
					{
						name: "Blogs",
						href: "/blog",
						current: false,
					},
					{
						name: `Blog ${params.id}`,
						href: `/blog/${params.id}`,
						// may want to configure to show the blog's name
						current: true,
					},
				]}
			/>
			<div className="max-w-[700px] mx-auto mt-16 flex justify-center flex-col gap-4">
				Blog {params.id}
			</div>
		</div>
	)
}

export default Blog
