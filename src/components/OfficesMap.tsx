import React, { useEffect, useState } from "react"

import { useSwipeable } from "react-swipeable"
import { useL } from "@hooks/useDico"
import classnames from "classnames"
import { getTranslations } from "@annex"

import map_desktop from "@img/ui/careers_map.svg"
import map_pin from "@img/ui/careers_map_pin.svg"

import "@sass/components/Map.scss"

type DropPin = {
	code: string
	country: string
}

interface OfficesMapProps {
	id?: string
	className?: string
	onClickCountryDropPin: Function
}

export default function OfficesMap({
	id = "",
	className = "",
	onClickCountryDropPin,
}: OfficesMapProps) {
	const l = useL()
	const __ = getTranslations(`${l}/components/Map`)

	const [locationsWithOpenings, setLocationsWithOpenings] = useState<
		string[]
	>([])
	const [activePin, setActivePin] = useState<string>("")
	const [activeRegion, setActiveRegion] = useState<string>("world")
	const [activePopup, setActivePopup] = useState<string>("")
	const [loading, setLoading] = useState(true)

	const regionSwipeHandlers = useSwipeable({
		onSwipedLeft: () => {
			if (activeRegion === "eu") {
				setActiveRegion("apac")
			}
			if (activeRegion === "na") {
				setActiveRegion("eu")
			}
		},
		onSwipedRight: () => {
			if (activeRegion === "eu") {
				setActiveRegion("na")
			}
			if (activeRegion === "apac") {
				setActiveRegion("eu")
			}
		},
		delta: 80,
	})

	const pins: DropPin[] = [
		{ code: "au", country: __.au },
		{ code: "be", country: __.be },
		{ code: "ca", country: __.ca },
		{ code: "cn", country: __.cn },
		{ code: "de", country: __.de },
		{ code: "es", country: __.es },
		{ code: "fr", country: __.fr },
		{ code: "ir", country: __.ir },
		{ code: "nl", country: __.nl },
		{ code: "uk", country: __.uk },
		{ code: "us", country: __.us },
	]

	function openingsAreIn(countryCode) {
		return locationsWithOpenings.includes(countryCode)
	}

	const goToOpenings = country => {
		if (openingsAreIn(country.code)) {
			onClickCountryDropPin(country.country)
		}
	}

	useEffect(() => {
		if (activePin !== "" && openingsAreIn(activePin)) {
			setActivePopup(activePin)
		}
	}, [activePin])

	useEffect(() => {
		setActivePopup("")
	}, [activeRegion])

	useEffect(() => {
		async function getLocationsWithOpenings() {
			let lang = T.translate("key") === "fr" ? "fr" : ""
			let response = await fetch(
				`https://boards.greenhouse.io/v1/boards/broadsign${lang}/departments`
			)
			let data = await response.json()

			if (data) {
				const _locations: string[] = data.departments
					.map(
						(department: {
							jobs: Array<{ location: { name: string } }>
						}) => {
							if (department.jobs.length > 0) {
								return department.jobs.map(job => {
									const pin =
										pins.find((pin: DropPin) =>
											job.location.name.includes(
												pin.country
											)
										) || ""

									if (pin && pin.code) {
										return pin.code
									}
								})
							}
						}
					)
					.flat()
					.filter(Boolean)

				const out = [...new Set(_locations)]

				setLocationsWithOpenings(out)
			}
		}

		getLocationsWithOpenings()

		/* const detectPinch = (e) => {
			if (e.scale < 1.0) {
				alert("you pinched me !");
				setActiveRegion("world");
			} else if (e.scale > 1.0) {
				alert("you anti-pinched me !");
			}
		}; */
	}, [])

	useEffect(() => {
		setLoading(false)
	}, [])

	return (
		<div className="Map_wrapper">
			<div className="regions flex flex-row justify-content-between">
				{["world", "na", "eu", "apac"].map(region => (
					<button
						onMouseEnter={() => setActiveRegion(region)}
						onClick={() => setActiveRegion(region)}
						className={classnames(
							"div region_choice flex flex-center uppercase",
							region,
							activeRegion === region ? "active" : ""
						)}
						key={region}
					>
						<span className="state_normal">{__[region]}</span>
						<span className="state_hover">{__[region]}</span>
					</button>
				))}
			</div>
			<div
				id={id}
				className={classnames(
					"Map",
					"OfficesMap",
					className,
					`zoom_${activeRegion}`
				)}
				onMouseLeave={() => setActivePin("")}
			>
				{loading ? (
					<img className="map_placeholder" src={map_desktop} />
				) : (
					<>
						<div className="map_ratio">
							<div className="zoom_control">
								<div className="on_map_regions">
									{["na", "eu", "apac"].map(region => (
										<button
											onClick={() =>
												setActiveRegion(region)
											}
											className={classnames(
												"div on_map_region_choice",
												region
											)}
											key={region}
										>
											<span>{__[region]}</span>
										</button>
									))}
								</div>
								<div className="pins">
									{pins.map(pin => (
										<button
											className={classnames(
												"div",
												"pin",
												`pin_${pin.code}`,
												pin.code === activePin
													? "active"
													: "",
												openingsAreIn(pin.code)
													? "clickable"
													: ""
											)}
											key={pin.code}
											onMouseOver={() =>
												setActivePin(pin.code)
											}
										>
											<div
												className="tooltip"
												onClick={() =>
													goToOpenings(pin)
												}
												role="button"
											>
												{pin.country}
											</div>
											<img src={map_pin} />
										</button>
									))}
								</div>
								<img
									className="map_img"
									src={map_desktop}
									{...regionSwipeHandlers}
								/>
							</div>
						</div>
						<div
							className={classnames(
								"popup",
								openingsAreIn(activePopup) ? "active" : ""
							)}
						>
							<button
								className="div close_btn"
								onClick={() => setActivePopup("")}
							>
								&times;
							</button>
							{pins.map(pin => {
								if (openingsAreIn(pin.code)) {
									return (
										<div
											className={classnames(
												"content",
												pin.code === activePopup
													? "active"
													: "",
												openingsAreIn(pin.code)
													? "clickable"
													: ""
											)}
											dangerouslySetInnerHTML={{
												__html: `${
													__.weHaveJobsLocated
												} ${__.inCountry[pin.code]}? ${
													__.clickToSee
												}`,
											}}
											onClick={() => goToOpenings(pin)}
											role="button"
											key={pin.code}
										/>
									)
								}
							})}
						</div>
					</>
				)}
			</div>
		</div>
	)
}
