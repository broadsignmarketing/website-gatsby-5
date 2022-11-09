import React from "react"
import { StaticQuery, graphql } from "gatsby"

import { GatsbyImage as Img } from "gatsby-plugin-image"
import classnames from "classnames"

type PossibleImages = "horizontal" | "vertical" | "mobile"

interface InventorySpecsProps {
	className: string
	dimensions: string
	fileFormat: string
	fileSize: string
	quality: string
	audio: string
	image: PossibleImages
}

type IndividualSpecProps = {
	prop: string
	value: string
}

function SpecProp({ prop, value }: IndividualSpecProps) {
	return (
		<div className="grid">
			<div className="prop_name col-12 uppercase text-14 text-ash text-center pb-0 sm:col-4 sm:text-left">
				{T.translate(prop)}
			</div>
			<div className="prop_value col-12 text-16 text-ash text-center line-height-140 sm:col-8 sm:text-left">
				{value}
			</div>
		</div>
	)
}

export default function Inventory__Specs({
	className = "",
	dimensions,
	fileFormat,
	fileSize,
	quality,
	audio,
	image,
}: InventorySpecsProps) {
	return (
		<StaticQuery
			query={graphql`
				query InventoryItemSpecsImages {
					dimensions_horizontal: file(
						relativePath: {
							eq: "pages/broadsign-ads/inventory_specs_horizontal.png"
						}
					) {
						childImageSharp {
							gatsbyImageData
						}
					}
					dimensions_vertical: file(
						relativePath: {
							eq: "pages/broadsign-ads/inventory_specs_vertical.png"
						}
					) {
						childImageSharp {
							gatsbyImageData
						}
					}
					dimensions_mobile: file(
						relativePath: {
							eq: "pages/broadsign-ads/inventory_specs_mobile_portrait.png"
						}
					) {
						childImageSharp {
							gatsbyImageData
						}
					}
				}
			`}
			render={data => {
				return (
					<div
						className={classnames(
							"Inventory__Specs grid",
							className
						)}
					>
						<div className="col-12 sm:col-6">
							<Img
								alt=""
								image={
									data[`dimensions_${image}`].childImageSharp
										.gatsbyImageData
								}
								className="mb-4 rounded-xl shadow-A"
							/>
						</div>
						<div className="col-12 sm:col-6">
							<div className="panel bg-white px-5 py-4 rounded-xl overflow-hidden shadow-A">
								<SpecProp
									prop={"dimensions"}
									value={dimensions}
								/>
								<SpecProp
									prop={"fileFormat"}
									value={fileFormat}
								/>
								<SpecProp prop={"fileSize"} value={fileSize} />
								<SpecProp prop={"quality"} value={quality} />
								<SpecProp prop={"audio"} value={audio} />
							</div>
						</div>
					</div>
				)
			}}
		/>
	)
}
