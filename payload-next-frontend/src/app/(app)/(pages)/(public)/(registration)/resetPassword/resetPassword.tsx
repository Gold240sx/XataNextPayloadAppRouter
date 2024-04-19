import React from "react"
import { auth } from "@clerk/nextjs"
import { redirect } from "next/navigation"

const ResetPassword = () => {
	const { userId } = auth()

	if (userId) {
		redirect("/dashboard")
	}
	return <div>Reset Password</div>
}

export default ResetPassword
