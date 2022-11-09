import React, { useMemo } from "react"

import { getTranslations } from "@assets/annex"

import ImgHat from "@components/ImgHat"
import Link from "@components/LocalizedLink"
import Tank from "@components/Tank"

import tb_blog_retail_01 from "@img/resources/quick_resource_blog_retail_01.jpg"
import tb_blog_starlite from "@img/resources/quick_resource_blog_starlite_01.jpg"
import tb_blog_tech_trends from "@img/resources/quick_resource_blog_digital_signage_trends_tech.jpg"
import tb_broadsign_reach from "@img/resources/quick_resource_broadsign_reach.jpg"
import tb_whitepaper_successful_network from "@img/resources/quick_resource_whitepaper_successful_network.jpg"
import tb_linkedin from "@img/resources/linkedin_thumbnail.jpg"
import tb_request_demo from "@img/heroes/request_demo_header.jpg"
import tb_vertical_retail from "@img/resources/quick_resource_vertical_retail.jpg"

import "@sass/components/QuickResource.scss"

export default function QuickResource({ name }) {
	const l = useMemo(() => {
		let out = T.translate("key")
		return out === "key" ? "en" : out
	}, [])

	const __ = useMemo(
		() => getTranslations(`${l}/components/QuickResource`),
		[l]
	)

	const resource = useMemo(() => {
		switch (name) {
			case "blog-retail-01":
				return {
					title: __.blogRetail01.title,
					link: "/blog/why-in-store-signage-advertising-belongs-in-every-brands-retail-media-strategy/",
					thumbnail: tb_blog_retail_01,
				}
			case "blog-starlite":
				return {
					title: __.blogStarlite.title,
					link: "/blog/how-starlite-media-elevates-the-shopping-centre-experience-with-dooh/",
					thumbnail: tb_blog_starlite,
				}
			case "blog-tech-trends":
				return {
					title: __.blogTechTrends.title,
					link: "/blog/?category=digital-signage-trends-tech",
					thumbnail: tb_blog_tech_trends,
				}
			case "broadsign-reach":
				return {
					title: __.broadsignReach.title,
					link: route("broadsignReach"),
					thumbnail: tb_broadsign_reach,
				}
			case "demo":
				return {
					title: __.requestDemo.title,
					link: route("demo"),
					thumbnail: tb_request_demo,
				}
			case "linkedin":
				return {
					title: __.linkedin.title,
					link: "https://www.linkedin.com/company/broadsign/",
					thumbnail: tb_linkedin,
				}
			case "vertical-retail":
				return {
					title: __.verticalRetail.title,
					link: route("verticalRetail", l),
					thumbnail: tb_vertical_retail,
				}
			case "whitepaper-successful-network":
				return {
					title: __.whitepaperSuccessfulNetwork.title,
					link: route(
						"ebookGuideToBuildingASuccessfulDigitalSignageNetwork"
					),
					thumbnail: tb_whitepaper_successful_network,
				}
			default:
				console.log("Unknown QuickResource name : ", name)
		}

		return out
	}, [name])

	if (resource) {
		return (
			<Tank className="QuickResource">
				<Link to={resource.link}>
					<ImgHat src={resource.thumbnail}>
						<p className="caption">{resource.title}</p>
					</ImgHat>
				</Link>
			</Tank>
		)
	}

	return null
}
