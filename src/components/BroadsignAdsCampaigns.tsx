import React, { useEffect, useState } from "react";
import { StaticQuery, graphql } from "gatsby";
import { useL } from "@hooks/useDico";
import { getTranslations, shuffle } from "@annex";

import Carousel from "@components/BroadsignAdsCarousel";
import CampaignCard from "@components/BroadsignAdsCampaignCard";

type Campaign = {
	id: string;
	location: string;
	type: string;
	audience: string;
	dayparting: string;
	impressioms: string;
	locations: string;
	screens: string;
};

export default function BroadsignAdsCampaigns({ autoplay = true, shuffled = false }) {
	const [campaignCarouselAutoPlay, setCampaignCarouselAutoPlay] = useState(false);

	const l = useL();
	const __ = getTranslations(`${l}/components/BroadsignAdsCampaigns`);
	let campaigns: Campaign[];

	if (shuffled) {
		campaigns = shuffle(__.campaigns);
	} else {
		campaigns = __.campaigns;
	}

	useEffect(() => {
		if (autoplay) {
			setCampaignCarouselAutoPlay(true);
		}
	}, [autoplay]);

	return (
		<StaticQuery
			query={graphql`
				query BroadsignAdsCampaignsQuery {
					thumbnail_acura: file(relativePath: { eq: "pages/broadsign-ads/campaign_thumbnail_acura.jpg" }) {
						childImageSharp {
							gatsbyImageData
						}
					}
					thumbnail_justeat: file(relativePath: { eq: "pages/broadsign-ads/campaign_thumbnail_justeat.jpg" }) {
						childImageSharp {
							gatsbyImageData
						}
					}
					thumbnail_teotaxi: file(relativePath: { eq: "pages/broadsign-ads/campaign_thumbnail_teotaxi.jpg" }) {
						childImageSharp {
							gatsbyImageData
						}
					}
					thumbnail_oldelpaso: file(relativePath: { eq: "pages/broadsign-ads/campaign_thumbnail_oldelpaso.jpg" }) {
						childImageSharp {
							gatsbyImageData
						}
					}
					thumbnail_westjet: file(relativePath: { eq: "pages/broadsign-ads/campaign_thumbnail_westjet.jpg" }) {
						childImageSharp {
							gatsbyImageData
						}
					}
					thumbnail_samsung: file(relativePath: { eq: "pages/broadsign-ads/campaign_thumbnail_samsung.jpg" }) {
						childImageSharp {
							gatsbyImageData
						}
					}
					thumbnail_cookit: file(relativePath: { eq: "pages/broadsign-ads/campaign_thumbnail_cookit.jpg" }) {
						childImageSharp {
							gatsbyImageData
						}
					}
					company_acura: file(relativePath: { eq: "pages/broadsign-ads/campaign_company_acura.png" }) {
						childImageSharp {
							gatsbyImageData
						}
					}
					company_justeat: file(relativePath: { eq: "pages/broadsign-ads/campaign_company_justeat.png" }) {
						childImageSharp {
							gatsbyImageData
						}
					}
					company_teotaxi: file(relativePath: { eq: "pages/broadsign-ads/campaign_company_teotaxi.png" }) {
						childImageSharp {
							gatsbyImageData
						}
					}
					company_oldelpaso: file(relativePath: { eq: "pages/broadsign-ads/campaign_company_oldelpaso.png" }) {
						childImageSharp {
							gatsbyImageData
						}
					}
					company_westjet: file(relativePath: { eq: "pages/broadsign-ads/campaign_company_westjet.png" }) {
						childImageSharp {
							gatsbyImageData
						}
					}
					company_samsung: file(relativePath: { eq: "pages/broadsign-ads/campaign_company_samsung.png" }) {
						childImageSharp {
							gatsbyImageData
						}
					}
					company_cookit: file(relativePath: { eq: "pages/broadsign-ads/campaign_company_cookit.png" }) {
						childImageSharp {
							gatsbyImageData
						}
					}
				}
			`}
			render={(data) => {
				return (
					<Carousel loop={{ auto: campaignCarouselAutoPlay, duration: 6200 }} className="BroadsignAdsCampaigns">
						{campaigns.map((campaign: Campaign) => (
							<CampaignCard
								content={campaign}
								company={data[`company_${campaign.id}`].childImageSharp.gatsbyImageData}
								thumbnail={data[`thumbnail_${campaign.id}`].childImageSharp.gatsbyImageData}
								onClick={() => setCampaignCarouselAutoPlay(false)}
								key={campaign.id}
							/>
						))}
					</Carousel>
				);
			}}
		/>
	);
}
