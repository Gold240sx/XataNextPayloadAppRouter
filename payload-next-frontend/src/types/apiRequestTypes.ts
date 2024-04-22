import { z } from "zod"

const ChatBotMessageSchema = z.object({
	id: z.string(),
	isUserMessage: z.boolean(),
	text: z.string(),
})

const ChatBotMessageArraySchema = z.array(ChatBotMessageSchema)

type Message = z.infer<typeof ChatBotMessageSchema>

export { ChatBotMessageSchema, ChatBotMessageArraySchema, type Message }
