import React, { useState } from "react";
import CTA from "./CTA";
import Tank from "./Tank";
import classnames from "classnames";

import "@sass/components/CTABlock.scss";

export default function CTABlock({ id, to, children, CTAText = "", blockClass = "", ctaClass = "", vertical = false }) {
	return (
		<Tank id={id}>
			<div className={classnames("CTABlock", blockClass, vertical ? "vertical" : "")}>
				<div className="text">{children}</div>
				<div className="ctas">
					<CTA className={ctaClass} to={to}>
						{CTAText}
					</CTA>
				</div>
			</div>
		</Tank>
	);
}
