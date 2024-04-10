// @ts-nocheck // ignores exports that are not used

// BARREL FILE for dependencies
// to import from here, use the following syntax ( route set up in tsconfig.json ):
// import { dependencyName } from "@/dependencyIndex"
// here each dependency is exported as a named export to prevent namespace collisions
// use then as normal ... dependencyName.method()

export * as Gsap from "./gsap" // https://gsap.com/docs/v3/
export * as UploadThing from "./uploadThing" // https://uploadthing.com
export * as Sonner from "./sonner" // https://sonner.emilkowal.ski/getting-started
export * as TailwindMerge from "./tailwind-merge" //https://github.com/dcastil/tailwind-merge
export * as Vaul from "./vaul" //https://github.com/emilkowalski/vaul
export * as Axios from "./axios"
//https:flowbite.com/figma/
export * as FlowbiteReact from "./flowbite-react" //https://flowbite-react.com
export * as Nivo from "./nivo" //https://nivo.rocks
export * as ApexCharts from "./apex-charts" //https://apexcharts.com/docs/react-charts/

// not added yet
export * as DateFns from "./date-fns"
export * as ReactSelect from "./react-select" //https://react-select.com/home
export * as ReactHookForm from "./react-hook-form" //https://react-hook-form.com
export * as Zod from "./zod" //https://zod.dev // cool animation!!!!

// require "use client"
// export * as framerMotion from "./framerMotion" // https://www.framer.com/motion/
// export * as inputOtp from "./input-otp" // https://input-otp.rodz.dev
// export * as reactDayPicker from "./react-day-picker" // https://react-day-picker.js.org
// export * as reactResizablePanels from "./react-resizable-panels" //https://github.com/bvaughn/react-resizable-panels

// window is not defined
// export * as apexCharts from "./apex-charts" // https://apexcharts.com/docs/react-charts/

// Uncaught TypeError: Super expression must either be null or a function, not undefined
// export * as Recharts from "./recharts" //https://recharts.org/en-US
