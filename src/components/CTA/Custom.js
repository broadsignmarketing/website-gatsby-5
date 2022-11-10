import React from "react";
import Link from "@components/LocalizedLink";

export default function CTATeal(props) {
	if (props.className.includes("span")) {
		return <span {...props}>{props.children}</span>;
	}

	if (props.onClick) {
		return <button {...props}>{props.children}</button>;
	}

	return <Link {...props}>{props.children}</Link>;
}
