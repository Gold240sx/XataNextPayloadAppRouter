"use client"
import React, { useEffect } from "react"
import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { BiInfoCircle } from "react-icons/bi"
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/shad-cn/form"
import { Label } from "@/components/shad-cn/label"
import { Button } from "@/components/shad-cn/button"
import { Switch } from "@/components/shad-cn/switch"
import { Input } from "@/components/shad-cn/input"

const formSchema = z.object({
	neccessaryCookies: z.boolean(),
	functionalCookies: z.boolean(),
	analyticsCookies: z.boolean(),
})

type formSchemaType = z.infer<typeof formSchema>

const CookiesForm = () => {
	const form = useForm<formSchemaType>({
		resolver: zodResolver(formSchema),
	})

	const onSubmit = async (data: formSchemaType) => {
		console.log(data)
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="space-y-2 w-full ease-in-out-duration-300 transition-all">
				<div className="flex items-center my-2">
					{/* <FormField
						control={form.control}
						name="neccessaryCookies"
						render={({ field }) => (
							<FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
								<div className="space-y-0.5 flex w-fit">
									<FormLabel className="whitespace-nowrap">
										Marketing emails
									</FormLabel>
									<FormDescription>
										<button
											type="button"
											className="text-xl mx-1">
											<Link
												scroll={true}
												href="/cookie-policy/necessary"
												target="_blank">
												<BiInfoCircle />
											</Link>
										</button>
									</FormDescription>
								</div>
								<FormControl>
									<Switch
										checked={field.value}
										onCheckedChange={field.onChange}
										disabled
										aria-readonly
									/>
								</FormControl>
							</FormItem>
						)}
					/> */}
					<Switch
						checked={true}
						onCheckedChange={() => {}}
						disabled
						aria-readonly
					/>
				</div>
			</form>
		</Form>
	)
}

export default CookiesForm
