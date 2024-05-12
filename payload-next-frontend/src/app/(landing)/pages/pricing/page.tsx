import { FooterMain } from "@/components/flowbite-dashboard/footer-main"
import { NavbarMain } from "@/components/flowbite-dashboard/navbar-main"
import { Benefits, FAQ, PricingPlan } from "./sections"

export default function PricingPage() {
	return (
		<>
			<NavbarMain />
			<div className="container mx-auto px-4 pt-32 lg:px-0 dark:bg-gray-900">
				<PricingPlan />
				<Benefits />
				<FAQ />
			</div>
			<FooterMain />
		</>
	)
}
