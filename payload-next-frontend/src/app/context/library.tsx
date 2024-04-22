// import React from "react"
import em1 from "@/assets/images/employees/em1.png"
import em2 from "@/assets/images/employees/em2.png"
import em3 from "@/assets/images/employees/em3.png"
import { BsGithub } from "react-icons/bs"
import { ImLinkedin } from "react-icons/im"
import { AiFillInstagram } from "react-icons/ai"
import { BsMeta } from "react-icons/bs"
import { BsGoogle } from "react-icons/bs"
import { websiteSourceMap } from "./chatBotData/websiteSourceMap"

const ChatbotData = websiteSourceMap

const SiteParams = {
	companyName: "",
	devMode: false,
	adminContext: {
		adminEmail: "240designworks@gmail.com",
		clerkAdminRole: "org:admin",
		clerkAdminOrg: "2024-Portfolio",
	},
	navigation: [
		{ name: "About", href: "/about" },
		// { name: "Portfolio", href: "/portfolio" },
		// { name: "Skills", href: "/skills" },
		// { name: "Education", href: "/education" },
		{ name: "Contact", href: "/contact" },
	],
	footerNavigation: [
		{
			name: "GitHub",
			href: "#",
			icon: (props: any) => (
				<svg fill="currentColor" viewBox="0 0 24 24" {...props}>
					<path
						fillRule="evenodd"
						d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
						clipRule="evenodd"
					/>
				</svg>
			),
		},
	],
	cookies: {
		enabled: true,
		cookiePolicyUrl: "/cookie-policy",
		cookieShortPolicyDescription: `This website uses cookies to improve user experience. 
		You are fully in control of your data and we respect your right to privacy. You can manage
		your preferences below and update them at any time by visiting your 'Account Settings' 
		page.`,
		cookieFullPolicyDescription: "",
	},
	supportStaff: [
		{
			name: "Michael",
			email: "240designworks@gmail.com",
			photo: em1,
		},
		{
			name: "Emily",
			email: "testEmail@email.com",
			photo: em2,
		},
		{
			name: "Erica",
			email: "testEmail@email.com",
			photo: em3,
		},
	],
	socialMedia: [
		{
			name: "Meta",
			url: "",
			icon: BsMeta,
		},
		{
			name: "LinkedIn",
			url: "",
			icon: ImLinkedin,
		},
		{
			name: "Google",
			url: "",
			icon: BsGoogle,
		},
		{
			name: "Instagram",
			url: "",
			icon: AiFillInstagram,
		},
		{
			name: "GitHub",
			url: "",
			icon: BsGithub,
		},
	],
	GPTData: {
		chatbotPrompt: `You are a helpful customer support chatbot embedded on a book store website. You are able to answer questions about the website and its content.
			You are also able to answer questions about the books in the store. Use this bookstore metadata to answer the customer questions:
			${ChatbotData}

			Only include links in markdown format.
			Example: 'You can browse our books [here](https://www.example.com/books)'.
			Other than links, use regular text.

			Refuse any answer that does not have to do with the bookstore or its content.
			Provide short, concise answers. Do not provide any personal information.
		`,
		chatbotData: ChatbotData,
	},
}

export { SiteParams }
