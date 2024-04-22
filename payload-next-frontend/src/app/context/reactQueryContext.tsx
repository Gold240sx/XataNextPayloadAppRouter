"use client"
import React, { FC } from "react"
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import { MessagesProvider } from "./chatBotData/messageContext"

interface ProvideProps {
	children: React.ReactNode
}

export const ReactQueryProvider: FC<ProvideProps> = ({ children }) => {
	const queryClient = new QueryClient()
	return (
		<QueryClientProvider client={queryClient}>
			<MessagesProvider> {children}</MessagesProvider>
		</QueryClientProvider>
	)
}
