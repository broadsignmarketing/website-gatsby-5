import React, { useCallback, useState } from "react"
import { StaticQuery, graphql } from "gatsby"

import { useL } from "@hooks/useDico"
import { blogPostSlug } from "@annex"
import classnames from "classnames"

import Link from "@components/LocalizedLink"
import { NavItem } from "@components/Nav/Drawers/NavItem"

function FeaturedPost({ thumb, title, url }) {
	return (
		<Link to={url} className="featured flex flex-column flex-nowrap">
			<img
				src={thumb}
				className="main_nav__featured_thumbnail rounded-8 mb-4"
				alt=""
				width="300"
				height="190"
			/>
			<span className="main_nav__featured_title text-ash mb-8">
				{title}
			</span>
			<span className="main_nav__featured_readmore text-cerulean uppercase link_cerulean_arrow">
				{T.translate("nav.readMore")}
			</span>
		</Link>
	)
}

export default function NavDrawerAgencies({ isActive = false }) {
	const [activeSub, setActiveSub] = useState("")

	const l = useL()

	const hoverActions = useCallback(sub => {
		return {
			onFocus: () => setActiveSub(sub),
			onMouseOver: () => setActiveSub(sub),
		}
	}, [])

	const subsections = {
		broadsignAds: [
			{
				id: "broadsignAdsOverview",
				to: "broadsignAds",
			},
			{
				id: "broadsignAdsOurStory",
			},
			{
				id: "broadsignAdsInventory",
			},
			{
				id: "broadsignAdsAudiences",
			},
			{
				id: "blog",
				to: "broadsignAdsUpdates",
			},
		],
	}

	return (
		<StaticQuery
			query={graphql`
				query NavDrawerAgenciesQuery {
					featured_en: uberflipItem(
						stream: { eq: "ebooks" }
						language: { eq: "en" }
						slug: { regex: "/media-buyers-guide-to-programmatic/" }
					) {
						...ufItem
					}

					featured_fr: uberflipItem(
						stream: { eq: "blog" }
						language: { eq: "fr" }
					) {
						...ufItem
					}

					featured_es: uberflipItem(
						stream: { eq: "blog" }
						language: { eq: "es" }
					) {
						...ufItem
					}

					featured_de: uberflipItem(
						stream: { eq: "ebooks" }
						language: { eq: "en" }
						slug: { regex: "/media-buyers-guide-to-programmatic/" }
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
								`No feature item found for Top Nav Drawer : Agencies in [${l.toUpperCase()}]. Using fallback instead.`
							)
						}
					} else {
						if (process.env.DEBUG_UBERFLIP === "true") {
							console.error(
								`No feature item OR fallback found for Top Nav Drawer : Agencies in [${l.toUpperCase()}].`
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
						onMouseLeave={() => setActiveSub("")}
					>
						<div
							className={classnames(
								"main_nav__column col-5 p-10"
							)}
						>
							<NavItem
								id="launchPDOOHCampaign"
								langs={["all"]}
								{...hoverActions("")}
							/>
							<NavItem
								id="broadsignAds"
								hasSub={true}
								{...hoverActions("broadsignAds")}
								className={
									activeSub === "broadsignAds" ? "active" : ""
								}
								langs={["all"]}
							/>
							<NavItem
								id="dspPartners"
								langs={["all"]}
								{...hoverActions("")}
							/>
						</div>
						<div
							className={classnames(
								"main_nav__column col-3 p-10"
							)}
						>
							<div
								className={classnames(
									"main_nav__sub",
									activeSub === "broadsignAds" ? "active" : ""
								)}
							>
								{subsections.broadsignAds.map(({ id, to }) => (
									<NavItem
										id={id}
										to={to}
										langs={["all"]}
										key={id}
									/>
								))}
							</div>
						</div>
						<div
							className={classnames(
								"main_nav__featured col-4 p-10"
							)}
						>
							{featuredItem && (
								<FeaturedPost
									thumb={featuredItem.thumbnail}
									title={featuredItem.title}
									url={blogPostSlug(featuredItem.slug, l)}
								/>
							)}
						</div>
					</div>
				)
			}}
		/>
	)
}
