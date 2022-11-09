import React, { useEffect, useState } from "react"

import { useL } from "@hooks/useDico"
import classnames from "classnames"

import NavDrawerMediaOwners from "@components/Nav/Drawers/NavDrawerMediaOwners"
import NavDrawerAgencies from "@components/Nav/Drawers/NavDrawerAgencies"
import NavDrawerResources from "@components/Nav/Drawers/NavDrawerResources"

export default function DesktopNav({}) {
	const [activeDrawer, setActiveDrawer] = useState("")
	const [isDrawerOpen, setIsDrawerOpen] = useState(false)

	const l = useL()

	function openDrawer(drawerName) {
		setActiveDrawer(drawerName)
		setIsDrawerOpen(true)
	}

	function closeDrawer() {
		setIsDrawerOpen(false)
	}

	let topNavSections = []

	switch (l) {
		case "de":
			topNavSections = ["mediaOwners"]
			break
		case "es":
			topNavSections = ["mediaOwners", "resources"]
			break
		case "fr":
		case "en":
			topNavSections = ["mediaOwners", "agencies", "resources"]
			break
		default:
			topNavSections = []
	}

	return (
		<nav
			className="container main_nav pl-12 hidden md:flex"
			onMouseLeave={() => {
				closeDrawer()
			}}
			onBlur={() => {
				closeDrawer()
			}}
		>
			{topNavSections.map(section => (
				<div
					className={classnames(
						"drawer_link",
						activeDrawer === section ? "active" : ""
					)}
					key={section}
					onMouseOver={() => {
						openDrawer(section)
					}}
					onFocus={() => {
						openDrawer(section)
					}}
					onClick={() => {
						openDrawer(section)
					}}
				>
					<span className="label_normal">
						{section === "resources"
							? T.translate("nav.resourcesLabel")
							: T.translate(`nav.${section}`)}
					</span>
					<span className="label_hover font-bold absolute">
						{section === "resources"
							? T.translate("nav.resourcesLabel")
							: T.translate(`nav.${section}`)}
					</span>
				</div>
			))}
			<div className="spacer"></div>
			<div className="drawer_link"></div>
			<div
				className={classnames(
					"main_nav__master_drawer rounded-xl shadow-B",
					isDrawerOpen ? "open" : ""
				)}
			>
				<NavDrawerMediaOwners
					isActive={activeDrawer === "mediaOwners"}
				/>
				<NavDrawerAgencies isActive={activeDrawer === "agencies"} />
				<NavDrawerResources isActive={activeDrawer === "resources"} />
			</div>
		</nav>
	)
}
