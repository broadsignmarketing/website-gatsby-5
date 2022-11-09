import React from "react";
import { useScreen } from "@hooks/useScreen";

import Carousel from "@components/BroadsignAdsCarousel";
import Container from "@components/Container";
import EnvironmentReview from "@components/Inventory__EnvironmentReview";
import InspirationCard from "@components/Inventory__InspirationCard";
import Specs from "@components/Inventory__Specs";
import Why from "@components/Inventory__Why";
import Layout from "@components/LayoutInventory";

import inspiration_tim_hortons from "@static/img/broadsign-ads-inspiration/tim_hortons.jpg";
import inspiration_ripleys from "@static/img/broadsign-ads-inspiration/ripleys.mp4";
import inspiration_chainsmockers from "@static/img/broadsign-ads-inspiration/chainsmockers.jpg";

export default function inventory__Airport({ vertical, className }) {
	const isMobile = useScreen();

	const environmentReview = [
		{ value: "Subway Station Platforms", id: "screenPlacement", key: "Screen Placement" },
		{ value: "3 – 5 minutes", id: "avgDwellTime", key: "AVG. Dwell Time" },
		{ value: "1 - 30 feet", id: "proximityToScreen", key: "Proximity to Screen" },
		{ value: "40” LCD landscape", id: "screenDimensionOrientation", key: "Screen Dimension & Orientation" },
		{ value: "10, 15, 30 seconds", id: "suggestedAdCreativeLength", key: "Suggested Ad Creative Length" },
	];

	const why = [
		{
			id: 1,
			title: "For the high potential reach",
			par: "In urban areas, public transit is often the preferred mode of transportation for commuters. It's also a preferred environment for advertisers. After all, getting your message out to more than a million daily commuters is a pretty great start to reaching your target audience. Add multiple subway rides per day to the equation and the odds of having a successful, effective campaign get even better.",
		},
		{
			id: 2,
			title: "For the high dwell times",
			par: "Having to wait for your train might be bad news for commuters, but it's great news for advertisers. Savvy advertisers can make a 5-minute wait fly by with a little transit info and a lot of entertainment.",
		},
		{
			id: 3,
			title: "For the specific frequency of exposure",
			par: "Many commuters use the subway several times—and at very specific times—throughout the week. Not only can you customize your messaging based on the time it'll be viewed (think rush-hour mindset vs Saturday-night brain), but you can be assured that a consumer will see your messaging at various points during the week and weekend.",
		},
	];

	const inspiration = [
		{
			thumbnail: inspiration_tim_hortons,
			title: "Tim Hortons",
			par: "Advertising a product that's consumed by the majority of the population is a great match for the transit environment. The fact that it's done by a well-known brand is even better. The image is high contrast and contains a simple message. Combined strategically with dayparting, this creative is sure to influence the path to purchase of many users.",
		},
		{
			thumbnail: inspiration_ripleys,
			title: "Ripley's Aquarium",
			par: "A fine example of efficiency and simplicity. Ripley's Aquarium of Canada decided to use a mythical creature to make a splash. The video may seem a bit slow, but the image is high contrast and the copy intriguing enough to hold your attention until the big reveal. Because a captive audience is a beautiful—not to mention effective—thing.",
		},
	];

	return (
		<Layout vertical={vertical} className={className}>
			<Container className="intro">
				<h2 className="h3 font-superbold sm:text-center sm:mb-4">DOOH in Subway and LRT:</h2>
				<h3 className="h6 sm:text-center sm:mb-10">Specs, Audiences and Inspiration</h3>
				<p>
					Subway environment digital screens offer the perfect opportunity to connect daily with a highly captive mass audience. Every day, commuters
					rely on screens to keep them informed and entertained while they wait for the train. Those commuters are made up of a diverse group of
					people— professionals to students to families and everyone in between —and range in age, although most are between the 18 and 44 years old.
					Some might be public transit users by conviction, whereas others are using it out of necessity. Either way, one thing is clear: they all
					have time to engage with your brand during their commute.
				</p>
			</Container>
			<div className="bg-alice">
				<Container className="environment">
					<EnvironmentReview elements={environmentReview} />
				</Container>
			</div>
			<Container className="why">
				<h4 className="text-24 mb-8 sm:text-34 sm:text-center sm:mb-10">Why choose the Subway Station Environment?</h4>
				<Why elements={why} />
			</Container>
			<div className="bg-alice">
				<Container className="specs">
					<h5 className="text-left lg:text-center">Specifications</h5>
					<p className="text-left lg:text-center lg:mx-auto lg:w-10">
						Every supplier has slightly different screen specifications and format support, but not to worry. Just upload a HD version of your
						creative in the right orientation and we'll automatically generate creatives converted to the right format and resized to fit every
						supplier's specs. Please note that in this environment, the ad creative will most likely share the screen with content such as weather
						information and news ticker.
					</p>
					<Specs
						dimensions="1920 X 1080 pixels (width X height)"
						fileFormat="Video (H264) and image (JPG or PNG)"
						fileSize="Less than 50MB per 15 seconds"
						quality="Best possible, 12 mbps maximum"
						audio="No Audio"
						image="horizontal"
					/>
				</Container>
			</div>
			<Container className="inspiration">
				<h4 className="text-24 mb-8 sm:text-34 sm:text-center sm:mb-10">Inspiration</h4>
				<p className="mb-10 sm:text-center sm:mx-auto sm:w-10 sm:mb-0">
					The guidelines around speaking to an on-the-go audience are fairly elementary: keep it simple and as concise as possible. When that
					on-the-go audience is also quite large and diverse, your message also needs to be relevant for most of them. Here are some good examples of
					efficient practices in digital out-of-home in a transit environment.
				</p>
				{isMobile ? (
					inspiration.map((el, k) => <InspirationCard thumbnail={el.thumbnail} title={el.title} par={el.par} key={k} />)
				) : (
					<Carousel loop={{ auto: true, duration: 5000 }} className="airport_inspiration">
						{inspiration.map((el, k) => (
							<InspirationCard thumbnail={el.thumbnail} title={el.title} par={el.par} key={k} />
						))}
					</Carousel>
				)}
			</Container>
		</Layout>
	);
}
