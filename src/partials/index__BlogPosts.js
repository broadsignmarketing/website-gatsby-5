import React, { useMemo } from "react"
import { blogPostSlug, htmlChars } from "@annex"

import CTA from "@components/CTA"
import Link from "@components/LocalizedLink"
import Tank from "@components/Tank"

export default function index__BlogPosts({ posts }) {
	if (posts.length > 0) {
		return (
			<Tank className="resources blog_posts">
				<aside>
					<h2 className="font_size_3">
						{T.translate("resources.blog")}
					</h2>
					{/* <Link
						className="see_all blue font_size_1_6"
						to={route("blog")}
					>
						{T.translate("resources.seeAllPosts")}
					</Link> */}
				</aside>
				{/* <div className="resources_hull">
					{posts.map((post, k) => {
						return (
							<Link
								className="resource resource_post"
								to={blogPostSlug(post.slug, l)}
								key={k}
							>
								<img
									className="feature_img object-fit-cover"
									src={post.thumbnail}
									loading="lazy"
									width="460"
									height="220"
								/>
								<h3 className="font_size_2">
									{htmlChars(post.title)}
								</h3>
								<CTA className="span gradient round clear">
									{T.translate("resources.readMore")}
								</CTA>
							</Link>
						)
					})}
				</div> */}
			</Tank>
		)
	}

	return null
}
