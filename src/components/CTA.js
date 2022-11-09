import React, { useMemo } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import Blue from "@components/CTA/Blue";
import Cerulean from "@components/CTA/Cerulean";
import Red from "@components/CTA/Red";
import Custom from "@components/CTA/Custom";
import Gradient from "@components/CTA/Gradient";
import Pink from "@components/CTA/Pink";
import Teal from "@components/CTA/Teal";

import "@sass/components/CTA.scss";

export default function CTA(props) {
	let { className, children } = props;
	className = classnames("CTA", className);
	let hasColor = false;

	if (className.includes("blue") || className.includes("reflex")) {
		hasColor = true;
		return (
			<React.Suspense>
				<Blue {...props} className={className} />
			</React.Suspense>
		);
	}
	if (className.includes("cerulean")) {
		hasColor = true;
		return (
			<React.Suspense>
				<Cerulean {...props} className={className} />
			</React.Suspense>
		);
	}
	if (className.includes("pink")) {
		hasColor = true;
		return (
			<React.Suspense>
				<Pink {...props} className={className} />
			</React.Suspense>
		);
	}
	if (className.includes("red")) {
		hasColor = true;
		return (
			<React.Suspense>
				<Red {...props} className={classnames(className)} />
			</React.Suspense>
		);
	}
	if (className.includes("teal")) {
		hasColor = true;
		return (
			<React.Suspense>
				<Teal {...props} className={className} />
			</React.Suspense>
		);
	}
	if (className.includes("gradient")) {
		hasColor = true;
		return (
			<React.Suspense>
				<Gradient {...props} className={className} />
			</React.Suspense>
		);
	}
	if (className.includes("custom")) {
		hasColor = true;
		return (
			<React.Suspense>
				<Custom {...props} className={className} />
			</React.Suspense>
		);
	}

	if (hasColor === false) {
		console.error("A CTA has no color specified");
		return (
			<React.Suspense>
				<div style={{ display: "block", minHeight: "4.8rem" }}></div>
			</React.Suspense>
		);
	}
}

CTA.propTypes = {
	to: PropTypes.string,
};
