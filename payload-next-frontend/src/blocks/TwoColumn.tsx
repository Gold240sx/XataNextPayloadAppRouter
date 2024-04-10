import React from "react"

const TwoColumns = ({
	heading,
	text,
	image,
	direction,
}: {
	heading: string
	text: string
	image: any
	direction: "default" | "reverse"
}) => {
	return (
		<div>
			<h2>{heading}</h2>
			<p>{text}</p>
		</div>
	)
}

export default TwoColumns
