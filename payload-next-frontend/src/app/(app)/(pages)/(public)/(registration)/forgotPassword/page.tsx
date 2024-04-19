import React from "react"
import { auth } from "@clerk/nextjs"
import { redirect } from "next/navigation"

const ForgotPassword = () => {
	const { userId } = auth()

	if (userId) {
		redirect("/dashboard")
	}
	return <div>Forgot Password</div>
}

export default ForgotPassword
