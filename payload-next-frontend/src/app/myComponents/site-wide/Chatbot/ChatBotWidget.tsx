"use client"
import React, { FC, useState } from "react"
import Image from "next/image"
import { IoClose } from "react-icons/io5"
import { BiChevronDown } from "react-icons/bi"
import { GiPlainCircle } from "react-icons/gi"
import ChatbotImage from "@/assets/gifs/chatbot-2.gif"
import { SiteParams } from "@/context/library"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { AnimatePresence, motion } from "framer-motion"
import ChatContents from "./ChatContents"

const ChatBot_Chat_Widget: FC = () => {
	const [showChatWidget, setShowChatWidget] = useState(false)
	const [headerMinimized, setHeaderMinimized] = useState(false)

	return (
		<>
			{!showChatWidget && (
				<button
					className={`fixed opacity-50 hover:opacity-100 right-4 group bottom-4 shadow-2xl shadow-teal-400 active:h-20 active:w-20 h-12 w-12 hover:h-24 hover:w-24 bg-zinc-800 rounded-full ease-in-out transition-all duration-300`}
					onClick={() => {
						setShowChatWidget(true)
					}}>
					<Image
						src={ChatbotImage}
						unoptimized
						alt="Chatbot icon"
						className="h-full w-full object-cover bg-center pr-[4px] rounded-full repeat-infinite"
					/>
					<h1
						className={` ${
							!showChatWidget
								? "-right-[100px] group-hover:right-[120px]"
								: ""
						} bottom-1 p-2 text-black fixed font-light ease-in-out duration-300 transition-all delay-300`}>
						Chat
					</h1>
				</button>
			)}
			<AnimatePresence>
				{showChatWidget && (
					<motion.div
						initial={{ x: "100%", y: "100%", scale: 0 }}
						animate={{
							x: "0%",
							y: "0%",
							scale: 1,
							transition: { duration: 0.3, ease: "easeInOut" },
						}}
						exit={{
							x: "100%",
							y: "100%",
							scale: 0,
							opacity: 0,
							transition: {
								duration: 0.2,
								ease: "linear",
							},
						}}
						className={`${
							headerMinimized ? "pt-12" : "pt-4"
						} bg-zinc-800 w-72 shadow-xl shadow-teal-400/50 group min-h-[24rem] z-40 max-w-[90vw] max-h-[80vh] h-fit fixed right-4 bottom-4 rounded-xl overflow-hidden  overflow-y-scroll`}>
						<div className="relative h-full flex flex-col px-1">
							<div className=" bg-zinc-800 z-10 shadow-black/30 shadow-xl w-full min-h-24 h-fit px-2 relative">
								<h1 className="text-white font-thin leading-8 text-3xl ">
									Chat
								</h1>
								<button
									// later impliment an animation where when this is clicked the chatWidget scales to 95%
									className="absolute top-0 right-0 px-2 text-zinc-500 hover:text-white -translate-y-2"
									onClick={() => {
										setShowChatWidget(false)
									}}>
									<BiChevronDown className="text-4xl m-2 mr-0 hover:scale-110 ease-in-out duration-300 transition-all" />
									{/* <IoClose className="text-3xl m-2" /> */}
								</button>
								<div className="flex items-center gap-2 px-2 my-4">
									<GiPlainCircle className="text-lime-600 h-2 w-2 animate-pulse" />
									<p className="text-white whitespace-nowrap">
										{SiteParams.companyName.length
											? SiteParams.companyName
											: "Company"}{" "}
										is online.
									</p>
									<div className="flex -space-x-2 ml-auto">
										{SiteParams.supportStaff.map(
											(staff, index) => (
												<Image
													key={index}
													src={staff.photo}
													alt="Staff photo"
													className="w-6 h-6 rounded-full ring ring-zinc-950"
												/>
											)
										)}
									</div>
								</div>
							</div>
							<div
								id="chat-space"
								className={`px-2 z-0 bg-zinc-850 rounded-lg flex grow flex-1 flex-col`}>
								<ChatContents />
							</div>
							<div
								id="contacts-section"
								className="flex w-full justify-evenly rounded-lg h-fit p-2 bg-gradient-to-b from-zinc-800 to-zinc-850">
								{SiteParams.socialMedia.map((social, index) => {
									return (
										<a
											key={index}
											href={social.url}
											target="_blank"
											rel="noreferrer"
											className="flex items-center shadow-t-inner-lg shadow-black/20 hover:shadow-black/40 justify-center w-8 h-8 bg-zinc-800 hover:bg-zinc-700 rounded-full m-2">
											<social.icon className="text-white" />
										</a>
									)
								})}
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	)
}

export default ChatBot_Chat_Widget
