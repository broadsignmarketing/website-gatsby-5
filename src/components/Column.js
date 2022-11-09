import React from "react";
import classnames from "classnames";
import "@sass/components/Column.scss";

export default function Column({ id, className, children, style, aside }) {
	if (aside) {
		return (
			<aside className={classnames("column", className)} id={id} style={style}>
				{children}
			</aside>
		);
	}

	return (
		<div className={classnames("column", className)} id={id} style={style}>
			{children}
		</div>
	);
}
