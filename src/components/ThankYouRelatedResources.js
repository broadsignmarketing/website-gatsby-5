import React from "react"

import { StaticQuery, graphql } from "gatsby"
import classnames from "classnames"
import { useL } from "@hooks/useDico"
import { blogPostSlug, formatDate } from "@annex"

import { GatsbyImage as Img } from "gatsby-plugin-image"
import Link from "@components/LocalizedLink"

function RelatedItem({ thumb, date, title, cta, to, cols }) {
	return (
		<Link
			to={to}
			className={classnames(
				"related col-12 mb-12 flex flex-column justify-content-between",
				`sm:${cols}`
			)}
		>
			<img
				src={thumb}
				className="related_thumb mb-4 rounded-xl object-fit-cover"
			/>
			<span className="related_date text-12 mb-1">{date}</span>
			<span className="related_title h6 text-reflex font-black mb-4">
				{title}
			</span>
			<span className="related_cta text-16 text-cerulean mt-auto mb-0 link_cerulean_arrow">
				{cta}
			</span>
		</Link>
	)
}

export default function Related({ list }) {
	return (
		<StaticQuery
			query={graphql`
				query ThankYouRelatedResourcesQuery {
					blog_cardoor_en: uberflipItem(
						language: { eq: "en" }
						name: { eq: "cardoor" }
					) {
						...ufItem
					}
					blog_cook_it_en: uberflipItem(
						language: { eq: "en" }
						name: { eq: "cook_it" }
					) {
						...ufItem
					}
					blog_fidelitix_en: uberflipItem(
						language: { eq: "en" }
						name: { eq: "fidelitix" }
					) {
						...ufItem
					}
					blog_qr_codes_en: uberflipItem(
						language: { eq: "en" }
						name: { eq: "qr_codes" }
					) {
						...ufItem
					}
					blog_salt_xc_en: uberflipItem(
						language: { eq: "en" }
						name: { eq: "salt_xc" }
					) {
						...ufItem
					}
					blog_samsung_en: uberflipItem(
						language: { eq: "en" }
						name: { eq: "samsung" }
					) {
						...ufItem
					}
					blog_spring_summer_2022_trends_en: uberflipItem(
						language: { eq: "en" }
						name: { eq: "spring_summer_2022_trends" }
					) {
						...ufItem
					}

					blog_cook_it_fr: uberflipItem(
						language: { eq: "fr" }
						name: { eq: "cook_it" }
					) {
						...ufItem
					}
					blog_fidelitix_fr: uberflipItem(
						language: { eq: "fr" }
						name: { eq: "fidelitix" }
					) {
						...ufItem
					}
					blog_campsite_fr: uberflipItem(
						language: { eq: "fr" }
						name: { eq: "campsite" }
					) {
						...ufItem
					}

					allposts: allUberflipItem(
						filter: { stream: { eq: "static" } }
					) {
						...ufItems
					}
				}
			`}
			render={data => {
				let cols = "col-4"
				if (12 % list.length === 0) {
					cols = `col-${12 / list.length}`
				}

				const l = useL()

				/* return (
					<div>
						{data.allposts.nodes.map((e) => (
							<div className="mb-12 p-8" style={{ border: "1px solid #000" }}>
								<p className="m-0">{e.title}</p>
								<p className="m-0">{e.slug}</p>
							</div>
						))}
					</div>
				); */

				return list.map(({ id, type, title, cta, to }) => {
					if (type === "blog") {
						const post = data[`blog_${id}_${l}`]

						// console.log("From ThankYouRelatedResources : ", post);

						if (post) {
							const thumb = post?.thumbnail
							const date = formatDate({
								date: post.date,
								lang: l,
							})

							if (post && thumb) {
								return (
									<RelatedItem
										id={id}
										thumb={thumb}
										date={date}
										title={post.title}
										cta={cta}
										to={blogPostSlug(post.slug, l)}
										cols={cols}
										key={id}
									/>
								)
							}

							return (
								<div
									to={to}
									className={classnames(
										"related col-12 mb-12",
										`sm:${cols}`
									)}
									key={id}
								>
									<p key={id}>Resource {id} error</p>
								</div>
							)
						}
					}

					if (process.env.DEBUG_UBERFLIP === "true") {
						return (
							<div
								to={to}
								className={classnames(
									"related col-12 mb-12",
									`sm:${cols}`
								)}
								key={id}
							>
								<p key={id}>
									Resource {`blog_${id}_${l}`} not found
								</p>
							</div>
						)
					}

					return
				})
			}}
		/>
	)
}
