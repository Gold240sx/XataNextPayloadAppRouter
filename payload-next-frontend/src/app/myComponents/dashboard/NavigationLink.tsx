import Link from "next/link"
import React, { FC, ReactNode } from "react"

interface Props {
	children: ReactNode
	name: string
}

const NavigationLink = ({ children, name }: Props) => {
	return (
		<Link
			href="#"
			className="flex p-1 rounded cursor-pointer w-full stroke-[0.75] items-start hover:stroke-neutral-100 stroke-neutral-400 text-neutral-400 hover:text-neutral-100 place-items-center gap-3 hover:bg-neutral-700/30 transition-colors duration-100">
			{children}
			<p className="text-inherit overflow-clip whitespace-nowrap tracking-wide flex-1">
				{name}
			</p>
		</Link>
	)
}

export default NavigationLink
