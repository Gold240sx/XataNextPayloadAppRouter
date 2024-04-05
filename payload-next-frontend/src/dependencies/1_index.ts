// @ts-nocheck // ignores exports that are not used

// BARREL FILE for dependencies
// to import from here, use the following syntax ( route set up in tsconfig.json ):
// import { dependencyName } from "@/dependencyIndex"
// here each dependency is exported as a named export to prevent namespace collisions
// use then as normal ... dependencyName.method()

export * as gsap from "./gsap" // https://gsap.com/docs/v3/
export * as uploadThing from "./uploadThing" // https://uploadthing.com
export * as sonner from "./sonner" // https://sonner.emilkowal.ski/getting-started
export * as tailwindMerge from "./tailwind-merge" //https://github.com/dcastil/tailwind-merge
export * as vaul from "./vaul" //https://github.com/emilkowalski/vaul
export * as axios from "./axios"

// not added yet
export * as dateFns from "./date-fns"
export * as reactSelect from "./react-select" //https://react-select.com/home
export * as reactHookForm from "./react-hook-form" //https://react-hook-form.com
export * as zod from "./zod" //https://zod.dev // cool animation!!!!

// require "use client"
// export * as framerMotion from "./framerMotion" // https://www.framer.com/motion/
// export * as inputOtp from "./input-otp" // https://input-otp.rodz.dev
// export * as reactDayPicker from "./react-day-picker" // https://react-day-picker.js.org
// export * as reactResizablePanels from "./react-resizable-panels" //https://github.com/bvaughn/react-resizable-panels
