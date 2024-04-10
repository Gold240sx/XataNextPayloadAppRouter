import { z } from "zod"
import { EmailTemplate } from "../../../../../react-email-server/emails/basic-email-template"
import { ContactFormSchema } from "@/publicPages/contact/contactFormSchema"
import { NextResponse } from "next/server"
import { Resend } from "resend"
import * as React from "react"

type ContactFormInputs = z.infer<typeof ContactFormSchema>
const resend = new Resend(process.env.NEXT_RESEND_API_KEY)

export async function POST(request: Request): Promise<Response> {
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
