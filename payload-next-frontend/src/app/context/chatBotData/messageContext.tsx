import { Message } from "@/types/apiRequestTypes"
import { nanoid } from "nanoid"
import { createContext, useState, ReactNode } from "react"

export const MessagesContext = createContext<{
	messages: Message[]
	isMessageUpdating: boolean
	addMessage: (message: Message) => void
	removeMessage: (id: string) => void
	updateMessage: (id: string, updateFn: (prevText: string) => string) => void
	setIsMessageUpdating: (isUpdating: boolean) => void
}>({
	messages: [],
	isMessageUpdating: false,
	addMessage: () => {},
	removeMessage: () => {},
	updateMessage: () => {},
	setIsMessageUpdating: () => {},
})

export const MessagesProvider = ({ children }: { children: ReactNode }) => {
	const [isMessageUpdating, setIsMessageUpdating] = useState<boolean>(false)
	const [messages, setMessages] = useState<Message[]>([
		{
			id: nanoid(),
			isUserMessage: false,
			text: "Hello, how can I help you?",
		},
	])

	const addMessage = (message: Message) => {
		setMessages((prevMessages) => [...prevMessages, message])
	}

	const removeMessage = (id: string) => {
		setMessages((prevMessages) =>
			prevMessages.filter((message) => message.id !== id)
		)
	}

	const updateMessage = (
		id: string,
		updateFn: (prevText: string) => string
	) => {
		setMessages((prevMessages) =>
			prevMessages.map((message) => {
				if (message.id === id) {
					return { ...message, text: updateFn(message.text) }
				}
				return message
			})
		)
	}

	return (
		<MessagesContext.Provider
			value={{
				messages,
				addMessage,
				removeMessage,
				updateMessage,
				isMessageUpdating,
				setIsMessageUpdating,
			}}>
			{children}
		</MessagesContext.Provider>
	)
}
