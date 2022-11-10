import React from "react";
import classnames from "classnames";

import "@sass/components/Container.scss";

type AvailableTags = "div" | "nav" | "section";
interface ContainerProps {
	tag: AvailableTags;
	id: string;
	className: string;
	children: object;
}

export default function Container({ tag = "div", id = "", className = "", children }: ContainerProps) {
	const cssClasses = classnames("container", className);
	const CustomTag = tag;

	return (
		<CustomTag id={id} className={cssClasses}>
			{children}
		</CustomTag>
	);
}
