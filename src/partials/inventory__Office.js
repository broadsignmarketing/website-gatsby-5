import React from "react";
import { useScreen } from "@hooks/useScreen";

import Carousel from "@components/BroadsignAdsCarousel";
import Container from "@components/Container";
import EnvironmentReview from "@components/Inventory__EnvironmentReview";
import InspirationCard from "@components/Inventory__InspirationCard";
import Specs from "@components/Inventory__Specs";
import Why from "@components/Inventory__Why";
import Layout from "@components/LayoutInventory";

import inspiration_tim_hortons from "@static/img/broadsign-ads-inspiration/tim_hortons.mp4";
import inspiration_aeroplan from "@static/img/broadsign-ads-inspiration/aeroplan.jpg";
import inspiration_acura from "@static/img/broadsign-ads-inspiration/acura.mp4";

export default function inventory__Office({ vertical, className }) {
	const isMobile = useScreen();
	const environmentReview = [
		{ value: "Office Tower Elevators & Lobby", id: "screenPlacement", key: "Screen Placement" },
		{ value: "120 seconds", id: "avgDwellTime", key: "AVG. Dwell Time" },
		{ value: "1 - 5 feet", id: "proximityToScreen", key: "Proximity to Screen" },
		{ value: "15” LCD landscape", id: "screenDimensionOrientation", key: "Screen Dimension & Orientation" },
		{ value: "10 - 30 seconds", id: "suggestedAdCreativeLength", key: "Suggested Ad Creative Length" },
	];

	const why = [
		{
			title: "For the professional audience",
			par: "This affluent audience includes anyone from young professionals entering the workforce to the top executives leading Canada's biggest corporations. For advertisers looking to target professionals, managers and executives, the Office Network is as targeted as it gets: not only does it speak to like-minded, goal-oriented business people, but it can even target them by industry. Appealing to accountants, lawyers, engineers, or pharmaceutical representatives (or all of the above)? Each building has specific tenants that can be selected.",
		},
		{
			title: "For the perfect fit with premium brands",
			par: "Hello, perfect match for high-end labels. Simply put, the office crowds are busy people with big spending power and a desire to keep things cool and classy when they're not at work. Often early adopters, they appreciate the feeling of exclusivity and limited-edition concepts. And because money's no object, they're a great fit for premium brands.",
		},
		{
			title: "For the periodic exposure",
			par: "The average elevator rider makes six trips daily, which translates into multiple opportunities to view an ad at various times throughout the workday. Better still, advertisers can adapt their messaging to specific times of the day: early morning is a pretty perfect time to suggest a new coffee machine, lunchtime's prime time to talk food and fashion, and late evening's not bad for selling them on a weekend getaway.",
		},
	];

	const inspiration = [
		{
			thumbnail: inspiration_tim_hortons,
			title: "Tim Hortons",
			par: "Business lunches are a regular occurrence for the office building crowd. But when they're not closing deals or talking shop over steak and salad, they're likely looking for a quick fix on the go. Because Tim Horton's was speaking to them on their way to lunch, it wasn't too hard to sell what they were offering. A few close-ups of their sandwich's fresh ingredients in a sun-filled environment, coupled with the brand's reputation for quick service, and lunch is pretty much served. Doesn't get much easier than advertising food to people who are hungry.",
		},
		{
			thumbnail: inspiration_aeroplan,
			title: "Aeroplan Preferential Treatment",
			par: "White-collar workers generally have higher-than-average household incomes, which means they tend to travel for pleasure every year, on top of their business travel. Aeroplan found the perfect destination for vacation visuals: office tower screens, where they'd be seen by precisely the kind of future passenger they were targeting. Because everyone wants to hear, “You work hard. You should be rewarded.”",
		},
		{
			thumbnail: inspiration_acura,
			title: "Acura",
			par: "Luxury car brand Acura advertising in a premium office building, with the requisite clean lines and shiny visuals? It's almost too easy. Whether consumers are heading to their car in the parking lot or the nearest public transit station, it's the perfect time to suggest that their means of transportation needs an upgrade.",
		},
	];

	return (
		<Layout vertical={vertical} className={className}>
			<Container className="intro">
				<h2 className="h3 font-superbold sm:text-center sm:mb-4">DOOH in Office Towers:</h2>
				<h3 className="h6 sm:text-center sm:mb-10">Specs, Audiences and Inspiration</h3>
				<p>
					Office towers are prime, premium settings in which to find an extremely precise and desirable audience: business professionals. So for
					advertisers, digital screens in office towers are the perfect platform for delivering their message alongside breaking news, local weather,
					and building content. Place-based corporate networks, often viewed as a symbol of the high-end commercial environment, engage the business
					crowd in those rare moments of their day when they're forced to wait: lobbies and elevators. However busy they are, most people will gladly
					skip the awkwardness of elevator small talk in favour of keeping their eyes on the screens.
				</p>
			</Container>
			<div className="bg-alice">
				<Container className="environment">
					<EnvironmentReview elements={environmentReview} />
				</Container>
			</div>
			<Container className="why">
				<h4 className="text-24 mb-8 sm:text-34 sm:text-center sm:mb-10">Why choose the office environment?</h4>
				<p className="sm:text-center sm:mx-auto sm:w-10">
					The office environment delivers to a defined audience that's often hard to reach: executives, managers, and professionals. By pairing
					meaningful content that keeps this business crowd up to speed on current affairs with relevant advertising, the screens efficiently connect
					viewers with brands and their message. In doing so, the screens quietly contribute to providing a better sense of work-life balance as well
					as would, say, suggestion boxes in the office.
				</p>
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
					While different ads have different needs, there are some principles and guidelines that should always be observed. These examples represent
					the most current and efficient practices in digital out-of-home.
				</p>
				{isMobile ? (
					inspiration.map((el, k) => <InspirationCard thumbnail={el.thumbnail} title={el.title} par={el.par} key={k} />)
				) : (
					<Carousel loop={{ auto: true, duration: 5000 }} className="office_inspiration">
						{inspiration.map((el, k) => (
							<InspirationCard thumbnail={el.thumbnail} title={el.title} par={el.par} key={k} />
						))}
					</Carousel>
				)}
				<p className="note">
					This environment offers screens from the following suppliers: Captivate and PATTISON. Please note that Captivate's inventory is measured by
					Nielsen.
				</p>
			</Container>
		</Layout>
	);
}
