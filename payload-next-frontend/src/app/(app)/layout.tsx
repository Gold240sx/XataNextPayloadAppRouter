import React from "react"
import type { Metadata } from "next"
import type { Viewport } from "next"
import { Inter, Roboto_Mono } from "next/font/google"
import Script from "next/script"
import localFont from "next/font/local"
import { ThemeModeScript } from "flowbite-react"
import { ClerkProvider } from "@clerk/nextjs"
import { LocalStorageProvider } from "@/context/localStorageContext"
import { ReactQueryProvider } from "@/context/reactQueryContext"
import CookiesPopup from "../myComponents/site-wide/Cookies/CookiesPopup"
import Nav from "@/components/Nav"
import "../styles/globals.css"
import "../styles/sass/sass-index.scss"

import { Toaster } from "@/components/shad-cn/sonner"
import CookieJarView from "../myComponents/site-wide/Cookies/CookieJarView"
import ChatBot_Chat_Widget from "../myComponents/site-wide/Chatbot/ChatBotWidget"

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

export const metadata: Metadata = {
	title: "Xata 2024 Portfolio",
	description: "Michael Martella's portfolio created in 2024",
}
export const viewport: Viewport = {
	// colorScheme: "dark",
	colorScheme: "normal",
	initialScale: 1,
	maximumScale: 1,
	viewportFit: "cover",
	userScalable: false,
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
				<LocalStorageProvider>
					<body
						className={`${inter.className} flex flex-col min-h-screen relative cookiesAlert--active`}>
						<ReactQueryProvider>
							<Nav />
							{children}
							<Toaster />
							<CookiesPopup />
							<ChatBot_Chat_Widget />
							<CookieJarView />
						</ReactQueryProvider>
					</body>
				</LocalStorageProvider>
				{/* <Analytics /> */}
			</html>
		</ClerkProvider>
	)
}

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
