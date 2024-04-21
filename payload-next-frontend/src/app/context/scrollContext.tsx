import React, { createContext, useState, useEffect, useContext } from "react"

interface ScrollContextType {
	scrollDisabled: boolean
	setScrollDisabled: React.Dispatch<React.SetStateAction<boolean>>
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined)

export const useScrollContext = () => {
	const context = useContext(ScrollContext)
	if (!context) {
		throw new Error("useScrollContext must be used within a ScrollProvider")
	}
	return context
}

export const ScrollProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [scrollDisabled, setScrollDisabled] = useState<boolean>(false)

	useEffect(() => {
		const handleScroll = (e: Event) => {
			if (scrollDisabled) {
				e.preventDefault()
				e.stopPropagation()
			}
		}

		if (scrollDisabled) {
			document.body.style.overflow = "hidden"
		} else {
			document.body.style.overflow = "auto"
		}

		document.addEventListener("scroll", handleScroll, { passive: false })

		return () => {
			document.removeEventListener("scroll", handleScroll)
		}
	}, [scrollDisabled])

	const value: ScrollContextType = {
		scrollDisabled,
		setScrollDisabled,
	}

	return (
		<ScrollContext.Provider value={value}>
			{children}
		</ScrollContext.Provider>
	)
}

export default ScrollContext
