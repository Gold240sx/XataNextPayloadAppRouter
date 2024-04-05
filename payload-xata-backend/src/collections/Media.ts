export const Media = {
	slug: "media",
	labels: {
		singular: "Media",
		plural: "Media",
	},
	access: {
		// makes public
		read: () => true,
	},
	upload: true,
	fields: [
		{
			name: "alt",
			label: "Alt",
			type: "text",
			required: true,
		},
	],
}
