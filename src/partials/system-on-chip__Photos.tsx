import React from "react";
import { StaticQuery, graphql } from "gatsby";

import { GatsbyImage as Img } from "gatsby-plugin-image";

export default function systemOnChip__Photos() {
	return (
		<StaticQuery
			query={graphql`
				query SystemOnChipPhotosQuery {
					photo01: file(relativePath: { eq: "pages/system-on-chip/photo_01.png" }) {
						childImageSharp {
							gatsbyImageData
						}
					}
					photo02: file(relativePath: { eq: "pages/system-on-chip/photo_02.png" }) {
						childImageSharp {
							gatsbyImageData
						}
					}
					photo03: file(relativePath: { eq: "pages/system-on-chip/photo_03.png" }) {
						childImageSharp {
							gatsbyImageData
						}
					}
					photo04: file(relativePath: { eq: "pages/system-on-chip/photo_04.png" }) {
						childImageSharp {
							gatsbyImageData
						}
					}
					photo05: file(relativePath: { eq: "pages/system-on-chip/photo_05.png" }) {
						childImageSharp {
							gatsbyImageData
						}
					}
					photo06: file(relativePath: { eq: "pages/system-on-chip/photo_06.png" }) {
						childImageSharp {
							gatsbyImageData
						}
					}
				}
			`}
			render={(data) => {
				return (
					<div className="grid">
						<div className="fade_from_left col-7 flex-order-1 sm:col-4 sm:flex-order-1">
							<Img image={data.photo01.childImageSharp.gatsbyImageData} className="h-full rounded-xl" alt="" />
						</div>
						<div className="fade_from_left col-5 flex-order-2 sm:col-3 sm:flex-order-2">
							<Img image={data.photo02.childImageSharp.gatsbyImageData} className="h-full rounded-xl" alt="" />
						</div>
						<div className="fade_from_left col-5 flex-order-3 sm:col-4 sm:flex-order-3">
							<Img image={data.photo03.childImageSharp.gatsbyImageData} className="h-full rounded-xl" alt="" />
						</div>
						<div className="col-1 hidden sm:block sm:flex-order-4"></div>
						<div className="col-1 hidden sm:block sm:flex-order-5"></div>
						<div className="fade_from_right col-7 flex-order-4 sm:col-4 sm:flex-order-6">
							<Img image={data.photo04.childImageSharp.gatsbyImageData} className="h-full rounded-xl" alt="" />
						</div>
						<div className="fade_from_right col-7 flex-order-5 sm:col-3 sm:flex-order-7">
							<Img image={data.photo05.childImageSharp.gatsbyImageData} className="h-full rounded-xl" alt="" />
						</div>
						<div className="fade_from_right col-5 flex-order-6 sm:col-4 sm:flex-order-8">
							<Img image={data.photo06.childImageSharp.gatsbyImageData} className="h-full rounded-xl" alt="" />
						</div>
					</div>
				);
			}}
		/>
	);
}
