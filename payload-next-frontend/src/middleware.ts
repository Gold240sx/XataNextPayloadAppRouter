import { authMiddleware } from "@clerk/nextjs"
import { NextRequest, NextResponse } from "next/server"
import { rateLimiter } from "./app/myComponents/site-wide/Chatbot/redis"

export async function middleware(req: NextRequest) {
	// Apply rate limiting for "/api/message" route
	if (req.nextUrl.pathname.startsWith("/api/message")) {
		const iq = req.ip ?? "127.0.0.1"
		try {
			const { success } = await rateLimiter.limit(iq)
			if (!success)
				return new Response("You are writing messages too fast.", {
					status: 429,
				})
			return NextResponse.next()
		} catch (error) {
			console.error(error)
			return new NextResponse(
				"Sorry, something went wrong processing your message. Please try again later."
			)
		}
	}

	//@ts-ignore - Clerk authMiddleware type is not compatible with Next.js middleware type
	return authMiddleware({
		publicRoutes: ["/", "/submit(.*)", "/blog"],
	})(req)
}

// Middleware configuration
export const config = {
	matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}

// clerk middleware
// export default authMiddleware({
// 	publicRoutes: ["/", "/submit(.*)"],
// })

// export const config = {
// 	matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
// }

// middleware for /message/* routes (upstash rate limitting OpenAI API requests)
// export async function middleware(req: NextRequest) {
// 	if (req.nextUrl.pathname.startsWith("/api/message")) {
// 		const iq = req.ip ?? "127.0.0.1"

// 		try {
// 			const { success } = await rateLimiter.limit(iq)
// 			if (!success)
// 				return new Response("You are writing messages too fast.", {
// 					status: 429,
// 				})
// 			return NextResponse.next()
// 		} catch (error) {
// 			console.error(error)
// 			return new NextResponse(
// 				"Sorry, something went wrong processing your message. Please try again later."
// 			)
// 		}
// 	}
// }

// export const upstashConfig = {
// 	matcher: "/api/message/:path*",
// }
