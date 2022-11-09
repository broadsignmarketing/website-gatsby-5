import React from "react"

import PropTypes from "prop-types"
import classnames from "classnames"

import { GatsbyImage as Img } from "gatsby-plugin-image"
import Link from "@components/LocalizedLink"

import "@sass/components/VerticalShinDemoOffer.scss"

export default function ShinDemoOffer(props) {
	const { className, id, img, title } = props

	return (
		<section
			id={id}
			className={classnames("VerticalShinDemoOffer", className)}
		>
			<Img alt="" image={img} className="bg" objectFit="cover" />
			<h3 className="title">{title}</h3>
			<p>
				<Link to={route("demo", T.translate("key"))}>
					{T.translate("Shin.cta")}
				</Link>
			</p>
		</section>
	)
}

ShinDemoOffer.propTypes = {
	className: PropTypes.string,
	id: PropTypes.string,
	img: PropTypes.object.isRequired,
	title: PropTypes.string,
}
