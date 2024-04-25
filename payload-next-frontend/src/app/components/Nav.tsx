"use client"
import React, { useEffect } from "react"
import Link from "next/link"
import { UserButton, useUser, useAuth } from "@clerk/nextjs"
import NavbarAdminBlock from "./NavbarAdminBlock"
import { Button } from "@/components/shad-cn/button"
import { SiteParams } from "../context/library"

const Nav = () => {
	const { user, isLoaded } = useUser()

	const userDetails = {
		userId: user?.emailAddresses[0].id,
		fullName: user?.fullName,
		email: user?.primaryEmailAddress?.emailAddress,
		// isAdmin: has && has({ permission: "2024-Portfolio:admin:manage" }),
		isAdmin: user?.organizationMemberships.filter(
			(org) =>
				org.organization.name ===
					SiteParams.adminContext.clerkAdminOrg ||
				org.role === SiteParams.adminContext.clerkAdminRole
		),
		imageUrl: user?.imageUrl,
	}

	return (
		<header>
			<nav
				className="flex items-center justify-between p-6 lg:px-8 h-20 border border-t-0 border-r-0 border-b-gray-600"
				aria-label="Global">
				<div className="flex lg:flex-1 mr-auto">
					<Link
						href="/"
						className="-m-1.5 p-1.5"
						aria-label="main website logo - link to homepage">
						WebSite Name
					</Link>
				</div>
				<form className="relative w-fit h-fit hover:w-48 rounded-full ease-in-out duration-200 transition-all border border-zinc-400 hover:border-zinc-600 mr-3">
					<input
						type="search"
						name="search"
						id="search"
						placeholder=""
						className="h-full w-full absolute bg-transparent border-none rounded-full hover:pl-4 hover:pr-8 text-transparent placeholder:text-transparent hover:focus-within:placeholder:text-zinc-600 hover:focus-within:text-black"
					/>
					<div
						id="searchbar"
						className="ml-auto h-8 w-8 items-center justify-center flex  hover:w-48 hover:justify-end hover:pr-[5px]">
						<button>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5 hover:text-black text-zinc-400"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M21 21l-5-5m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
								/>
							</svg>
						</button>
					</div>
				</form>
				{isLoaded && (
					<div className="mx-2 flex gap-2">
						<Link href="/blog">Blog</Link>
					</div>
				)}
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

						{/* // We need a mobile hamburger menu here */}

						{/* <div className="z-[12]">
							<UserButton afterSignOutUrl="/" />
						</div> */}
						<NavbarAdminBlock userDetails={userDetails} />
					</>
				)}
			</nav>
		</header>
	)
}

export default Nav
