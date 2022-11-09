import React from "react";
import classnames from "classnames";

import "@sass/components/Tank.scss";

export default function Tank({ div, id, className, children }) {
	if (div) {
		return (
			<div id={id} className={classnames("Tank", className)}>
				{children}
			</div>
		);
	}

	return (
		<section id={id} className={classnames("Tank", className)}>
			{children}
		</section>
	);
}
