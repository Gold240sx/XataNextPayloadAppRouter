import RenderBlocks from "@/utils/RenderBlocks"
import axios from "axios"

export async function generateStaticParams(): Promise<Params[]> {
	const pageReq = await axios(`/api/pages?limit=100`)
	const pageData = pageReq.data

	return pageData.docs.map(({ slug }: { slug: string }) => ({
		params: {
			slug: slug !== "index" ? slug.split("/") : false,
		},
	}))
}

interface PageParams {
	params: Params
}

export async function getPageData({
	params,
}: PageParams): Promise<PageData | null> {
	const { slug } = params || { slug: "index" }

	try {
		const pageReq = await axios(`/api/pages/where[slug][equals]=${slug}`)
		return pageReq.data.docs[0] as PageData // Assert type to PageData
	} catch (error) {
		console.error("Error fetching page data:", error)
		return null
	}
}

export default async function Page({ params }: { params: PageParams }) {
	const pageData = await getPageData(params) // Pass params as a property

	return (
		<div>
			{pageData && pageData.layout ? (
				<RenderBlocks layout={pageData.layout} />
			) : (
				<div className="text-black">Page has no layout</div>
			)}
		</div>
	)
}

// Typing
interface PageData {
	layout: any
}

interface PageParams {
	slug: string | string[] | false
}

interface Params {
	params: PageParams
	slug: string | string[] | false
}

// interface PageProps {
// 	params: PageParams
// }

//================================================
// Client requirement but fully typed
//================================================
// export async function generateStaticParams(): Promise<Params[]> {
// 	const pageReq = await axios(`/api/pages?limit=100`)
// 	const pageData = pageReq.data

// 	return pageData.docs.map(({ slug }: { slug: string }) => ({
// 		slug: slug !== "index" ? slug.split("/") : false,
// 	}))
// }

// export default function Page({ params }: PageProps) {
// 	const { slug } = params || { slug: "index" }

// 	const fetchPageData = async (): Promise<PageData | null> => {
// 		const pageReq = await axios(`/api/pages/where[slug][equals]=${slug}`)
// 		return pageReq.data.docs[0] as PageData
// 	}

// 	const [pageData, setPageData] = useState<PageData | null>(null)

// 	useEffect(() => {
// 		const fetchData = async () => {
// 			const data = await fetchPageData()
// 			setPageData(data)
// 		}
// 		fetchData()
// 	}, [slug])

// 	return (
// 		<div>
// 			{pageData && pageData.layout ? (
// 				<RenderBlocks layout={pageData.layout} />
// 			) : (
// 				<div className="text-black">Page has no layout</div>
// 			)}
// 		</div>
// 	)
// }

//================================================
// Old pagesRouter approch
//================================================
// const Page = ({ page }: any) => {
// 	return (
// 		<div>
// 			{page && page.layout && <RenderBlocks layout={page.layout} />}
// 			{!page ||
// 				(!page.layout && (
// 					<div className="text-black">Page has no layout</div>
// 				))}
// 		</div>
// 	)
// }

// export const getStaticPaths = async () => {
// 	// only generate a list of slugs for every page that should be generated
// 	const pageReq = await axios(`/api/pages?limit=100`)
// 	const pageData = pageReq.data

// 	const returnObj = {
// 		paths: pageData.docs.map(
// 			({ slug, id }: { slug: string; id: string }) => {
// 				return {
// 					params: {
// 						slug: slug !== "index" ? slug.split("/") : false,
// 						// if we name the slug "index" it will be our homepage
// 						// /index => /
// 					},
// 				}
// 			}
// 		),
// 		fallback: false,
// 	}

// 	return returnObj
// }

// export const getStaticProps = async (ctx: any) => {
// 	// fetches all the specific page data and renders the page
// 	const slug = ctx.params?.slug || "index"

// 	// fetch page
// 	const pageReq = await axios(`/api/pages/where[slug][equals]=${slug}`)
// 	let pageData = pageReq.data.docs[0]

// 	return {
// 		props: {
// 			page: pageData,
// 			// this is the {page} data that gets passed into the Page component above
// 		},
// 	}
// }

// export default Page
