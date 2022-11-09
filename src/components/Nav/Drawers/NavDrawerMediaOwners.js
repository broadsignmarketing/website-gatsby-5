import React from "react"
import { StaticQuery, graphql } from "gatsby"

import { useL } from "@hooks/useDico"

import classnames from "classnames"
import { blogPostSlug } from "@annex"

import { GatsbyImage as Img } from "gatsby-plugin-image"
import Link from "@components/LocalizedLink"
import { NavProduct } from "@components/Nav/Drawers/NavItem"

import icon_broadsign_ayuda from "@img/broadsign/broadsign_ayuda_icon_block.svg"
import icon_broadsign_control from "@img/broadsign/broadsign_control_icon_block.svg"
import icon_broadsign_direct from "@img/broadsign/broadsign_direct_icon_block.svg"
import icon_broadsign_publish from "@img/broadsign/broadsign_publish_icon_block.svg"
import icon_broadsign_reach from "@img/broadsign/broadsign_reach_icon_block.svg"

const iconsCollection = {
	broadsignAyuda: icon_broadsign_ayuda,
	broadsignControl: icon_broadsign_control,
	broadsignDirect: icon_broadsign_direct,
	broadsignPublish: icon_broadsign_publish,
	broadsignReach: icon_broadsign_reach,
}

export default function NavDrawerMediaOwners({ isActive = false }) {
	const l = useL()

	if (["en", "fr", "es", "de"].includes(l)) {
		return (
			<StaticQuery
				query={graphql`
					query NavDrawerMediaOwnersQuery {
						latestPostEN: allUberflipItem(
							limit: 1
							filter: {
								language: { eq: "en" }
								stream: { eq: "blog" }
							}
							sort: { fields: date, order: DESC }
						) {
							...ufItems
						}

						latestPostFR: allUberflipItem(
							limit: 1
							filter: {
								language: { eq: "fr" }
								stream: { eq: "blog" }
							}
							sort: { fields: date, order: DESC }
						) {
							...ufItems
						}

						latestPostES: allUberflipItem(
							limit: 1
							filter: {
								language: { eq: "es" }
								stream: { eq: "blog" }
							}
							sort: { fields: date, order: DESC }
						) {
							...ufItems
						}
					}
				`}
				render={data => {
					let post, productsList

					switch (l) {
						case "de":
							post = data?.latestPostEN?.nodes?.[0]
							productsList = [
								"broadsignDirect",
								"broadsignControl",
								"broadsignReach",
								"broadsignPublish",
							]
							break
						case "en":
							post = data?.latestPostEN?.nodes?.[0]
							productsList = [
								"broadsignDirect",
								"broadsignControl",
								"broadsignReach",
								"broadsignPublish",
								"broadsignAyuda",
							]
							break
						case "es":
							post = data?.latestPostES?.nodes?.[0]
							productsList = [
								"broadsignDirect",
								"broadsignControl",
								"broadsignReach",
								"broadsignPublish",
							]
							break
						case "fr":
							post = data?.latestPostFR?.nodes?.[0]
							productsList = [
								"broadsignDirect",
								"broadsignControl",
								"broadsignReach",
								"broadsignPublish",
								"broadsignAyuda",
							]
							break
						default:
							post = data?.latestPostEN?.nodes?.[0]
							productsList = []
					}

					return (
						<div
							className={classnames(
								"main_nav__drawer grid justify-content-between",
								isActive ? "active" : ""
							)}
						>
							<div
								className={classnames(
									"main_nav__column col-8 p-10"
								)}
							>
								{productsList.map(product => (
									<NavProduct
										product={product}
										icon={iconsCollection[product]}
										langs={["all"]}
										key={product}
									/>
								))}
							</div>
							<div
								className={classnames(
									"main_nav__featured col-4 p-10"
								)}
							>
								{post && (
									<Link
										to={blogPostSlug(post.slug)}
										className="featured flex flex-column flex-nowrap"
									>
										<img
											src={post.thumbnail}
											className="main_nav__featured_thumbnail rounded-8 mb-4"
										/>
										<p className="main_nav__featured_title text-ash mb-8">
											{post.title}
										</p>
										<p className="main_nav__featured_readmore text-cerulean uppercase link_cerulean_arrow">
											{T.translate("nav.readMore")}
										</p>
									</Link>
								)}
							</div>
						</div>
					)
				}}
			/>
		)
	}
	return null
}
