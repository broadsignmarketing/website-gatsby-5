import React from "react";

interface CardProps {
	thumbnail: string;
	title: string;
	par: string;
}

export default function Inventory__InspirationCard({ thumbnail, title, par }: CardProps) {
	const thumbnailType = thumbnail.match(".mp4") ? "video" : "image";

	return (
		<div className="inspiration_card bg-alice grid m-0 mb-4 h-full rounded-xl overflow-hidden flex-column flex-nowrap sm:flex-row sm:mb-0">
			<div className="grid m-0">
				<div className="inspiration_card__thumb_wrapper flex flex-center col-12 p-0 m-0 sm:col-5">
					{thumbnailType === "video" && <video src={thumbnail} className="inspiration_card__thumb w-full" autoPlay={true} muted={true} loop={true} />}
					{thumbnailType === "image" && <img src={thumbnail} className="inspiration_card__thumb w-full" />}
				</div>
				<div className="inspiration_card__description_wrapper text-left flex flex-column justify-content-start px-6 pt-10 py-8 col-12 sm:col-7">
					{title && <div className="inspiration_card__title h5 line-height-120 mb-6">{title}</div>}
					{par && <p className="inspiration_card__par text-16 text-ash line-height-180 m-0">{par}</p>}
				</div>
			</div>
		</div>
	);
}
