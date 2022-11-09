import React from "react";
import { useScreen } from "@hooks/useScreen";

import Carousel from "@components/BroadsignAdsCarousel";
import Container from "@components/Container";
import EnvironmentReview from "@components/Inventory__EnvironmentReview";
import InspirationCard from "@components/Inventory__InspirationCard";
import Specs from "@components/Inventory__Specs";
import Why from "@components/Inventory__Why";
import Layout from "@components/LayoutInventory";

import inspiration_teo_taxi from "@static/img/broadsign-ads-inspiration/teo_taxi.mp4";
import inspiration_le_chalet from "@static/img/broadsign-ads-inspiration/le_chalet.mp4";
import inspiration_ddt from "@static/img/broadsign-ads-inspiration/ddt.mp4";
import sample_1 from "@static/img/broadsign-ads-samples/restobar_1.jpg";
import sample_2 from "@static/img/broadsign-ads-samples/restobar_2.jpg";
import sample_3 from "@static/img/broadsign-ads-samples/restobar_3.jpg";

export default function inventory__Restobar({ vertical, className }) {
	const isMobile = useScreen();
	const environmentReview = [
		{ value: "Washrooms", id: "screenPlacement", key: "Screen Placement" },
		{ value: "90 seconds", id: "avgDwellTime", key: "AVG. Dwell Time" },
		{ value: "1 - 5 meters", id: "proximityToScreen", key: "Proximity to Screen" },
		{ value: "22” LCD Portrait", id: "screenDimensionOrientation", key: "Screen Dimension & Orientation" },
		{ value: "5 - 30 seconds", id: "suggestedAdCreativeLength", key: "Suggested Ad Creative Length" },
	];

	const why = [
		{
			title: "For the diverse audience",
			par: "They say you are what you eat and this expression is especially true with Restobar audiences. The establishments selected for this environment are diverse and carefully evaluated to ensure that their categorization is on point.  Looking for business crowds during lunchtime, vegan yogis during tea time or game day fanatics? This network will allow you to reach them and to display your advertising to consumers sharing similar states of mind. ",
		},
		{
			title: "For the long dwell time ",
			par: "Washrooms have between 90 to 120 seconds of prime dwell time, where consumers have very little distractions. Hence,its the perfect setting for longer and more informative creatives. This also means that metrics can be based on views and it is a very good idea to opt for a digital video strategy. ",
		},
		{
			title: "For the smart creatives",
			par: "The beauty of digital is its malleable nature; it's not a simple static linear narrative anymore, creatives can be adapted to truly fit the environment they will play in. Think HTML5, sound and real-time connected screens: the possibilities to deliver contextual, intelligent and useful content are almost endless. It's possible to show relevant content based on time, weather, and holidays (anything really, you decide!) in locations where people have specific styles and well-defined interests: it's bound to be effective.",
		},
	];

	const inspiration = [
		{
			thumbnail: inspiration_teo_taxi,
			title: "Téo Taxi",
			par: "Teo Taxi's clever use of bright green ensures that their creatives will be noticed, in addition to establishing a strong brand identity.  Moreover, the advertisement displays a dynamic text and map animation. The overall vibe is informative, cool and efficient.",
		},
		{
			thumbnail: inspiration_le_chalet,

			title: "Le Chalet",
			par: "Using a landscape video format is not easy to pull off, but the French-Canadian channel VrakTV did it well. Using a pop of color in the header and footer, the video sits well in the center of the screen. The important information is displayed above and below the video, ensuring that the consumer's eye does not wander too far away from the video. Well played Le Chalet, well played.",
		},
		{
			thumbnail: inspiration_ddt,

			title: "DDT",
			par: "This ad prototype skillfully combines geo-targeting and real-time information from DDT's website. While the header and footer are used to communicate key information, the middle section broadcasts schedules based on the customer's location. The dark colors used in the creative are representative of a late-night atmosphere, aka when this ad is intended to run in the Digital Boards. Bonus: this creative also ingeniously helps the prevent drunk driving, win-win.",
		},
	];

	const samples = [sample_1, sample_2, sample_3];

	return (
		<Layout vertical={vertical} className={className}>
			<Container className="intro">
				<h2 className="h3 font-superbold sm:text-center sm:mb-4">DOOH in Restobar:</h2>
				<h3 className="h6 sm:text-center sm:mb-10">Specs, Audiences and Inspiration</h3>
				<p>
					Restaurants and bars are social and recreational environments which generally suggests that people who visit them want to be there, giving
					advertisers the opportunity to reach customers in a positive setting. The wide range of locations offered through Campsite already
					guarantees access to segmented audiences (such as business people, students, etc.) and since people associate their identity to the places
					where they want to be and be seen, targeting possibilities become even more precise.
				</p>
			</Container>
			<div className="bg-alice">
				<Container className="environment">
					<EnvironmentReview elements={environmentReview} />
				</Container>
			</div>
			<Container className="why">
				<h4 className="text-24 mb-8 sm:text-34 sm:text-center sm:mb-10">Why choose the Restobar environment?</h4>
				<p className="sm:text-center sm:mx-auto sm:w-10">
					Advertising in this network is what we like to call a safe bet. Consumption habits are dramatically shifting; the news is consumed on mobile
					devices such as tablets, and television shows are rarely watched via cable TV anymore, but what about social activities? We are fairly
					certain that happy hours, dinner & a movie and general invites like “let's get a drink” aren't going anywhere anytime soon.
				</p>
				<Why elements={why} />
			</Container>
			<div className="bg-alice">
				<Container className="specs">
					<h5 className="text-left lg:text-center">Specifications</h5>
					<Specs
						dimensions="1080 X 1920 pixels (width X height)"
						fileFormat="Video (H264) and image (JPG or PNG)"
						fileSize="Less than 50MB per 15 seconds"
						quality="Best possible, 12 mbps maximum"
						audio="48KHz / Stereo / 128kbps / AAC"
						image="mobile"
					/>
				</Container>
			</div>
			<Container className="inspiration">
				<h4 className="text-24 mb-8 sm:text-34 sm:text-center sm:mb-10">Inspiration</h4>
				<p className="mb-10 sm:text-center sm:w-10 sm:mb-0">
					While different ads have different needs it's undeniable that there are some principles and guidelines that should always be observed. These
					examples represent industry benchmarks for the most current, innovative and efficient practices in digital out-of-home.
				</p>
				{isMobile ? (
					inspiration.map((el, k) => <InspirationCard thumbnail={el.thumbnail} title={el.title} par={el.par} key={k} />)
				) : (
					<Carousel loop={{ auto: true, duration: 5000 }} className="restobar_inspiration">
						{inspiration.map((el, k) => (
							<InspirationCard thumbnail={el.thumbnail} title={el.title} par={el.par} key={k} />
						))}
					</Carousel>
				)}
			</Container>
			<div className="bg-alice">
				<Container className="samples">
					<Carousel loop={{ auto: true, duration: 3000 }} className="restobar_samples">
						{samples.map((el, k) => (
							<img src={el} key={k} className="inventory_sample w-full rounded-xl" />
						))}
					</Carousel>
				</Container>
			</div>
		</Layout>
	);
}
