/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
	siteMetadata: {
		title: "Broadsign",
		name: "Broadsign",
		author: "Kevin Gagnon, Valentin Lachere, Michel Maroun, Charbel Chahine",
		description: "Cloud-based digital signage solutions",
		type: "Company",
		url: process.env.SITE_URL || "https://broadsign.com",
		sameAs: [
			"https://www.facebook.com/BroadSign",
			"https://twitter.com/broadsign",
			"https://www.linkedin.com/company/broadsign",
		],
		facebookAppID: "BroadSign",
		twitterSiteID: "Broadsign",
		twitterUserID: "@broadsign",
		siteUrl: process.env.SITE_URL || "https://broadsign.com",
	},
	plugins: [
		`gatsby-plugin-image`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				// This will impact how browsers show your PWA/website
				// https://css-tricks.com/meta-theme-color-and-trickery/
				// theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/locales`,
				name: `locale`,
			},
		},
		{
			resolve: `gatsby-plugin-react-i18next`,
			options: {
				localeJsonSourceName: `locale`,
				languages: [`en`, `fr`, `es`],
				defaultLanguage: `en`,
				siteUrl: process.env.SITE_URL,
				i18nextOptions: {
					interpolation: {
						escapeValue: false,
					},
					keySeparator: false,
					nsSeparator: false,
				},
				pages: [
					{
						matchPath: "/:lang?/blog/:uid",
						getLanguageFromPath: true,
						excludeLanguages: ["es"],
					},
					{
						matchPath: "/preview",
						languages: ["en"],
					},
				],
			},
		},
	],
}
