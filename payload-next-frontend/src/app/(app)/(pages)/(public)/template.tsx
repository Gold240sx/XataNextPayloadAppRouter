import React, { ReactNode } from "react"
import Layout from "@/components/PageTransitions/fadeIn"

export default function Transition({ children }: { children: ReactNode }) {
	// provides a fade in transition for all pages exposed to the public
	return <Layout>{children}</Layout>
}
