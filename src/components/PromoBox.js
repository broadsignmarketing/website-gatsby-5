import React, { useEffect, useMemo, useState } from "react"
import PropTypes from "prop-types"

import { getTranslations } from "@annex"

import classnames from "classnames"

import CTA from "./CTA"
import { GatsbyImage as Img } from "gatsby-plugin-image"
import Link from "./LocalizedLink"

import "@sass/components/PromoBox.scss"
import "@sass/components/CTA/Campsite.scss"

export default function PromoBox(props) {
	const [extraClassName, setExtraClassName] = useState("")
	const [id, setID] = useState(props.id)

	const l = useMemo(() => {
		let out = T.translate("key")
		return out === "key" ? "en" : out
	}, [])

	const __ = useMemo(() => getTranslations(`${l}/components/PromoBox`), [l])

	const box = useMemo(() => {
		const eBook7Habits = () => {
			return (
				<Link
					to={route("ebook7HabitsOfHighlyEffectiveMediaOwners")}
					className="wrap"
				>
					<p className="tagline">{__.EBook7Habits.Title}</p>
					<CTA className="red span">{__.EBook7Habits.CTA}</CTA>
				</Link>
			)
		}

		const eBookCampsiteAddRealWorldKick = () => {
			return (
				<Link to="broadsignAds" className="wrap theme_campsite">
					<div className="img"></div>
					<div className="inner">
						<p
							className="tagline"
							dangerouslySetInnerHTML={{
								__html: __.EBookCampsiteAddRealWorldKick.Title,
							}}
						></p>
						<span className="CTA">
							<span className="normal">
								{__.EBookCampsiteAddRealWorldKick.CTA}
							</span>
							<span className="hover">
								{__.EBookCampsiteAddRealWorldKick.CTA}
							</span>
						</span>
					</div>
				</Link>
			)
		}

		const ebookPlaybookProgrammaticBuyers = () => {
			return (
				<Link
					to={route("ebookDOOHPlaybookForProgrammaticBuyers", "en")}
					className="wrap"
				>
					<div className="img"></div>
					<p className="tagline">{__.EBookDOOHPlaybook.Title}</p>
					<CTA className="red span">{__.EBookDOOHPlaybook.CTA}</CTA>
				</Link>
			)
		}

		const eBookInteractiveContent = () => {
			return (
				<Link
					to={route("ebookDynamicAndInteractiveContent", "en")}
					className="wrap"
				>
					<div className="img"></div>
					<p className="tagline">
						{__.EBookInteractiveContent.Title}
					</p>
					<CTA className="pink span">
						{__.EBookInteractiveContent.CTA}
					</CTA>
				</Link>
			)
		}

		const ebookIncreaseRevenueWithContextualInStoreMedia = () => {
			return (
				<Link
					to={route(
						"ebookIncreaseRevenueWithContextualInStoreMedia",
						"en"
					)}
					className="wrap"
				>
					<p className="tagline">
						{
							__.ebookIncreaseRevenueWithContextualInStoreMedia
								.tagline
						}
					</p>
					<CTA className="red span">
						{__.ebookIncreaseRevenueWithContextualInStoreMedia.cta}
					</CTA>
					<div className="img"></div>
				</Link>
			)
		}

		const ebookMediaBuyersGuideToProgrammaticDOOH = () => {
			return (
				<>
					<div className="blob1"></div>
					<div className="blob2"></div>
					<div className="blob3"></div>
					<Link
						to={route(
							"ebookMediaBuyersGuideToProgrammaticDOOH",
							"en"
						)}
						className="wrap"
					>
						<div className="text">
							<p
								className="tagline"
								dangerouslySetInnerHTML={{
									__html: __
										.ebookMediaBuyersGuideToProgrammaticDOOH
										.title,
								}}
							></p>
							<span className="CTA">
								{__.ebookMediaBuyersGuideToProgrammaticDOOH.cta}
							</span>
						</div>
						<div className="booklet"></div>
					</Link>
				</>
			)
		}

		const eBookModernizeOOHBusiness = () => {
			return (
				<Link
					to={route("ebookModernizeOOHBusiness", l)}
					className="wrap"
				>
					<span className="CTA">
						{__.EBookModernizeOOHBusiness.CTA}
					</span>
				</Link>
			)
		}

		const ebookOptimizeOOHSalesThroughAutomation = () => {
			return (
				<Link
					to={route("ebookOptimizeOOHSalesThroughAutomation", "en")}
					className="wrap"
				>
					<h3>{__.EBookOptimizeOOHSalesThroughAutomation.title}</h3>
					<p className="tagline">
						{__.EBookOptimizeOOHSalesThroughAutomation.tagline}
					</p>
					<CTA className="blue span pill">
						{__.EBookOptimizeOOHSalesThroughAutomation.cta}
					</CTA>
				</Link>
			)
		}

		const eBookSuccessfulNetwork = () => {
			return (
				<Link
					to={route(
						"ebookGuideToBuildingASuccessfulDigitalSignageNetwork",
						l
					)}
					className="wrap"
				>
					<div className="img"></div>
					<p className="tagline">{__.EBookSuccessfulNetwork.Title}</p>
					<CTA className="red span">
						{__.EBookSuccessfulNetwork.CTA}
					</CTA>
				</Link>
			)
		}

		const mediaKitAmplify = () => {
			return (
				<Link
					to={route("dspPartners#media-kit", "en")}
					className="wrap"
				>
					<p className="tagline">{__.MediaKitAmplify.Title}</p>
					<CTA className="teal span">{__.MediaKitAmplify.CTA}</CTA>
				</Link>
			)
		}

		const programmaticU = () => {
			return (
				<Link to={route("programmaticU", "en")} className="wrap">
					<p className="tagline">{__.ProgrammaticU.Title}</p>
					<CTA className="red span round case_normal">
						{__.ProgrammaticU.CTA}
					</CTA>
					<div className="img person" />
					<div className="img badge" />
				</Link>
			)
		}

		const reportIABAudienceResearch = () => {
			return (
				<Link to={route("IAB2019", "en")} className="wrap">
					<p className="tagline">
						{__.ReportIABAudienceResearch.Title}
					</p>
					<CTA className="red span">
						{__.ReportIABAudienceResearch.CTA}
					</CTA>
				</Link>
			)
		}

		const eBookAddingDigitalToYourOOHNetwork = () => {
			return (
				<Link
					to={route("ebookAddingDigitalToYourOOHNetwork", "en")}
					className="wrap"
				>
					<p className="tagline">
						{__.EBookAddingDigitalToYourOOHNetwork.Title}
					</p>
					<CTA className="red span">
						{__.EBookAddingDigitalToYourOOHNetwork.CTA}
					</CTA>
				</Link>
			)
		}

		/* FIX FIX FIX */

		const demo = () => {
			return (
				<div className="wrap">
					<div className="icon"></div>
					<div className="text">
						<h3
							className="tagline"
							dangerouslySetInnerHTML={{
								__html: __.demo.tagline,
							}}
						></h3>
						<span
							className="CTA round gradient"
							onClick={props.onClick}
						>
							{__.demo.cta}
						</span>
						<Link to={route("demo", l)} className="learn_more">
							{__.demo.learnMore}
						</Link>
					</div>
				</div>
			)
		}

		const freeTrial = () => {
			return (
				<div className="wrap">
					<div className="icon"></div>
					<div className="text">
						<h3
							className="tagline"
							dangerouslySetInnerHTML={{
								__html: __.freeTrial.tagline,
							}}
						></h3>
						<span
							className="CTA round gradient"
							onClick={props.onClick}
						>
							{__.freeTrial.cta}
						</span>
						<Link to={route("freeTrial", l)} className="learn_more">
							{__.freeTrial.learnMore}
						</Link>
					</div>
				</div>
			)
		}

		switch (id) {
			/* "Normal Ebooks */
			case "ebook_7_habits":
				return eBook7Habits()

			case "ebook_campsite_add_real_world_kick":
				return eBookCampsiteAddRealWorldKick()

			case "ebook_dooh_playbook":
			case "ebook_playbook_programmatic_buyers":
				setID("ebook_playbook_programmatic_buyers")
				return ebookPlaybookProgrammaticBuyers()

			case "ebook_interactive_content":
				return eBookInteractiveContent()

			case "ebook_increase_revenue_in_store_media":
				return ebookIncreaseRevenueWithContextualInStoreMedia()

			case "ebook_media_buyers_pdooh":
				return ebookMediaBuyersGuideToProgrammaticDOOH()

			case "ebook_modernize_ooh_business":
				return eBookModernizeOOHBusiness()

			case "ebook_optimize_ooh_sales":
				return ebookOptimizeOOHSalesThroughAutomation()

			case "whitepaper_successful_network":
			case "ebook_successful_network":
				setID("ebook_successful_network")
				return eBookSuccessfulNetwork()

			case "health_media_kit":
			case "media_kit_amplify":
				return mediaKitAmplify()

			case "programmatic_u":
				return programmaticU()

			case "free_trial":
				setExtraClassName("pb_set_demo_trial")
				return freeTrial()
				break
			case "demo":
				setExtraClassName("pb_set_demo_trial")
				return demo()
				break

			/* Rotational Ebooks */
			case "ebook_adding_digital_to_your_ooh_network":
			case "banner_static_ebook_a":
				// setExtraClassName("billboard");
				return eBookAddingDigitalToYourOOHNetwork()

			case "banner_static_ebook_b":
				// setExtraClassName("billboard");
				setID("ebook_modernize_ooh_business")
				return eBookModernizeOOHBusiness()

			default:
				return <div />
		}
	}, [id])

	return (
		<div className={classnames("PromoBox", extraClassName)} id={`pb_${id}`}>
			{box}
		</div>
	)
}

PromoBox.propTypes = {
	id: PropTypes.string,
}
