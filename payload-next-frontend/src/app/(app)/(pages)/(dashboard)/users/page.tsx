"use server"
import React from "react"
import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"
import { auth, currentUser } from "@clerk/nextjs"
import { getXataClient } from "@/xata"
import { clerkClient } from "@clerk/nextjs"
import {
	columns,
	User,
} from "@/app/(app)/(pages)/(dashboard)/users/_table/columns"
import { z } from "zod"

import UsersTable from "@/app/(app)/(pages)/(dashboard)/users/_table/table"

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

	constole.log()

	return (
		<div>
			{/* <UsersTable /> */}
			<pre className="max-w-lg">{JSON.stringify(allUsers, null, 2)}</pre>
			More content here:
			<a
				href="https://ui.shadcn.com/docs/components/data-table#reusable-components"
				className="text-sky-400">
				Link
			</a>
		</div>
	)
}

export default UsersPage
