import React, { useMemo } from "react"
import { StaticQuery, graphql } from "gatsby"

import PropTypes from "prop-types"
import { getTranslations } from "@annex"

import CTA from "@components/CTA"
import { GatsbyImage as Img } from "gatsby-plugin-image"
import Link from "@components/LocalizedLink"
import Tank from "@components/Tank"

import "@sass/components/Billboard.scss"
import "@sass/components/CTA/Campsite.scss"

export default function Billboard(props) {
	const { id } = props
	const l = useMemo(() => {
		let out = T.translate("key")
		return out === "key" ? "en" : out
	}, [])

	const __ = useMemo(() => getTranslations(`${l}/components/Billboard`), [l])

	switch (id) {
		case "demo":
			return (
				<section id={id} className="Billboard set_demo_trial">
					<div className="wrap">
						<div className="icon"></div>
						<div className="text">
							<h3 className="tagline">{__.demo.tagline}</h3>
							<CTA round gradient onClick={props.onClick}>
								{__.demo.cta}
							</CTA>
							<Link to={route("demo")} className="learn_more">
								{__.demo.learnMore}
							</Link>
						</div>
					</div>
				</section>
			)
		case "free_trial":
			return (
				<section id={id} className="Billboard set_demo_trial">
					<div className="wrap">
						<div className="icon"></div>
						<div className="text">
							<h3 className="tagline">{__.freeTrial.tagline}</h3>
							<CTA round gradient onClick={props.onClick}>
								{__.freeTrial.cta}
							</CTA>
							<Link
								to={route("freeTrial")}
								className="learn_more"
							>
								{__.freeTrial.learnMore}
							</Link>
						</div>
					</div>
				</section>
			)
		case "big_voice_award":
			return (
				<section id={id} className="Billboard">
					<Tank className="inner">
						<div className="img" />
						<div className="text">
							<h3>{__.BigVoiceAward.text}</h3>
							<CTA
								className="red round"
								to={__.BigVoiceAward.url}
							>
								{__.BigVoiceAward.cta}
							</CTA>
						</div>
					</Tank>
				</section>
			)
		case "ebook_adding_digital_to_your_ooh_network":
			return (
				<section id={id} className="Billboard">
					<Tank className="inner">
						<h3>{__.EBookAddingDigitalToYourOOHNetwork.title}</h3>
						<CTA
							className="red"
							to={route("ebookAddingDigitalToYourOOHNetwork")}
						>
							{__.EBookAddingDigitalToYourOOHNetwork.cta}
						</CTA>
					</Tank>
				</section>
			)
		case "ebook_campsite_add_real_world_kick":
			return (
				<section id={id} className="Billboard theme_campsite">
					<Tank className="inner">
						<div className="img logo"></div>
						<h3
							dangerouslySetInnerHTML={{
								__html: __.EBookCampsiteAddRealWorldKick.Title,
							}}
						></h3>
						<Link
							to={__.EBookCampsiteAddRealWorldKick.URL}
							className="CTA"
						>
							<span className="normal">
								{__.EBookCampsiteAddRealWorldKick.CTA}
							</span>
							<span className="hover">
								{__.EBookCampsiteAddRealWorldKick.CTA}
							</span>
						</Link>
					</Tank>
				</section>
			)
		case "soc2":
			return (
				<section id={id} className="Billboard">
					<Tank className="inner">
						<div className="img badge" />
						<div className="text_wrap">
							<div className="text">
								<h3>{__.SOC2.title}</h3>
								<p>{__.SOC2.text}</p>
								<CTA
									className="teal"
									to="/blog/broadsign-updates-soc-ii-isae3402-reports-now-include-proof-play-campaign-performance"
								>
									{__.SOC2.cta}
								</CTA>
							</div>
						</div>
					</Tank>
				</section>
			)
		/* SUCCESSFUL_NETWORK_EBOOK_BILLBOARD MUST DIE */
		case "successful_network_ebook_billboard":
		case "ebook_successful_network":
			return (
				<section id="ebook_successful_network" className="Billboard">
					<div className="img triangle" />
					<Tank className="inner">
						<div className="text">
							<h3>
								{
									__
										.ebookGuideToBuildingASuccessfulDigitalSignageNetwork
										.text
								}
							</h3>
							<Link
								className="caret"
								to={route(
									"ebookGuideToBuildingASuccessfulDigitalSignageNetwork"
								)}
							>
								{
									__
										.ebookGuideToBuildingASuccessfulDigitalSignageNetwork
										.cta
								}
							</Link>
						</div>
						<div className="ebook" />
					</Tank>
				</section>
			)
		/* FIVE_MISTAKES_EBOOK_BILLBOARD MUST DIE */
		case "five_mistakes_ebook_billboard":
		case "ebook_5_mistakes":
			return (
				<section id={id} className="Billboard">
					<Tank className="inner">
						<h3>{__.EBook5MistakesToAvoid.text}</h3>
						<Link
							className="caret"
							to={route("ebook5CommonMistakesInDigitalSignage")}
						>
							{__.EBook5MistakesToAvoid.cta}
						</Link>
					</Tank>
				</section>
			)
		case "ebook_increase_revenue_in_store_media":
			return (
				<section id={id} className="Billboard">
					<Tank className="inner">
						<h3>
							{
								__
									.ebookIncreaseRevenueWithContextualInStoreMedia
									.title
							}
						</h3>
						<CTA
							className="red"
							to={route(
								"ebookIncreaseRevenueWithContextualInStoreMedia"
							)}
						>
							{
								__
									.ebookIncreaseRevenueWithContextualInStoreMedia
									.cta
							}
						</CTA>
						<div className="booklet"></div>
					</Tank>
				</section>
			)
		case "ebook_media_buyers_pdooh":
			return (
				<section id={id} className="Billboard">
					<div className="blob1"></div>
					<div className="blob2"></div>
					<div className="blob3"></div>
					<Tank className="inner">
						<div className="text">
							<h3
								dangerouslySetInnerHTML={{
									__html: __
										.ebookMediaBuyersGuideToProgrammaticDOOH
										.title,
								}}
							></h3>
							<CTA
								className="red"
								to={route(
									"ebookMediaBuyersGuideToProgrammaticDOOH"
								)}
							>
								{__.ebookMediaBuyersGuideToProgrammaticDOOH.cta}
							</CTA>
						</div>
						<div className="booklet"></div>
					</Tank>
				</section>
			)
		case "ebook_modernize_ooh_business":
			return (
				<section id={id} className="Billboard">
					<Tank className="inner">
						<h3>{__.EBookModernizeOOHBusiness.title}</h3>
						<CTA
							className="red"
							to={route("ebookModernizeOOHBusiness")}
						>
							{__.EBookModernizeOOHBusiness.cta}
						</CTA>
					</Tank>
				</section>
			)
		case "ebook_optimize_ooh_sales":
			return (
				<section id={id} className="Billboard">
					<Tank className="inner">
						<h3>
							{__.EBookOptimizeOOHSalesThroughAutomation.title}
						</h3>
						<p className="tagline">
							{__.EBookOptimizeOOHSalesThroughAutomation.tagline}
						</p>
						<CTA
							className="pill blue"
							to={route("ebookOptimizeOOHSalesThroughAutomation")}
						>
							{__.EBookOptimizeOOHSalesThroughAutomation.cta}
						</CTA>
						<div className="booklet"></div>
					</Tank>
				</section>
			)
		case "programmatic_u":
			return (
				<Link id={id} className="Billboard" to={route("programmaticU")}>
					<div className="img person" />
					<div className="img badge" />
					<Tank className="inner">
						<h3
							dangerouslySetInnerHTML={{
								__html: __.ProgrammaticU.title,
							}}
						></h3>
						<CTA
							className="span round case_normal red"
							to={route("programmaticU", "en")}
						>
							{__.ProgrammaticU.cta}
						</CTA>
					</Tank>
				</Link>
			)
		case "programmatic_u_certified":
			return (
				<section id={id} className="Billboard">
					<div className="img person" />
					<Tank className="inner" div>
						<div className="tagline_container">
							<h3>{__.ProgrammaticUCertification.title}</h3>
							<CTA
								to={route(
									"programmaticUMediaBuyersCertificate"
								)}
								className="red round"
								case="normal"
							>
								{__.ProgrammaticUCertification.cta}
							</CTA>
						</div>
					</Tank>
				</section>
			)

		default:
			return <div></div>
	}
}

Billboard.propTypes = {
	id: PropTypes.string.isRequired,
}
