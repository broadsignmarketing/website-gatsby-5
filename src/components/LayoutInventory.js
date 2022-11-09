import React, { useMemo, useState } from "react"
import { StaticQuery, graphql } from "gatsby"

import classnames from "classnames"

import Carousel from "@components/BroadsignAdsCarousel"
import Container from "@components/Container"
import { GatsbyImage as Img } from "gatsby-plugin-image"
import EnvironmentReview from "@components/Inventory__EnvironmentReview"
import Specs from "@components/Inventory__Specs"
import Why from "@components/Inventory__Why"

export default function LayoutInventory({ className, vertical, children }) {
	return (
		<StaticQuery
			query={graphql`
				query InventoryItemImages {
					hero_airport: file(
						relativePath: {
							eq: "pages/broadsign-ads/inventory_hero_airport.jpg"
						}
					) {
						childImageSharp {
							gatsbyImageData
						}
					}
					hero_beauty: file(
						relativePath: {
							eq: "pages/broadsign-ads/inventory_hero_beauty.jpg"
						}
					) {
						childImageSharp {
							gatsbyImageData
						}
					}
					hero_billboard: file(
						relativePath: {
							eq: "pages/broadsign-ads/inventory_hero_billboard.jpg"
						}
					) {
						childImageSharp {
							gatsbyImageData
						}
					}
					hero_campus: file(
						relativePath: {
							eq: "pages/broadsign-ads/inventory_hero_campus.jpg"
						}
					) {
						childImageSharp {
							gatsbyImageData
						}
					}
					hero_convenience: file(
						relativePath: {
							eq: "pages/broadsign-ads/inventory_hero_convenience.jpg"
						}
					) {
						childImageSharp {
							gatsbyImageData
						}
					}
					hero_grocery: file(
						relativePath: {
							eq: "pages/broadsign-ads/inventory_hero_grocery.jpg"
						}
					) {
						childImageSharp {
							gatsbyImageData
						}
					}
					hero_health: file(
						relativePath: {
							eq: "pages/broadsign-ads/inventory_hero_health.jpg"
						}
					) {
						childImageSharp {
							gatsbyImageData
						}
					}
					hero_office: file(
						relativePath: {
							eq: "pages/broadsign-ads/inventory_hero_office.jpg"
						}
					) {
						childImageSharp {
							gatsbyImageData
						}
					}
					hero_residential: file(
						relativePath: {
							eq: "pages/broadsign-ads/inventory_hero_residential.jpg"
						}
					) {
						childImageSharp {
							gatsbyImageData
						}
					}
					hero_restobar: file(
						relativePath: {
							eq: "pages/broadsign-ads/inventory_hero_restobar.jpg"
						}
					) {
						childImageSharp {
							gatsbyImageData
						}
					}
					hero_shopping_mall: file(
						relativePath: {
							eq: "pages/broadsign-ads/inventory_hero_shopping_mall.jpg"
						}
					) {
						childImageSharp {
							gatsbyImageData
						}
					}
					hero_sports: file(
						relativePath: {
							eq: "pages/broadsign-ads/inventory_hero_sports.jpg"
						}
					) {
						childImageSharp {
							gatsbyImageData
						}
					}
					hero_street: file(
						relativePath: {
							eq: "pages/broadsign-ads/inventory_hero_street.jpg"
						}
					) {
						childImageSharp {
							gatsbyImageData
						}
					}
					hero_subway: file(
						relativePath: {
							eq: "pages/broadsign-ads/inventory_hero_subway.jpg"
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
							"inventory_item w-full",
							vertical,
							className
						)}
					>
						<Container className="inventory_item__hero mt-4 sm:mt-12">
							<Img
								alt=""
								image={
									data[`hero_${vertical}`].childImageSharp
										.gatsbyImageData
								}
								className="inventory_item__hero_img rounded-xl"
							/>
						</Container>
						{children}
					</div>
				)
			}}
		/>
	)
}
