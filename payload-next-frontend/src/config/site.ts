export const siteUrl =
	process.env.NEXT_PUBLIC_APP_URL || "https://michatelmartell.com"

export const siteConfig = (locale?: string) => ({
	name: "Michael Martell",
	url: siteUrl + "/" + locale,
	ogImage: `${siteUrl}/${locale}/opengraph-image`,
	description:
		"Starter Template for Payload-Next-React-Email-Resend-XataDb-Upstash...",
	links: {
		github: "https://github.com/Gold240sx",
	},
})

export type SiteConfig = typeof siteConfig
