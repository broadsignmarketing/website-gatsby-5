import React, { useState } from "react";
import { useL } from "@hooks/useDico";
import classnames from "classnames";
import { getTranslations } from "@annex";

import { GatsbyImage as Img } from "gatsby-plugin-image";

import icon_impressions from "@img/pages/broadsign-ads/icon_impressions_white.png";
import icon_locations from "@img/pages/broadsign-ads/icon_locations_white.svg";
import icon_screens from "@img/pages/broadsign-ads/icon_screens_white.png";

interface CampaignCardProps {
	thumbnail: any;
	content: string;
	company: string;
}

export default function BroadsignAdsCampaignCard({ content, company, thumbnail, onClick }: CampaignCardProps) {
	const [isFlipped, setIsFlipped] = useState(false);

	const l = useL();
	const __ = getTranslations(`${l}/components/BroadsignAdsCampaigns`);

	const imgCSS = {
		borderRadius: "10px",
		boxShadow: "0px 14px 24px rgba(158, 158, 158, 0.1)",
		height: "auto",
		left: "50%",
		maxHeight: "100%",
		maxWidth: "100%",
		minHeight: "40%",
		top: "50%",
		transform: "translate(-50%, -50%)",
		width: "auto",
	};

	function flip(currentFlipState) {
		setIsFlipped(!currentFlipState);
		onClick();
	}

	return (
		<div
			className={classnames("campaign_card grid m-0 rounded-xl flex-column flex-nowrap sm:flex-row sm:overflow-hidden", isFlipped ? "flipped" : "")}
			onClick={() => flip(isFlipped)}>
			<div className="campaign_card__thumbnail_wrapper flex flex-column flex-center w-full sm:hidden">
				<Img
					alt=""
					image={thumbnail}
					className="campaign_card__thumbnail w-full rounded-xl overflow-hidden flex align-items-center mb-3 sm:hidden"
					objectFit="contain"
					imgStyle={{ ...imgCSS, minHeight: 0 }}
				/>
				<p className="text-cerulean text-13 text-center uppercase mt-3 mb-0 link_cerulean_arrow">{__.seeDetails}</p>
			</div>
			<div className="campaign_card__company_wrapper bg-campsite-green flex flex-column align-items-center justify-content-between rounded-xl col-12 px-4 pt-8 pb-4 sm:col-4 sm:h-full sm:border-noround md:col-3">
				<Img alt="" className="campaign_card__company m-0" image={company} objectFit="contain" />
				<hr className="bg-cerulean mt-5 mb-auto" />
				<div className="grid">
					{["location", "type", "audience", "dayparting", "incomes", "occupation", "demographics"].map((prop) => {
						if (content[prop]) {
							return (
								<div
									className="campaign_card__prop text-white text-left my-0 line-height-140 col-6 py-4 sm:col-12 sm:text-center sm:my-auto"
									key={prop}>
									<div className="prop_location campaign_card__prop_name text-14 line-height-120 uppercase mb-1">{__[prop]}</div>
									<div className="campaign_card__prop_value text-16 line-height-120">{content[prop]}</div>
								</div>
							);
						}
					})}
				</div>
				<hr className="bg-cerulean mb-4 mt-auto" />
				<div className="campaign_card__stats w-full grid flex-row flex-nowrap align-items-center justify-content-between m-0">
					<div className="campaign_card__stat campaign_card__impressions col flex flex-row flex-nowrap align-items-center justify-content-start md:mr-0">
						<img className="icon mr-1" src={icon_impressions} />
						<span className="text-white text-14 font-bold nowrap">{content.impressioms}</span>
					</div>
					<div className="campaign_card__stat campaign_card__locations col flex flex-row flex-nowrap align-items-center justify-content-center md:mr-0">
						<img className="icon mr-1" src={icon_locations} />
						<span className="text-white text-14 font-bold nowrap">{content.locations}</span>
					</div>
					<div className="campaign_card__stat campaign_card__screens col flex flex-row flex-nowrap align-items-center justify-content-end">
						<img className="icon mr-1" src={icon_screens} />
						<span className="text-white text-14 font-bold nowrap">{content.screens}</span>
					</div>
				</div>
			</div>
			<div className="bg-white relative col-12 px-7 py-5 hidden sm:block sm:col-8 sm:text-20 sm:p-10 md:col-9">
				<Img alt="" image={thumbnail} className="w-full h-full overflow-visible" objectFit="contain" imgStyle={imgCSS} />
			</div>
		</div>
	);
}
