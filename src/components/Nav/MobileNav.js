import React, { useCallback, useEffect, useMemo, useState } from "react"

import { useL } from "@hooks/useDico"
import classnames from "classnames"
import langs from "@i18n/configs"
import { sanitizePath } from "@annex"

import Link from "@components/LocalizedLink"

export default function MobileNav({ setShowContactUsModal }) {
	const [isActive, setIsActive] = useState(false)
	const [activeCollapse, setActiveCollapse] = useState(null)
	const [activeSubCollapse, setActiveSubCollapse] = useState(null)

	const l = useL()

	useEffect(() => {
		// console.log(isActive);
	}, [isActive])

	function toggleCollapse(target) {
		if (activeCollapse === target) {
			setActiveCollapse("")
		} else {
			setActiveCollapse(target)
		}
	}

	function toggleSubCollapse(target) {
		if (activeSubCollapse === target) {
			setActiveSubCollapse("")
		} else {
			setActiveSubCollapse(target)
		}
	}

	function closeAll() {
		setIsActive(false)
		setActiveCollapse(null)
	}

	const NavItem = useCallback(({ id, langs, label = "", to = "" }) => {
		if (label === "") {
			label = T.translate(`nav.${id}`)
		}

		if (to === "") {
			to = route(id)
		}

		if (!to) {
			console.error(`MobileNav: link "${id}" has no URL destination.`)
			return null
		}

		if (langs[0] === "all" || langs.includes(T.translate("key"))) {
			return (
				<Link
					className="mobile_nav__item py-3 pl-4 font-medium"
					to={to}
					key={id}
				>
					{label}
				</Link>
			)
		}
		return null
	}, [])

	const translations = useMemo(() => {
		if (T.texts && T.texts.translations) {
			let out = []

			for (let lang of langs) {
				if (
					lang !== T.translate("key") &&
					T.texts.translations[lang.code]
				) {
					out.push({
						label: lang.name,
						code: lang.code,
						url: sanitizePath(T.texts.translations[lang.code]),
					})
				}
			}

			return out
		}

		return []
	}, [])

	return (
		<div className="flex justify-content-end align-items-center align-self-stretch md:hidden">
			<button
				className={classnames(
					"mobile_nav__burger h-full",
					isActive ? "active" : ""
				)}
				onClick={() => setIsActive(!isActive)}
			>
				<span className="line" />
				<span className="line" />
				<span className="line" />
			</button>
			<div
				className={classnames(
					"mobile_nav__wrapper",
					isActive ? "active" : ""
				)}
				onMouseLeave={() => closeAll()}
			>
				<div className="mobile_nav pb-4">
					<div
						className={classnames(
							"mobile_nav__accordion",
							activeCollapse === "mediaOwners" ? "active" : ""
						)}
					>
						<button
							className="mobile_nav__accordion_header font-medium div py-3 px-4"
							onClick={() => toggleCollapse("mediaOwners")}
						>
							{T.translate("nav.mediaOwners")}
						</button>
						<div
							className={classnames("mobile_nav__collapse pl-4")}
						>
							{NavItem({
								id: "broadsignControl",
								label: `${T.translate(
									"nav.broadsignControl"
								)} – ${T.translate(
									"nav.broadsignControlTagline"
								)}`,
								langs: ["en", "fr", "es", "de"],
							})}
							{NavItem({
								id: "broadsignDirect",
								label: `${T.translate(
									"nav.broadsignDirect"
								)} – ${T.translate(
									"nav.broadsignDirectTagline"
								)}`,
								langs: ["en", "fr", "es", "de"],
							})}
							{NavItem({
								id: "broadsignPublish",
								label: `${T.translate(
									"nav.broadsignPublish"
								)} – ${T.translate(
									"nav.broadsignPublishTagline"
								)}`,
								langs: ["en", "fr", "es", "de"],
							})}
							{NavItem({
								id: "broadsignReach",
								label: `${T.translate(
									"nav.broadsignReach"
								)} – ${T.translate(
									"nav.broadsignReachTagline"
								)}`,
								langs: ["en", "fr", "es", "de"],
							})}
							{NavItem({
								id: "broadsignAyuda",
								label: `${T.translate(
									"nav.broadsignAyuda"
								)} – ${T.translate(
									"nav.broadsignAyudaTagline"
								)}`,
								langs: ["en", "fr"],
							})}
						</div>
					</div>
					{["en", "fr"].includes(l) && (
						<div
							className={classnames(
								"mobile_nav__accordion",
								activeCollapse === "agencies" ? "active" : ""
							)}
						>
							<button
								className="mobile_nav__accordion_header font-medium div py-3 px-4"
								onClick={() => toggleCollapse("agencies")}
							>
								{T.translate("nav.agencies")}
							</button>
							<div
								className={classnames(
									"mobile_nav__collapse pl-4"
								)}
							>
								{NavItem({
									id: "launchPDOOHCampaign",
									langs: ["all"],
								})}
								<div
									className={classnames(
										"mobile_nav__accordion",
										activeSubCollapse === "broadsignAds"
											? "active"
											: ""
									)}
								>
									<button
										className="mobile_nav__accordion_header font-medium div py-3 px-4"
										onClick={() =>
											toggleSubCollapse("broadsignAds")
										}
									>
										{T.translate("nav.broadsignAds")}
									</button>
									<div
										className={classnames(
											"mobile_nav__collapse pl-4"
										)}
									>
										{NavItem({
											id: "broadsignAdsOverview",
											to: "broadsignAds",
											langs: ["all"],
										})}
										{NavItem({
											id: "broadsignAdsOurStory",
											langs: ["all"],
										})}
										{NavItem({
											id: "broadsignAdsInventory",
											langs: ["all"],
										})}
										{NavItem({
											id: "broadsignAdsAudiences",
											langs: ["all"],
										})}
										{NavItem({
											id: "blog",
											to: "blog#broadsign-ads",
											langs: ["all"],
										})}
									</div>
								</div>
								{NavItem({ id: "dspPartners", langs: ["all"] })}
								{/* <div className={classnames("mobile_nav__accordion", activeSubCollapse === "learnWithUs" ? "active" : "")}>
								<button className="mobile_nav__accordion_header div py-3 px-4" onClick={() => toggleSubCollapse("learnWithUs")}>
									{T.translate("nav.learnWithUs")}
								</button>
								<div className={classnames("mobile_nav__collapse pl-4")}>
									{NavItem({ id: "doohx", to: "https://www.doohx.io/", langs: ["all"] })}
									{NavItem({ id: "blog#case-studies", langs: ["en", "fr", "es"] })}
								</div>
							</div> */}
							</div>
						</div>
					)}
					<div
						className={classnames(
							"mobile_nav__accordion",
							activeCollapse === "resources" ? "active" : ""
						)}
					>
						<button
							className="mobile_nav__accordion_header font-medium div py-3 px-4"
							onClick={() => toggleCollapse("resources")}
						>
							{T.translate("nav.resourcesLabel")}
						</button>
						<div
							className={classnames("mobile_nav__collapse pl-4")}
						>
							{NavItem({ id: "resources", langs: ["all"] })}
							{NavItem({ id: "events", langs: ["all"] })}
							{NavItem({ id: "blog", langs: ["all"] })}
							{NavItem({
								id: "doohx",
								to: "https://www.doohx.io/",
								langs: ["all"],
							})}
							<div
								className={classnames(
									"mobile_nav__accordion",
									activeSubCollapse === "productDocumentation"
										? "active"
										: ""
								)}
							>
								<button
									className="mobile_nav__accordion_header font-medium div py-3 px-4"
									onClick={() =>
										toggleSubCollapse(
											"productDocumentation"
										)
									}
								>
									{T.translate("nav.productDocumentation")}
								</button>
								<div
									className={classnames(
										"mobile_nav__collapse pl-4"
									)}
								>
									{NavItem({
										id: "controlDocumentation",
										to: "https://docs.broadsign.com/broadsign-control/latest/",
										langs: ["all"],
									})}
									{NavItem({
										id: "directDocumentation",
										to: "https://docs.broadsign.com/broadsign-direct/",
										langs: ["all"],
									})}
									{NavItem({
										id: "publishDocumentation",
										to: "https://docs.broadsign.com/broadsign-publish/en/index.html",
										langs: ["all"],
									})}
									{NavItem({
										id: "reachDocumentation",
										to: "https://docs.broadsign.com/broadsign-reach/",
										langs: ["all"],
									})}
									{NavItem({
										id: "ayudaDocumentation",
										to: "https://docs.broadsign.com/broadsign-ayuda/",
										langs: ["all"],
									})}
								</div>
							</div>
						</div>
					</div>
					<div
						className={classnames(
							"mobile_nav__accordion",
							activeCollapse === "langs" ? "active" : ""
						)}
					>
						{translations.length > 1 ? (
							<>
								<button
									className="mobile_nav__accordion_header font-medium div py-3 px-4"
									onClick={() => toggleCollapse("langs")}
								>
									{T.translate("lang")}
								</button>
								<div
									className={classnames(
										"mobile_nav__collapse pl-4"
									)}
								>
									{translations.map(
										({ code, label, url }) => {
											if (code !== l) {
												return (
													<Link
														className="mobile_nav__item py-3 pl-4 font-medium"
														to={url}
														exact={true}
														key={code}
													>
														{label}
													</Link>
												)
											}
										}
									)}
								</div>
							</>
						) : (
							<div className="text-14 font-medium py-3 px-4 disabled">
								{T.translate("lang")}
							</div>
						)}
					</div>
					<div className="mobile_nav__item py-3 pl-4">
						<button
							className="p-button-rounded bg-reflex hover:bg-cerulean nowrap uppercase py-2 px-5 contact_us"
							onClick={() => setShowContactUsModal(true)}
						>
							{T.translate("nav.contactUs")}
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
