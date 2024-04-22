import React from "react"
import { ContactForm } from "./contact-form"
import Breadcrumbs from "@/myComponents/site-wide/breadcrumbs/Breadcrumbs"

const ContactPage = () => {
	return (
		<div>
			<Breadcrumbs
				pages={[
					{
						name: "Contact",
						href: "/contact",
						current: true,
					},
				]}
			/>
			<div className="my-4 md:my-8 lg:max-w-[750px] mx-auto flex flex-col">
				<h1 className="my-10 text-2xl text-center underline">
					Contact Me
				</h1>
				<ContactForm />
			</div>
		</div>
	)
}

export default ContactPage
