"use client"
import React, { ReactNode } from "react"
import { easeInOut, motion } from "framer-motion"
import { slideUp, perspective, opacity } from "../work-On/Inner/anim"
import Header from "../../../header"
import "./styles.css"

const anim = (variants: any) => {
	return {
		initial: "initial",
		animate: "enter",
		exit: "exit",
		variants,
	}
}

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<div className="inner">
			<motion.div
				// slideUp
				initial={{ y: "102vh" }}
				animate={{ y: "102vh" }}
				transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
				exit={{ y: -150 }}
				className="slide"
			/>
			<motion.div
				// perspective
				initial={{ y: "100vh", scale: 1 }}
				animate={{ y: 0, scale: 1 }}
				transition={{ ease: [0.76, 0, 0.24, 1], duration: 1.2 }}
				exit={{ y: -150, scale: 0.9, opacity: 0.5 }}
				className="page">
				<motion.div
					// opacity+
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ ease: [0.76, 0, 0.24, 1] }}
					exit={{ opacity: 0.5 }}>
					<Header />
					{children}
				</motion.div>
			</motion.div>
		</div>
	)
}
