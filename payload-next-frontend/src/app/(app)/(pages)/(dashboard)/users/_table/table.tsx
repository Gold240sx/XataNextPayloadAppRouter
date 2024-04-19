"use server"
import React from "react"
import { UserTableDataTable } from "./data-table"
import { columns } from "./columns"
import { User } from "./columns"

const UserTable = async () => {
	const data = [
		{
			id: "idn_2f1UHk6RuhV5FzsdnoKlwNXVPKc",
			name: "Michael Martell",
			email: "michael@gmail.com",
			image: "https://i.ibb.co/jLBbvB9/payload-Mongo.png",
			role: "carlos admin",
			lastSeen: "08/14/2021",
			created: "08/14/2021",
		},
		{
			id: "user_2f5LWai9M7JvULjCqek3EUrEb2d",
			name: "SChassisMonthly",
			email: "test-email@gmail.com",
			image: "https://i.ibb.co/ydRpMMZ/Untitled.png",
			role: "top user",
			lastSeen: "08/14/2021",
			created: "08/14/2021",
		},
	]

	return (
		<section className="py-24">
			<div className="container">
				<h1 className="text-3xl font-bold">All Users</h1>
				<UserTableDataTable columns={columns} data={data as User[]} />
			</div>
		</section>
	)
}

export default UserTable
