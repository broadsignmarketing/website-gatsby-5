import React from "react"
import { graphql } from "gatsby"
import Header from "../components/header"
import { Trans, useTranslation } from "gatsby-plugin-react-i18next"

import Seo from "../components/seo"

import Layout from "../components/layout"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

// import * as styles from "../components/index.module.css"

const IndexPage = () => {
	const { t } = useTranslation()

	return (
		<Layout>
			<main>
				<StaticImage
					src="../images/example.png"
					loading="eager"
					width={64}
					quality={95}
					formats={["auto", "webp", "avif"]}
					alt=""
					style={{ marginBottom: `var(--space-3)` }}
				/>
				<h1>
					<Header></Header>
				</h1>
				<h1>
					<Trans>Welcome to my Gatsby site!</Trans>
				</h1>
				<p>
					<Trans>My name is Shanika</Trans>
				</p>
				<p>
					<Trans>My profession is SSE</Trans>
				</p>
				<p>
					<Trans>My Birthday is 1990/10/10</Trans>
				</p>
				<p>{t("message")}</p>
			</main>
		</Layout>
	)
}

export const query = graphql`
	query ($language: String!) {
		locales: allLocale(filter: { language: { eq: $language } }) {
			edges {
				node {
					ns
					data
					language
				}
			}
		}
	}
`

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
