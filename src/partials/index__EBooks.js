import React, { useMemo } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { getTranslations } from "@annex"

import CTA from "@components/CTA"
import { GatsbyImage as Img } from "gatsby-plugin-image"
import Link from "@components/LocalizedLink"
import Tank from "@components/Tank"

const index__EBooksQuery = graphql`
	query index__EBooksQuery {
		EBookModernizeOOHBusinessCover_en: file(
			relativePath: {
				eq: "pages/index/ebooks/modernize_ooh_business_cover_en.png"
			}
		) {
			childImageSharp {
				gatsbyImageData(width: 340)
			}
		}
		EBookModernizeOOHBusinessCover_es: file(
			relativePath: {
				eq: "pages/index/ebooks/modernize_ooh_business_cover_es.png"
			}
		) {
			childImageSharp {
				gatsbyImageData(width: 340)
			}
		}
		EBookModernizeOOHBusinessPage1: file(
			relativePath: {
				eq: "pages/index/ebooks/modernize_ooh_business_page_1.png"
			}
		) {
			childImageSharp {
				gatsbyImageData(width: 340)
			}
		}
		EBookModernizeOOHBusinessPage2_en: file(
			relativePath: {
				eq: "pages/index/ebooks/modernize_ooh_business_page_2_en.png"
			}
		) {
			childImageSharp {
				gatsbyImageData(width: 340)
			}
		}
		EBookModernizeOOHBusinessPage2_es: file(
			relativePath: {
				eq: "pages/index/ebooks/modernize_ooh_business_page_2_es.png"
			}
		) {
			childImageSharp {
				gatsbyImageData(width: 340)
			}
		}
		EBookModernizeOOHBusinessPage3: file(
			relativePath: {
				eq: "pages/index/ebooks/modernize_ooh_business_page_3.png"
			}
		) {
			childImageSharp {
				gatsbyImageData(width: 340)
			}
		}
		EBookModernizeOOHBusinessPage4: file(
			relativePath: {
				eq: "pages/index/ebooks/modernize_ooh_business_page_4.png"
			}
		) {
			childImageSharp {
				gatsbyImageData(width: 340)
			}
		}
		EBookModernizeOOHBusinessPage5: file(
			relativePath: {
				eq: "pages/index/ebooks/modernize_ooh_business_page_5.png"
			}
		) {
			childImageSharp {
				gatsbyImageData(width: 340)
			}
		}

		EBookOptimizeOOHSalesThroughAutomationCover_en: file(
			relativePath: {
				eq: "pages/index/ebooks/optimize_ooh_sales_cover_en.png"
			}
		) {
			childImageSharp {
				gatsbyImageData(width: 340)
			}
		}
		EBookOptimizeOOHSalesThroughAutomationCover_de: file(
			relativePath: {
				eq: "pages/index/ebooks/optimize_ooh_sales_cover_de.png"
			}
		) {
			childImageSharp {
				gatsbyImageData(width: 340)
			}
		}
		EBookOptimizeOOHSalesThroughAutomationPage1: file(
			relativePath: {
				eq: "pages/index/ebooks/optimize_ooh_sales_page_1.png"
			}
		) {
			childImageSharp {
				gatsbyImageData(width: 340)
			}
		}
		EBookOptimizeOOHSalesThroughAutomationPage2: file(
			relativePath: {
				eq: "pages/index/ebooks/optimize_ooh_sales_page_2.png"
			}
		) {
			childImageSharp {
				gatsbyImageData(width: 340)
			}
		}
		EBookOptimizeOOHSalesThroughAutomationPage3: file(
			relativePath: {
				eq: "pages/index/ebooks/optimize_ooh_sales_page_3.png"
			}
		) {
			childImageSharp {
				gatsbyImageData(width: 340)
			}
		}
		EBookOptimizeOOHSalesThroughAutomationPage4: file(
			relativePath: {
				eq: "pages/index/ebooks/optimize_ooh_sales_page_4.png"
			}
		) {
			childImageSharp {
				gatsbyImageData(width: 340)
			}
		}
		EBookOptimizeOOHSalesThroughAutomationPage5: file(
			relativePath: {
				eq: "pages/index/ebooks/optimize_ooh_sales_page_5.png"
			}
		) {
			childImageSharp {
				gatsbyImageData(width: 340)
			}
		}

		EBookMediaBuyersGuideToProgrammaticDOOHCover_en: file(
			relativePath: {
				eq: "pages/index/ebooks/media_buyers_pdooh_cover_en.png"
			}
		) {
			childImageSharp {
				gatsbyImageData(width: 340)
			}
		}
		EBookMediaBuyersGuideToProgrammaticDOOHPage1: file(
			relativePath: {
				eq: "pages/index/ebooks/media_buyers_pdooh_page_1.png"
			}
		) {
			childImageSharp {
				gatsbyImageData(width: 340)
			}
		}
		EBookMediaBuyersGuideToProgrammaticDOOHPage2: file(
			relativePath: {
				eq: "pages/index/ebooks/media_buyers_pdooh_page_2.png"
			}
		) {
			childImageSharp {
				gatsbyImageData(width: 340)
			}
		}
		EBookMediaBuyersGuideToProgrammaticDOOHPage3: file(
			relativePath: {
				eq: "pages/index/ebooks/media_buyers_pdooh_page_3.png"
			}
		) {
			childImageSharp {
				gatsbyImageData(width: 340)
			}
		}
		EBookMediaBuyersGuideToProgrammaticDOOHPage4: file(
			relativePath: {
				eq: "pages/index/ebooks/media_buyers_pdooh_page_4.png"
			}
		) {
			childImageSharp {
				gatsbyImageData(width: 340)
			}
		}
		EBookMediaBuyersGuideToProgrammaticDOOHPage5: file(
			relativePath: {
				eq: "pages/index/ebooks/media_buyers_pdooh_page_5.png"
			}
		) {
			childImageSharp {
				gatsbyImageData(width: 340)
			}
		}

		EBookSuccessfulNetworkCover_en: file(
			relativePath: {
				eq: "pages/index/ebooks/successful_network_cover_en.png"
			}
		) {
			childImageSharp {
				gatsbyImageData(width: 340)
			}
		}
		EBookSuccessfulNetworkCover_fr: file(
			relativePath: {
				eq: "pages/index/ebooks/successful_network_cover_fr.png"
			}
		) {
			childImageSharp {
				gatsbyImageData(width: 340)
			}
		}
		EBookSuccessfulNetworkCover_es: file(
			relativePath: {
				eq: "pages/index/ebooks/successful_network_cover_es.png"
			}
		) {
			childImageSharp {
				gatsbyImageData(width: 340)
			}
		}
		EBookSuccessfulNetworkCover_de: file(
			relativePath: {
				eq: "pages/index/ebooks/successful_network_cover_de.png"
			}
		) {
			childImageSharp {
				gatsbyImageData(width: 340)
			}
		}
		EBookSuccessfulNetworkPage1: file(
			relativePath: {
				eq: "pages/index/ebooks/successful_network_page_1.png"
			}
		) {
			childImageSharp {
				gatsbyImageData(width: 340)
			}
		}
		EBookSuccessfulNetworkPage2_en: file(
			relativePath: {
				eq: "pages/index/ebooks/successful_network_page_2_en.png"
			}
		) {
			childImageSharp {
				gatsbyImageData(width: 340)
			}
		}
		EBookSuccessfulNetworkPage2_fr: file(
			relativePath: {
				eq: "pages/index/ebooks/successful_network_page_2_fr.png"
			}
		) {
			childImageSharp {
				gatsbyImageData(width: 340)
			}
		}
		EBookSuccessfulNetworkPage2_es: file(
			relativePath: {
				eq: "pages/index/ebooks/successful_network_page_2_es.png"
			}
		) {
			childImageSharp {
				gatsbyImageData(width: 340)
			}
		}
		EBookSuccessfulNetworkPage2_de: file(
			relativePath: {
				eq: "pages/index/ebooks/successful_network_page_2_de.png"
			}
		) {
			childImageSharp {
				gatsbyImageData(width: 340)
			}
		}
		EBookSuccessfulNetworkPage3: file(
			relativePath: {
				eq: "pages/index/ebooks/successful_network_page_3.png"
			}
		) {
			childImageSharp {
				gatsbyImageData(width: 340)
			}
		}
		EBookSuccessfulNetworkPage4: file(
			relativePath: {
				eq: "pages/index/ebooks/successful_network_page_4.png"
			}
		) {
			childImageSharp {
				gatsbyImageData(width: 340)
			}
		}
		EBookSuccessfulNetworkPage5: file(
			relativePath: {
				eq: "pages/index/ebooks/successful_network_page_5.png"
			}
		) {
			childImageSharp {
				gatsbyImageData(width: 340)
			}
		}

		EBook5CommonMistakesInDigitalSignage_en: file(
			relativePath: { eq: "pages/index/ebooks/5_mistakes_cover_en.png" }
		) {
			childImageSharp {
				gatsbyImageData(width: 340)
			}
		}
		EBook5CommonMistakesInDigitalSignage_fr: file(
			relativePath: { eq: "pages/index/ebooks/5_mistakes_cover_fr.png" }
		) {
			childImageSharp {
				gatsbyImageData(width: 340)
			}
		}
		EBook5CommonMistakesInDigitalSignagePage1: file(
			relativePath: { eq: "pages/index/ebooks/5_mistakes_page_1.png" }
		) {
			childImageSharp {
				gatsbyImageData(width: 340)
			}
		}
		EBook5CommonMistakesInDigitalSignagePage2: file(
			relativePath: { eq: "pages/index/ebooks/5_mistakes_page_2.png" }
		) {
			childImageSharp {
				gatsbyImageData(width: 340)
			}
		}
		EBook5CommonMistakesInDigitalSignagePage3: file(
			relativePath: { eq: "pages/index/ebooks/5_mistakes_page_3.png" }
		) {
			childImageSharp {
				gatsbyImageData(width: 340)
			}
		}
		EBook5CommonMistakesInDigitalSignagePage4: file(
			relativePath: { eq: "pages/index/ebooks/5_mistakes_page_4.png" }
		) {
			childImageSharp {
				gatsbyImageData(width: 340)
			}
		}
		EBook5CommonMistakesInDigitalSignagePage5: file(
			relativePath: { eq: "pages/index/ebooks/5_mistakes_page_5.png" }
		) {
			childImageSharp {
				gatsbyImageData(width: 340)
			}
		}
	}
`

