"use client"
import React from "react"
import Link from "next/link"
import { UserButton, useUser, useAuth } from "@clerk/nextjs"
import NavbarAdminBlock from "./NavbarAdminBlock"
import { Button } from "@/shadcn/shad-cn/button"

const Nav = () => {
	const { user, isLoaded } = useUser()

	const userDetails = {
		userId: user?.emailAddresses[0].id,
		fullName: user?.fullName,
		email: user?.primaryEmailAddress?.emailAddress,
		// isAdmin: has && has({ permission: "2024-Portfolio:admin:manage" }),
		isAdmin: user?.organizationMemberships.filter(
			(org) =>
				org.organization.name === "2024-Portfolio" ||
				org.role === "org:admin"
		),
		imageUrl: user?.imageUrl,
	}

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
					<div className="flex gap-2">
						<Button className="border border-zinc-200 rounded hover:bg-zinc-50 hover:border-zinc-300">
							<Link href="sign-up">Sign Up</Link>
						</Button>
						<Button className="border border-zinc-200 rounded hover:bg-zinc-50 hover:border-zinc-300">
							<Link href="sign-in">Sign In</Link>
						</Button>
					</div>
				)}
				{isLoaded && user && (
					<>
						<div className="mx-4 flex gap-2">
							<Link href="/dashboard">Dashboard</Link>
						</div>
						<div className="z-[12]">
							<UserButton afterSignOutUrl="/" />
						</div>
						<NavbarAdminBlock userDetails={userDetails} />
					</>
				)}
			</nav>
		</header>
	)
}

export default Nav
