import type { Metadata } from "next"
import { Inter, Roboto_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import Script from "next/script"
import Head from "next/head"
import localFont from "next/font/local"
import "./globals.css"

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
		<html
			lang="en"
			//  "add ${roboto.className} with my local fonts"
			className={`${inter.variable} ${roboto_mono.variable}`}>
			<Head>
				{process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL &&
					process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID && (
						<Script
							src={process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL}
							data-website-id={
								process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID
							}
							strategy="lazyOnload"
						/>
					)}
			</Head>
			<body className={inter.className}>{children}</body>
			<Analytics />
		</html>
	)
}
