import React from "react";

import Helmet from "./Helmet";

import "@sass/index.scss";
import "@sass/components/Layout.scss";
import "@sass/components/CookieConsent.scss";
import "@sass/components/ExitIntent.scss";

export default function LayoutMinimal({ id, className, children, path, seo = {} }) {
	return (
		<div id="global" className="hide_header hide_footer">
			<Helmet path={path} />
			<main className={className} id={id}>
				{children}
			</main>
		</div>
	);
}
