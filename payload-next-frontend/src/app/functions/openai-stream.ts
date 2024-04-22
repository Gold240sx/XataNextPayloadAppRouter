import {
	ParsedEvent,
	ReconnectInterval,
	createParser,
} from "eventsource-parser"
export type ChatGPTAgent = "user" | "system"

export interface ChatGPTMessage {
	role: ChatGPTAgent
	content: string
}

export interface OpenAiStreamPayload {
	model: string
	messages: ChatGPTMessage[]
	temperature: number
	top_p: number
	frequency_penalty: number
	presence_penalty: number
	max_tokens: number
	stream: boolean
	n: number
}

export async function OpenAIStream(payload: OpenAiStreamPayload) {
	const encoder = new TextEncoder()
	const decoder = new TextDecoder()

	let counter = 0
	// console.log("payload", payload)

	const res = await fetch("https://api.openai.com/v1/chat/completions", {
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
		},
		method: "POST",
		body: JSON.stringify(payload),
	})

	console.log("res", res)

	const stream = new ReadableStream({
		async start(controller) {
			function onParse(event: ParsedEvent | ReconnectInterval) {
				if (event.type === "event") {
					const data = event.data
					if (data === "[DONE]") {
						controller.close()
						return
					}
					try {
						const json = JSON.parse(data)
						console.log("json", json)
						const text = json.choices[0].delta?.content || ""
						console.log("text", text)
						if (counter < 2 && (text.match(/\n/) || []).length) {
							return
						}

						const queue = encoder.encode(text)
						controller.enqueue(queue)

						counter++
					} catch (error) {
						controller.error(error)
					}
				}
			}

			// stream response (SSE) from OpenAI may be fragmented into multiple chunks
			// this ensures we properly read chunks and invoke an event for each SSE event stream
			const parser = createParser(onParse)
			// https://web.dev/streams/#asynchronous-iteration
			for await (const chunk of res.body as any) {
				parser.feed(decoder.decode(chunk))
			}
		},
	})

	return stream
}
