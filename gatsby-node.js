/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
/* exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
} */

const request = require("request")

/* exports.sourceNodes = ({ actions, createContentDigest }) => {
	const { createNode, createRedirect } = actions

	function uberflipAuthHeaders(token) {
		return {
			Authorization: `Bearer ${token}`,
		}
	}

	function createParentNodes() {
		createNode({
			id: "uberflip",
			parent: null,
			children: [],
			internal: {
				type: "UberflipItemList",
				contentDigest: "immutable",
				mediaType: "text/json",
				description: "Uberflip Items",
				content: "",
			},
		})
	}

	function uberflipFetchTagsAndCreateNode(item, token) {
		const headers = uberflipAuthHeaders(token)

		function detectLanguageFromTags(tags) {
			const langTag = tags.find(tag => tag.name.match(/language/i))

			if (langTag?.name) {
				if (langTag.name.match(/(french)/i)) {
					return "fr"
				}

				if (langTag.name.match(/(spanish)/i)) {
					return "es"
				}

				if (langTag.name.match(/(portuguese)/i)) {
					return "pt"
				}

				if (langTag.name.match(/(german)/i)) {
					return "de"
				}
			}

			return false
		}

		function getTags(error, response, body) {
			if (!error && response.statusCode == 200) {
				const { data } = JSON.parse(body)

				if (data) {
					item.tags = data.map(({ id, name }) => ({ id, name }))

					const altLanguage = detectLanguageFromTags(data)

					if (altLanguage) {
						item.language = altLanguage
					}
				}

				createNode(item)
				uberflipRedirect(item)
			} else {
				console.error(error)
			}
		}

		const options = {
			url: `https://v2.api.uberflip.com/items/${item.id}/tags`,
			headers: headers,
		}

		return request(options, getTags)
	}

	function uberflipItem({
		author,
		content,
		description,
		id,
		language,
		published_at,
		seo_description,
		seo_title,
		streamName,
		thumbnail_url,
		title,
		url,
		name = "",
	}) {
		if (thumbnail_url.match(/^\/wp-content/)) {
			thumbnail_url = `https://writers.broadsign.com${thumbnail_url}`
		}

		if (!description) {
			description = seo_description
		}

		if (!description) {
			description = title
		}

		// Reject is Published Date is in the future
		const now = new Date()
		// console.log(title, " --- Now:", now.toISOString().slice(0, 19), " --- Published:", published_at.slice(0, 19));
		if (now.toISOString().slice(0, 19) < published_at.slice(0, 19)) {
			return
		}

		return {
			parent: "uberflip",
			children: [],
			id: `${id}-${streamName}`,
			title: title,
			author: author,
			date: published_at.substr(0, 10),
			description: createContentDigest(description),
			language: language,
			name: name,
			originalUrl: url,
			seo: { title: seo_title, description: seo_description },
			slug: blogPostSlug(url, language),
			stream: streamName,
			thumbnail: thumbnail_url,
			internal: {
				type: "UberflipItem",
				contentDigest: createContentDigest(content + streamName),
				mediaType: `text/json`,
				content: JSON.stringify(content),
				description: createContentDigest(description),
			},
		}
	}

	function uberflipRedirect(item) {
		createRedirect({
			fromPath: item.slug.replace(/\/$/, ""),
			toPath: item.originalUrl,
			isPermanent: true,
			Language: item.language,
		})
	}

	function uberflipProcessStream(
		error,
		response,
		body,
		token,
		{ language = "en", streamName }
	) {
		if (!error && response.statusCode == 200) {
			const { data } = JSON.parse(body)

			if (data) {
				const rawItems = Object.values(data)

				if (rawItems && rawItems.length > 0) {
					for (const rawItem of rawItems) {
						if (rawItem) {
							rawItem.language = language
							rawItem.streamName = streamName

							// console.log(rawItem);

							const processedItem = uberflipItem(rawItem)

							if (processedItem) {
								if (process.env.DEBUG_UBERFLIP === "true") {
									console.log([
										processedItem.id,
										processedItem.stream,
										processedItem.slug,
										processedItem.internal.contentDigest,
									])
								}
								uberflipFetchTagsAndCreateNode(
									processedItem,
									token
								)
							} else {
								if (process.env.DEBUG_UBERFLIP === "true") {
									console.error("Error processing item :")
									console.error(rawItem)
								}
							}
						}
					}
				}
			} else {
				console.error("Error fetching Uberflip Stream : ", streamName)
			}
		} else {
			console.error(error)
		}
	}

	function uberflipProcessItem(
		error,
		response,
		body,
		token,
		{ itemName, language = "en", streamName = "static" }
	) {
		if (!error && response.statusCode == 200) {
			const rawItem = JSON.parse(body)

			if (rawItem) {
				rawItem.language = language
				rawItem.name = itemName
				rawItem.streamName = streamName

				const processedItem = uberflipItem(rawItem)

				if (processedItem) {
					if (process.env.DEBUG_UBERFLIP === "true") {
						const logThis = [processedItem.name, processedItem.slug]
						console.log(logThis)
					}

					uberflipFetchTagsAndCreateNode(processedItem, token)
				}
			} else {
				console.error("Error processing Uberflip item : ", itemName)
			}
		} else {
			console.error(error)
		}
	}

	function uberflipFetchStream(token, stream) {
		const { id, name, language, limit } = stream

		const options = {
			url: `https://v2.api.uberflip.com/streams/${id}/items?limit=${limit}&sort=-published_at`,
			headers: uberflipAuthHeaders(token),
		}

		request(options, (error, response, body) => {
			uberflipProcessStream(error, response, body, token, {
				language: language,
				streamName: name,
			})
		})
	}

	function uberflipFetchItem(token, item) {
		const { id, name, language, streamName } = item

		const options = {
			url: `https://v2.api.uberflip.com/items/${id}`,
			headers: uberflipAuthHeaders(token),
		}

		request(options, (error, response, body) => {
			uberflipProcessItem(error, response, body, token, {
				language: language,
				itemName: name,
				streamName: streamName,
			})
		})
	}

	function uberflipConnect() {
		const headers = {
			"Content-Type": "application/json",
		}

		const streams = [
			{
				id: "10264379",
				language: "en",
				limit: process.env.LIMIT_UBERFLIP === "true" ? "10" : "20",
				name: "blog",
			},
			{
				id: "10244461",
				language: "fr",
				limit: process.env.LIMIT_UBERFLIP === "true" ? "5" : "20",
				name: "blog",
			},
			{
				id: "10445005",
				language: "es",
				limit: process.env.LIMIT_UBERFLIP === "true" ? "5" : "20",
				name: "blog",
			},
			{
				id: "10539832",
				language: "de",
				limit: process.env.LIMIT_UBERFLIP === "true" ? "5" : "20",
				name: "blog",
			},
			{
				id: "10423087",
				language: "pt",
				limit: process.env.LIMIT_UBERFLIP === "true" ? "5" : "20",
				name: "blog",
			},
			{
				id: "10445246",
				language: "en",
				limit: process.env.LIMIT_UBERFLIP === "true" ? "10" : "20",
				name: "ebooks",
			},
			{
				id: "10457005",
				language: "fr",
				limit: process.env.LIMIT_UBERFLIP === "true" ? "10" : "20",
				name: "ebooks",
			},
			{
				id: "10457119",
				language: "es",
				limit: process.env.LIMIT_UBERFLIP === "true" ? "10" : "20",
				name: "ebooks",
			},
			// { id: "", language: "de", limit: process.env.LIMIT_UBERFLIP === "true" ? "10" : "20", name: "ebooks" },
			// { id: "", language: "pt", limit: process.env.LIMIT_UBERFLIP === "true" ? "10" : "20", name: "ebooks" },
			{
				id: "10308444",
				language: "en",
				limit: process.env.LIMIT_UBERFLIP === "true" ? "5" : "20",
				name: "webinars",
			},
			// { id: "", language: "fr", limit: process.env.LIMIT_UBERFLIP === "true" ? "5" : "20", name: "webinars" },
			// { id: "", language: "es", limit: process.env.LIMIT_UBERFLIP === "true" ? "5" : "20", name: "webinars" },
			// { id: "", language: "de", limit: process.env.LIMIT_UBERFLIP === "true" ? "5" : "20", name: "webinars" },
			// { id: "", language: "pt", limit: process.env.LIMIT_UBERFLIP === "true" ? "5" : "20", name: "webinars" },
			{
				id: "10308434",
				language: "en",
				limit: process.env.LIMIT_UBERFLIP === "true" ? "5" : "5",
				name: "omnichannel",
			},
			{
				id: "10308432",
				language: "en",
				limit: process.env.LIMIT_UBERFLIP === "true" ? "5" : "10",
				name: "platformUpdates",
			},
			{
				id: "10361229",
				language: "en",
				limit: process.env.LIMIT_UBERFLIP === "true" ? "5" : "5",
				name: "retail",
			},
			{
				id: "10308436",
				language: "en",
				limit: process.env.LIMIT_UBERFLIP === "true" ? "5" : "10",
				name: "broadsignAdsUpdates",
			},
		]

		const individualItems = [
			{
				id: "676141647",
				language: "en",
				streamName: "ebooks",
				name: "ebook-increase-revenue-with-contextual-in-store-media",
			},
			{
				id: "676440969",
				language: "en",
				streamName: "static",
				name: "cardoor",
			},
			{
				id: "676440970",
				language: "en",
				streamName: "static",
				name: "cook_it",
			},
			{
				id: "676439736",
				language: "en",
				streamName: "static",
				name: "fidelitix",
			},
			{
				id: "676440967",
				language: "en",
				streamName: "static",
				name: "qr_codes",
			},
			{
				id: "676440968",
				language: "en",
				streamName: "static",
				name: "salt_xc",
			},
			{
				id: "676440966",
				language: "en",
				streamName: "static",
				name: "samsung",
			},
			{
				id: "675882936",
				language: "en",
				streamName: "static",
				name: "spring_summer_2022_trends",
			},
			{
				id: "676440419",
				language: "fr",
				streamName: "static",
				name: "cook_it",
			},
			{
				id: "676439675",
				language: "fr",
				streamName: "static",
				name: "fidelitix",
			},
			{
				id: "676448006",
				language: "fr",
				streamName: "static",
				name: "campsite",
			},
		]

		const dataString = `{ "grant_type": "client_credentials", "client_id": "${process.env.UBERFLIP_API_KEY}", "client_secret": "${process.env.UBERFLIP_API_SECRET}" }`

		const options = {
			url: "https://v2.api.uberflip.com/authorize",
			method: "POST",
			headers: headers,
			body: dataString,
		}

		function getAuthAndTransmitToStreams(error, response, body) {
			if (!error && response.statusCode == 200) {
				const res = JSON.parse(body)
				if (res && res.access_token) {
					for (const item of individualItems) {
						console.log(item.published)
						if (item.id) {
							uberflipFetchItem(res.access_token, item)
						}
					}

					for (const stream of streams) {
						if (stream.id) {
							uberflipFetchStream(res.access_token, stream)
						}
					}
				}
			}
		}

		request(options, getAuthAndTransmitToStreams)
	}

	createParentNodes()
	uberflipConnect()
} */

exports.createSchemaCustomization = ({ actions }) => {
	actions.createTypes(`
		type SitePage implements Node @dontInfer {
			path: String!
		}

		type Author implements Node @dontInfer {
			full_name: String
		}

		type Tag implements Node @dontInfer {
			id: String
			name: String
		}

		type UberflipItem implements Node @dontInfer {
			id: String!
			title: String!
			author: Author
			date: String!
			description: String!
			language: String!
			name: String
			originalUrl: String!
			slug: String!
			stream: String!
			tags: [Tag]
			thumbnail: String!
		}
	`)
}
