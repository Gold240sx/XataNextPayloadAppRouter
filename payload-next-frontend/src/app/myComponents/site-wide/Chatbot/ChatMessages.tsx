"use client"
import { MessagesContext } from "@/context/chatBotData/messageContext"
import React, { FC, HTMLAttributes, useContext } from "react"
import MarkdownLite from "./MarkdownLite"
import { cn } from "@/lib/utils"

interface ChatMessagesProps extends HTMLAttributes<HTMLDivElement> {}

const ChatMessages: FC<ChatMessagesProps> = ({ className, ...props }) => {
	const { messages } = useContext(MessagesContext)
	const inverseMessages = [...messages].reverse()

	return (
		<div
			{...props}
			className={cn(
				"flex flex-col-reverse gap-3 overflow-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch",
				className
			)}>
			{inverseMessages.map((message) => (
				<div key={message.id} className="chat-message">
					<div
						className={cn("flex items-end", {
							"justify-end": message.isUserMessage,
						})}>
						<div
							className={cn(
								"flex flex-col space-y-2 text-sm max-w-xs mx-2 overflow-hidden",
								{
									"order-1 items-end": message.isUserMessage,
									"order-2 items-start":
										!message.isUserMessage,
								}
							)}>
							<p
								className={cn("px-4 py-2 rounded-lg", {
									"bg-blue-600 text-white":
										message.isUserMessage,
									"bg-zinc-200 text-zinc-900":
										!message.isUserMessage,
								})}>
								<MarkdownLite text={message.text} />
							</p>
						</div>
					</div>
				</div>
			))}
		</div>
	)
}

export default ChatMessages
