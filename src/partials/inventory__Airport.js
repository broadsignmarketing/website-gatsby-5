import React from "react";
import { useScreen } from "@hooks/useScreen";

import Carousel from "@components/BroadsignAdsCarousel";
import Container from "@components/Container";
import EnvironmentReview from "@components/Inventory__EnvironmentReview";
import InspirationCard from "@components/Inventory__InspirationCard";
import Specs from "@components/Inventory__Specs";
import Why from "@components/Inventory__Why";
import Layout from "@components/LayoutInventory";

import inspiration_lexus from "@static/img/broadsign-ads-inspiration/lexus.jpg";
import inspiration_imax from "@static/img/broadsign-ads-inspiration/imax.jpg";
import inspiration_raptors from "@static/img/broadsign-ads-inspiration/raptors.jpg";
import sample_1 from "@static/img/broadsign-ads-samples/airport_1.jpg";
import sample_2 from "@static/img/broadsign-ads-samples/airport_2.jpg";

export default function inventory__Airport({ vertical, className }) {
	const isMobile = useScreen();
	const environmentReview = [
		{ value: "Departure gate waiting areas", id: "screenPlacement", key: "Screen Placement" },
		{ value: "30 minutes", id: "avgDwellTime", key: "AVG. Dwell Time" },
		{ value: "1.5 to 6 meters", id: "proximityToScreen", key: "Proximity to Screen" },
		{ value: "47” - 55” LCD landscape", id: "screenDimensionOrientation", key: "Screen Dimension & Orientation" },
		{ value: "10 - 30 seconds", id: "suggestedAdCreativeLength", key: "Suggested Ad Creative Length" },
	];

	const why = [
		{
			id: 1,
			title: "For the long dwell time",
			par: "The airport environment is unlike any other when it comes to dwell time. Travellers are forced to spend hours in a captive environment, waiting for their flights. Whether they prefer to quietly stay put at their gate or to walk around, there are opportunities for repeated exposure along the way.",
		},
		{
			id: 2,
			title: "High Income audiences",
			par: "Airport travellers are often amongst the most desirable audiences for advertisers: they boast higher-than-average incomes, have access to higher education and are likely to hold a managerial position. They consist of executives travelling for business, families on vacation or child-free couples and singles sneaking a getaway; each group possessing immense spending power.",
		},
		{
			id: 3,
			title: "For hyperlocal, national or international strategies",
			par: "Whether you're looking to reach affluent domestic or international travellers, target specific customer profiles or simply achieve mass exposure, this environment is a great fit. Domestic brands can reach people going on vacations (that will inevitably come back) and international brands can influence travellers to try their products once they've reached their destination. Win-win.",
		},
	];

	const inspiration = [
		{
			thumbnail: inspiration_lexus,
			title: "Lexus",
			par: "It's safe to say that people who travel often, like to travel in style. Moreover, a many travellers like to have all the luxuries available to them at all times. Lexus has made a winning bet by advertising in the airport environment; whether their ad is seen by someone who will soon rent a car, or by someone eventually returning home, both are reminded that travelling in a Lexus is travelling in style.",
		},
		{
			thumbnail: inspiration_imax,
			title: "Imax",
			par: "Bright blue screen, internationally recognized landmarks and a very evocative name: Imax presents very clever advertising for the Airport crowd. Simple entertainment for some, great memories for others, this offers a fun possibility to spend some quality time in front of a giant screen.",
		},
		{
			thumbnail: inspiration_raptors,
			title: "Raptors - WeDay",
			par: "A well-known smiling face and a great cause: a perfect duo to attract a wealthy crowd. As previously mentioned, travellers in airports tend to have above average household incomes, making it a great environment to reach fans with a big heart. Well played, WeDay!",
		},
	];

	const samples = [sample_1, sample_2];

	return (
		<Layout vertical={vertical} className={className}>
			<Container className="intro">
				<h2 className="h3 font-superbold sm:text-center sm:mb-4">DOOH in Airport:</h2>
				<h3 className="h6 sm:text-center sm:mb-10">Specs, Audiences and Inspiration</h3>
				<p>
					Available in major Canadian international airports, these screens are strategically positioned near departure gates where passengers wait to
					board their flights (and where scores of employees work daily). When combined, the terminals welcome close to 20 million passengers per year
					and produce over a million views per week. Positioned side-by-side, one screen displays advertising, while the other attracts the eyes by
					delivering real-time news, weather and entertainment 24/7. In other words, this environment is perfect for making an impression on high
					flyers.
				</p>
			</Container>
			<div className="bg-alice">
				<Container className="environment">
					<EnvironmentReview elements={environmentReview} />
				</Container>
			</div>
			<Container className="why">
				<h4 className="text-24 mb-8 sm:text-34 sm:text-center sm:mb-10">Why choose the airport environment?</h4>
				<p className="sm:text-center sm:mx-auto sm:w-10">
					The two-screen displays attract attention to your creative in an environment where waiting is the norm, making for customer engagement and
					brand recall opportunities that are hard to come by. Multiple screens throughout the terminal, situated at the departure gates, create a
					domination-effect and the ability to inform and entertain all travellers whether they're coming or going, waiting or lingering.
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
					<Carousel loop={{ auto: true, duration: 5000 }} className="airport_inspiration">
						{inspiration.map((el, k) => (
							<InspirationCard thumbnail={el.thumbnail} title={el.title} par={el.par} key={k} />
						))}
					</Carousel>
				)}
			</Container>
			<div className="bg-alice">
				<Container className="samples">
					<Carousel loop={{ auto: true, duration: 3000 }} className="airport_samples">
						{samples.map((el, k) => (
							<img src={el} key={k} className="inventory_sample w-full rounded-xl" />
						))}
					</Carousel>
				</Container>
			</div>
		</Layout>
	);
}
