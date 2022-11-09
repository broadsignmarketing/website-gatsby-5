import React, { useMemo } from "react"

import classnames from "classnames"

import Link from "@components/LocalizedLink"

export function NavItem({
	id,
	onMouseOver,
	onFocus,
	className = "",
	to = "",
	langs = ["all"],
	hasSub = false,
}) {
	// console.log(id, onMouseOver, onFocus);
	const px = className.match(/px-\d{1,2}/) ? "" : "px-5"
	const py = className.match(/py-\d{1,2}/) ? "" : "py-4"

	if (langs[0] === "all" || langs.includes(T.translate("key"))) {
		const label = T.translate(`nav.${id}`)

		if (hasSub) {
			return (
				<div
					className={classnames(
						"main_nav__link font-bold has_sub",
						px,
						py,
						className
					)}
					onMouseOver={onMouseOver}
					onFocus={onFocus}
					role="menuitem"
				>
					{label}
				</div>
			)
		}

		if (to === "") {
			to = route(id)
		}

		return (
			<Link
				to={to}
				className={classnames(
					"main_nav__link font-bold",
					px,
					py,
					className
				)}
				onMouseOver={onMouseOver}
				onFocus={onFocus}
				role="menuitem"
			>
				{label}
			</Link>
		)
	}

	return null
}

export function NavProduct({ product, className, icon, langs }) {
	if (langs[0] === "all" || langs.includes(T.translate("key"))) {
		return (
			<Link
				to={route(product)}
				className={classnames(
					"main_nav__link has_icon pl-7 pr-5 py-4",
					className
				)}
			>
				<img src={icon} className="icon ml-4" height="18" width="18" />
				<span className="tagline pl-4 font-bold">
					{T.translate(`nav.${product}Tagline`)}
				</span>
				<span className="product pl-4 font-regular">{`${T.translate(
					`nav.with`
				)} ${T.translate(`nav.${product}`)}`}</span>
			</Link>
		)
	}
	return null
}
