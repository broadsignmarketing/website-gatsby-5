import React, { useCallback, useEffect, useMemo, useRef, useState } from "react"

import { useReducedMotion } from "@hooks/useReducedMotion"
import classnames from "classnames"
import { isScreenSize, screenSize, shuffle } from "@annex"

import { Row, Column } from "@components/Grid"
import { GatsbyImage as Img } from "gatsby-plugin-image"
import Tuna from "@components/Tuna"

import icon_furnitures from "@icons/careers_furnitures.png"
import icon_health_plan from "@icons/careers_health_plan.png"
import icon_paid_volunteer from "@icons/careers_paid_volunteer.png"
import icon_parental_leave from "@icons/careers_parental_leave.png"
import icon_rrsp from "@icons/careers_rrsp.png"
import icon_sick_days from "@icons/careers_sick_days.png"
import icon_social_events from "@icons/careers_social_events.png"
import icon_training from "@icons/careers_training.png"
import icon_vacation from "@icons/careers_vacation.png"
import icon_wellness from "@icons/careers_wellness.png"

type FetchedBenefitsList = Array<{
	id: string
	title: string
	description: string
}>
type BenefitBox = {
	id: string
	title: string
	description: string
	icon?: string
	type?: string
	gradientDirection?: number
	fluid?: FluidObject
}
type BenefitsColumn = BenefitBox[]
type BenefitsListColumns = BenefitsColumn[]

