"use client"
import React from "react"
import Link from "next/link"
import { UserButton, useUser } from "@clerk/nextjs"

const Nav = () => {
	const { user, isLoaded } = useUser()

	return (
		<header>
			<nav
				className="flex items-center justify-between p-6 lg:px-8 h-20 border border-t-0 border-r-0 border-b-gray-600"
				aria-label="Global">
				<div className="flex lg:flex-1 mr-auto">
					<a href="/" className="-m-1.5 p-1.5">
						Next.js Authentication
					</a>
				</div>
				{isLoaded && !user && (
					<>
						<Link href="sign-in">Sign In</Link>
						<Link href="sign-up">Sign In</Link>
					</>
				)}
				{isLoaded && user && (
					<>
						<div className="mx-4 flex gap-2">
							<Link href="/dashboard">Dashboard</Link>
						</div>
						<div>
							<UserButton afterSignOutUrl="/" />
						</div>
					</>
				)}
			</nav>
		</header>
	)
}

export default Nav
