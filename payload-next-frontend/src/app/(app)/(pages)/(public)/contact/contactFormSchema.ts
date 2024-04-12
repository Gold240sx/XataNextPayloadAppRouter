import { z } from "zod"

const FormDataSchema = z.object({
	name: z.string(),
	message: z.string(),
})

const ContactFormSchema = z.object({
	name: z.string().min(1, "Name is required"),
	email: z.string().email("Invalid email address"),
	message: z.string().min(1, "Message is required"),
})

export { ContactFormSchema, FormDataSchema }
