import React from "react";
import classnames from "classnames";
import "@sass/components/Spynav.scss";
import "@sass/components/SpynavTabs.scss";

interface SpynavTabsProps {
	id?: string;
	className?: string;
	children: JSX.Element;
}

export default function SpynavTabs({ id, className, children }: SpynavTabsProps) {
	return (
		<div className={classnames("Spynav SpynavTabs", className)} id={id}>
			{children}
		</div>
	);
}
