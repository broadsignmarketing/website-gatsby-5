import React from "react";
import Link from "@components/LocalizedLink";

import "@sass/components/CTA/Pink.scss";

export default function CTAPink(props) {
	if (props.className.includes("span")) {
		return <span {...props}>{props.children}</span>;
	}

	if (props.onClick) {
		return <button {...props}>{props.children}</button>;
	}

	return <Link {...props}>{props.children}</Link>;
}
