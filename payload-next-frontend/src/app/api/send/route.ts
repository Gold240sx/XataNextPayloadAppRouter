import { z } from "zod"
import { EmailTemplate } from "emails/Projects/basic/basic-email-template"
import { ContactFormSchema } from "@/app/(app)/(pages)/(public)/contact/contactFormSchema"
import { NextResponse } from "next/server"
import { Resend } from "resend"
import * as React from "react"
import { Redis } from "@upstash/redis"
import { Ratelimit } from "@upstash/ratelimit"

const redis = new Redis({
	url: `${process.env.NEXT_UPSTASH_REDIS_URL}`,
	token: `${process.env.NEXT_UPSTASH_REDIS_TOKEN}`,
})

// Create a new ratelimiter, that allows 10 requests per 10 seconds
const ratelimit = new Ratelimit({
	redis: Redis.fromEnv(),
	limiter: Ratelimit.slidingWindow(3, "1 m"),
	analytics: true,
	prefix: "@upstash/ratelimit",
})

type ContactFormInputs = z.infer<typeof ContactFormSchema>
const resend = new Resend(process.env.NEXT_RESEND_API_KEY)

export async function POST(request: Request): Promise<Response> {
	// Rate-limit check
	const identifier = "api"
	const { success } = await ratelimit.limit(identifier)

	if (!success) {
		return NextResponse.json(
			{ error: "Rate limit exceeded" },
			{ status: 429 }
		)
	}

	const { name, email, message } = await request.json()
	const bodyData: ContactFormInputs = {
		name: "bert",
		email: "ernie",
		message: "tootaloo",
	}
	console.log(bodyData)

	try {
		const data = await resend.emails.send({
			from: "Michael Martell <info@michaelmartell.com>",
			to: ["240designworks@gmail.com"],
			subject: "New Contact Form Submission",
			text: `Name: ${bodyData.name}\nEmail: ${bodyData.email}\nMessage: ${bodyData.message}`,
			react: EmailTemplate({
				firstName: name,
				email,
				message,
			}) as React.ReactElement,
		})
		console.log(data)
		return NextResponse.json({ status: "ok" })
	} catch (error) {
		return NextResponse.json({ error })
	}
}
