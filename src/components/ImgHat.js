import React from "react";
import classnames from "classnames";

import Column from "./Column";
import { GatsbyImage as Img } from "gatsby-plugin-image";
import "@sass/components/ImgHat.scss";
import Link from "@components/LocalizedLink";
import Row from "./Row";

export default function ImgHat(props) {
	const { id, src, title, text, sign, className, children, alt, to } = props;

	return (
		<div id={id} className={classnames("ImgHat", className)}>
			<Row>
				{to ? (
					<Link to={to}>{typeof src === "object" ? <Img image={src} alt={alt || ""} objectFit="contain" /> : <img src={src} alt={alt || ""} />}</Link>
				) : (
					<>{typeof src === "object" ? <Img image={src} alt={alt || ""} objectFit="contain" /> : <img src={src} alt={alt || ""} />}</>
				)}
			</Row>
			<Column>
				{title ? <h3>{title}</h3> : ""}
				{children ? children : <p>{text}</p>}
				{sign ? <p className="signature">{sign}</p> : ""}
			</Column>
		</div>
	);
}
