import React from "react"
import { StaticQuery, graphql } from "gatsby"

import { useL } from "@hooks/useDico"

import classnames from "classnames"
import { blogPostSlug } from "@annex"

import { GatsbyImage as Img } from "gatsby-plugin-image"
import Link from "@components/LocalizedLink"
import { NavItem } from "@components/Nav/Drawers/NavItem"

function Featured({ thumbnail, title, url }) {
	return (
		<Link to={url} className="featured flex flex-column flex-nowrap">
			<img
				src={thumbnail}
				className="main_nav__featured_thumbnail rounded-8 mb-4"
			/>
			<p className="main_nav__featured_title text-ash mb-8">{title}</p>
			<p className="main_nav__featured_readmore text-cerulean uppercase link_cerulean_arrow">
				{T.translate("nav.readMore")}
			</p>
		</Link>
	)
}
function Resources() {
	return (
		<Link to="/" className="featured flex flex-column flex-nowrap">
			<img
				src={thumbnail}
				className="main_nav__featured_thumbnail rounded-8 mb-4"
			/>
			<p className="main_nav__featured_title text-ash mb-8">{title}</p>
			<p className="main_nav__featured_readmore text-cerulean uppercase link_cerulean_arrow">
				{T.translate("nav.readMore")}
			</p>
		</Link>
	)
}

export default function NavDrawerResources({ isActive = false }) {
	const l = useL()
	const broadsignPublishDocumentationLanguage = ["fr"].includes(l) ? l : "en"

	return (
		<StaticQuery
			query={graphql`
				query NavDrawerResourcesQuery {
					featured_en: uberflipItem(
						stream: { eq: "ebooks" }
						language: { eq: "en" }
						name: {
							eq: "ebook-increase-revenue-with-contextual-in-store-media"
						}
					) {
						...ufItem
					}

					featured_fr: uberflipItem(
						stream: { eq: "ebooks" }
						language: { eq: "fr" }
					) {
						...ufItem
					}

					featured_es: uberflipItem(
						stream: { eq: "ebooks" }
						language: { eq: "es" }
					) {
						...ufItem
					}

					featured_de: uberflipItem(
						stream: { eq: "ebooks" }
						language: { eq: "en" }
						name: {
							eq: "ebook-increase-revenue-with-contextual-in-store-media"
						}
					) {
						...ufItem
					}

					fallback_en: uberflipItem(
						stream: { eq: "ebooks" }
						language: { eq: "en" }
					) {
						...ufItem
					}

					fallback_fr: uberflipItem(language: { eq: "fr" }) {
						...ufItem
					}

					fallback_es: uberflipItem(language: { eq: "es" }) {
						...ufItem
					}

					fallback_de: uberflipItem(language: { eq: "en" }) {
						...ufItem
					}
				}
			`}
			render={data => {
				let featuredItem = {}

				if (data[`featured_${l}`]) {
					featuredItem = data[`featured_${l}`]
				} else {
					if (data[`fallback_${l}`]) {
						featuredItem = data[`fallback_${l}`]
						if (process.env.DEBUG_UBERFLIP === "true") {
							console.warn(
								`No feature item found for Top Nav Drawer : Resources in [${l.toUpperCase()}]. Using fallback instead.`
							)
						}
					} else {
						if (process.env.DEBUG_UBERFLIP === "true") {
							console.error(
								`No feature item OR fallback found for Top Nav Drawer : Resources in [${l.toUpperCase()}].`
							)
						}
					}
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
								"main_nav__column col-4 p-10"
							)}
						>
							<p className="main_nav__column_header px-5 py-4 font-bold">
								{T.translate(
									"nav.productDocumentationColumnHeader"
								)}
							</p>
							<NavItem
								id="controlDocumentation"
								to="https://docs.broadsign.com/broadsign-control/latest/"
							/>
							<NavItem
								id="directDocumentation"
								to="https://docs.broadsign.com/broadsign-direct/"
							/>
							<NavItem
								id="publishDocumentation"
								to={`https://docs.broadsign.com/broadsign-publish/${broadsignPublishDocumentationLanguage}/index.html`}
								langs={["all"]}
							/>
							<NavItem
								id="reachDocumentation"
								to="https://docs.broadsign.com/broadsign-reach/"
							/>
							<NavItem
								id="ayudaDocumentation"
								to="https://docs.broadsign.com/broadsign-ayuda/"
							/>
						</div>
						<div
							className={classnames(
								"main_nav__column col-4 p-10"
							)}
						>
							<p className="main_nav__column_header px-5 py-4 font-bold">
								{T.translate(
									"nav.certificationsMediasColumnHeader"
								)}
							</p>
							<NavItem id="resources" to={route("resources")} />
							<NavItem id="events" to={route("events")} />
							<NavItem id="blog" to={route("blog")} />
							<NavItem id="doohx" to="https://www.doohx.io/" />
						</div>
						<div
							className={classnames(
								"main_nav__featured col-4 p-10"
							)}
						>
							{["en", "fr", "es", "de"].includes(l) && (
								<Featured
									thumbnail={featuredItem.thumbnail}
									title={featuredItem.title}
									url={blogPostSlug(featuredItem.slug)}
								/>
							)}
						</div>
					</div>
				)
			}}
		/>
	)
}
