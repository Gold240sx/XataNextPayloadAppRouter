import React from "react"
import type { Metadata } from "next"
import { Inter, Roboto_Mono } from "next/font/google"
import Script from "next/script"
import localFont from "next/font/local"
import { ThemeModeScript } from "flowbite-react"
import { ClerkProvider } from "@clerk/nextjs"
import Nav from "@/components/Nav"
import "../../styles/globals.css"
import "../../styles/sass/sass-index.scss"

import { Toaster } from "@/components/shad-cn/sonner"

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-inter",
})

const roboto_mono = Roboto_Mono({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-roboto-mono",
})

// const roboto = localFont({
// 	src: [
// 		{
// 			path: "./Roboto-Regular.woff2",
// 			weight: "400",
// 			style: "normal",
// 		},
// 		{
// 			path: "./Roboto-Italic.woff2",
// 			weight: "400",
// 			style: "italic",
// 		},
// 		{
// 			path: "./Roboto-Bold.woff2",
// 			weight: "700",
// 			style: "normal",
// 		},
// 		{
// 			path: "./Roboto-BoldItalic.woff2",
// 			weight: "700",
// 			style: "italic",
// 		},
// 	],
// 	display: "swap",
// })

// <Head>
// 			{process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL &&
// 				process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID && (
// 					<Script
// 						src={process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL}
// 						data-website-id={
// 							process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID
// 						}
// 						strategy="lazyOnload"
// 					/>
// 				)}
// 			<script src="../path/to/flowbite/dist/flowbite.min.js"></script>
// 			<ThemeModeScript />
// 		</Head>

export const metadata: Metadata = {
	title: "Xata 2024 Portfolio",
	description: "Michael Martella's portfolio created in 2024",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<ClerkProvider>
			<html
				lang="en"
				//  "add ${roboto.className} with my local fonts"
				className={`${inter.variable} ${roboto_mono.variable}`}>
				<body className={`${inter.className}`}>
					<Nav />
					{children}
					<Toaster />
				</body>
				{/* <Analytics /> */}
			</html>
		</ClerkProvider>
	)
}
