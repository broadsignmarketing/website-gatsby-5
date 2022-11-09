import React from "react";
import { useScreen } from "@hooks/useScreen";

import Carousel from "@components/BroadsignAdsCarousel";
import Container from "@components/Container";
import EnvironmentReview from "@components/Inventory__EnvironmentReview";
import InspirationCard from "@components/Inventory__InspirationCard";
import Specs from "@components/Inventory__Specs";
import Why from "@components/Inventory__Why";
import Layout from "@components/LayoutInventory";

import inspiration_dodge from "@static/img/broadsign-ads-inspiration/dodge.png";
import inspiration_match from "@static/img/broadsign-ads-inspiration/match.png";
import inspiration_westjet from "@static/img/broadsign-ads-inspiration/westjet.jpg";
import sample_1 from "@static/img/broadsign-ads-samples/street_1.jpg";
import sample_2 from "@static/img/broadsign-ads-samples/street_2.jpg";
import sample_3 from "@static/img/broadsign-ads-samples/street_3.jpg";
import sample_4 from "@static/img/broadsign-ads-samples/street_4.jpg";
import sample_5 from "@static/img/broadsign-ads-samples/street_5.jpg";
import sample_6 from "@static/img/broadsign-ads-samples/street_6.jpg";

export default function inventory__Street({ vertical, className }) {
	const isMobile = useScreen();
	const environmentReview = [
		{ value: "Urban city centres", id: "screenPlacement", key: "Screen Placement" },
		{ value: "60”+ Diagonal (May differ from market to market)", id: "screenDimensionOrientation", key: "Screen Dimension & Orientation" },
		{ value: "6 - 12 seconds depending on product type", id: "suggestedAdCreativeLength", key: "Suggested Ad Creative Length" },
	];

	const why = [
		{
			title: "For the Urban Vibrancy",
			par: "Bring some brilliance to traditional street level advertising with digital posters that illuminate and capture the attention of audiences during their daily commute or while they are out exploring the city.",
		},
		{
			title: "For the Flexible Creative",
			par: "Keep your message fresh and customize your creative with endless possibilities. Capitalize on diverse and high-populated areas within a city's busiest regions where people will see evolving messages on the striking displays of street level digital.",
		},
		{
			title: "For the Location based call-to-action",
			par: "Use high traffic areas to direct your audience to exactly where you are. From creative and promotional flexibility, to minimal lead times, quick-and-easy real-time contextual messaging, and round-the-clock monitoring, our Digital formats offer advertisers responsive solutions that break through the noise and connect with audiences.",
		},
	];

	const inspiration = [
		{
			thumbnail: inspiration_dodge,
			title: "Dodge",
			par: "You know where your target is, so deliver a message where it matters most. Never be locked into unnecessary locations or a single creative with the flexibility of digital. Introduce different products at specific locations with short turnover times and gauge the effectiveness of each offering with your consumer base.",
		},
		{
			thumbnail: inspiration_match,
			title: "Match",
			par: "Deliver promotional opportunities with dayparting and leave an immediate impact on your audience's senses during the most opportune moments of their day. Notify a bustling crowd where to find you and how to learn more about your brand.",
		},
		{
			thumbnail: inspiration_westjet,
			title: "WestJet",
			par: "Keep your audience up-to-date and informed with the introduction of new promotions and offerings in real time. When it comes to campaign strategy and execution, weeks turn into minutes with programmatic inventory. Incorporate multiple creative angles and prioritize sales events as they happen. Digital provides endless opportunities for adapting your brand's message quicker than ever and targeting your audience with precision.",
		},
	];

	const samples = [sample_1, sample_2, sample_3, sample_4, sample_5, sample_6];

	return (
		<Layout vertical={vertical} className={className}>
			<Container className="intro">
				<h2 className="h3 font-superbold sm:text-center sm:mb-4">DOOH in Street Level:</h2>
				<h3 className="h6 sm:text-center sm:mb-10">Specs, Audiences and Inspiration</h3>
				<p>
					Strategically placed in high-traffic areas across Canada, street level digital boards enable a connection with consumers on a more intimate
					level. Providing excellent visibility with top of the notch, high-resolution images at face-to-face level, Digital Posters are an effective
					way to reach passersby. These ad faces also provide a wide range of possibilities, from dayparted coverage of various markets, targeted
					storytelling in a few neighborhood or specific location-based campaigns. Whatever your strategy is, Digital Posters are a safe bet when it
					comes to engaging customers with advertising that is completely in context to them.
				</p>
			</Container>
			<div className="bg-alice">
				<Container className="environment">
					<EnvironmentReview elements={environmentReview} />
				</Container>
			</div>
			<Container className="why">
				<h4 className="text-24 mb-8 sm:text-34 sm:text-center sm:mb-10">Why choose the Digital Street Level environment?</h4>
				<p className="sm:text-center sm:mx-auto sm:w-10">
					Create eye-catching moments for both pedestrians and commuter traffic with engaging, high-resolution screens. Digital Street properties
					offer displays that captivate consumers with rich visuals and evolving narratives.
				</p>
				<Why elements={why} />
			</Container>
			<Container className="inspiration">
				<h4 className="text-24 mb-8 sm:text-34 sm:text-center sm:mb-10">Inspiration</h4>
				<p className="mb-10 sm:text-center sm:mx-auto sm:w-10 sm:mb-0">
					While different ads have different needs, there are some principles and guidelines that should always be observed. These examples represent
					the most current and efficient practices in digital out-of-home.
				</p>
				{isMobile ? (
					inspiration.map((el, k) => <InspirationCard thumbnail={el.thumbnail} title={el.title} par={el.par} key={k} />)
				) : (
					<Carousel loop={{ auto: true, duration: 5000 }} className="street_inspiration">
						{inspiration.map((el, k) => (
							<InspirationCard thumbnail={el.thumbnail} title={el.title} par={el.par} key={k} />
						))}
					</Carousel>
				)}
			</Container>
			<div className="bg-alice">
				<Container className="samples">
					<Carousel loop={{ auto: true, duration: 3000 }} className="street_samples">
						{samples.map((el, k) => (
							<img src={el} key={k} className="inventory_sample w-full rounded-xl" />
						))}
					</Carousel>
				</Container>
			</div>
		</Layout>
	);
}
