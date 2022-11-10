import React from "react";

import "@sass/components/PageLoading.scss";

export default function Loading({ id, className, bold = false, size = "1", white = false }) {
	return (
		<div id={id} className="PageLoading">
			<div className="line"></div>
			<div className="line"></div>
			<div className="line"></div>
		</div>
	);
}