export default function index__EBooks() {
	const data = useStaticQuery(index__EBooksQuery)

	const l = useMemo(() => {
		let out = T.translate("key")
		return out === "key" ? "en" : out
	}, [])

	const __ = {}

	return (
		<Tank className="resources ebooks">
			<aside>
				<h2 className="font_size_3">
					{T.translate("resources.eBooks")}
				</h2>
				{/* <Link
					className="see_all blue font_size_1_6"
					to={route("resources")}
				>
					{T.translate("resources.seeAllEBooks")}
				</Link> */}
			</aside>
			<div className="resources_hull">
				{["en"].includes(l) && (
					<Link
						to={route("ebookMediaBuyersGuideToProgrammaticDOOH")}
						className="resource resource_ebook"
					>
						<div className="ImgFlank ebook_row">
							<aside>
								<div className="ebook">
									<Img
										image={
											data[
												"EBookMediaBuyersGuideToProgrammaticDOOHCover_" +
													l
											].childImageSharp.gatsbyImageData
										}
										alt=""
										className="page cover"
										imgClassName="absolute object-fit-cover"
									/>
									<Img
										image={
											data
												.EBookMediaBuyersGuideToProgrammaticDOOHPage1
												.childImageSharp.gatsbyImageData
										}
										alt=""
										className="page page_1"
										imgClassName="absolute object-fit-cover"
									/>
									<Img
										image={
											data
												.EBookMediaBuyersGuideToProgrammaticDOOHPage2
												.childImageSharp.gatsbyImageData
										}
										alt=""
										className="page page_2"
										imgClassName="absolute object-fit-cover"
									/>
									<Img
										image={
											data
												.EBookMediaBuyersGuideToProgrammaticDOOHPage3
												.childImageSharp.gatsbyImageData
										}
										alt=""
										className="page page_3"
										imgClassName="absolute object-fit-cover"
									/>
									<Img
										image={
											data
												.EBookMediaBuyersGuideToProgrammaticDOOHPage4
												.childImageSharp.gatsbyImageData
										}
										alt=""
										className="page page_4"
										imgClassName="absolute object-fit-cover"
									/>
									<Img
										image={
											data
												.EBookMediaBuyersGuideToProgrammaticDOOHPage5
												.childImageSharp.gatsbyImageData
										}
										alt=""
										className="page back_cover"
										imgClassName="absolute object-fit-cover"
									/>
								</div>
							</aside>
							<div className="lead">
								<h3 className="font_size_2_4">
									{
										__
											.ebookMediaBuyersGuideToProgrammaticDOOH
											.title
									}
								</h3>
								<p className="font_size_1_8">
									{
										__
											.ebookMediaBuyersGuideToProgrammaticDOOH
											.description
									}
								</p>
								<CTA className="span gradient round clear">
									{T.translate("resources.download")}
								</CTA>
							</div>
						</div>
					</Link>
				)}
				{["en", "de"].includes(l) && (
					<Link
						to={route("ebookOptimizeOOHSalesThroughAutomation")}
						className="resource resource_ebook"
					>
						<div className="ImgFlank ebook_row">
							<aside>
								<div className="ebook">
									<Img
										image={
											data[
												"EBookOptimizeOOHSalesThroughAutomationCover_" +
													l
											].childImageSharp.gatsbyImageData
										}
										alt=""
										className="page cover"
									/>
									<Img
										image={
											data
												.EBookOptimizeOOHSalesThroughAutomationPage1
												.childImageSharp.gatsbyImageData
										}
										alt=""
										className="page page_1"
									/>
									<Img
										image={
											data
												.EBookOptimizeOOHSalesThroughAutomationPage2
												.childImageSharp.gatsbyImageData
										}
										alt=""
										className="page page_2"
									/>
									<Img
										image={
											data
												.EBookOptimizeOOHSalesThroughAutomationPage3
												.childImageSharp.gatsbyImageData
										}
										alt=""
										className="page page_3"
									/>
									<Img
										image={
											data
												.EBookOptimizeOOHSalesThroughAutomationPage4
												.childImageSharp.gatsbyImageData
										}
										alt=""
										className="page page_4"
									/>
									<Img
										image={
											data
												.EBookOptimizeOOHSalesThroughAutomationPage5
												.childImageSharp.gatsbyImageData
										}
										alt=""
										className="page back_cover"
									/>
								</div>
							</aside>
							<div className="lead">
								<h3 className="font_size_2_4">
									{
										__
											.ebookOptimizeOOHSalesThroughAutomation
											.title
									}
								</h3>
								<p className="font_size_1_8">
									{
										__
											.ebookOptimizeOOHSalesThroughAutomation
											.description
									}
								</p>
								<CTA className="span gradient round clear">
									{T.translate("resources.download")}
								</CTA>
							</div>
						</div>
					</Link>
				)}
				{["es"].includes(l) && (
					<Link
						to={route("ebookModernizeOOHBusiness")}
						className="resource resource_ebook"
					>
						<div className="ImgFlank ebook_row">
							<aside>
								<div className="ebook">
									<Img
										image={
											data[
												"EBookModernizeOOHBusinessCover_" +
													l
											].childImageSharp.gatsbyImageData
										}
										alt=""
										className="page cover"
									/>
									<Img
										image={
											data.EBookModernizeOOHBusinessPage1
												.childImageSharp.gatsbyImageData
										}
										alt=""
										className="page page_1"
									/>
									<Img
										image={
											data[
												"EBookModernizeOOHBusinessPage2_" +
													l
											].childImageSharp.gatsbyImageData
										}
										alt=""
										className="page page_2"
									/>
									<Img
										image={
											data.EBookModernizeOOHBusinessPage3
												.childImageSharp.gatsbyImageData
										}
										alt=""
										className="page page_3"
									/>
									<Img
										image={
											data.EBookModernizeOOHBusinessPage4
												.childImageSharp.gatsbyImageData
										}
										alt=""
										className="page page_4"
									/>
									<Img
										image={
											data.EBookModernizeOOHBusinessPage5
												.childImageSharp.gatsbyImageData
										}
										alt=""
										className="page back_cover"
									/>
								</div>
							</aside>
							<div className="lead">
								<h3 className="font_size_2_4">
									{__.ebookModernizeOOHBusiness.title}
								</h3>
								<p className="font_size_1_8">
									{__.ebookModernizeOOHBusiness.description}
								</p>
								<CTA className="span gradient round clear">
									{T.translate("resources.download")}
								</CTA>
							</div>
						</div>
					</Link>
				)}
				<Link
					to={route(
						"ebookGuideToBuildingASuccessfulDigitalSignageNetwork"
					)}
					className="resource resource_ebook"
				>
					<div className="ImgFlank ebook_row">
						<aside>
							<div className="ebook">
								<Img
									image={
										data["EBookSuccessfulNetworkCover_" + l]
											.childImageSharp.gatsbyImageData
									}
									alt=""
									className="page cover"
								/>
								<Img
									image={
										data.EBookSuccessfulNetworkPage1
											.childImageSharp.gatsbyImageData
									}
									alt=""
									className="page page_1"
								/>
								<Img
									image={
										data["EBookSuccessfulNetworkPage2_" + l]
											.childImageSharp.gatsbyImageData
									}
									alt=""
									className="page page_2"
								/>
								<Img
									image={
										data.EBookSuccessfulNetworkPage3
											.childImageSharp.gatsbyImageData
									}
									alt=""
									className="page page_3"
								/>
								<Img
									image={
										data.EBookSuccessfulNetworkPage4
											.childImageSharp.gatsbyImageData
									}
									alt=""
									className="page page_4"
								/>
								<Img
									image={
										data.EBookSuccessfulNetworkPage5
											.childImageSharp.gatsbyImageData
									}
									alt=""
									className="page back_cover"
								/>
							</div>
						</aside>
						<div className="lead">
							<h3 className="font_size_2_4">
								{
									__
										.ebookGuideToBuildingASuccessfulDigitalSignageNetwork
										.title
								}
							</h3>
							<p className="font_size_1_8">
								{
									__
										.ebookGuideToBuildingASuccessfulDigitalSignageNetwork
										.description
								}
							</p>
							<CTA className="span gradient round clear">
								{T.translate("resources.download")}
							</CTA>
						</div>
					</div>
				</Link>
				{["fr"].includes(l) && (
					<Link
						to={route("ebook5CommonMistakesInDigitalSignage")}
						className="resource resource_ebook"
					>
						<div className="ImgFlank ebook_row">
							<aside>
								<div className="ebook">
									<Img
										image={
											data[
												"EBook5CommonMistakesInDigitalSignage_" +
													l
											].childImageSharp.gatsbyImageData
										}
										alt=""
										className="page cover"
									/>
									<Img
										image={
											data
												.EBook5CommonMistakesInDigitalSignagePage1
												.childImageSharp.gatsbyImageData
										}
										alt=""
										className="page page_1"
									/>
									<Img
										image={
											data
												.EBook5CommonMistakesInDigitalSignagePage2
												.childImageSharp.gatsbyImageData
										}
										alt=""
										className="page page_2"
									/>
									<Img
										image={
											data
												.EBook5CommonMistakesInDigitalSignagePage3
												.childImageSharp.gatsbyImageData
										}
										alt=""
										className="page page_3"
									/>
									<Img
										image={
											data
												.EBook5CommonMistakesInDigitalSignagePage4
												.childImageSharp.gatsbyImageData
										}
										alt=""
										className="page page_4"
									/>
									<Img
										image={
											data
												.EBook5CommonMistakesInDigitalSignagePage5
												.childImageSharp.gatsbyImageData
										}
										alt=""
										className="page back_cover"
									/>
								</div>
							</aside>
							<div className="lead">
								<h3 className="font_size_2_4">
									{
										__.ebook5CommonMistakesInDigitalSignage
											.title
									}
								</h3>
								<p className="font_size_1_8">
									{
										__.ebook5CommonMistakesInDigitalSignage
											.description
									}
								</p>
								<CTA className="span gradient round clear">
									{T.translate("resources.download")}
								</CTA>
							</div>
						</div>
					</Link>
				)}
			</div>
		</Tank>
	)
}
