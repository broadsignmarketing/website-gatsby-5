import React from "react";
import { useScreen } from "@hooks/useScreen";

import Carousel from "@components/BroadsignAdsCarousel";
import Container from "@components/Container";
import EnvironmentReview from "@components/Inventory__EnvironmentReview";
import InspirationCard from "@components/Inventory__InspirationCard";
import Specs from "@components/Inventory__Specs";
import Why from "@components/Inventory__Why";
import Layout from "@components/LayoutInventory";

import inspiration_just_eat from "@static/img/broadsign-ads-inspiration/just_eat.mp4";
import inspiration_mr_robot from "@static/img/broadsign-ads-inspiration/mr_robot.mp4";
import inspiration_shoppers_drug_mart from "@static/img/broadsign-ads-inspiration/shoppers_drug_mart.mp4";
import sample_1 from "@static/img/broadsign-ads-samples/residential_1.jpg";
import sample_2 from "@static/img/broadsign-ads-samples/residential_2.jpg";
import sample_3 from "@static/img/broadsign-ads-samples/residential_3.jpg";

export default function inventory__Residential({ vertical, className }) {
	const isMobile = useScreen();
	const environmentReview = [
		{ value: "Residential Building Lobbies", id: "screenPlacement", key: "Screen Placement" },
		{ value: "40 seconds", id: "avgDwellTime", key: "AVG. Dwell Time" },
		{ value: "1 - 12 feet", id: "proximityToScreen", key: "Proximity to Screen" },
		{ value: "21” LCD landscape", id: "screenDimensionOrientation", key: "Screen Dimension & Orientation" },
		{ value: "10 - 30 seconds", id: "suggestedAdCreativeLength", key: "Suggested Ad Creative Length" },
	];

	const why = [
		{
			title: "For the  local crowd",
			par: "Close to one hundred percent of the people who see your advertising will be locals or people looking to live like a local for some time (think Airbnb and such). Not only does it make sense for business next door to advertise its products or services, it's a great opportunity to develop new habits among customers. Want to speak to the newcomers to the neighborhood? The Residential Building network is a great place to introduce them to your business and let them know where to look for you.",
		},
		{
			title: "For the strategic possibilities & customization",
			par: "The Digital Residential Network cuts through the clutter of traditional media vehicles—flyers, newspapers, direct mail, and such—at a fraction of the cost. Advertisers can easily update their creative in real time without the hassle of reprinting and redistributing an ad. The screens provide added value to tenants by allowing them to catch up on news, local weather, and building announcements. Your brand can be a part of that added value, perhaps more importantly, associated with added value.",
		},
		{
			title: "For the high engagement and high visibility",
			par: "Digital signage is a very effective way to harness an audience's attention while making the atmosphere livelier. In any environment, being able to command attention to content is valuable; in the residential building, it's all the more valuable, as there are no other sources of advertising or entertainment in the area. Not only does that help to create a more engaging experience, it also allows for a more subtle approach because you're not competing with a loud environment.",
		},
	];

	const inspiration = [
		{
			thumbnail: inspiration_just_eat,
			title: "Just Eat",
			par: "Humour, high-contrast colour, and an easy solution: Just Eat hits the ball out of the park with this simple creative. After a long day at work, consumers are looking for easy-going and simple—and that's exactly what's suggested here. Download the app, order, kick back, and wait peacefully in the comfort of your own home. That's what we call great delivery.",
		},
		{
			thumbnail: inspiration_mr_robot,
			title: "Mr. Robot on Shomi",
			par: "Shomi decided to promote its streaming services by using a popular TV show. That seems straightforward enough, but it didn't end there. They combined provocative copy with powerful pictures, not to mention a clever ending (hacking manoeuvers, anyone?), to make their ad seriously attention-grabbing. You can bank on this ad leading to more than a few Google searches.",
		},
		{
			thumbnail: inspiration_shoppers_drug_mart,
			title: "Shopper's Drug Mart",
			par: "Ever heard us ramble on and on about emphasizing the local offer? This is a perfect example. These deals are not only right around the corner, they're valid now. Shopper's Drug Mart did well to diversify its call to action to a few different types of consumers by featuring beauty products, health supplements, and beverages. Quick, efficient, and covered in bold colours. That's a winning formula.",
		},
	];

	const samples = [sample_1, sample_2, sample_3];

	return (
		<Layout vertical={vertical} className={className}>
			<Container className="intro">
				<h2 className="h3 font-superbold sm:text-center sm:mb-4">DOOH in Residential:</h2>
				<h3 className="h6 sm:text-center sm:mb-10">Specs, Audiences and Inspiration</h3>
				<p>
					The Residential Network gets advertisers past the locked door of lobbies and enables them to display their ads alongside timely,
					around-the-clock building-specific information, local weather, and news. The insight? Good things happen when you adapt your messaging to
					fit into your audience's daily schedule. The respectful familiarity that exists among like-minded tenants, coupled with the safe environment
					of the place they call home, makes residential buildings a great place to achieve meaningful brand integration. Our screens are
					strategically placed in the heavy-traffic common areas of high-rise buildings to enhance the resident experience.
				</p>
			</Container>
			<div className="bg-alice">
				<Container className="environment">
					<EnvironmentReview elements={environmentReview} />
				</Container>
			</div>
			<Container className="why">
				<h4 className="text-24 mb-8 sm:text-34 sm:text-center sm:mb-10">Why choose the Residential Building Environment?</h4>
				<p className="sm:text-center sm:mx-auto sm:w-10">
					Advertising in an environment where there's a strong sense of community can be quite effective for a company. Whether you're looking to
					promote a small local business or make a local impact as a global brand, you'll get a massive head start by reaching consumers during their
					daily routines. Not to mention that you can get downright specific in your targeting. Beyond their home address, you can select your
					audience based on their household income, education level, or primary occupation.
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
					<Carousel loop={{ auto: true, duration: 5000 }} className="residential_inspiration">
						{inspiration.map((el, k) => (
							<InspirationCard thumbnail={el.thumbnail} title={el.title} par={el.par} key={k} />
						))}
					</Carousel>
				)}
			</Container>
			<div className="bg-alice">
				<Container className="samples">
					<Carousel loop={{ auto: true, duration: 3000 }} className="residential_samples">
						{samples.map((el, k) => (
							<img src={el} key={k} className="inventory_sample w-full rounded-xl" />
						))}
					</Carousel>
				</Container>
			</div>
		</Layout>
	);
}
