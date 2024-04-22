"use client"
import React, { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useLocalStorage } from "@/context/localStorageContext"
import { SiteParams } from "@/context/library"
import { useUser } from "@clerk/nextjs"

const CookieJarView = () => {
	const { cookieJar, updateCookieJar } = useLocalStorage()
	const { user } = useUser()

	const userIsAdmin = user?.organizationMemberships.filter(
		(org) => org.organization.name === "admin" || org.role === "admin"
	)

	const devModeTrue =
		userIsAdmin && SiteParams.devMode === true ? true : false

	return (
		<>
			{devModeTrue && (
				<div className="bg-black/80 hover:w-full max-h-[212px] w-2 rounded-xl fixed left-4 bottom-4 min-h-32 max-w-[80%] mr-4 overflow-scroll text-white px-4 py-2">
					<h1 className="text-xl text-center text-white font-semibold">
						Cookie Jar
					</h1>
					<button
						onClick={() => {
							// localStorage.setItem("cookieJar", JSON.stringify({}))
							updateCookieJar({
								cookiesSaved: false,
								neccessaryCookies: true,
								functionalCookies: true,
								analyticsCookies: true,
							})
						}}
						className=" absolute top-2 right-2 py-1 px-2 text-white rounded-xl shadow-xl bg-red-500/80 hover:bg-red-600">
						Reset
					</button>
					<pre>{JSON.stringify(cookieJar, null, 2)}</pre>
					// render the localStorage cookieJar object as a pre element
					<pre>
						{JSON.stringify(
							localStorage.getItem("cookieJar"),
							null,
							2
						)}
					</pre>
					{/* <pre>{JSON.stringify(localStorage.getItem("cookieJar", null, 2)</pre> */}
				</div>
			)}
		</>
	)
}

export default CookieJarView
