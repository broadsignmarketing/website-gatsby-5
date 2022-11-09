import React, { useCallback, useEffect, useMemo, useState } from "react"

import CTA from "@components/CTA"
import Video from "@components/Video"

interface CareersSectionMissionStatementProps {
	videoPoster: string
}

export default function careers__MissionStatement({
	videoPoster,
}: CareersSectionMissionStatementProps) {
	return (
		<>
			<div className="left">
				<Video
					file="/videos/careers_mission_statement.mp4"
					poster={videoPoster}
				/>
			</div>
			<div className="right">
				<p className="subtitle-1 gradient">
					{T.translate("mission_statement.overtitle")}
				</p>
				<h2 className="h4">{T.translate("mission_statement.title")}</h2>
				<p className="line-height-180">
					{T.translate("mission_statement.par1")}
				</p>
				<p className="line-height-180">
					{T.translate("mission_statement.par2")}
				</p>
				<CTA className="reflex pill" to={route("whoWeAre")}>
					{T.translate("mission_statement.know_us")}
				</CTA>
			</div>
		</>
	)
}
