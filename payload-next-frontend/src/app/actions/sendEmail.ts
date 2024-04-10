"use server"
import { FormEvent } from "react"
import { z } from "zod"
import { NextResponse } from "next/server"
import { Resend } from "resend"
import { toast } from "sonner"
import { ContactFormSchema } from "@/publicPages/contact/contactFormSchema"
import ContactFormEmail from "../../../../react-email-server/emails/contact-form-email"

type ContactFormInputs = z.infer<typeof ContactFormSchema>

function showAlert({ text, status }: { text: string; status: string }) {
	if (status === "OK") {
		toast.success(text)
	} else {
		toast.error(text)
	}
}

export const sendEmail = async ({
	data,
	reset,
}: {
	data: ContactFormInputs
	reset: () => void
}) => {
	try {
		await fetch("/api/send", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				name: data.name,
				email: data.email,
				message: data.message,
			}),
		}).then((res) => {
			res.json()
			if (res.ok) {
				toast.success("Message sent")
				console.log("Message sent")
				reset()
			} else {
				toast.error("Message not sent")
			}
		})
	} catch (error) {
		toast.error("Message not sent")
		console.error(error)
	}
}

export default sendEmail