export default function careers__Benefits({ data }) {
	const [benefitsColumns, setBenefitsColumns] = useState(4)
	const [carouselPos, setCarouselPos] = useState(0)

	const prefersReducedMotion = useReducedMotion()

	const perksMobileRef = useRef(null)
	const fetchBenefits =
		(T?.texts?.benefits?.list as FetchedBenefitsList) || []

	const thumbnails = [
		{
			type: "img",
			fluid: data.benefits_tb_01.childImageSharp.gatsbyImageData,
		} as BenefitBox,
		{
			type: "img",
			fluid: data.benefits_tb_02.childImageSharp.gatsbyImageData,
		} as BenefitBox,
		{
			type: "img",
			fluid: data.benefits_tb_03.childImageSharp.gatsbyImageData,
		} as BenefitBox,
		// { type: "img", fluid: data.benefits_tb_04.childImageSharp.gatsbyImageData } as BenefitBox,
	]

	const benefits = useMemo((): BenefitsListColumns | BenefitsColumn => {
		function getIcon(benefitID): string {
			switch (benefitID) {
				case "furnitures":
					return icon_furnitures
				case "health_plan":
					return icon_health_plan
				case "paid_volunteer":
					return icon_paid_volunteer
				case "parental_leave":
					return icon_parental_leave
				case "rrsp":
					return icon_rrsp
				case "sick_days":
					return icon_sick_days
				case "social_events":
					return icon_social_events
				case "training":
					return icon_training
				case "vacation":
					return icon_vacation
				case "wellness":
					return icon_wellness
				default:
					return icon_rrsp
			}
		}

		if (isScreenSize("over", "sm")) {
			let out: BenefitsListColumns = []
			let currentColumn: number = 0

			fetchBenefits.forEach((benefit: BenefitBox) => {
				if (currentColumn >= benefitsColumns) {
					currentColumn = 0
				}

				if (!out[currentColumn]) {
					out[currentColumn] = []
				}

				out[currentColumn].push({
					...benefit,
					type: "text",
					icon: getIcon(benefit.id),
					gradientDirection: Math.floor(Math.random() * 360),
				})

				currentColumn++
			})

			let numOfPicturesToAdd = 3
			if (isScreenSize("over", "sm")) {
				numOfPicturesToAdd = 4 - (fetchBenefits.length % 4)
			}

			thumbnails
				.slice(0, numOfPicturesToAdd)
				.forEach((thumbnail: BenefitBox): void => {
					if (currentColumn >= benefitsColumns) {
						currentColumn = 0
					}

					if (!out[currentColumn]) {
						out[currentColumn] = []
					}

					out[currentColumn].push(thumbnail)

					currentColumn++
				})

			out = shuffle(out.map(column => shuffle(column)))
			const finalBenefitsList = Object.values(out)
			return finalBenefitsList
		} else {
			let out: BenefitsColumn = []
			fetchBenefits.forEach((benefit: BenefitBox) => {
				out.push({
					...benefit,
					type: "text",
					icon: getIcon(benefit.id),
					gradientDirection: Math.floor(Math.random() * 360),
				})
			})
			return shuffle(out)
		}
	}, [fetchBenefits, benefitsColumns])

	const handleWindowResize = useCallback(() => {
		const _setSizes = { xs: 1, sm: 3, md: 3, lg: 4, xl: 4, "2xl": 4 }
		if (
			_setSizes[screenSize()] &&
			benefitsColumns !== _setSizes[screenSize()]
		) {
			setBenefitsColumns(_setSizes[screenSize()])
		}
	}, [benefitsColumns])

	/* const handlePerkMobileScroll = useCallback((evt) => {
		setTimeout(() => {
			const boxes = perksMobileRef.current.querySelectorAll(".box");
			for (let box of boxes) {
				if (box.getBoundingClientRect().x > 16) {
					const closestBox = box.getBoundingClientRect().x;
					perksMobileRef.current.scrollLeft += closestBox - 16;
					break;
				}
			}
		}, 200);
	}, []); */

	useEffect(() => {
		if (typeof window !== "undefined") {
			handleWindowResize()
		}
	}, [])

	useEffect(() => {
		if (typeof window !== "undefined") {
			window.addEventListener("resize", handleWindowResize, {
				passive: true,
			})
			//perksMobileRef.current.addEventListener("touchend", (event) => {
			//	handlePerkMobileScroll(event);
			//});

			return () => {
				window.removeEventListener("resize", handleWindowResize)
			}
		}
	}, [handleWindowResize])

	if (benefits.length > 0) {
		return (
			<section
				className={classnames(
					"container",
					"benefits",
					"spyable",
					prefersReducedMotion ? "reduced_motion" : ""
				)}
			>
				<div className="bg-white z-100">
					<p className="subtitle-1 gradient">
						{T.translate("benefits.overtitle")}
					</p>
					<h2 className="h4">{T.translate("benefits.title")}</h2>
					<p className="line-height-180">
						{T.translate("benefits.par1")}
					</p>
					<p className="line-height-180">
						{T.translate("benefits.par2")}
					</p>
				</div>
				<div
					className={`Grid Row cols-${benefitsColumns} mobile`}
					ref={perksMobileRef}
				>
					<div className="wrapper">
						{benefits.map(
							(box: BenefitBox, k: number): HTMLDivElement => (
								<div className="box" key={`box_${k}`}>
									<div className="inner">
										<p className="box_title">{box.title}</p>
										<p className="box_description">
											{box.description}
										</p>
									</div>
									<img src={box.icon} className="box_icon" />
								</div>
							)
						)}
					</div>
				</div>
				<div className="benefits_photos_mobile">
					{shuffle(thumbnails)
						.slice(0, 3)
						.map((tb, k) => (
							<div className="benefit_photo_wrapper" key={k}>
								<Img
									alt=""
									image={tb.fluid}
									className="benefit_photo"
								/>
							</div>
						))}
				</div>
				{isScreenSize("over", "sm") && (
					<div className={`Grid Row cols-${benefitsColumns} desktop`}>
						{benefits.map((column, k) => {
							const even = (k + 1) % 2 === 0 ? "even" : "odd"
							return (
								<Column
									key={`bc_${k}`}
									className={classnames(even)}
								>
									<Tuna shift={even === "even" ? -20 : -80}>
										{column.map((box: BenefitBox, j) => {
											if (box.type === "text") {
												return (
													<div
														className="box"
														key={`box_${k}${j}`}
													>
														<div className="inner">
															<p className="box_title">
																{box.title}
															</p>
															<p className="box_description">
																{
																	box.description
																}
															</p>
														</div>
														<img
															alt=""
															src={box.icon}
															className="box_icon"
														/>
													</div>
												)
											}
											if (box.type === "img") {
												return (
													<Img
														key={`box_${k}${j}`}
														alt=""
														image={box.fluid}
														className="thumbnail"
													/>
												)
											}
										})}
									</Tuna>
								</Column>
							)
						})}
					</div>
				)}
			</section>
		)
	}

	return <div></div>
}
