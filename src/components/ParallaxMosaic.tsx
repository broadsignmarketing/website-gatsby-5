import React, { useCallback, useEffect, useMemo, useRef, useState } from "react"

import { useReducedMotion } from "@hooks/useReducedMotion"
import { shuffle } from "@annex"
import classnames from "classnames"

import CTA from "@components/CTA"
import { GatsbyImage as Img } from "gatsby-plugin-image"
import Link from "@components/LocalizedLink"
import { Row, Column } from "@components/Grid"
import Tuna from "@components/Tuna"

import "@sass/components/ParallaxMosaic.scss"

type Image = {
	label: string
	fluid: FluidObject
}

interface ParallaxMosaicProps {
	className?: string
	id?: string
	images: Image[]
}

export default function ParallaxMosaic({
	id,
	className,
	images,
}: ParallaxMosaicProps) {
	const thisMosaic = useRef(null)
	const prefersReducedMotion = useReducedMotion()

	const mosaicImages = useMemo(() => {
		let out = shuffle(images)
		return out.slice(0, 4)
	}, [images])

	return (
		<section
			className={classnames(
				"ParallaxMosaic",
				prefersReducedMotion ? "reduced_motion" : "",
				className
			)}
			ref={thisMosaic}
		>
			<Row>
				{mosaicImages.map((tile, k) => {
					const even = (k + 1) % 2 === 0 ? "even" : "odd"

					return (
						<Column key={k} className={classnames(even)}>
							<Tuna
								shift={even === "even" ? 50 : 0}
								blockScreenSizes={["xs", "sm"]}
							>
								{tile.label !== "" && (
									<div className="label">
										<span className="inner">
											{tile.label}
										</span>
									</div>
								)}
								<Img
									alt=""
									image={tile.fluid}
									className="tile"
								/>
							</Tuna>
						</Column>
					)
				})}
			</Row>
		</section>
	)
}
