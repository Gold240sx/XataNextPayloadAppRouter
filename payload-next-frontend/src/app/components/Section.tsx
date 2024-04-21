import { useMotionValueEvent, useScroll } from "framer-motion"
import { useRef, ReactNode } from "react"
import PropTypes from "prop-types"

const Section = ({
	children,
	theme,
	setTheme,
	className,
}: {
	children: ReactNode
	theme: string
	setTheme: any
	className: string
}) => {
	let container = useRef(null)
	let { scrollYProgress } = useScroll({
		target: container,
		offset: ["start center", "end center"],
	})

	useMotionValueEvent(scrollYProgress, "change", (value) => {
		if (value > 0 && value < 1) {
			setTheme(theme)
		}
	})

	return (
		<section
			ref={container}
			className={`${className} flex flex-col min-h-screen p-8 bg-zinc-50 dark:bg-black`}>
			{children}
		</section>
	)
}

Section.propTypes = {
	children: PropTypes.node.isRequired,
	theme: PropTypes.string.isRequired,
	setTheme: PropTypes.func.isRequired,
}

export default Section
