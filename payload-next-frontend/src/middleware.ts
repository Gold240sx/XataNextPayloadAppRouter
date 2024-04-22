import { authMiddleware } from "@clerk/nextjs"
import { NextRequest, NextResponse } from "next/server"
import { rateLimiter } from "./app/myComponents/site-wide/Chatbot/redis"

export default authMiddleware({
	publicRoutes: ["/", "/submit(.*)"],
})

export const config = {
	matcher: [
		"/((?!.+\\.[\\w]+$|_next).*)",
		"/",
		"/(api|trpc)(.*)",
		"/api/message/:path*",
	],
}

export async function middleware(req: NextRequest) {
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

export const upstashConfig = {
	matcher: "/api/message/:path*",
}
