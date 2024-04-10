import React from "react"

const Hero = ({
	heading,
	text,
	backgroundImage,
}: {
	heading: string
	text: string
	backgroundImage: any
}) => {
	return (
		<div>
			{/* // how we build the templates */}
			<h2>{heading}</h2>
			<p>{text}</p>
		</div>
	)
}

export default Hero
