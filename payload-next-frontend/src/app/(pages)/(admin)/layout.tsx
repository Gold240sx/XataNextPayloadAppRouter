import React, { ReactNode } from "react"

const DashboardLayout = ({
	children,
	admin,
	user,
}: {
	children: ReactNode
	admin: ReactNode
	user: ReactNode
}) => {
	return (
		<div>
			<h1>Dashboard Layout </h1>
			<p>parrellel routes for admin and UserDashboard</p>
			<div>
				{children}
				{admin}
				{user}
			</div>
		</div>
	)
}

export default DashboardLayout
