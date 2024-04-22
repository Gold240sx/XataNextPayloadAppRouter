import { ChatBotMessageArraySchema } from "@/types/apiRequestTypes"
import {
	ChatGPTMessage,
	OpenAiStreamPayload,
	OpenAIStream,
} from "@/functions/openai-stream"
import { SiteParams } from "@/context/library"

export async function POST(req: Request) {
	// console.log("endpoint works")
	const { messages } = await req.json()
	/// parse this against the schema
	const parsedMessages = ChatBotMessageArraySchema.parse(messages)
	const outboundMessages: ChatGPTMessage[] = parsedMessages.map((message) => {
		return {
			role: message.isUserMessage ? "user" : "system",
			content: message.text,
		}
	})
	outboundMessages.unshift({
		// places the items in reverse order
		role: "system",
		content: SiteParams.GPTData.chatbotPrompt,
	})

	const payload: OpenAiStreamPayload = {
		model: "gpt-3.5-turbo",
		messages: outboundMessages,
		temperature: 0.4,
		top_p: 1,
		frequency_penalty: 0,
		presence_penalty: 0,
		max_tokens: 150,
		stream: true,
		n: 1,
	}

	// creating a readable stream

	const stream = await OpenAIStream(payload)
	// console.log("stream", stream)

	return new Response(stream)
}
