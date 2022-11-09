import React, { useMemo } from "react"

import classnames from "classnames"
import PropTypes from "prop-types"
import { useL } from "@hooks/useDico"
import {
	blogPostSlug,
	excerpt,
	formatDate,
	getTranslations,
	htmlChars,
} from "@annex"

import { GatsbyImage as Img } from "gatsby-plugin-image"
import Link from "@components/LocalizedLink"
import RowLegacy from "@components/Row"
import { Row, Column } from "@components/Grid"

import "@sass/components/RelatedBlogs.scss"

function RelatedBlogPost({ l, __, post }) {
	const { title, slug, thumbnail } = post

	return (
		<div className="post">
			<Link className="inner" to={blogPostSlug(slug, l)}>
				<img
					src={thumbnail}
					alt=""
					className="thumb object-fit-cover"
				/>
				<h3 className="title">{excerpt(htmlChars(title))}</h3>
				<p className="read_more">{__.readArticle}</p>
			</Link>
		</div>
	)
}

function RelatedBlogPostCarolina({ l, __, post, cta = "readArticle" }) {
	const { title, slug, thumbnail } = post

	return (
		<div className="post">
			<Link className="inner" to={blogPostSlug(slug, l)}>
				<img
					src={thumbnail}
					alt=""
					className="thumb rounded-xl object-fit-cover"
					loading="lazy"
				/>
				<p className="date uppercase mt-5 mb-1">
					{formatDate({ date: post.date, lang: l })}
				</p>
				<h3 className="title h6 mb-5 pr-3">
					{excerpt(htmlChars(title))}
				</h3>
				<p className="read_more uppercase flex align-items-center">
					{__[cta]}
				</p>
			</Link>
		</div>
	)
}

export default function RelatedBlogs({ posts, className, id, theme, cta }) {
	const l = useL()
	const __ = getTranslations(`${l}/components/RelatedBlogs`)

	if (["carolina_campsite"].includes(theme)) {
		return (
			<div
				className={classnames(
					"RelatedBlogs theme_carolina",
					className,
					"theme_" + theme
				)}
				id={id}
			>
				<div className="grid flex-nowrap">
					{posts.map((p, k) => {
						const post = p.node || p
						if (blogPostSlug(post.slug, l) !== "") {
							return (
								<div className="col col-10 sm:col-4" key={k}>
									<RelatedBlogPostCarolina
										l={l}
										__={__}
										post={post}
										key={k}
										cta={cta}
									/>
								</div>
							)
						}
					})}
				</div>
			</div>
		)
	}
	return (
		<div
			className={classnames("RelatedBlogs", className, "theme_" + theme)}
			id={id}
		>
			<RowLegacy>
				{posts.map((p, k) => {
					const post = p.node || p
					if (blogPostSlug(post.slug, l) !== "") {
						return (
							<RelatedBlogPost
								l={l}
								__={__}
								post={post}
								key={k}
							/>
						)
					}
				})}
			</RowLegacy>
		</div>
	)
}

RelatedBlogs.propTypes = {
	posts: PropTypes.array.isRequired,
	theme: PropTypes.oneOf(["aurora", "neon", "carolina_campsite"]).isRequired,
}
