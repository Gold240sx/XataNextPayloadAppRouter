import React from "react"
import Breadcrumbs from "@/myComponents/site-wide/breadcrumbs/Breadcrumbs"
import RecentBlogPosts from "../../../../payloadContent/pages/blogs/RecentBlogPosts"

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
				<h1>Welcome to my blog!</h1>
				<button>See all Blogs</button>
				<RecentBlogPosts />
			</div>
		</div>
	)
}

export default Blogs
