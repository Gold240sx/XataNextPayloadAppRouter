// @ts-nocheck // ignores exports that are not used

// BARREL FILE for dependencies
// to import from here, use the following syntax ( route set up in tsconfig.json ):
// import { dependencyName } from "@/dependencyIndex"
// here each dependency is exported as a named export to prevent namespace collisions
// use then as normal ... dependencyName.method()

// export * as ApexCharts from "./apex-charts" // https://apexcharts.com/docs/react-charts/
// export * as Axios from "./axios" //https://axios-http.com
// export * as Clsx from "./clsx" //https://www.npmjs.com/package/clsx
// export * as DateFns from "./date-fns" //https://date-fns.org
// // export * as DayJs from "./dayjs" //https://day.js.org
// // export * as DndKit from "./dnd-kit" //https://dndkit.com
// export * as FlowbiteReact from "./flowbite-react" //https://flowbite-react.com
// export * as FramerMotion from "./framerMotion" // https://www.framer.com/motion/
// export * as Gsap from "./gsap" // https://gsap.com/docs/v3/
// export * as HebcalCore from "./hebcal-core" //https://www.npmjs.com/package/@hebcal/core
// export * as InputOtp from "./input-otp" // https://input-otp.rodz.dev
// export * as Nivo from "./nivo" //https://nivo.rocks
// export * as ReactConfetti from "./react-confetti" //https://www.npmjs.com/package/react-confetti
// export * as ReactDayPicker from "./react-day-picker" // https://react-day-picker.js.org
// export * as ReactHookForm from "./react-hook-form" //https://react-hook-form.com
// export * as ReactIcons from "./react-icons" //https://react-icons.github.io/react-icons/
// export * as ReactResizablePanels from "./react-resizable-panels" //https://github.com/bvaughn/react-resizable-panels
// export * as ReactSelect from "./react-select" //https://react-select.com/home
// export * as ReactSpinners from "./react-spinners" //https://www.npmjs.com/package/react-spinners
// export * as ReactTooltip from "./react-tooltip" //https://www.npmjs.com/package/react-tooltip
// export * as Recharts from "./recharts" //https://recharts.org/en-US
// export * as Sonner from "./sonner" // https://sonner.emilkowal.ski/getting-started
// export * as TailwindMerge from "./tailwind-merge" //https://github.com/dcastil/tailwind-merge
// export * as UploadThing from "./uploadThing" // https://uploadthing.com
// export * as Vaul from "./vaul" //https://github.com/emilkowalski/vaul
// export * as Zod from "./zod" //https://zod.dev // cool animation!!!!

//==== window is not defined
//==== Uncaught TypeError: Super expression must either be null or a function, not undefined
//====
// react version less than react-18 erro at vercel deployment
// Fix the upstream dependency conflict, or retry
//====
// npm ERR! this command with --force or --legacy-peer-deps
