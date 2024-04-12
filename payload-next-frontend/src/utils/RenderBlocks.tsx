import { blocks } from "@/blocks/blocklist"
import React from "react"

type RenderBlocksProps = {
	layout: {
		blockType: string
		[key: string]: any
	}[]
}

const RenderBlocks: React.FC<RenderBlocksProps> = ({ layout }) => (
	<div>
		{layout.map((block, i) => {
			//@ts-ignore
			const Block = blocks[block.blockType]
			if (Block) {
				return <Block key={i} {...block} />
			}
			return null
		})}
	</div>
)

export default RenderBlocks
