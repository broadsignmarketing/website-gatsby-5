import React from "react";
import { useScreen } from "@hooks/useScreen";

import Carousel from "@components/BroadsignAdsCarousel";
import Container from "@components/Container";
import EnvironmentReview from "@components/Inventory__EnvironmentReview";
import Why from "@components/Inventory__Why";
import Layout from "@components/LayoutInventory";

import sample_1 from "@static/img/broadsign-ads-samples/campus_1.jpg";
import sample_2 from "@static/img/broadsign-ads-samples/campus_2.jpg";
import sample_3 from "@static/img/broadsign-ads-samples/campus_3.jpg";

export default function inventory__Campus({ vertical, className }) {
	const isMobile = useScreen();
	const environmentReview = [
		{ value: "Common areas, hallways", id: "screenPlacement", key: "Screen Placement" },
		{ value: "15 seconds - 30 minutes", id: "avgDwellTime", key: "AVG. Dwell Time" },
		{ value: "1 - 20 meters", id: "proximityToScreen", key: "Proximity to Screen" },
		{ value: "22 - 55” LCD Portrait", id: "screenDimensionOrientation", key: "Screen Dimension & Orientation" },
		{ value: "5 - 30 seconds", id: "suggestedAdCreativeLength", key: "Suggested Ad Creative Length" },
	];

	const why = [
		{
			title: "For a high gen z reach",
			par: "Gen z is tech-savvy, wary of advertising and oftentimes hard to reach via online and mobile ads. Yet research has shown that this generation is more receptive to DOOH than any other channel, making campuses an ideal location to reach an educated portion of this audience.",
		},
		{
			title: "For strategic campaign frequency",
			par: "Most students are on campus five days a week, and many show up on the weekend for study sessions and extracurricular activities. Advertisers can easily reach their audience multiple times, and even coordinate a geofenced mobile campaign for added multi-channel touchpoints.",
		},
		{
			title: "For long dwell times",
			par: "Whether studying in the library, eating in the cafeteria or lounging outside, students have time to kill between classes. A DOOH campaign can not only catch the audience's attention but a strong CTA can also drive results, particularly for online shopping and social media interaction.",
		},
	];

	const samples = [sample_1, sample_2, sample_3];

	return (
		<Layout vertical={vertical} className={className}>
			<Container className="intro">
				<h2 className="h3 font-superbold sm:text-center sm:mb-4">DOOH in Campuses:</h2>
				<h3 className="h6 sm:text-center sm:mb-10">Specs, Audiences and Inspiration</h3>
				<p>
					Campuses are the ideal location to reach one of the most notorious audiences in advertising: gen z. Between heading to class and socializing
					with friends, these young adults spend a significant amount of time on campus. And with screens strategically installed in high-trafficked
					areas, campuses are an ideal location for lifestyle, entertainment and food brands to share their marketing messages with a captive
					audience.
				</p>
			</Container>
			<div className="bg-alice">
				<Container className="environment">
					<EnvironmentReview elements={environmentReview} />
				</Container>
			</div>
			<Container className="why">
				<h4 className="text-24 mb-8 sm:text-34 sm:text-center sm:mb-10">Why choose the Campuses environment?</h4>
				<Why elements={why} />
			</Container>
			<div className="bg-alice">
				<Container className="samples">
					<Carousel loop={{ auto: true, duration: 3000 }} className="campus_samples">
						{samples.map((el, k) => (
							<img src={el} key={k} className="inventory_sample w-full rounded-xl" />
						))}
					</Carousel>
				</Container>
			</div>
		</Layout>
	);
}
