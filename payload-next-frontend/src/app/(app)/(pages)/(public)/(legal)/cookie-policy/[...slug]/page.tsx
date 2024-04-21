"use client"
import React from "react"
import { paramsType } from "@/types/nextTypes"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollToPlugin } from "gsap/all"
import { useRouter } from "next/navigation"
import { SiteParams } from "@/context/library"

gsap.registerPlugin(ScrollToPlugin)
gsap.registerPlugin(useGSAP)

const CookiePolicy = ({ params }: { params: paramsType }) => {
	const pathname = params.slug[0].replace(/\s/g, "").toLowerCase()
	const linkList = ["necessary", "functional", "analytics"]
	const router = useRouter()

	useGSAP(() => {
		if (pathname && linkList.includes(pathname)) {
			gsap.to(window, {
				duration: 1,
				delay: 0.5,
				scrollTo: {
					y: `#${pathname}`,
					offsetY: 50,
				},
			})
		} else {
			router.push(`${SiteParams.cookies.cookiePolicyUrl}`)
		}
	})

	return (
		<div className="max-w-[700px] mx-auto mt-16 flex justify-center flex-col gap-4">
			<h1>Cookie Policy</h1>
			<p>
				When you visit any of our websites, it may store or retrieve
				information on your browser, mostly in the form of cookies. This
				information might be about you, your preferences, or your device
				and is mostly used to make the site work as you expect it to.
				The information does not usually directly identify you, but it
				can give you a more personalized experience. Because we respect
				your right to privacy, you can choose not to allow some types of
				cookies. Click on the different category headings to find out
				more and manage your preferences. Please note, blocking some
				types of cookies may impact your experience of the site and the
				services we are able to offer.
			</p>
			<p>
				When you visit any of our websites, it may store or retrieve
				information on your browser, mostly in the form of cookies. This
				information might be about you, your preferences, or your device
				and is mostly used to make the site work as you expect it to.
				The information does not usually directly identify you, but it
				can give you a more personalized experience. Because we respect
				your right to privacy, you can choose not to allow some types of
				cookies. Click on the different category headings to find out
				more and manage your preferences. Please note, blocking some
				types of cookies may impact your experience of the site and the
				services we are able to offer.
			</p>
			<p>
				When you visit any of our websites, it may store or retrieve
				information on your browser, mostly in the form of cookies. This
				information might be about you, your preferences, or your device
				and is mostly used to make the site work as you expect it to.
				The information does not usually directly identify you, but it
				can give you a more personalized experience. Because we respect
				your right to privacy, you can choose not to allow some types of
				cookies. Click on the different category headings to find out
				more and manage your preferences. Please note, blocking some
				types of cookies may impact your experience of the site and the
				services we are able to offer.
			</p>
			<p>
				When you visit any of our websites, it may store or retrieve
				information on your browser, mostly in the form of cookies. This
				information might be about you, your preferences, or your device
				and is mostly used to make the site work as you expect it to.
				The information does not usually directly identify you, but it
				can give you a more personalized experience. Because we respect
				your right to privacy, you can choose not to allow some types of
				cookies. Click on the different category headings to find out
				more and manage your preferences. Please note, blocking some
				types of cookies may impact your experience of the site and the
				services we are able to offer.
			</p>
			<p>
				When you visit any of our websites, it may store or retrieve
				information on your browser, mostly in the form of cookies. This
				information might be about you, your preferences, or your device
				and is mostly used to make the site work as you expect it to.
				The information does not usually directly identify you, but it
				can give you a more personalized experience. Because we respect
				your right to privacy, you can choose not to allow some types of
				cookies. Click on the different category headings to find out
				more and manage your preferences. Please note, blocking some
				types of cookies may impact your experience of the site and the
				services we are able to offer.
			</p>{" "}
			<p id="necessary">
				Nesseccary When you visit any of our websites, it may store or
				retrieve information on your browser, mostly in the form of
				cookies. This information might be about you, your preferences,
				or your device and is mostly used to make the site work as you
				expect it to. The information does not usually directly identify
				you, but it can give you a more personalized experience. Because
				we respect your right to privacy, you can choose not to allow
				some types of cookies. Click on the different category headings
				to find out more and manage your preferences. Please note,
				blocking some types of cookies may impact your experience of the
				site and the services we are able to offer.
			</p>
		</div>
	)
}

export default CookiePolicy
