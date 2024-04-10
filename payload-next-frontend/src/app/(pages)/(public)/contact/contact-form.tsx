"use client"
import { Zod, Sonner } from "@/dependencies/1_index"
import { ContactFormSchema } from "./contactFormSchema"
import { sendEmail } from "@/actions/sendEmail"
import { z } from "zod"
// types
import { SubmitHandler } from "react-hook-form"
// dependency unpacking
const { zodResolver } = Zod
import { useForm } from "react-hook-form"
const { toast } = Sonner

type ContactFormInputs = z.infer<typeof ContactFormSchema>

export const ContactForm = () => {
	const {
		register,
		handleSubmit,
		watch,
		reset,
		formState: { errors },
	} = useForm<ContactFormInputs>()

	const onSubmit: SubmitHandler<ContactFormInputs> = (data, e) => {
		e?.preventDefault()
		const sendEmail = async ({
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
		sendEmail({ data, reset })
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="flex flex-col flex-1 gap-4 mx-auto text-gray-600 sm:w-1/2 border-zinc-300">
			<div>
				<input
					type="text"
					placeholder="Name"
					className="w-full rounded-lg"
					{...register("name", { required: true })}
				/>
				{errors.name?.message && (
					<p className="mt-1 ml-1 text-sm text-red-400 ">
						{errors.name.message}
					</p>
				)}{" "}
			</div>
			<div>
				<input
					type="email"
					placeholder="Email"
					className="w-full rounded-lg"
					{...register("email", { required: true })}
				/>
				{errors.email?.message && (
					<p className="mt-1 ml-1 text-sm text-red-400 ">
						{errors.email.message}
					</p>
				)}{" "}
			</div>
			<div>
				<textarea
					placeholder="What's on your mind?"
					className="w-full rounded-lg"
					{...register("message", { required: true })}
				/>
				{errors.message?.message && (
					<p className="mt-1 ml-1 text-sm text-red-400 ">
						{errors.message.message}
					</p>
				)}
			</div>
			<button
				type="submit"
				className="w-full py-2 text-white bg-blue-500 rounded-lg">
				Send
			</button>
		</form>
	)
}
