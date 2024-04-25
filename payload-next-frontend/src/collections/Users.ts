import TestComponent from "@/components/payloadComponents/TestComponent"
import type { CollectionConfig } from "payload/types"

export const Users: CollectionConfig = {
	slug: "users",
	admin: {
		useAsTitle: "email",
	},
	auth: true,
	fields: [
		// Email added by default
		// Add more fields as needed
		{
			name: "test",
			type: "ui",
			admin: {
				components: {
					Field: TestComponent,
				},
			},
		},
		{
			name: "description",
			type: "richText",
			label: "Description",
		},
		// {
		// 	name: "age",
		// 	type: "number",
		// 	admin: {
		// 		position: "sidebar",
		// 	},
		// },
	],
}
