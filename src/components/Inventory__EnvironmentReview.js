import React from "react"

import classnames from "classnames"

import icon_location from "@img/pages/broadsign-ads/icon_location_green.svg"
import icon_time from "@img/pages/broadsign-ads/icon_time_green.png"
import icon_target from "@img/pages/broadsign-ads/icon_target_green.png"
import icon_dimensions from "@img/pages/broadsign-ads/icon_dimensions_green.png"
import icon_play from "@img/pages/broadsign-ads/icon_play_green.png"

export default function Inventory__EnvironmentReview({
	className = "",
	elements = [],
}) {
	const iconsLibrary = {
		screenPlacement: icon_location,
		avgDwellTime: icon_time,
		proximityToScreen: icon_target,
		screenDimensionOrientation: icon_dimensions,
		suggestedAdCreativeLength: icon_play,
	}

	return (
		<div
			className={classnames(
				"Inventory__EnvironmentReview grid bg-white rounded-xl overflow-hidden shadow-A",
				className
			)}
		>
			<div className="col-12 bg-campsite-green flex justify-content-center py-8 m-0 sm:col-4 sm:px-8 sm:py-6 md:col-3">
				<h5 className="h5 text-white text-center m-0 sm:text-left">
					{T.translate("environmentReview")}
				</h5>
			</div>
			<div className="col-12 p-5 sm:col-8 md:col-9">
				{elements.map((el, k) => (
					<div
						className={classnames(
							"grid",
							k > 0 ? "border-top-1 border-ash pt-3 mt-3" : ""
						)}
						key={el.id}
					>
						<div className="col-12 flex justify-content-center sm:col-1 sm:justify-content-start sm:align-items-center">
							<img
								src={iconsLibrary[el.id]}
								className="EnvironmentReview__prop_icon"
							/>
						</div>
						<div className="col-12 flex uppercase text-14 text-ash line-height-140 justify-content-center sm:col-5 sm:justify-content-start sm:align-items-center">
							{el.key}
						</div>
						<div className="col-12 flex text-16 text-ash line-height-140 justify-content-center sm:col-6 sm:justify-content-start sm:align-items-center">
							{el.value}
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
