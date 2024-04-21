"use client"
import React, { useState, useRef } from "react"
import Image from "next/image"
import Cookie from "@/assets/images/defaults/cookie.svg"
import { Button } from "@/components/shad-cn/button"
import { IoIosArrowBack } from "react-icons/io"
import { IoClose } from "react-icons/io5"
import { motion } from "framer-motion"
import { SiteParams } from "@/context/library"
import CookiesForm from "./CookiesForm"
import Link from "next/link"
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/shad-cn/accordion"

const CookiesPopup = () => {
	const [cookies, setCookies] = useState({})
	const [showPopup, setShowPopup] = useState(true)
	const [showPopupDetails, setShowPopupDetails] = useState(false)
	const cookieAccordianRef = useRef(null)

	const { cookies: cookieParams } = SiteParams
	const { cookieShortPolicyDescription } = cookieParams

	// const prefetchCookiePage = cookieAccordianRef && cookieAccordianRef.dataState

	return (
		<>
			{showPopup && (
				<motion.div
					id="cookies-alert"
					initial={{ x: "100%", opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					exit={{ x: "100%", opacity: 0 }}
					transition={{ duration: 0.5 }}
					className="fixed max-w-full p-4 ml-auto bottom-4 right-4 left-4 items-end lg:max-w-[700px] h-fit w-fit ease-in-out duration-300 transition-all">
					<div className="bg-zinc-800 dark:bg-zinc-300 md:max-w-[60dvw] rounded-2xl  h-fit w-fit p-4 ml-8 mt-auto flex flex-col shadow-2xl duration-300 ease-in-out transition-all">
						<div className="absolute top-2 right-2 p-4">
							<div
								id="close-cookie-popup"
								className="text-zinc-200 hover:text-white dark:text-zinc-800">
								<button onClick={() => setShowPopup(false)}>
									<IoClose className="text-white items-center text-3xl m-1 hover:border-zinc-200 hover:text-white" />
								</button>
							</div>
						</div>

						<div className=" h-fit w-fit ease-in-out transition-all duration-300">
							{!showPopupDetails && (
								<div
									id="cookie-pop-up-intro"
									className="flex gap-4 flex-row w-fit ease-in-out-duration-300 transition-all grow">
									<Image
										src={Cookie}
										alt="cookie"
										width={50}
										height={50}
										className="w-16 h-16 scale-[2.5] translate-x-5 translate-y-[100%] sm:translate-y-0"
									/>
									<div className="gap-4 w-fit ease-in-out-duration-300 transition-all">
										<h3 className="text-white pl-24 pr-10  dark:text-zinc-800 text-center">
											This site collects anonymous data
											and stores it on your computer to
											improve user experience.
										</h3>
										<div
											id="cookie-button-bar"
											className="flex mt-6 pl-24 gap-4 items-end flex-wrap">
											<Button
												variant="link"
												onClick={() =>
													setShowPopup(false)
												}
												className="text-primary grow hover:no-underline bg-white rounded-xl shadow-xl">
												Accept all cookies
											</Button>
											<Button
												variant="link"
												onClick={() =>
													setShowPopupDetails(true)
												}
												className="text-primary grow hover:no-underline bg-white/20 text-white rounded-xl shadow-xl">
												Preferences
											</Button>
										</div>
									</div>
								</div>
							)}
							{showPopupDetails && (
								<div className="text-white dark:text-zinc-800 ">
									<button
										onClick={() =>
											setShowPopupDetails(false)
										}
										className="text-2xl">
										<IoIosArrowBack />
									</button>
									<hr className="border-zinc-700 dark:border-zinc-200" />

									<div className=" h-64 min-w-48 duration-300 ease-in-out  transition-all overflow-y-scroll flex flex-col items-center">
										<h1 className="text-white dark:text-black text-2xl py-2">
											Cookie Preferences
										</h1>
										<Accordion
											type="single"
											ref={cookieAccordianRef}
											className="w-full ease-in-out-duration-300 transition-all"
											collapsible>
											<AccordionItem value="cookie-info">
												<AccordionTrigger>
													Cookie Policy Info
												</AccordionTrigger>
												<AccordionContent className="flex flex-wrap">
													<p className="pl-1">
														{
															cookieShortPolicyDescription
														}
														<Link
															href="/cookie-policy"
															prefetch={
																showPopupDetails
															}
															target="_blank"
															className="underline ml-2 text-sky-500">
															Learn more
														</Link>
													</p>
												</AccordionContent>
											</AccordionItem>
										</Accordion>
										<CookiesForm />
									</div>
								</div>
							)}
						</div>
					</div>
				</motion.div>
			)}
		</>
	)
}

export default CookiesPopup
