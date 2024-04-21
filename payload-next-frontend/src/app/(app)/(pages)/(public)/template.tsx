import React, { ReactNode } from "react"
import Image from "next/image"
import Layout from "@/components/PageTransitions/fadeIn"

type ThemeType = "dark" | "light"

export default function Transition({
	children,
	theme,
}: {
	children: ReactNode
	theme: ThemeType
}) {
	// provides a fade in transition for all pages exposed to the public
	return (
		<>
			<Layout>{children}</Layout>
			<footer
				className={`${
					theme === "light"
						? "bg-white text-black"
						: "bg-zinc-700 text-white"
				} items-center w-full h-fit p-2`}>
				<span className="h-4 ml-4">© Copyright MM-innova.dev</span>
			</footer>
		</>
	)
}
