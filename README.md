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
-   React-Email (Emails)
-   Resend (Emails server)
-   Upstash (Redis Rate limiting)
-   UploadThing (File Uploads)
-   GSAP Pro (Animations)
-   Axios (HTTP Requests)
-   Apex Charts (Charts)
-   Nivo (Charts)

The project uses the following structure strategies:

-   Barrel FIles for dependencies.
-   Seperation between front-end and back-end

(changed my mind about this as the types and functions being imported caused some imports to be directly imported to components, while some still were imported by the barrel file. There was an additional issue as every change to the ui of components that utilized imports from the barrel file, required a full page reload taking 3-5seconds, and massively increasing development time).

### For original installation instructions see DEVreadme.md
