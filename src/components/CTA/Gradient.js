import React from "react";
import Link from "@components/LocalizedLink";

import "@sass/components/CTA/Gradient.scss";

export default function CTAGradient(props) {
	if (props.className.includes("span")) {
		return (
			<span {...props}>
				<span className="inner">{props.children}</span>
			</span>
		);
	}

	if (props.onClick) {
		return (
			<button {...props}>
				<span className="inner">{props.children}</span>
			</button>
		);
	}

	return (
		<Link {...props}>
			<span className="inner">{props.children}</span>
		</Link>
	);
}
