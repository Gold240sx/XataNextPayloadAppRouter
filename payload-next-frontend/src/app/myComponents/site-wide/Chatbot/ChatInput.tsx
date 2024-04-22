"use client"
import React, { FC, HTMLAttributes, useContext, useState, useRef } from "react"
import { MessagesContext } from "@/context/chatBotData/messageContext"
import { cn } from "@/utils/cn"
import TextareaAutosize from "react-textarea-autosize"
import { useMutation } from "@tanstack/react-query"
import { nanoid } from "nanoid"
import {
	ChatBotMessageSchema as ZodMessageShema,
	ChatBotMessageArraySchema as MessageSchemaArray,
	Message,
} from "@/types/apiRequestTypes"
import { CornerDownLeft, Loader2 } from "lucide-react"
import { toast } from "sonner"
// import { z } from "zod"

interface ChatInputProps extends HTMLAttributes<HTMLDivElement> {}

const ChatInput: FC<ChatInputProps> = ({ className, ...props }) => {
	const textAreaRef = useRef<null | HTMLTextAreaElement>(null)
	const [input, setInput] = useState<string>("")
	const {
		messages,
		addMessage,
		removeMessage,
		updateMessage,
		setIsMessageUpdating,
	} = useContext(MessagesContext)

	const { mutate: sendMessage, isPending } = useMutation({
		mutationFn: async (message: Message) => {
			const response = await fetch("/api/message", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ messages: [message] }),
			})
			if (!response.ok) throw new Error("Failed to send message")
			return response.body
		},
		onMutate(message: Message) {
			addMessage(message)
		},
		onSuccess: async (stream) => {
			if (!stream) throw new Error("No stream found")
			const id = nanoid()
			const responseMessage: Message = {
				id,
				isUserMessage: false,
				text: "",
			}

			addMessage(responseMessage)
			setIsMessageUpdating(true)

			const reader = stream.getReader()
			const decoder = new TextDecoder()
			let done = false

			while (!done) {
				const { value, done: doneReading } = await reader.read()
				done = doneReading
				const chunkValue = decoder.decode(value)
				updateMessage(id, (prev) => prev + chunkValue)
			}

			// clean up
			setIsMessageUpdating(false)
			setInput("")

			setTimeout(() => {
				textAreaRef.current?.focus()
			}, 10)
		},
		onError: (_, variables) => {
			toast.error("Something went wrong. Please try again")
			removeMessage(variables.id)
			textAreaRef.current?.focus()
		},
	})

	return (
		<div {...props} className={cn("", className)}>
			{/* border-t border-zinc-300 ^^ original additions */}
			<div className="relative mt-4 flex-1 overflow-hidden rounded-lg border-none outline-none">
				<TextareaAutosize
					ref={textAreaRef}
					rows={2}
					value={input}
					maxRows={4}
					disabled={isPending}
					autoFocus
					onKeyDown={(e) => {
						if (e.key === "Enter" && !e.shiftKey) {
							e.preventDefault()

							const message = {
								id: nanoid(),
								isUserMessage: true,
								text: input,
							}

							sendMessage(message)
						}
					}}
					onChange={(e) => setInput(e.target.value)}
					placeholder="Write a message..."
					className="peer disabled:opacity-50 pr-14 resize-none block w-full border-0 bg-zinc-900 py-1.5 text-gray-100 focus:ring-0 text-sm sm:leading-6"
				/>
				<div
					className={`absolute inset-y-0 right-0 flex py-1.5 pr-1.5`}>
					<kbd className="inline-flex items-center rounded border bg-white border-gray-200 px-1 font-sans text-xs text-gray-400">
						{isPending ? (
							<Loader2 className="w-3 h-3 animate-spin" />
						) : (
							<CornerDownLeft className="w-3 h-3" />
						)}
					</kbd>
				</div>
				<div
					aria-hidden="true"
					className="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-indigo-600"></div>
			</div>
		</div>
	)
}

export default ChatInput
