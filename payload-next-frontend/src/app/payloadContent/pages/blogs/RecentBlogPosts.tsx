//@ts-nocheck
import { getPayloadHMR } from "@payloadcms/next/utilities"
import { parseISO, format } from "date-fns"
import config from "@payload-config"
import React, { FC } from "react"
import Link from "next/link"

const RecentBlogPosts: FC<HTMLElement> = async () => {
	const payload = await getPayloadHMR({ config })

	const blogPostData = await payload.find({
		collection: "blogs",
	})

	const formattedDate = (date: string) => {
		const formatted = format(parseISO(date), "h:mmaaa MM/dd/yy")
		const time = format(parseISO(date), "h:mmaaa")
		const day = format(parseISO(date), "MM/dd/yy")
		return { time, day }
	}

	// const blogPosts = {
	// 	...blogPostData,
	// 	posts: blogPostData.docs,
	// 	postText:
	// 		blogPostData.docs[0].description.root.children[0].children[0].text,
	// }

	return (
		<div>
			<h2>Recent Blog Articles</h2>
			<div className="grid drip-cols-3 gap-2 py-10">
				{blogPostData.docs.map((post, i) => {
					return (
						<div className="group border-transparent border hover:border-blue-500 bg-zinc-200 h-fit w-fit rounded-lg p-4">
							<Link key={post.id} href={`/blog/${post.id}`}>
								<h3 className="font-bold m-4 ml-0">
									{post.title}
								</h3>
								<p>
									<span className="font-bold text-amber-600 mr-2">
										{formattedDate(post.createdAt).time}
									</span>
									{formattedDate(post.createdAt).day}
								</p>
								<p>
									{
										post.description.root.children[0]
											.children[0].text
									}
								</p>
							</Link>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default RecentBlogPosts
