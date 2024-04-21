import { Dispatch, SetStateAction } from "react"

export interface VoidFunction {
	(): void
}

export interface VoidFunctionElement {
	(props: any): JSX.Element
}

export interface setStateFunctionPass {
	(props: any): Dispatch<SetStateAction<{ props: any }>>
}
