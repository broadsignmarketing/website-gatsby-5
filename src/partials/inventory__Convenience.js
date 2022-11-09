import React from "react";
import { useScreen } from "@hooks/useScreen";

import Carousel from "@components/BroadsignAdsCarousel";
import Container from "@components/Container";
import EnvironmentReview from "@components/Inventory__EnvironmentReview";
import InspirationCard from "@components/Inventory__InspirationCard";
import Specs from "@components/Inventory__Specs";
import Why from "@components/Inventory__Why";
import Layout from "@components/LayoutInventory";

import inspiration_lotto from "@static/img/broadsign-ads-inspiration/lotto.jpg";
import inspiration_metro from "@static/img/broadsign-ads-inspiration/metro.jpg";
import inspiration_valspar from "@static/img/broadsign-ads-inspiration/valspar.jpg";

export default function inventory__Convenience({ vertical, className }) {
	const isMobile = useScreen();
	const environmentReview = [
		{ value: "Behind the counter", id: "screenPlacement", key: "Screen Placement" },
		{ value: "120 seconds", id: "avgDwellTime", key: "AVG. Dwell Time" },
		{ value: "3-5 meters", id: "proximityToScreen", key: "Proximity to Screen" },
		{ value: "32” LCD landscape", id: "screenDimensionOrientation", key: "Screen Dimension & Orientation" },
		{ value: "10 - 30 seconds", id: "suggestedAdCreativeLength", key: "Suggested Ad Creative Length" },
	];

	const why = [
		{
			title: "For the Repeat Exposure",
			par: "Due to the frequency of repeated visits, these impressions lead to greater ad recall.  While in line or at the cash, customers are exposed to the ads  and have no opportunity to escape  them or perceive  them as intrusive.",
		},
		{
			title: "For the diverse audience",
			par: "Since a convenience store has a loyal customer base, target marketing can be carried out based on the demographics of a neighbourhood.   Whether it is an ethnic, young, mature, family-oriented, professional, or other person, there are many options to ensure you reach your target market.",
		},
	];

	const inspiration = [
		{
			thumbnail: inspiration_lotto,
			title: "Lotto",
			par: "On-the-go local customers can be very receptive when presented with an attractive opportunity. How wouldn't want to win a trip or $20,000? Exactly. This lotto is precisely what can trigger an impulse buy. Moreover, when it involves blue skies and a flamingo, the message is bound to be even more effective.",
		},
		{
			thumbnail: inspiration_metro,
			title: "Metro",
			par: "Advertisements from a local news outlet are a great fit for this environment. Convenience stores are regular pit stops where various members of the community often run into each other. Close to the customer's residence or place of work, they are good venues for regional campaigns, such as the nightly news.",
		},
		{
			thumbnail: inspiration_valspar,
			title: "Valspar / lowe's",
			par: "Highlighting easy solutions and making suggestions for the customer's daily life also hits close to home. Convenience stores naturally come into the daily flow of your audience's schedule and, with repeated exposure, can truly make an impact on their path-to-purchase to other local stores. Here, Lowe's makes a very straight forward suggestion about paint quality; chances are that next time you'll be in the paint aisle, you'll notice this brand.  ",
		},
	];

	return (
		<Layout vertical={vertical} className={className}>
			<Container className="intro">
				<h2 className="h3 font-superbold sm:text-center sm:mb-4">DOOH in Convenience stores:</h2>
				<h3 className="h6 sm:text-center sm:mb-10">Specs, Audiences and Inspiration</h3>
				<p>
					Convenience stores are local neighborhood retail locations that are frequented by people of all ages who are on the go. Whether it's to buy
					snacks, lottery tickets or cigarettes, each location has a set of loyal customers. Customers visit their local store up to ten times a
					month; which can become a well-established habit. This provides advertisers with the opportunity to have repeated impressions on their
					prospective customers and achieve a greater reach in very specific areas… particularly if it's Lotto Day (yes, dwell time really does spike
					during those days!)
				</p>
			</Container>
			<div className="bg-alice">
				<Container className="environment">
					<EnvironmentReview elements={environmentReview} />
				</Container>
			</div>
			<Container className="why">
				<h4 className="text-24 mb-8 sm:text-34 sm:text-center sm:mb-10">Why choose the convenience store environment?</h4>
				<p className="sm:text-center sm:mx-auto sm:w-10">
					There are 23,000 convenience stores in the country and 1 in 3 Canadians shop there every day! An average convenience store has 500 people
					visit on a daily basis. Need we say more?
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
					Although different ads have different needs, there are certain principles and guidelines should always be observed. The following examples
					represent industry benchmarks for the most current, innovative, and effective practices in digital out-of-home.
				</p>
				{isMobile ? (
					inspiration.map((el, k) => <InspirationCard thumbnail={el.thumbnail} title={el.title} par={el.par} key={k} />)
				) : (
					<Carousel loop={{ auto: true, duration: 5000 }} className="convenience_inspiration">
						{inspiration.map((el, k) => (
							<InspirationCard thumbnail={el.thumbnail} title={el.title} par={el.par} key={k} />
						))}
					</Carousel>
				)}
			</Container>
		</Layout>
	);
}
