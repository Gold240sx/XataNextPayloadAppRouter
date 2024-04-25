import { ChevronRightIcon } from "@heroicons/react/20/solid"
import Link from "next/link"
import React, { FC } from "react"

interface Props {
	children: React.ReactNode
	name: string
	setSelectedProject: (name: string | null) => void
}

const ProjectLink = ({ children, name, setSelectedProject }: Props) => {
	const handleProjectClick = () => {
		setSelectedProject(null)
		setTimeout(() => {
			setSelectedProject(name)
		}, 250)
	}

	return (
		<Link
			href="#"
			onClick={handleProjectClick}
			className="flex py-1 px-2 rounded cursor-pointer stroke-[0.75] hover:stroke-neutral-100 stroke-neutral-400 text-neutral-400 hover:text-neutral-100 place-items-center gap-3 hover:bg-neutral-700/30 transition-colors duration-100">
			{children}
			<p className="text-inherit truncate  overflow-clip whitespace-nowrap tracking-wide flex-1">
				{name}
			</p>
			<ChevronRightIcon className="stroke-inherit stroke-[0.75] min-w-8 w-8" />
		</Link>
	)
}

export default ProjectLink
