import React from "react";
import classnames from "classnames";

import "@sass/components/Panel.scss";

type PanelProps = {
	id?: string;
	className?: string;
	color?: string;
	padding?: string;
	children: object;
};

const Panel = ({ id = "", className = "", color = "ultra", padding, children }: PanelProps) => {
	return (
		<div
			id={id}
			className={classnames("Panel", className, color)}
			style={{
				padding: padding,
			}}>
			{children}
		</div>
	);
};

export default Panel;
