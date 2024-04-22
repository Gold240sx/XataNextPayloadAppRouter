import React, { FC } from "react"
import { LINK_REGEX } from "@/functions/regex"
import { Link } from "lucide-react"

interface MarkdownLiteProps {
	text: string
}

const MarkdownLite = ({ text }: { text: string }) => {
	const parts = []

	let lastIndex = 0
	let match
	while ((match = LINK_REGEX.exec(text)) !== null) {
		const [fullMatch, linkText, linkUrl] = match
		const matchStart = match.index
		const matchEnd = matchStart + fullMatch.length

		if (lastIndex < matchStart) {
			parts.push(text.slice(lastIndex, matchStart))
		}

		parts.push(
			<Link
				key={fullMatch}
				// rel="noopener noreferrer"
				className="break-words underline-offset-2 text-blue"
				href={linkUrl}
				target="_blank">
				{linkText}
			</Link>
		)
	}

	if (lastIndex < text.length) {
		parts.push(text.slice(lastIndex))
	}
	return (
		<>
			{parts.map((part, i) => (
				<React.Fragment key={i}>{part}</React.Fragment>
			))}
		</>
	)
}

export default MarkdownLite
