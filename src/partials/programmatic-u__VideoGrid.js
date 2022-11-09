import React, { useMemo } from "react"

import classnames from "classnames"

import CTA from "@components/CTA"
import { GatsbyImage as Img } from "gatsby-plugin-image"
import Link from "@components/LocalizedLink"
import Tank from "@components/Tank"

import "@sass/partials/_video_grid.scss"

import play_btn from "@img/controls/programmatic_u_play_btn.svg"

function VideoCard({ details, setModalContent }) {
	const { youtubeID, title, description, /* teachers, */ poster } = details

	return (
		<div
			role="button"
			className={classnames(
				"video_card",
				details.watched ? "watched" : ""
			)}
			onClick={() => {
				setModalContent(youtubeID)
			}}
			onKeyDown={() => {
				setModalContent(youtubeID)
			}}
			tabIndex={0}
		>
			<div className="watched_tag align-items-center">Watched</div>
			<img className="play_btn" src={play_btn} alt="" />
			<Img image={poster} className="poster" alt="" />
			<div className="details">
				<p className="title">{title}</p>
				<p className="description">{description}</p>
				<div className="foot">
					{/* <p className="teachers">{teachers}</p> */}
					<CTA
						className="teal pill"
						onClick={() => setModalContent(youtubeID)}
					>
						{T.translate("cta.watch")}
					</CTA>
				</div>
			</div>
		</div>
	)
}

export default function programmaticU__VideoGrid({ videos, setModalContent }) {
	const l = useMemo(() => {
		let out = T.translate("key")
		return out === "key" ? "en" : out
	}, [])

	return (
		<div className="video_cards_grid">
			{videos.map((v, k) => {
				return (
					<VideoCard
						key={k}
						details={v}
						setModalContent={setModalContent}
					/>
				)
			})}
		</div>
	)
}
