import React from "react"
import classnames from "classnames"

// import Helmet from "./Helmet"
// import Header from "./Header"
// import Footer from "./Footer"

import "@sass/index.scss"
import "@sass/components/Layout.scss"
import "@sass/components/CookieConsent.scss"
import "@sass/components/ExitIntent.scss"

export default function Layout({ id, className, children, path, seo = {} }) {
	if (path && path.includes("404")) {
		return (
			<div id="global">
				<main>{children}</main>
			</div>
		)
	}

	const isContact = path.match(
		/\/(contact|fr\/nous-rejoindre|es\/contacto)\//
	)
		? true
		: false

	return (
		<div id="global" className={classnames(isContact ? "is_contact" : "")}>
			{/* <Helmet seo={seo} path={path} /> */}
			{/* <Header path={path}></Header> */}
			<main className={className} id={id}>
				{children}
			</main>
			{/* <Footer /> */}
		</div>
	)
}
