import { UserProfile, auth } from "@clerk/nextjs"
import { redirect } from "next/navigation"
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
			<UserProfile />
		</div>
	)
}

export default UserProfilePage
