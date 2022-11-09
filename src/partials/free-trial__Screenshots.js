import React, { useEffect, useMemo, useState } from "react"

import screenshot_01_en from "@img/ui/free_trial_screenshots_01_en.svg"
import screenshot_02_en from "@img/ui/free_trial_screenshots_02_en.svg"
import screenshot_03_en from "@img/ui/free_trial_screenshots_03_en.svg"
import screenshot_04_en from "@img/ui/free_trial_screenshots_04_en.svg"
import screenshot_01_fr from "@img/ui/free_trial_screenshots_01_fr.svg"
import screenshot_02_fr from "@img/ui/free_trial_screenshots_02_fr.svg"
import screenshot_03_fr from "@img/ui/free_trial_screenshots_03_fr.svg"
import screenshot_04_fr from "@img/ui/free_trial_screenshots_04_fr.svg"

import "@sass/components/HomepageSubHeroBanner.scss"

function Screenshot({ start = 0, src }) {
	const [pos, setPos] = useState(start)

	useEffect(() => {
		const interval = setInterval(() => {
			let outPos = pos - 0.05

			if (outPos < -33) {
				outPos = 100
			}

			setPos(outPos)
		}, 5)

		return () => clearInterval(interval)
	}, [pos])

	return (
		<img
			src={src}
			className="screenshot"
			style={{ left: `${pos}%` }}
			alt=""
		/>
	)
}

export default function free_trial__Screenshots() {
	const l = useMemo(() => {
		let out = T.translate("key")
		return out === "key" ? "en" : out
	}, [])

	return (
		<section className="screenshots">
			{l !== "fr" && (
				<div className="inner">
					<Screenshot
						src={screenshot_04_en}
						className="screenshot"
						start={-33}
					/>
					<Screenshot
						src={screenshot_01_en}
						className="screenshot"
						start={0}
					/>
					<Screenshot
						src={screenshot_02_en}
						className="screenshot"
						start={33}
					/>
					<Screenshot
						src={screenshot_03_en}
						className="screenshot"
						start={66}
					/>
				</div>
			)}
			{l === "fr" && (
				<div className="inner">
					<Screenshot
						src={screenshot_04_fr}
						className="screenshot"
						start={-33}
					/>
					<Screenshot
						src={screenshot_01_fr}
						className="screenshot"
						start={0}
					/>
					<Screenshot
						src={screenshot_02_fr}
						className="screenshot"
						start={33}
					/>
					<Screenshot
						src={screenshot_03_fr}
						className="screenshot"
						start={66}
					/>
				</div>
			)}
		</section>
	)
}
