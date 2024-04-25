// we can add client components here like normal
import React, { FC } from "react"
// import { getPayloadHMR } from "@payloadcms/next/utilities"
// import config from "@payload-config"

const TestComponent: FC = () => {
	// const payload = await getPayloadHMR({ config })

	// const users = await payload.find({
	// 	collection: "users",
	// })

	return (
		<div className="bg-green-500 p-4 text-green-200 underline">
			this is a custom component
			<h3>Users</h3>
			<div className="flex gap-2">
				{/* {users.docs.map((user) => (
					<div key={user.id} className="bg-green-700 p-2 rounded">
						{user.email}
					</div>
				))} */}
			</div>
		</div>
	)
}

export default TestComponent
