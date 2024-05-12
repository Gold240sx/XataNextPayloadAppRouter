// import type { Config } from "tailwindcss" // (Typescript Files)
import { withUt } from "uploadthing/tw"
const flowbite = require("flowbite-react/tailwind")
import colors from "tailwindcss/colors"
import {
	fluidExtractor,
	fluidCorePlugins,
	defaultThemeScreensInRems,
	defaultThemeFontSizeInRems,
} from "fluid-tailwind"

// const {
// 	default: flattenColorPalette,
// } = require("tailwindcss/lib/util/flattenColorPalette")

const config = withUt(
	(module.exports = {
		darkMode: ["class"],
		content: [
			"./src/**/*.{js,ts,jsx,tsx}",
			"./src/app/**/*.{js,ts,jsx,tsx}",
			"./pages/**/*.{ts,tsx}",
			"./components/**/*.{ts,tsx}",
			"./public/**/*.html",
			"./app/**/*.{ts,tsx}",
			"./node_modules/flowbite/**/*.js",
			"./node_modules/flowbite-react/lib/**/*.js",
			flowbite.content(),
		],
		prefix: "",
		theme: {
			container: {
				center: true,
				padding: "2rem",
				screens: {
					"2xl": "1400px",
				},
			},
			fontSize: defaultThemeFontSizeInRems,
			screens: defaultThemeScreensInRems,
			extend: {
				colors: {
					"zinc-750": "#2C2C2E",
					"zinc-850": "#1D1D1F",
					"zinc-950": "#131315",
					"zinc-1000": "#070708",
					border: "hsl(var(--border))",
					input: "hsl(var(--input))",
					ring: "hsl(var(--ring))",
					background: "hsl(var(--background))",
					foreground: "hsl(var(--foreground))",
					primary: {
						DEFAULT: "hsl(var(--primary))",
						foreground: "hsl(var(--primary-foreground))",
					},
					secondary: {
						DEFAULT: "hsl(var(--secondary))",
						foreground: "hsl(var(--secondary-foreground))",
					},
					destructive: {
						DEFAULT: "hsl(var(--destructive))",
						foreground: "hsl(var(--destructive-foreground))",
					},
					muted: {
						DEFAULT: "hsl(var(--muted))",
						foreground: "hsl(var(--muted-foreground))",
					},
					accent: {
						DEFAULT: "hsl(var(--accent))",
						foreground: "hsl(var(--accent-foreground))",
					},
					popover: {
						DEFAULT: "hsl(var(--popover))",
						foreground: "hsl(var(--popover-foreground))",
					},
					card: {
						DEFAULT: "hsl(var(--card))",
						foreground: "hsl(var(--card-foreground))",
					},
					flowbitePrimary: colors.blue,
				},
				boxShadow: {
					inner: "inset 0 0 0 1px var(--border)",
					"inner-sm": "inset 0 0 0 1px var(--border)",
					"inner-md": "inset 0 0 0 2px var(--border)",
					"inner-lg": "inset 0 0 0 3px var(--border)",
					"inner-xl": "inset 0 0 0 4px var(--border)",
					"inner-2xl": "inset 0 0 0 5px var(--border)",
					"inner-3xl": "inset 0 0 0 6px var(--border)",
					"t-sm": "0 -1px 2px 0 rgba(0, 0, 0, 0.05)",
					"t-md": "0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
					"t-lg": "0 -10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
					"t-xl": "0 -20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
					"t-2xl": "0 -25px 50px -12px rgba(0, 0, 0, 0.25)",
					"t-3xl": "0 -35px 60px -15px rgba(0, 0, 0, 0.3)",
					"t-inner": "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
					"t-inner-sm": "inset 0 1px 2px 0 rgba(0, 0, 0, 0.05)",
					"t-inner-md":
						"inset 0 4px 6px -1px rgba(0, 0, 0, 0.1), inset 0 -2px 4px -1px rgba(0, 0, 0, 0.06)",
					"t-inner-lg":
						"inset 0 10px 15px -3px rgba(0, 0, 0, 0.1), inset 0 -4px 6px -2px rgba(0, 0, 0, 0.05)",
					"t-inner-xl":
						"inset 0 20px 25px -5px rgba(0, 0, 0, 0.1), inset 0 -10px 10px -5px rgba(0, 0, 0, 0.04)",
					"t-inner-2xl":
						"inset 0 25px 50px -12px rgba(0, 0, 0, 0.25)",
					"t-inner-3xl": "inset 0 35px 60px -15px rgba(0, 0, 0, 0.3)",
					"r-sm": "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
					"r-md": "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
					"r-lg": "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
					"r-xl": "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
					"r-2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
					"r-3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
					"r-inner": "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
					"r-inner-sm": "inset 0 1px 2px 0 rgba(0, 0, 0, 0.05)",
					"r-inner-md":
						"inset 0 4px 6px -1px rgba(0, 0, 0, 0.1), inset 0 -2px 4px -1px rgba(0, 0, 0, 0.06)",
					"r-inner-lg":
						"inset 0 10px 15px -3px rgba(0, 0, 0, 0.1), inset 0 -4px 6px -2px rgba(0, 0, 0, 0.05)",
					"r-inner-xl":
						"inset 0 20px 25px -5px rgba(0, 0, 0, 0.1), inset 0 -10px 10px -5px rgba(0, 0, 0, 0.04)",
					"r-inner-2xl":
						"inset 0 25px 50px -12px rgba(0, 0, 0, 0.25)",
					"r-inner-3xl": "inset 0 35px 60px -15px rgba(0, 0, 0, 0.3)",
					"b-sm": "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
					"b-md": "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
					"b-lg": "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
					"b-xl": "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
					"b-2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
					"b-3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
					"b-inner": "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
					"b-inner-sm": "inset 0 1px 2px 0 rgba(0, 0, 0, 0.05)",
					"b-inner-md":
						"inset 0 4px 6px -1px rgba(0, 0, 0, 0.1), inset 0 -2px 4px -1px rgba(0, 0, 0, 0.06)",
					"b-inner-lg":
						"inset 0 10px 15px -3px rgba(0, 0, 0, 0.1), inset 0 -4px 6px -2px rgba(0, 0, 0, 0.05)",
					"b-inner-xl":
						"inset 0 20px 25px -5px rgba(0, 0, 0, 0.1), inset 0 -10px 10px -5px rgba(0, 0, 0, 0.04)",
					"b-inner-2xl":
						"inset 0 25px 50px -12px rgba(0, 0, 0, 0.25)",
					"b-inner-3xl": "inset 0 35px 60px -15px rgba(0, 0, 0, 0.3)",
					"l-sm": "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
					"l-md": "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
					"l-lg": "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
					"l-xl": "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
					"l-2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
					"l-3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
					"l-inner": "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
					"l-inner-sm": "inset 0 1px 2px 0 rgba(0, 0, 0, 0.05)",
					"l-inner-md":
						"inset 0 4px 6px -1px rgba(0, 0, 0, 0.1), inset 0 -2px 4px -1px rgba(0, 0, 0, 0.06)",
					"l-inner-lg":
						"inset 0 10px 15px -3px rgba(0, 0, 0, 0.1), inset 0 -4px 6px -2px rgba(0, 0, 0, 0.05)",
					"l-inner-xl":
						"inset 0 20px 25px -5px rgba(0, 0, 0, 0.1), inset 0 -10px 10px -5px rgba(0, 0, 0, 0.04)",
					"l-inner-2xl":
						"inset 0 25px 50px -12px rgba(0, 0, 0, 0.25)",
					"l-inner-3xl": "inset 0 35px 60px -15px rgba(0, 0, 0, 0.3)",
				},
				borderRadius: {
					lg: "5px",
					md: "calc(var(--radius) - 2px)",
					sm: "calc(var(--radius) - 4px)",
				},
				keyframes: {
					"accordion-down": {
						from: { height: "0" },
						to: { height: "var(--radix-accordion-content-height)" },
					},
					"accordion-up": {
						from: {
							height: "var(--radix-accordion-content-height)",
						},
						to: { height: "0" },
					},
					scrollingTextLeft: {
						"0%": {
							transform: "translate3d(50%, 0, 0)",
						},
						"100%": {
							transform: "translate3d(-100%, 0, 0)",
						},
					},
				},
				animation: {
					"accordion-down": "accordion-down 0.2s ease-out",
					"accordion-up": "accordion-up 0.2s ease-out",
					scrollingTextLeft: "scrollingTextLeft 25s linear infinite",
				},
			},
		},
		extract: fluidExtractor(),
		plugins: [
			"prettier-plugin-tailwindcss",
			flowbite.plugin(),
			require("flowbite/plugin")({
				charts: true,
			}),
			require("tailwindcss-animate"),
			require("@tailwindcss/typography"),
			require("@tailwindcss/forms"),
			require("@tailwindcss/aspect-ratio"),
			require("@tailwindcss/container-queries"),
			fluidCorePlugins,
			// addVariablesForColors,
		],
	})
)
// satisfies Config // (Typescript Files)

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
// function addVariablesForColors({ addBase, theme }: any) {
//   let allColors = flattenColorPalette(theme("colors"));
//   let newVars = Object.fromEntries(
//     Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
//   );
//   addBase({
//     ":root": newVars,
//   });
// }

export default config
