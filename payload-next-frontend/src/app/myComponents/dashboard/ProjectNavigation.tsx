import React, { ReactNode } from "react"
import { motion } from "framer-motion"
import NavigationLink from "./NavigationLink"
import {
	AdjustmentsHorizontalIcon,
	ArrowTrendingUpIcon,
	BoltIcon,
	CursorArrowRaysIcon,
	PencilIcon,
	UserGroupIcon,
	UserIcon,
	XMarkIcon,
} from "@heroicons/react/20/solid"
import Link from "next/link"

const variants = {
	close: {
		x: -300,
		opacity: 0,
	},
	open: {
		x: 0,
		opacity: 1,
	},
}

interface ProjectNavProps {
	selectedProject: string
	setSelectedProject: (name: string | null) => void
	isOpen: boolean
}

const ProjectNavigation = ({
	isOpen,
	selectedProject,
	setSelectedProject,
}: ProjectNavProps) => {
	return (
		<motion.nav
			variants={variants}
			className={`h-full flex flex-col bg-zinc-800 gap-8 w-64 pt-16 absolute ml-0 border-r border-neutral-800 p-5 ${
				isOpen ? "left-[12rem]" : "left-[3.8rem]"
			}`}
			initial="close"
			animate="open"
			exit="close"
			transition={{
				duration: 0.25,
				ease: "easeInOut",
			}}>
			<div className="flex flex-row w-full justify-between place-items-center">
				<h1 className="tracking-wide text-neutral-100 text-lg">
					{selectedProject}
				</h1>
				<button onClick={() => setSelectedProject(null)}>
					<XMarkIcon className="w-6 h-6 text-neutral-100" />
				</button>
			</div>
			<input
				placeholder="Search"
				type="text"
				className="px-3 py-2 tracking-wide rounded-lg  bg-neutral-600/40 text-neutral-100"
			/>
			<div className="flex flex-col gap-3">
				<NavigationLink name="Progress">
					<ArrowTrendingUpIcon className="stroke-[0.75] stroke-inherit min-w-6 w-6" />
				</NavigationLink>
				<NavigationLink name="Team Members">
					<UserGroupIcon className="stroke-[0.75] stroke-inherit min-w-6 w-6" />
				</NavigationLink>
				<NavigationLink name="In Review">
					<PencilIcon className="stroke-[0.75] stroke-inherit min-w-6 w-6" />
				</NavigationLink>
				<NavigationLink name="In Progress">
					<BoltIcon className="stroke-[0.75] stroke-inherit min-w-6 w-6" />
				</NavigationLink>
				<NavigationLink name="Up Next">
					<CursorArrowRaysIcon className="stroke-[0.75] stroke-inherit min-w-6 w-6" />
				</NavigationLink>
				<NavigationLink name="Project Settings">
					<AdjustmentsHorizontalIcon className="stroke-[0.75] stroke-inherit min-w-6 w-6" />
				</NavigationLink>
			</div>
			<div className="flex flex-col gap-5">
				<h1 className="tracking-wide text-neutral-300">Team Members</h1>
				<Link
					href="#"
					className="flex flex-row gap-3 place-items-center">
					<UserIcon className="w-8 rounded-full stroke-2 stroke-rose-800 bg-rose-200/70" />
					<p className="tracking-wide text-neutral-700">Steve Jobs</p>
				</Link>
				<Link
					href="#"
					className="flex flex-row gap-3 place-items-center">
					<UserIcon className="w-8 rounded-full stroke-2 stroke-emerald-800 bg-emerald-200/70" />
					<p className="tracking-wide text-neutral-700">Joe Rogan</p>
				</Link>
				<Link
					href="#"
					className="flex flex-row gap-3 place-items-center">
					<UserIcon className="w-8 rounded-full stroke-2 stroke-indigo-800 bg-indigo-200/70" />
					<p className="tracking-wide text-neutral-700">Elon Musk</p>
				</Link>
			</div>
		</motion.nav>
	)
}

export default ProjectNavigation
