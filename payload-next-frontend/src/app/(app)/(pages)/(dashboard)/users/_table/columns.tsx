"use client"
import React from "react"
import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal, ArrowUpDown } from "lucide-react"
import { Button } from "@/app/components/shad-cn/button"
import { toast } from "sonner"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/app/components/shad-cn/dropdown-menu"
import Link from "next/link"

export type User = {
	id: string
	image: string
	name: string
	email: string
	role: string
	lastSeen: string
	created: string
}

export const columns: ColumnDef<User>[] = [
	{
		accessorKey: "id",
		header: "id",
		cell: ({ row }) => {
			return (
				<p className="text-xs text-zinc-400 max-w-16 overflow-hidden">
					{row.getValue("id")}
				</p>
			)
		},
	},
	{
		accessorKey: "image",
		header: "image",
		cell: ({ row }) => {
			return (
				<div className="flex items-center gap-2">
					<img
						src={row.getValue("image")}
						alt="user image"
						className="w-8 h-8 rounded-full border"
					/>
				</div>
			)
		},
	},
	{
		accessorKey: "name",
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === "asc")
					}>
					Name
					<ArrowUpDown className="h-4 w-4 ml-2 hover:text-blue-700 text-zinc-500" />
				</Button>
			)
		},
	},
	{
		accessorKey: "email",
		header: "email",
	},
	{
		accessorKey: "role",
		header: "role",
		cell: ({ row }) => {
			function findAdminOrUser(text: string) {
				return text.match(/\b(admin|user)\b/g) || ["user"]
			}
			const matches = findAdminOrUser(row.getValue("role"))
			return (
				<div className="flex gap-1">
					{matches.map((match: string) => (
						<p
							className={`${
								match === "admin"
									? "bg-red-500/20 border-red-500/40"
									: "bg-amber-500/20 border-amber-500/40"
							} rounded-full px-2 py-0.5 border text-xs`}>
							{match}
						</p>
					))}
				</div>
			)
		},
	},
	{
		accessorKey: "lastSeen",
		header: "lastSeen",
		cell: ({ row }) => {
			const date = new Date(row.getValue("created"))
			const formatted = date.toLocaleDateString()
			return <div className="font-medium">{formatted}</div>
		},
	},
	{
		accessorKey: "created",
		header: "created",
		cell: ({ row }) => {
			const date = new Date(row.getValue("created"))
			const formatted = date.toLocaleDateString()
			return <div className="font-medium">{formatted}</div>
		},
	},
	{
		id: "actions",
		cell: ({ row }) => {
			const user = row.original

			return (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" className="h-8 w-8 p-0">
							<span className="sr-only">Open menu</span>
							<MoreHorizontal className="h-4 w-4 text-zinc-500" />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent
						align="end"
						className="bg-white rounded">
						<DropdownMenuLabel>Actions</DropdownMenuLabel>
						<DropdownMenuItem
							className="cursor-pointer hover:font-semibold hover:bg-zinc-100 h-fit w-full"
							onClick={() => {
								navigator.clipboard.writeText(user.id)
								toast.success("User ID copied to clipboard")
							}}>
							Copy user ID
						</DropdownMenuItem>
						<DropdownMenuItem className="cursor-pointer hover:font-semibold hover:bg-zinc-100 h-fit w-full">
							<Link href={`/users/${user.id}`}>View user</Link>
						</DropdownMenuItem>
						<DropdownMenuSeparator />
					</DropdownMenuContent>
				</DropdownMenu>
			)
		},
	},
]
