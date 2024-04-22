"use server"
import React from "react"
import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"
import { auth, currentUser } from "@clerk/nextjs"
import { getXataClient } from "@/xata"
import { clerkClient } from "@clerk/nextjs"
import Breadcrumbs from "@/myComponents/site-wide/breadcrumbs/Breadcrumbs"
import { columns, User } from "./_table/columns"
import UsersTable from "./_table/table"
import { z } from "zod"

const UsersPage = async () => {
	const { userId } = auth()
	const xataClient = getXataClient()

	if (!userId) {
		redirect("/sign-in")
	}
	const users = await xataClient.db.users?.getMany()
	let allUsers = await clerkClient.users.getUserList()

	const formatedAllUserList = allUsers.map((user) => {
		const primaryEmailAddressId = user.primaryEmailAddressId
		const primaryEmailAddress = user.emailAddresses.find(
			(email) => email.id === primaryEmailAddressId
		)

		return {
			id: user.id,
			banned: user.banned,
			image: user.hasImage ? user.imageUrl : "",
			userName: user.externalAccounts[0]?.username ?? "",
			name: user.firstName + "" + user.lastName,
			email: primaryEmailAddress?.emailAddress ?? "",
			role: "",
			lastSeen: user.lastSignInAt,
			created: user.createdAt,
		}
	})

	return (
		<div>
			<Breadcrumbs
				pages={[
					{
						name: "Users",
						href: "/users",
						current: true,
					},
				]}
			/>
			<div className="max-w-[700px] mx-auto mt-16 flex justify-center flex-col gap-4">
				{/* <h1>Dashboard Page</h1>
				<UsersTable columns={columns} data={formatedAllUserList} /> */}
				{/* <UsersTable /> */}
				<pre className="max-w-lg">
					{JSON.stringify(allUsers, null, 2)}
				</pre>
				More content here:
				<a
					href="https://ui.shadcn.com/docs/components/data-table#reusable-components"
					className="text-sky-400">
					Link
				</a>
			</div>
		</div>
	)
}

export default UsersPage
