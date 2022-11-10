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
		sameAs: ["https://www.facebook.com/BroadSign", "https://twitter.com/broadsign", "https://www.linkedin.com/company/broadsign"],
		facebookAppID: "BroadSign",
		twitterSiteID: "Broadsign",
		twitterUserID: "@broadsign",
		siteUrl: process.env.SITE_URL || "https://broadsign.com",
	},
	trailingSlash: "never",
	plugins: [
		{
			resolve: "gatsby-plugin-sharp",
			options: {
				defaultQuality: 80,
				stripMetadata: true,
				defaults: {
					formats: ["auto", "webp", "avif"],
					placeholder: "blurred",
					quality: 80,
					breakpoints: [600, 1200],
				},
			},
		},
		{
			resolve: "gatsby-transformer-sharp",
		},
		{
			resolve: "gatsby-plugin-image",
		},
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				name: "Broadsign",
				short_name: "Broadsign",
				start_url: "/",
				background_color: "#FFFFFF",
				theme_color: "#001464",
				display: "minimal-ui",
				icon: "static/icons/icon.png",
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
			resolve: "gatsby-source-filesystem",
			options: {
				name: "pages",
				path: `${__dirname}/src/pages/`,
			},
		},
		/* {
			resolve: "gatsby-source-filesystem",
			options: {
				name: "queries",
				path: `${__dirname}/src/queries/`,
			},
		}, */
		/* {
			resolve: "gatsby-source-filesystem",
			options: {
				name: "img",
				path: `${__dirname}/src/img/`,
			},
		}, */
		/* {
			resolve: "gatsby-source-filesystem",
			options: {
				name: "static_img",
				path: `${__dirname}/static/img/`,
			},
		}, */
		{
			resolve: `gatsby-plugin-react-i18next`,
			options: {
				localeJsonSourceName: `locale`,
				languages: [`en`, `fr`, `es`],
				defaultLanguage: `en`,
				trailingSlash: "never",
				redirect: false,
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
						matchPath: "/",
						languages: ["en", "fr"],
					},
				],
			},
		},
		{
			resolve: "gatsby-plugin-alias-imports",
			options: {
				alias: {
					"@annex": "src/assets/annex.tsx",
					"@assets": "src/assets",
					"@bsTypes": "src/assets/types.tsx",
					"@components": "src/components",
					"@hooks": "src/hooks",
					"@icons": "src/img/icons",
					"@i18n": "src/i18n",
					"@img": "src/img",
					"@logos": "static/img/logos",
					"@meta": "static/meta",
					"@partials": "src/partials",
					"@route": "src/router/route.js",
					"@router": "src/router/router.json",
					"@sass": "src/styles",
					"@static": "static",
					"@templates": "src/templates",
					"@uberflip": "src/assets/uberflip.js",
					"@utils": "src/utils",
					"@videos": "static/videos",
				},
				extensions: ["js"],
			},
		},
		{
			resolve: "gatsby-plugin-sass",
		},
	],
};
