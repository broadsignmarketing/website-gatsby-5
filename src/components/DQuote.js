import React from "react";
import { GatsbyImage as Img } from "gatsby-plugin-image";
import classnames from "classnames";
import "@sass/components/DQuote.scss";
import d_quote_broadsign_logo from "@img/broadsign/d_quote_broadsign_logo.svg";
/*  */
export default function DQuote(props) {
	const { id, className, children, bgImg } = props;

	let styles = null;
	if (bgImg && typeof bgImg === "string") {
		styles = { backgroundImage: "url('" + bgImg + "')" };
	}

	return (
		<div className={classnames("DQuote", "Tank", className)}>
			{typeof bgImg === "object" ? <Img alt="" image={bgImg} className="bg" alt="" /> : null}
			<img src={d_quote_broadsign_logo} alt="D-Logo" />
			<div className="inner" style={styles}>
				<blockquote id={id}>{children}</blockquote>
			</div>
		</div>
	);
}
