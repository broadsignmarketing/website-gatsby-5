import React from "react";
import { useScreen } from "@hooks/useScreen";

import Carousel from "@components/BroadsignAdsCarousel";
import Container from "@components/Container";
import EnvironmentReview from "@components/Inventory__EnvironmentReview";
import InspirationCard from "@components/Inventory__InspirationCard";
import Specs from "@components/Inventory__Specs";
import Why from "@components/Inventory__Why";
import Layout from "@components/LayoutInventory";

export default function inventory__Health({ vertical, className }) {
	const isMobile = useScreen();
	const environmentReview = [
		{ value: "Clinic Waiting Rooms, Pharmacies", id: "screenPlacement", key: "Screen Placement" },
		{ value: "42 minutes", id: "avgDwellTime", key: "AVG. Dwell Time" },
		{ value: "2-8 meters", id: "proximityToScreen", key: "Proximity to Screen" },
		{ value: "32-43” portrait & landscape", id: "screenDimensionOrientation", key: "Screen Dimension & Orientation" },
		{ value: "10 - 30 seconds", id: "suggestedAdCreativeLength", key: "Suggested Ad Creative Length" },
	];

	const why = [
		{
			title: "Receptive and Engaged Audience",
			par: "While some patients may be present for annual check-ups and others looking for remedy for recently developed symptoms, all individuals in the waiting room provide an audience of Canadian consumers, ready and willing to act. Research has shown that over 56% of our audience reacts to a call to action from information seen in the waiting room.",
		},
		{
			title: "Long dwell time",
			par: "Customers have no choice but to patiently sit down and wait for their appointment; not only is it a great opportunity to offer information but the captive environment is perfect for engagement and brand recall.",
		},
		{
			title: "Fully dedicated network",
			par: "The vast majority of screens in this network run ads full-screen with no intrusions on your valuable paid space, ensuring your information is received and absorbed. The remainder of content in the loop is contextual and relevant and often focuses on personal health and welfare. ",
		},
	];

	return (
		<Layout vertical={vertical} className={className}>
			<Container className="intro">
				<h2 className="h3 font-superbold sm:text-center sm:mb-4">DOOH in Health:</h2>
				<h3 className="h6 sm:text-center sm:mb-10">Specs, Audiences and Inspiration</h3>
				<p>
					The environment's lengthy dwell time (typically around 40 minutes) is perfect for executing a marketer's ideal scenario of “optimum message
					repetition”. The ads displayed in the waiting room area work to engage, inform and educate consumers on a wide variety of topics: nutrition,
					women's health, lifestyle products, family health issues, financial services and more.
				</p>
			</Container>
			<div className="bg-alice">
				<Container className="environment">
					<EnvironmentReview elements={environmentReview} />
				</Container>
			</div>
			<Container className="why">
				<h4 className="text-24 mb-8 sm:text-34 sm:text-center sm:mb-10">Why choose the Health environment?</h4>
				<p className="sm:text-center sm:mx-auto sm:w-10">
					Not only does it offer an opportunity to reach consumers at their doctor's office, a trusted and highly influential environment, but where
					else can you get up to 40 minutes of Canadian consumers' time? Moreover, they are not only focused on their lives and well-being but also
					those of their families and friends.
				</p>
				<Why elements={why} />
			</Container>
			<div className="bg-alice">
				<Container className="specs">
					<h5 className="text-left lg:text-center">Specifications</h5>
					<p className="text-left lg:text-center lg:mx-auto lg:w-10">
						Every supplier has slightly different screen specifications and format support, but not to worry. Just upload a HD version of your
						creative in the right orientation and we'll automatically generate creatives converted to the right format and resized to fit every
						supplier's specs. Please note that in this environment, the ad creative may share the screen with content such as weather information
						and a news ticker.
					</p>
					<Specs
						dimensions="1920 X 1080 pixels (width X height)"
						fileFormat="Video (H264) and image (JPG or PNG)"
						fileSize="Less than 50MB per 15 seconds"
						quality="Best possible, 12 mbps maximum"
						audio="No Audio"
						image="horizontal"
					/>
					<Specs
						dimensions="1080 X 1920 pixels (width X height)"
						fileFormat="Video (H264), HTML5 and image (JPG or PNG)"
						fileSize="Less than 50MB per 15 seconds"
						quality="Best possible, 12 mbps maximum"
						audio="No Audio"
						image="vertical"
					/>
				</Container>
			</div>
		</Layout>
	);
}
