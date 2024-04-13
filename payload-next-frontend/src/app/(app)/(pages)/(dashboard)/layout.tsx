import React, { ReactNode } from "react"

const DashboardLayout = ({ children }: { children: ReactNode }) => {
	return (
		<div>
			<div className="flex justify-center items-center p-24">
				<h1>Dashboard Layout </h1>
				{children}
			</div>
		</div>
	)
}

export default DashboardLayout
