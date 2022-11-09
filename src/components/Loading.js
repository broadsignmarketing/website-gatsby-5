import React from "react";
import classnames from "classnames";
import "@sass/components/Loading.scss";

export default function Loading({ id, className, bold = false, size = "1", white = false }) {
	return (
		<div id={id} className={classnames("Loading", className, `size_${size}`, bold ? "bold" : "", white ? "white" : "")}>
			<div className="line"></div>
			<div className="line"></div>
			<div className="line"></div>
		</div>
	);
}
