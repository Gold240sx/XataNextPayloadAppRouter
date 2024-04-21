import Img1 from "@/assets/images/testProjects/project-1.png"
import Img2 from "@/assets/images/testProjects/project-2.png"
import Img3 from "@/assets/images/testProjects/project-3.png"
import Img4 from "@/assets/images/testProjects/project-4.png"
import Img5 from "@/assets/images/testProjects/project-5.png"
import Img6 from "@/assets/images/testProjects/project-6.png"

export const projects = [
	{
		name: "Portfolio Website",
		image: Img1,
		buttonColor: "bg-pink-600 hover:bg-pink-700",
		shadowColor: "hover:shadow-amber-600/30",
		technologies: ["Next.js", "Gsap", "Css"],
		link: "/",
	},
	{
		name: "Fitness tracker",
		image: Img2,
		buttonColor: "bg-red-600 hover:bg-red-700",
		shadowColor: "hover:shadow-blue-600/40",
		technologies: ["TypeScript", "Trpc", "Tailwind", "Prisma"],
		link: "/",
	},
	{
		name: "Pomodoro app",
		image: Img3,
		buttonColor: "bg-zinc-600 hover:bg-zinc-700",
		shadowColor: "hover:shadow-black/10",
		technologies: ["JavaScript", "Css"],
		link: "/",
	},
	{
		name: " Personal Blog",
		image: Img4,
		buttonColor: "bg-teal-600 hover:bg-teal-700",
		shadowColor: "hover:shadow-red-600/40",
		technologies: ["Svelte.js", "Gsap", "Tailwind"],
		link: "/",
	},
	{
		name: "Ecommerce",
		image: Img5,
		buttonColor: "bg-yellow-700 hover:bg-yellow-800",
		shadowColor: "hover:shadow-yellow-900/30",
		technologies: ["Html", "Css", "JavaScript"],
		link: "/",
	},
	{
		name: "Weather app",
		image: Img6,
		buttonColor: "bg-amber-400 hover:bg-amber-500",
		shadowColor: "hover:shadow-teal-600/30",
		technologies: ["Next.js", "Gsap", "Css"],
		link: "/",
	},
]
