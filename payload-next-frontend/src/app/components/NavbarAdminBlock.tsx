"use client"
import React from "react"
import Link from "next/link"
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
	DropdownMenuShortcut,
} from "@/components/shad-cn/dropdown-menu"
import { CgWebsite } from "react-icons/cg"
import { FiLogOut } from "react-icons/fi"
import { FaUsersCog } from "react-icons/fa"
import { MdManageAccounts } from "react-icons/md"
import { SignOutButton } from "@clerk/nextjs"
import { motion } from "framer-motion"

const NavbarAdminBlock = ({ userDetails }: { userDetails: any }) => {
	const userIsAdmin = userDetails.isAdmin

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5, delay: 1 }}>
			{userDetails && (
				<div>
					<p
						className={`${
							userIsAdmin ? "pr-8 right-[2.8rem]" : "pr-3 right-4"
						} absolute top-[98px] z-[11] bg-black rounded-full pl-3 text-zinc-200`}>
						Hello,{" "}
						<Link href={`/users/${userDetails.userId}`}>
							<span className="text-yellow-400 ml-2">
								{userDetails?.email}!
							</span>
						</Link>
					</p>
					{userIsAdmin && (
						<>
							<p
								className="pr-6 right-[3.5rem]
							absolute top-[74px] z-[10] rounded-2xl rounded-bl-none rounded-r-none bg-zinc-800 border-black border-2 border-b-0 pb-1 pl-5 pt-0 text-zinc-200">
								Admin
							</p>
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<div
										className="absolute cursor-pointer bg-cover bg-center group right-[1.75rem] top-[74px] z-[12] bg-zinc-700 border-[3px]  border-black hover:outline outline-emerald-400/40 outline-offset-0 rounded-full h-12 w-12 text-bold"
										style={{
											backgroundImage: `url(${userDetails.imageUrl})`,
										}}>
										{/* <GrUserAdmin className="invert cursor-pointer absolute h-8 ml-2.5 w-8 mt-1 opacity-0 group-hover:opacity-100 duration-300 ease-in-out transition-opacity" /> */}
									</div>
								</DropdownMenuTrigger>
								<DropdownMenuContent className="min-w-64 z-10 mx-8 p-4 rounded-2xl shadow-2xl bg-white">
									<div
										id="user-dropdown-menu-header"
										className="flex gap-2">
										<div
											style={{
												backgroundImage: `url(${userDetails.imageUrl})`,
											}}
											className="h-11 w-11 bg-cover bg-center"></div>
										<div className="gap-0">
											<h3 className="text-base font-medium text-left">
												{userDetails.fullName}
											</h3>
											<p className="text-xs text-left text-zinc-500">
												{userDetails.email}
											</p>
										</div>
									</div>
									<DropdownMenuSeparator />
									<hr className="border-t-2 border-zinc-100" />
									<DropdownMenuSeparator />
									<div className="ml-2 gap-4 flex flex-col">
										<div
											id=""
											className="mt-2 gap-4 flex flex-col">
											<DropdownMenuShortcut className="flex items-center gap-4 text-xs tracking-wide mr-auto ml-0 group">
												<Link
													href="/admin"
													target="_blank"
													className="group-hover:text-indigo-500 ease-in-out flex  tracking-wide group gap-4 items-center">
													<CgWebsite className="text-xl group-hover:text-indigo-600 ease-in-out" />
													<p>Admin (Site Builder)</p>
												</Link>
											</DropdownMenuShortcut>
											<DropdownMenuShortcut className="ml-0">
												<Link
													href={`/users/${userDetails.userId}`}
													className="group-hover:text-indigo-500 ease-in-out flex  tracking-wide group gap-4 items-center">
													<MdManageAccounts className="text-xl group-hover:text-indigo-600 ease-in-out" />
													<p className="group-hover:text-indigo-500">
														Manage Account
													</p>
												</Link>
											</DropdownMenuShortcut>
											<DropdownMenuShortcut className="ml-0">
												<Link
													href={`/users/`}
													className="group-hover:text-indigo-500 ease-in-out flex  tracking-wide group gap-4 items-center">
													<FaUsersCog className="text-xl group-hover:text-indigo-600 ease-in-out" />
													<p className="group-hover:text-indigo-500">
														Manage Users
													</p>
												</Link>
											</DropdownMenuShortcut>
										</div>
										<hr className="border-t-2 border-zinc-100" />
										<DropdownMenuShortcut className="flex items-center text-xl text-zinc-400 tracking-normal mr-auto ml-0 pb-2 group">
											<FiLogOut className=" group-hover:text-indigo-500 ease-in-out" />
											<div className="text-sm ml-4 group-hover:text-indigo-600 ease-in-out ">
												<SignOutButton />
											</div>
										</DropdownMenuShortcut>
										<div className="cl-userButtonPopoverFooter 🔒️ cl-internal-uyu30o text-zinc-200 justify-center flex ">
											<div className="cl-internal-wkkub3 flex items-center gap-2 -mt-3">
												<p className="cl-internal-td400p">
													Secured by
												</p>
												<a
													aria-label="Clerk logo"
													className="cl-internal-1h80eck"
													href="https://www.clerk.com?utm_source=clerk&amp;utm_medium=components"
													target="_blank"
													rel="noopener">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														fill="none"
														viewBox="0 0 77 24"
														className="cl-internal-1acnfz5 h-6">
														<path
															fill="currentColor"
															d="M35.16 16.75a4.2 4.2 0 0 1-3.05 1.28 3.54 3.54 0 0 1-2.6-1.04 3.73 3.73 0 0 1-.99-2.66c0-2.2 1.43-3.7 3.59-3.7A3.92 3.92 0 0 1 35.14 12L37 10.36a6.6 6.6 0 0 0-5.05-2.24c-3.65 0-6.24 2.52-6.24 6.23a6.2 6.2 0 0 0 1.73 4.46 6.14 6.14 0 0 0 4.41 1.73 6.9 6.9 0 0 0 5.21-2.12l-1.9-1.68Zm3.58-13.32h2.76v16.92h-2.76V3.43Zm16.1 11.86c.04-.37.06-.74.07-1.11 0-3.5-2.3-6.05-5.85-6.05-1.69 0-3.16.63-4.22 1.72a6.32 6.32 0 0 0-1.66 4.48c0 3.75 2.65 6.22 6.15 6.22a6.2 6.2 0 0 0 5.06-2.25l-1.8-1.6-.1-.08c-.62.77-1.6 1.41-3.01 1.41a3.32 3.32 0 0 1-3.43-2.74h8.79Zm-8.74-2.22a3.36 3.36 0 0 1 .74-1.45c.57-.65 1.4-1 2.37-1 1.58 0 2.57 1 2.9 2.45H46.1Zm17.37-4.98v3.1a13.1 13.1 0 0 0-.83-.06c-2.1 0-3.29 1.5-3.29 3.48v5.74H56.6V8.27h2.76v1.83h.03c.93-1.29 2.3-2 3.75-2h.34Zm6.44 7.2-2 2.22v2.84h-2.76V3.43h2.76V13.8l4.94-5.5h3.28l-4.34 4.86 4.42 7.18H73.1l-3.14-5.06h-.05ZM19.12 3.16l-2.88 2.88a.57.57 0 0 1-.7.09 6.87 6.87 0 0 0-9.17 1.95 6.87 6.87 0 0 0-.24 7.46.57.57 0 0 1-.09.7l-2.88 2.88a.57.57 0 0 1-.86-.06A12 12 0 0 1 19.05 2.3a.57.57 0 0 1 .06.86Z"></path>
														<path
															fill="currentColor"
															d="m19.12 20.84-2.88-2.88a.57.57 0 0 0-.7-.09 6.87 6.87 0 0 1-7.08 0 .57.57 0 0 0-.7.09l-2.89 2.88a.57.57 0 0 0 .07.86 12 12 0 0 0 14.12 0 .57.57 0 0 0 .06-.86ZM12 15.43a3.43 3.43 0 1 0 0-6.86 3.43 3.43 0 0 0 0 6.86Z"></path>
													</svg>
												</a>
											</div>
										</div>
									</div>
								</DropdownMenuContent>
							</DropdownMenu>
						</>
					)}
				</div>
			)}
		</motion.div>
	)
}

export default NavbarAdminBlock
