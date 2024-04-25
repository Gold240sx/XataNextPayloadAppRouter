import BlogsComponent from "@/components/payloadComponents/BlogsComponent"

export const Blogs = {
	slug: "blogs",
	fields: [
		{
			name: "title",
			label: "Title",
			type: "text",
		},
		{
			name: "description",
			label: "Description",
			type: "richText", // Text  area has an issue... use richText instead
		},
	],
}
