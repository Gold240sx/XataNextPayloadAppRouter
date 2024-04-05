import { TwoColumn } from "../blocks/TwoColumn"
import { Hero } from "../blocks/Hero"

export const Pages = {
	slug: "pages",
	labels: {
		singular: "Page",
		plural: "Pages",
	},
	access: {
		// makes public
		read: () => true,
	},
	fields: [
		{
			name: "name",
			label: "Name",
			type: "text",
			required: true,
		},
		{
			name: "slug",
			label: "Slug",
			type: "text",
			required: true,
		},
		{
			name: "layout",
			label: "Layout",
			type: "blocks",
			blocks: [Hero, TwoColumn],
		},
	],
}
