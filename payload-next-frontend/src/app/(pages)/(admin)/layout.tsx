import React, { ReactNode } from "react"

const DashboardLayout = ({ children }: { children: ReactNode }) => {
	return (
		<div>
			<h1>DashboardLayout </h1>
			<div>{children}</div>
		</div>
	)
}

export default DashboardLayout
