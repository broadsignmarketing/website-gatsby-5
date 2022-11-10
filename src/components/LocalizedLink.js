import React from "react"
import { Link } from "gatsby"
import { sanitizePath } from "@annex"

import "@sass/components/Link.scss"

export default function LocalizedLink({ to, ...props }) {
	const route = txt => {
		return txt
	}

	if (props.exact && props.exact === true) {
		return <Link to={to} {...props} exact="true" />
	}

	if (to) {
		if (to.match(/resources.broadsign.com/)) {
			// Test if the link goes to a Uberflip Item
			return (
				<a href={to} {...props}>
					{props.children}
				</a>
			)
		} else if (to.match(/docs.broadsign.com/)) {
			// Test if the link looks to be towards the doc
			return (
				<a
					href={to}
					target="_blank"
					rel="noopener noreferrer nofollow"
					{...props}
					exact="true"
				>
					{props.children}
				</a>
			)
		} else if (to.match(/^https*:\/\//)) {
			// Test if the link looks to be external (contains http:// in the beginning)
			return (
				<a
					href={to}
					target="_blank"
					rel="noopener noreferrer"
					{...props}
					exact="true"
				>
					{props.children}
				</a>
			)
		} else if (route(to) !== "") {
			if (
				route(to).match(
					/(resources.broadsign.com|broadsign.com\/resources)/
				)
			) {
				return (
					<a href={route(to)} {...props}>
						{props.children}
					</a>
				)
			} else {
				to = route(to)
			}
		} else if (to.match(/^[?#]/)) {
			return (
				<a href={to} {...props} exact="true">
					{props.children}
				</a>
			)
		}

		// Test if this is supposed to be a target="_blank" link
		if (props.target && props.target === "_blank") {
			return (
				<a
					href={to}
					target="_blank"
					rel="noopener noreferrer"
					{...props}
					exact="true"
				>
					{props.children}
				</a>
			)
		}
	} else {
		if (typeof to !== "string") {
			console.error(
				`A link in LocalizedLink is missing the "to" property : `,
				props
			)
		}
	}

	return <Link to={sanitizePath(to)} {...props} exact="true" />
}
