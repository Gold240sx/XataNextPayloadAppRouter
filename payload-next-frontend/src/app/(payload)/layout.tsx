/* THIS FILE WAS GENERATED AUTOMATICALLY BY PAYLOAD. */
import configPromise from "@payload-config"
import "@payloadcms/next/css"
import { RootLayout } from "@payloadcms/next/layouts"
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */
import React from "react"
import { Protect } from "@clerk/nextjs"

import "./custom.scss"

type Args = {
	children: React.ReactNode
}

const Layout = ({ children }: Args) => (
	// <Protect
	// 	permission="2024-portfolio:admin:manage"
	// 	fallback={<p>You are not allowed to see this section.</p>}>
	// 	<RootLayout config={configPromise}>{children}</RootLayout>
	// </Protect>
	<RootLayout config={configPromise}>{children}</RootLayout>
)

export default Layout
