import React, { useEffect, useState } from "react";
import classnames from "classnames";

import Link from "@components/LocalizedLink";
import AdaptiveImage from "@components/AdaptiveImage";

import "@sass/components/ImgSpriteHover.scss";

interface ImgSpriteHoverProps {
	className: string;
	id: string;
	normal: string;
	active: string;
	to: string;
}

export default function ImgSpriteHover({ className, id, normal, active, to = "" }) {
	// Not setting isActive for now, I don't need it.
	const [isActive, setIsActive] = useState(false);

	if (to !== "") {
		return (
			<Link to={to} id={id} className={classnames("ImgSpriteHover", isActive ? "active" : "", className)}>
				<AdaptiveImage src={normal} className="sprite normal" />
				<AdaptiveImage src={active} className="sprite active" />
			</Link>
		);
	}

	return (
		<div id={id} className={classnames("ImgSpriteHover", isActive ? "active" : "", className)}>
			<AdaptiveImage src={normal} className="sprite normal" />
			<AdaptiveImage src={active} className="sprite active" />
		</div>
	);
}
