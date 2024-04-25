"use client"
import React, { FC, useState, useEffect } from "react"
import { CgArrowRightO } from "react-icons/cg"
import { motion, useAnimationControls, AnimatePresence } from "framer-motion"
import NavigationLink from "./NavigationLink"
import {
	ChartBarIcon,
	ChartPieIcon,
	DocumentCheckIcon,
	Square2StackIcon,
	UsersIcon,
} from "@heroicons/react/20/solid"
import ProjectLink from "./ProjectLink"
import ProjectNavigation from "./ProjectNavigation"

const containerVariants = {
	close: {
		width: "3.8rem",
		transition: {
			type: "spring",
			damping: 15,
			duration: 0.3,
		},
	},
	open: {
		width: "12rem",
		transition: {
			type: "spring",
			damping: 15,
			duration: 0.3,
		},
	},
}

export const Sidebar: FC = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const [selectedProject, setSelectedProject] = useState<string | null>("")

	const containerControls = useAnimationControls()

	useEffect(() => {
		if (isOpen) {
			containerControls.start("open")
		} else {
			containerControls.start("close")
		}
	}, [isOpen])

	const handleOpenClose = () => {
		setIsOpen(!isOpen)
		setSelectedProject(null)
	}

	return (
		<>
			<motion.nav
				variants={containerVariants}
				initial="close"
				animate={containerControls}
				className="bg-white dark:bg-neutral-900 flex flex-col z-10 gap-20 text-primary p-3 absolute top-0 left-0 h-full overflow-hidden shadow-2xl dark:shadow shadow-neutral-600">
				<div className="flex flex-row w-full justify-between place-items center">
					<div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-700 rounded-full" />
					<button
						className={`text-3xl p-1 transition-all ease-in-out duration-300 ${
							isOpen && "rotate-180"
						}`}
						onClick={handleOpenClose}>
						<CgArrowRightO />
					</button>
				</div>
				<div className="flex flex-col gap-3 items-start w-full relative">
					<NavigationLink name="Dashboard">
						<ChartBarIcon
							className={`w-6 h-6 stroke-inherit stroke-[0.75] min-w-8 align-middle ${
								selectedProject === "Dashboard"
									? "text-rose-500"
									: ""
							}text-center mx-auto`}
						/>
					</NavigationLink>
					<NavigationLink name="Projects">
						<Square2StackIcon
							className={`w-6 h-6 stroke-inherit stroke-[0.75] min-w-8 align-middle ${
								selectedProject === "Dashboard"
									? "text-rose-500"
									: ""
							}text-center mx-auto`}
						/>
					</NavigationLink>
					<NavigationLink name="Tasks">
						<DocumentCheckIcon
							className={`w-6 h-6 stroke-inherit stroke-[0.75] min-w-8 align-middle ${
								selectedProject === "Dashboard"
									? "text-rose-500"
									: ""
							}text-center mx-auto`}
						/>
					</NavigationLink>
					<NavigationLink name="Reporting">
						<ChartPieIcon
							className={`w-6 h-6 stroke-inherit stroke-[0.75] min-w-8 align-middle ${
								selectedProject === "Dashboard"
									? "text-rose-500"
									: ""
							}text-center mx-auto`}
						/>
					</NavigationLink>
					<NavigationLink name="Users">
						<UsersIcon
							className={`w-6 h-6 stroke-inherit stroke-[0.75] min-w-8 align-middle ${
								selectedProject === "Dashboard"
									? "text-rose-500"
									: ""
							}text-center mx-auto`}
						/>
					</NavigationLink>
				</div>
				<div className="flex flex-col gap-3">
					<ProjectLink
						name="Project 1"
						setSelectedProject={setSelectedProject}>
						<div className="min-w-4 h-4 mx-2 border-pink-600 border rounded-full aspect-square bg-pink-700"></div>
					</ProjectLink>
					<ProjectLink
						name="Project 2"
						setSelectedProject={setSelectedProject}>
						<div className="min-w-4 h-4 mx-2 border-orange-400 border rounded-full aspect-square bg-orange-500"></div>
					</ProjectLink>
					<ProjectLink
						name="Project 3"
						setSelectedProject={setSelectedProject}>
						<div className="min-w-4 h-4 mx-2 border-teal-400 border rounded-full aspect-square bg-teal-500"></div>
					</ProjectLink>
				</div>
			</motion.nav>
			<AnimatePresence>
				{selectedProject && (
					<ProjectNavigation
						isOpen={isOpen}
						selectedProject={selectedProject}
						setSelectedProject={setSelectedProject}
					/>
				)}
			</AnimatePresence>
		</>
	)
}
