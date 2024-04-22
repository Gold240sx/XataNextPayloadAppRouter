import React, { ReactNode } from "react"
import { auth } from "@clerk/nextjs"
import { redirect } from "next/navigation"

const DashboardLayout = ({ children }: { children: ReactNode }) => {
	const { userId, sessionClaims, orgRole, has } = auth()

	if (!userId) {
		redirect("/sign-in")
	}

	return (
		<div>
			<main className="flex">{children}</main>
		</div>
	)
}

export default DashboardLayout
