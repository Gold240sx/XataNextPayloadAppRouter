import React from "react"
import { ContactForm } from "./contact-form"

const ContactPage = () => {
	return (
		<div className="my-4 md:my-8 lg:max-w-[750px] flex flex-col">
			<h1 className="my-10 text-2xl text-center underline">Contact Me</h1>
			<ContactForm />
		</div>
	)
}

export default ContactPage
