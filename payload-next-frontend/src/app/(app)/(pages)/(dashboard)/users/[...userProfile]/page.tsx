import { UserProfile, auth } from "@clerk/nextjs"
import { redirect } from "next/navigation"
import Breadcrumbs from "@/myComponents/site-wide/breadcrumbs/Breadcrumbs"
import { dark } from "@clerk/themes"

type UserProfilePageParams = {
	params: {
		userProfile: string[]
	}
	searchParams: {}
}

const UserProfilePage = (params: UserProfilePageParams) => {
	const { userId } = auth()
	const paramString = params.params.userProfile[0]
	const shouldBeRedirected = userId !== paramString
	if (shouldBeRedirected) {
		// redirect("/dashboard")
		console.log("redirected")
	}

	return (
		<div>
			<Breadcrumbs
				pages={[
					{
						name: "Users",
						href: "/users",
						current: false,
					},
					{
						name:
							paramString.charAt(0).toUpperCase() +
							paramString.slice(1),
						href: `/users/${paramString}`,
						// may want to configure to show the user's name
						current: true,
					},
				]}
			/>
			<div className="max-w-[700px]  ml-20 mx-auto mt-16 flex justify-center flex-col gap-4">
				<UserProfile />
			</div>
		</div>
	)
}

export default UserProfilePage
