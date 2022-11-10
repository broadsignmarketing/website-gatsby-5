import React, { useState } from "react"

import { useL } from "@hooks/useDico"

import classnames from "classnames"

import Container from "@components/Container"
import Link from "@components/LocalizedLink"
import SpynavTabs from "@components/SpynavTabs"

import logo_broadsign_ads_reflex from "@img/broadsign/broadsign_ads_reflex.svg"

export default function BroadsignAdsSubnav({ activeTab = "" }) {
	const [isMobileSpynavActive, setIsMobileSpynavActive] = useState(false)

	const l = useL()

	const sections = [
		{
			id: "overview",
			to: "broadsignAds",
			label: {
				en: "Overview",
				fr: "Aperçu",
			},
		},
		{
			id: "our-story",
			to: "broadsignAdsOurStory",
			label: {
				en: "Our Story",
				fr: "Notre histoire",
			},
		},
		{
			id: "inventory",
			to: "broadsignAdsInventory",
			label: {
				en: "Inventory",
				fr: "Stocks",
			},
		},
		{
			id: "audiences",
			to: "broadsignAdsAudiences",
			label: {
				en: "Audiences",
				fr: "Public",
			},
		},
		{
			id: "blog",
			to: "broadsignAdsUpdates",
			label: {
				en: "Blog",
				fr: "Blogue",
			},
		},
	]

	const activeSection = sections.find(({ id }) => id === activeTab)

	return (
		<>
			<SpynavTabs
				className={classnames(
					"spynav_mobile mobile",
					isMobileSpynavActive ? "active" : ""
				)}
			>
				<Container className="flex flex-row relative w-full align-items-center">
					<div className="SpynavTabs__tab main">
						<Link to={route("broadsignAds")}>
							<img
								className="broadsign_ads_logo"
								src={logo_broadsign_ads_reflex}
							/>
						</Link>
					</div>
					<div
						className="current_section text-ash font-bold flex-auto h-full"
						onClick={() =>
							setIsMobileSpynavActive(!isMobileSpynavActive)
						}
						onBlur={() => setIsMobileSpynavActive(false)}
						role="button"
					>
						<button
							className={classnames(
								"div text-14 letter-spacing-10 text-transform-none w-full active"
							)}
						>
							<span className="active inline-flex align-items-center h-full w-auto">
								{activeSection.label[l]}
							</span>
						</button>
					</div>
				</Container>
				<div
					className={classnames(
						"subnav absolute bg-white w-full ",
						isMobileSpynavActive ? "py-4" : ""
					)}
				>
					{sections.map(({ id, to, label }) => (
						<Link
							to={to}
							onClick={() => setIsMobileSpynavActive(false)}
							className={classnames(
								"spylink text-ash text-14 letter-spacing-10 line-height-140 py-2 hover:text-reflex",
								activeTab === id
									? "active font-bold"
									: "font-regular"
							)}
							key={id}
						>
							{label[l]}
						</Link>
					))}
				</div>
			</SpynavTabs>
			<SpynavTabs className="desktop">
				<Container>
					<div className="SpynavTabs__tab main">
						<Link to={route("broadsignAds")}>
							<img
								className="broadsign_ads_logo"
								src={logo_broadsign_ads_reflex}
							/>
						</Link>
					</div>
					{sections.map(({ id, to, label }) => (
						<div
							className={classnames(
								"spylink",
								activeTab === id ? "active" : ""
							)}
							key={id}
						>
							<Link to={to}>{label[l]}</Link>
						</div>
					))}
					<div className="SpynavTabs__tab ending">
						<Link
							to={route("bookDemo")}
							className="CTA pill bg-white text-reflex text-14 line-height-100 border-reflex px-5 py-2 overflow-visible nowrap uppercase hover:bg-reflex hover:text-white"
						>
							{T.translate("bookDemo")}
						</Link>
					</div>
				</Container>
			</SpynavTabs>
		</>
	)
}
