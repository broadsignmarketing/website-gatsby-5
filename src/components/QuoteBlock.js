import React from "react";
import classnames from "classnames";

import "@sass/components/QuoteBlock.scss";

export default function QuoteBlock({ className, id, sign, children }) {
	return (
		<div className={classnames("QuoteBlock", className)}>
			<blockquote id={id}>
				<div className="wrap">{children}</div>
				{sign && <cite>{sign}</cite>}
			</blockquote>
		</div>
	);
}
