import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"

import { RoughEase, ExpoScaleEase, SlowMo } from "gsap/EasePack"

import { Flip } from "gsap/Flip"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Observer } from "gsap/Observer"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { Draggable } from "gsap/Draggable"
import { MotionPathPlugin } from "gsap/MotionPathPlugin"
import { EaselPlugin } from "gsap/EaselPlugin"
import { PixiPlugin } from "gsap/PixiPlugin"
import { TextPlugin } from "gsap/TextPlugin"

import { CustomEase } from "gsap/CustomEase"
import { CustomBounce } from "gsap/CustomBounce" // extends CustomEase
import { CustomWiggle } from "gsap/CustomWiggle" // extends CustomEase
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin"
import { ScrollSmoother } from "gsap/ScrollSmoother"
import { GSDevTools } from "gsap/GSDevTools"
import { InertiaPlugin } from "gsap/InertiaPlugin"
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin"
import { MotionPathHelper } from "gsap/MotionPathHelper"
import { Physics2DPlugin } from "gsap/Physics2DPlugin"
import { PhysicsPropsPlugin } from "gsap/PhysicsPropsPlugin"
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin"
import { SplitText } from "gsap/SplitText"

gsap.registerPlugin(
	useGSAP,
	Flip,
	ScrollTrigger,
	Observer,
	ScrollToPlugin,
	Draggable,
	MotionPathPlugin,
	EaselPlugin,
	PixiPlugin,
	TextPlugin,
	RoughEase,
	ExpoScaleEase,
	SlowMo,
	CustomEase,
	CustomBounce,
	CustomWiggle,
	DrawSVGPlugin,
	ScrollSmoother,
	GSDevTools,
	InertiaPlugin,
	MorphSVGPlugin,
	MotionPathHelper,
	Physics2DPlugin,
	PhysicsPropsPlugin,
	ScrambleTextPlugin,
	SplitText
)

export {
	gsap,
	useGSAP,
	Flip,
	ScrollTrigger,
	Observer,
	ScrollToPlugin,
	Draggable,
	MotionPathPlugin,
	EaselPlugin,
	PixiPlugin,
	TextPlugin,
	RoughEase,
	ExpoScaleEase,
	SlowMo,
	CustomEase,
	CustomBounce,
	CustomWiggle,
	DrawSVGPlugin,
	ScrollSmoother,
	GSDevTools,
	InertiaPlugin,
	MorphSVGPlugin,
	MotionPathHelper,
	Physics2DPlugin,
	PhysicsPropsPlugin,
	ScrambleTextPlugin,
	SplitText,
}
