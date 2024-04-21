import React from "react"
import { Tooltip } from "react-tooltip"
import { techList } from "./techList"

const TechStack = () => {
    return (
        <div
            style={{
                width: Math.min(900, "75%"),
            }}
            className="z-10 mx-auto flex h-full flex-wrap  justify-center lg:justify-start"
        >
            {techList.map((tech, index) => (
                <div key={index} className="">
                    {tech.currentStack && (
                        <div className="p-1">
                            <a
                                href={tech.webLink}
                                target="_blank"
                                data-tooltip-id={tech.tooltipRef}
                                data-tooltip-content={tech.name}
                                data-tooltip-delay-show={300}
                                // style={tech.style && tech.style}
                                style={{
                                    maxHeight: "45px",
                                    width: "50px",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                                className={tech.className}
                            >
                                <img
                                    // style={tech.imageStyle && tech.imageStyle}
                                    style={{
                                        width: "50px",
                                    }}
                                    src={tech.imgSrc}
                                    className={tech.imageClassName}
                                />
                            </a>
                            <Tooltip
                                id={tech.tooltipRef}
                                place="bottom"
                                className="bg-gray-200 font-semibold text-slate-700 dark:bg-black dark:text-white"
                            />
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}

export { TechStack }
