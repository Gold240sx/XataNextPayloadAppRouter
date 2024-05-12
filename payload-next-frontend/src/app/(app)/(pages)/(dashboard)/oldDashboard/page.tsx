"use server"
import React from "react"
import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"
import { auth } from "@clerk/nextjs"
import { getXataClient } from "@/xata"
import Breadcrumbs from "@/myComponents/site-wide/breadcrumbs/Breadcrumbs"
import { z } from "zod"

import FolderForm from "./FolderForm"
import { paramsType } from "@/types/nextTypes"

const schema = z.object({
	name: z.string().min(3, "Folder Name must be greater than 3 characters"),
})

const Dashboard = async () => {
	const { userId } = auth()
	const xataClient = getXataClient()

	if (!userId) {
		redirect("/sign-in")
	}
	const folders = await xataClient.db.folders.filter({ userId }).getMany()

	const createFolder = async (formData: FormData) => {
		"use server"
		const parsedForm = schema.parse({
			name: formData.get("name") as string,
		})
		const newRecord = { ...parsedForm, userId }
		const xataClient = getXataClient()
		await xataClient.db.folders.create(newRecord)
		revalidatePath("/dashboard")
	}

	return (
		<div className="">
			<Breadcrumbs
				pages={[
					{
						name: "Dashboard",
						href: "/dashboard",
						current: true,
					},
				]}
			/>
			<div className="max-w-[700px]  ml-20 mx-auto mt-16 flex justify-center flex-col gap-4 px-10">
				<h1>Dashboard Page</h1>
				<FolderForm handleCreateFolder={createFolder} />
				<div className="mt-10 px-4">
					{folders.map((folder) => (
						<p key={folder.id}>{folder.name}</p>
					))}
				</div>
			</div>
		</div>
	)
}

export default Dashboard
