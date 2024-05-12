import React, { ReactNode } from "react"
import { auth } from "@clerk/nextjs"
import { redirect } from "next/navigation"
// import { Sidebar } from "@/myComponents/dashboard/Sidebar" // my custom sidebar component

const DashboardLayout = ({ children }: { children: ReactNode }) => {
	const { userId, sessionClaims, orgRole, has } = auth()

	if (!userId) {
		redirect("/sign-in")
	}

	return (
		<div className="w-full min-h-screen flex flex-row relative">
			{/* <Sidebar /> */}
			<div className="flex">{children}</div>
		</div>
	)
}

export default DashboardLayout
