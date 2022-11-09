import React from "react";
import { useScreen } from "@hooks/useScreen";

import Carousel from "@components/BroadsignAdsCarousel";
import Container from "@components/Container";
import EnvironmentReview from "@components/Inventory__EnvironmentReview";
import InspirationCard from "@components/Inventory__InspirationCard";
import Why from "@components/Inventory__Why";
import Layout from "@components/LayoutInventory";

import inspiration_tag_heuer from "@static/img/broadsign-ads-inspiration/tag_heuer.png";
import inspiration_mama_mia from "@static/img/broadsign-ads-inspiration/mama_mia.png";
import inspiration_old_el_paso from "@static/img/broadsign-ads-inspiration/old_el_paso.png";
import sample_1 from "@static/img/broadsign-ads-samples/billboard_1.jpg";
import sample_2 from "@static/img/broadsign-ads-samples/billboard_2.jpg";
import sample_3 from "@static/img/broadsign-ads-samples/billboard_3.jpg";
import sample_4 from "@static/img/broadsign-ads-samples/billboard_4.jpg";
import sample_5 from "@static/img/broadsign-ads-samples/billboard_5.jpg";
import sample_6 from "@static/img/broadsign-ads-samples/billboard_6.jpg";
import sample_7 from "@static/img/broadsign-ads-samples/billboard_7.jpg";

export default function inventory__Billboard({ vertical, className }) {
	const isMobile = useScreen();
	const environmentReview = [
		{ value: "High traffic areas in urban city centres", id: "screenPlacement", key: "Screen Placement" },
		{ value: "From 10' x 20' to 18' x 60' (May differ from market to market)", id: "screenDimensionOrientation", key: "Screen Dimension & Orientation" },
		{ value: "6 - 12 seconds, depends on product type", id: "suggestedAdCreativeLength", key: "Suggested Ad Creative Length" },
	];

	const why = [
		{
			title: "For the diverse audience",
			par: "Getting your message out to more than one hundred thousand drivers every day is a pretty great start to spreading your message. Although it is difficult to define a specific audience for large formats, the key word here is quantity. Here, we can guarantee that a lot of individuals will be in their car and will look at the billboard.",
		},
		{
			title: "For the high creative potential",
			par: "The beauty of digital is its flexible nature; it's no longer just a simple static linear narrative, creatives may be adapted to precisely fit the environment they will play in. The possibilities are close to endless when it comes to engaging consumers with large digital screens. Creative domination? Dayparting strategy? Real-time contextual messaging? It's possible to show relevant content based on time, weather, and vacation (anything really, you're the boss).",
		},
		{
			title: "For the high frequency",
			par: "In the urban areas, there not a day goes by without us hearing about rush hour road conditions on the radio. It is no secret that a majority of professionals are stuck in traffic twice a day, every day. Not only can you customize your messaging based on the time it'll be viewed (think rush-hour mindset vs Saturday-night brain), but you can be assured that a consumer will see your messaging at various points during the day on the week and/or the weekend.",
		},
	];

	const inspiration = [
		{
			thumbnail: inspiration_tag_heuer,
			title: "Tag Heuer",
			par: "Big, bold and beautiful. Products showcased on a Superboard will always make the brand appear larger than life. Make a lifestyle statement to a diverse crowd with a wow-factor that will stand out amongst the rest of the pack.",
		},
		{
			thumbnail: inspiration_mama_mia,
			title: "Ed Mirvish Theatre/Mama Mia",
			par: "Large Digital Out-Of-Home offers the ability to deliver contextual and timely messages that are not possible with static displays. Countdowns and details relating to limited engagements work wonders when time is of the essence. Add a little immediacy to your audience's actions by showing real-time information as it relates to your offering or event.",
		},
		{
			thumbnail: inspiration_old_el_paso,
			title: "Old El Paso",
			par: "Use the dynamic and customizable flexibility that comes with a digital platform to cater a message not available on traditional static billboards. Leave a lasting impression that will strategically position your brand into your audience's plans.",
		},
	];

	const samples = [sample_1, sample_2, sample_3, sample_4, sample_5, sample_6, sample_7];

	return (
		<Layout vertical={vertical} className={className}>
			<Container className="intro">
				<h2 className="h3 font-superbold sm:text-center sm:mb-4">DOOH in Billboards:</h2>
				<h3 className="h6 sm:text-center sm:mb-10">Specs, Audiences and Inspiration</h3>
				<p>
					Large Digital formats, just like Billboards, are natural attention-grabbers. Positioned to catch on-the-move crowds along the country's
					busiest routes, high-traffic business intersections and urban centers, these digital screens provide great visibility with rich
					high-resolution images. Not only do their sizes naturally grab attention from drivers and pedestrians, they coat your brand with a very
					high-end image. Some say “Bigger is better”; in this case, we completely agree.
				</p>
			</Container>
			<div className="bg-alice">
				<Container className="environment">
					<EnvironmentReview elements={environmentReview} />
				</Container>
			</div>
			<Container className="why">
				<h4 className="text-24 mb-8 sm:text-34 sm:text-center sm:mb-10">Why this environment?</h4>
				<p className="sm:text-center sm:mx-auto sm:w-10">
					Digital Out Of Home creates an opportunity to customize a message on a flexible and dynamic medium that can be altered in real time to best
					reach your audience. Large, vibrant, brilliant screens attract your consumer base in a non-invasive and engaging way as they navigate
					through their day-to-day routines.
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
					<Carousel loop={{ auto: true, duration: 5000 }} className="billboard_inspiration">
						{inspiration.map((el, k) => (
							<InspirationCard thumbnail={el.thumbnail} title={el.title} par={el.par} key={k} />
						))}
					</Carousel>
				)}
			</Container>
			<div className="bg-alice">
				<Container className="samples">
					<Carousel loop={{ auto: true, duration: 3000 }} className="billboard_samples">
						{samples.map((el, k) => (
							<img src={el} key={k} className="inventory_sample w-full rounded-xl" />
						))}
					</Carousel>
				</Container>
			</div>
		</Layout>
	);
}
