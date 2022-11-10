import React, { useMemo } from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useL } from "@hooks/useDico"
import redirects from "../assets/redirects_cn"
import { pathRegExp, sanitizePath } from "@annex"

import RobotoRegular from "../../static/fonts/Roboto-Regular.woff2"
import RobotoMedium from "../../static/fonts/Roboto-Medium.woff2"
import RobotoBold from "../../static/fonts/Roboto-Bold.woff2"
import RobotoBlack from "../../static/fonts/Roboto-Black.woff2"

export default function Head({ seo = {}, path }) {
	return (
		<StaticQuery
			query={graphql`
				query HeadQuery {
					site {
						siteMetadata {
							title
							description
							type
							name
							url
							sameAs
							facebookAppID
							twitterSiteID
							twitterUserID
						}
					}
				}
			`}
			render={data => {
				const l = useL()
				const { pathname } = useLocation()

				if (Object.values(seo).length === 0) {
					if (
						T?.texts?.seo &&
						Object.values(T.texts.seo).length > 0
					) {
						seo = T.texts.seo
					}
				}

				const availableTrans = useMemo(() => {
					function removeUnwantedRoutes(obj) {
						let out = {}

						Object.keys(obj).forEach(lang => {
							const transPath = obj[lang]
							if (
								lang !== "js" &&
								lang !== "meta" &&
								transPath !== ""
							) {
								out[lang] = transPath
							}
						})

						return out
					}

					if (T?.texts?.translations) {
						return removeUnwantedRoutes(T.texts.translations)
					}

					const currentPageRoute = Object.values(router).find(
						pageTranslations => {
							const sanitizedPathname = pathname.replace(
								/^\/|\/$/g,
								""
							)
							if (
								Object.values(pageTranslations).includes(
									sanitizedPathname
								)
							) {
								return pageTranslations
							}
							return false
						}
					)

					if (currentPageRoute) {
						return removeUnwantedRoutes(currentPageRoute)
					}

					return {}
				}, [path])

				const seoTitle = useMemo(() => {
					if (seo && seo.title) {
						return seo.title
					} else if (T.translate("seo.title") !== "seo.title") {
						return T.translate("seo.title")
					}
					return false
				}, [seo])

				const seoDescription = useMemo(() => {
					if (seo && seo.description) {
						return seo.description
					} else if (
						T.translate("seo.description") !== "seo.description"
					) {
						return T.translate("seo.description")
					}
				}, [seo])

				function getCanonical(site, path) {
					if (path.match(/^\/cn/)) {
						const CNCanonical = redirects.find(r =>
							r.fromPath.match(pathRegExp(path))
						).toPath
						if (CNCanonical) {
							return CNCanonical
						}
					}
					return sanitizePath(site.url + path)
				}

				function generateAlternates({ site, availableTrans }) {
					let out = []

					// CN is SOOO special...
					if (availableTrans && availableTrans.cn) {
						const cnPageRegExp = pathRegExp(availableTrans.cn)
						const cnPageDetected = redirects.find(route =>
							route.fromPath.match(cnPageRegExp)
						)

						if (cnPageDetected) {
							out.push(
								<link
									rel="alternate"
									href={sanitizePath(cnPageDetected.toPath)}
									hreflang={"zh"}
									key={"zh"}
								/>
							)
						}
					}

					for (const [lang, path] of Object.entries(availableTrans)) {
						if (lang !== "cn") {
							out.push(
								<link
									rel="alternate"
									href={sanitizePath(site.url + path)}
									hreflang={lang}
									key={lang}
								/>
							)
						}
					}

					return out
				}

				const site = data.site.siteMetadata
				const canonical = getCanonical(site, path)
				const title = seoTitle || site.title
				const description = seoDescription || site.description
				const siteUrl = site.url.replace("/*", "")

				let titleTemplate = `%s | ${site.name}`
				if (canonical === siteUrl) {
					titleTemplate = `${site.name} - %s`
				} else if (path.match(/(\/blog\/.+|\/blogue\/.+)/)) {
					titleTemplate = `%s`
				}

				let featureImageAlt = title
				let featureImageHeight = 630
				let featureImageWidth = 1200

				let filename = path.replace(/\//g, "-").replace(/^-|-$/g, "")

				const allLangs = [
					"/",
					...Object.keys(availableTrans).map(trans => `/${trans}`),
					...Object.keys(availableTrans).map(trans => `/${trans}/`),
				]
				if (allLangs.includes(path)) {
					filename = "broadsign"
				} else if (l !== "en" && availableTrans.en) {
					filename = availableTrans.en.replace(/\//g, "")
				}

				let featureImage = `${siteUrl}meta/${filename}-${l}.jpg`
				if (seo.featureImage && seo.featureImage.src) {
					featureImage = seo.featureImage.src
				}

				let robots = "index, follow"
				if (siteUrl.match(/(staging\.broadsign)/)) {
					robots = "noindex, nofollow"
				} else if (seo.robots) {
					if (seo.robots.includes("noindex")) {
						robots = robots.replace("index", "noindex")
					}
					if (seo.robots.includes("nofollow")) {
						robots = robots.replace("follow", "nofollow")
					}
				}

				const schemaOrgJSONLD = {
					"@context": "http://schema.org",
					"@type": "WebSite",
					url: canonical,
					name: title,
					description: description,
					image: featureImage,
				}

				return (
					<Helmet titleTemplate={titleTemplate} defaultTitle={title}>
						<meta charSet="UTF-8" />
						<title>{title}</title>
						<meta name="robots" content={robots}></meta>
						<meta
							name="msapplication-config"
							content="/browserconfig.xml"
						/>
						<meta
							name="author"
							content={seo.author || site.authors}
						/>
						<meta name="description" content={description} />
						<link rel="canonical" href={canonical}></link>
						<link
							rel="apple-touch-icon"
							href="/icons/apple-touch-icon.png"
							sizes="180x180"
						/>
						<link
							rel="icon"
							href="/icons/favicon-32x32.png"
							sizes="32x32"
							type="image/png"
						/>
						<link
							rel="icon"
							href="/icons/favicon-16x16.png"
							sizes="16x16"
							type="image/png"
						/>
						<link
							rel="mask-icon"
							href="/icons/safari-pinned-tab.svg"
							color="#663399"
						/>
						<meta property="og:site_name" content={site.title} />
						<meta property="og:locale" content={l} />
						<meta property="og:title" content={title} />
						<meta
							property="og:type"
							content={seo.type || "website"}
						/>
						<meta property="og:description" content={description} />
						<meta property="og:url" content={canonical} />
						<meta
							property="og:image"
							content={featureImage}
							name="image"
						/>
						<meta
							property="og:image:secure_url"
							content={featureImage}
						/>
						<meta
							property="og:image:width"
							content={featureImageWidth}
						/>
						<meta
							property="og:image:height"
							content={featureImageHeight}
						/>
						<meta
							property="og:image:alt"
							content={featureImageAlt}
						/>
						{/* SOCIAL MEDIA */}
						{site.facebookAppID ? (
							<meta
								property="fb:app_id"
								content={site.facebookAppID}
							/>
						) : null}
						{site.twitterSiteID ? (
							<meta
								name="twitter:site"
								content={site.twitterSiteID}
							/>
						) : null}
						{site.twitterUserID ? (
							<meta
								name="twitter:creator"
								content={site.twitterUserID}
							/>
						) : null}
						<meta name="twitter:title" content={title} />
						<meta
							name="twitter:description"
							content={description}
						/>
						<meta
							name="twitter:card"
							content="summary_large_image"
						/>
						<meta name="twitter:image" content={featureImage} />
						<script type="application/ld+json">
							{JSON.stringify(schemaOrgJSONLD)}
						</script>
						{generateAlternates({
							site: site,
							availableTrans: availableTrans,
						})}
						<link
							rel="prefetch"
							as="font"
							href={RobotoRegular}
							type="font/woff2"
							crossOrigin="anonymous"
						/>
						<link
							rel="prefetch"
							as="font"
							href={RobotoMedium}
							type="font/woff2"
							crossOrigin="anonymous"
						/>
						<link
							rel="prefetch"
							as="font"
							href={RobotoBold}
							type="font/woff2"
							crossOrigin="anonymous"
						/>
						<link
							rel="prefetch"
							as="font"
							href={RobotoBlack}
							type="font/woff2"
							crossOrigin="anonymous"
						/>
						{/* Preconnects/Prefetches */}
						<link
							rel="preconnect"
							href="https://www.googletagmanager.com"
						/>
						<link rel="preconnect" href="https://www.google.com" />
						<link rel="preconnect" href="https://www.google.ca" />
						<link
							rel="preconnect"
							href="https://content.cdntwrk.com/"
						/>
						<link rel="preconnect" href="https://js.driftt.com/" />
						<link
							rel="dns-prefetch"
							href="https://www.googletagmanager.com"
						/>
						<link
							rel="dns-prefetch"
							href="https://www.google.com"
						/>
						<link rel="dns-prefetch" href="https://www.google.ca" />
						<link
							rel="dns-prefetch"
							href="https://content.cdntwrk.com/"
						/>
						<link
							rel="dns-prefetch"
							href="https://js.driftt.com/"
						/>
						<link
							rel="preconnect"
							href="https://hubspot.clearbit.com/"
						/>
					</Helmet>
				)
			}}
		/>
	)
}

Head.propTypes = {
	seo: PropTypes.object,
	path: PropTypes.string.isRequired,
}
