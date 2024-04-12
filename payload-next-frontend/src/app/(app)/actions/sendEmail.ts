"use server"
import { z } from "zod"
import { toast } from "sonner"
import { ContactFormSchema } from "@/app/(app)/(pages)/(public)/contact/contactFormSchema"

type ContactFormInputs = z.infer<typeof ContactFormSchema>

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
