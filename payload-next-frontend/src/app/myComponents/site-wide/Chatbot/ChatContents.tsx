// "use client"
import React, { FC } from "react"
import ChatInput from "./ChatInput"
import ChatMessages from "./ChatMessages"

const ChatContents: FC = () => {
	return (
		<div className="text-white p-2 ">
			<div className="flex-1 flex-grow flex h-full -mb-3" />
			<ChatMessages className="px-2 py-3 flex-1" />
			<ChatInput className="" />
		</div>
	)
}

export default ChatContents
