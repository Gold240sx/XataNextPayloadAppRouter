import React from "react"
import { Tooltip } from "react-tooltip"
import { techList } from "./techList"

const Tech = () => {
    return (
        <div
            style={{
                width: Math.min(900, "75%"),
            }}
            className=" mx-auto flex h-full flex-wrap  justify-center lg:justify-start "
        >
            {techList.map((tech, index) => (
                <>
                    {!tech.hide && (
                        <>
                            <a
                                href={tech.webLink}
                                target="_blank"
                                data-tooltip-id={tech.tooltipRef}
                                data-tooltip-content={tech.name}
                                data-tooltip-delay-show={300}
                                // style={tech.style && tech.style}
                                className=""
                                style={{
                                    maxHeight: "45px",
                                    width: "50px",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                                // className={tech.className}
                            >
                                <img
                                    // style={tech.imageStyle && tech.imageStyle}
                                    style={{
                                        width: "50px",
                                        padding: "4px",
                                    }}
                                    src={tech.imgSrc}
                                    className={tech.imageClassName}
                                />
                            </a>
                            <Tooltip
                                id={tech.tooltipRef}
                                place="bottom"
                                className="z-10 bg-gray-200 font-semibold text-slate-700 dark:bg-black dark:text-white"
                            />
                        </>
                    )}
                </>
            ))}
        </div>
    )
}

export { Tech }
