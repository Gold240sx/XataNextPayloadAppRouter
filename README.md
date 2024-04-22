# Xata DB - Next JS SRC - Payload CMS <img style=" height:38px; padding-top:10px;" src="https://i.ibb.co/ydRpMMZ/Untitled.png"/>

## Dev Notes

repo: https://github.com/Gold240sx/XataNextPayloadAppRouter<br />
demo: https://2024-portfolio-template.vercel.app<br />
filePath: CODE/WebDev/2024/2024-portfolio-xata <br />
vercel: https://vercel.com/gold240sx/2024-portfolio-template/deployments<br />
xata Database: 2024-portfolio <br />

## About

This is a Next JS monorepo, _USING_ the App router. It utlizes, Xata DB, Next JS, and Payload CMS, as well as React-Email, Resend and others.

## Tech Stack:

-   Next JS 14 (App Router) (Framework - Frontend)
-   Xata DB (Database)
-   Clerk (Authentication)
-   Typescript (Language)
-   Vercel (Deployment + Hosting)
-   Payload CMS (Headless CMS)
-   Tailwind CSS (Styling)
-   Sass CSS (Styling)
-   Tailwind UI (Component Library)
-   Flowbite Pro (Component Library)
-   ShadCn (Component Library)
-   GSAP Pro (Animations)
-   Framer Motion (Animations)
-   React-Three-Fiber (3D)
-   React-Email (Emails)
-   Resend (Emails server)
-   Upstash (Redis Rate limiting)
-   UploadThing (File Uploads)
-   React-Hook-Form (Form Management)
-   Zod (Form Validation)
-   React-Context (Global state and local-host cookie management)
-   React-Query (Chat-bot state + data fetching)
-   Axios (HTTP Requests)
-   Apex Charts (Charts)
-   Nivo (Charts)
-   Stripe (Payments)
-   Chat-GPT API (AI Chatbot)

The project uses the following structure strategies:

-   Barrel FIles for dependencies. **(removed)**
-   Seperation between front-end and back-end **(removed)**
-   Debug Mode for development w/ UI feedback of various debugging states: (context, cookies, etc)

-   cookies mangement
-   custom dashboard
-   payload admin panel
-   custom breadcrumbs
-   custom userbar wrapper using clerk's build-in hooks
-   AI chatbot with rate limiting

*   (changed my mind about this as the types and functions being imported caused some imports to be directly imported to components, while some still were imported by the barrel file. There was an additional issue as every change to the ui of components that utilized imports from the barrel file, required a full page reload taking 3-5seconds, and massively increasing development time).
*   The project starts off seperated but has since moved to a completely integrated structure. This is due to the fact that the dependency packages: Payload has moved to a more integrated structure so moving React Email into the default package structure was a natural progression and should allow me to make the email template a part of the deployable page structure in the future. Either way, with various projects, I can still directly create email templates in the dev structure with this method, which would then isolate emails to projects... (Maybe integrating a cloud hosted email structure to "pull in all my emails from all projects" would be a good idea in the future.).

### For original installation instructions see DEVreadme.md
