import React from "react";
import { useScreen } from "@hooks/useScreen";

import Carousel from "@components/BroadsignAdsCarousel";
import Container from "@components/Container";
import EnvironmentReview from "@components/Inventory__EnvironmentReview";
import InspirationCard from "@components/Inventory__InspirationCard";
import Specs from "@components/Inventory__Specs";
import Why from "@components/Inventory__Why";
import Layout from "@components/LayoutInventory";

import inspiration_hnm from "@static/img/broadsign-ads-inspiration/hnm.jpg";
import inspiration_lindt from "@static/img/broadsign-ads-inspiration/lindt.jpg";
import inspiration_saq from "@static/img/broadsign-ads-inspiration/saq.jpg";
import sample_1 from "@static/img/broadsign-ads-samples/shopping_mall_1.jpg";
import sample_2 from "@static/img/broadsign-ads-samples/shopping_mall_2.jpg";
import sample_3 from "@static/img/broadsign-ads-samples/shopping_mall_3.jpg";

export default function inventory__ShoppingMall({ vertical, className }) {
	const isMobile = useScreen();
	const environmentReview = [
		{ value: "Hallway, Food court", id: "screenPlacement", key: "Screen Placement" },
		{ value: "20 seconds", id: "avgDwellTime", key: "AVG. Dwell Time" },
		{ value: "1 - 25 meters", id: "proximityToScreen", key: "Proximity to Screen" },
		{ value: "Portrait and Landscape 47” - 75”", id: "screenDimensionOrientation", key: "Screen Dimension & Orientation" },
		{ value: "5 - 15 seconds", id: "suggestedAdCreativeLength", key: "Suggested Ad Creative Length" },
	];

	const why = [
		{
			title: "The decision-making moment",
			par: "A consumer in shopping mode is constantly in the process of making selections. The screens are a direct communication tool for brands, products and services to reach shoppers exactly during that decision-making process. Well-integrated communications enhance shoppers' experience and improve your campaign's performance.",
		},
		{
			title: "The local crowd",
			par: "When it comes to shopping, most people have a preferred location and more often than not, it is close to their primary residence. This means that advertising in this environment not only allows you to stand out during the shopping experience, but it also gives you the opportunity to do so in a community setting. Whether you are looking for suburban thirtysomething individuals or a downtown student, you are able to reach for a diverse and relevant audience.",
		},
		{
			title: "For the diverse demographics",
			par: "Since a shopping mall usually has a loyal customer base, target marketing can be carried out based on the demographics of its neighbourhood. Whether it is an ethnic, young, mature, family-oriented or professional portfolio, there are many options to ensure that you reach your target market.",
		},
	];

	const inspiration = [
		{
			thumbnail: inspiration_hnm,
			title: "H&M",
			par: "As a fashion retailer, H&M promotes the latest merchandise available in its stores in a very clear and simple way: an accessible look with a variety of clothing items. Advertising directly in a mall environment is a great strategic move since point-of-sale advertising represents the ultimate communication to consumers when they are only a few meters from the products. Can you say “inspirational look”?",
		},
		{
			thumbnail: inspiration_lindt,
			title: "Lindt",
			par: "A mid-afternoon treat? A last-minute gift? The purchase of chocolate is certainly one of the most impulsive: Lindt stores definitely understand this! Lindt's campaign uses different creatives depending on the location. In order to personalize the experience, each ad displays the name of a major retailer next to which a Lindt store is located; a great way to provide consumers with an easy point of reference to find them!",
		},
		{
			thumbnail: inspiration_saq,
			title: "SAQ",
			par: "The Société des alcools (Québec's liquor and wine retailer) uses a very simple and colorful platform to announce its weekly promotions. Displaying these ads in shopping centers is a great way to reach consumers always on the look-out for inspiration and good deals. The flexibility of digital signage also allows the SAQ to modify the content of its messages enabling them to put forward various promotions and products.",
		},
	];

	const samples = [sample_1, sample_2, sample_3];

	return (
		<Layout vertical={vertical} className={className}>
			<Container className="intro">
				<h2 className="h3 font-superbold sm:text-center sm:mb-4">DOOH in Shopping Mall:</h2>
				<h3 className="h6 sm:text-center sm:mb-10">Specs, Audiences and Inspiration</h3>
				<p>
					Digital Out of-Home advertising in shopping malls not only delivers high traffic and frequency but also reaches shoppers at multiple points
					during their shopping experience since the average time spent per visit is over 70 minutes. Mall advertising displays your message to an
					audience that is already inclined to spend money and already on their way to a retail destination. Using a media that is so close to a point
					of sale allows for many strategic options such as directional help to your store, raising brand awareness or offering special deals.
				</p>
			</Container>
			<div className="bg-alice">
				<Container className="environment">
					<EnvironmentReview elements={environmentReview} />
				</Container>
			</div>
			<Container className="why">
				<h4 className="text-24 mb-8 sm:text-34 sm:text-center sm:mb-10">Why choose the Shopping Mall Environment?</h4>
				<p className="sm:text-center sm:mx-auto sm:w-10">
					Although it is definitely the main event, consumers are not visiting malls just for the shopping; they are browsing, socializing and eating.
					Online shopping is on the rise, and while the numbers keep increasing, the growth rate is quite slow. There is a great deal of research
					being done online, yes, but most consumers still prefer making the purchase in person. Did you know that 87% of the population has visited a
					shopping mall during the last 4 weeks?
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
					<Carousel loop={{ auto: true, duration: 5000 }} className="shopping_mall_inspiration">
						{inspiration.map((el, k) => (
							<InspirationCard thumbnail={el.thumbnail} title={el.title} par={el.par} key={k} />
						))}
					</Carousel>
				)}
			</Container>
			<div className="bg-alice">
				<Container className="samples">
					<Carousel loop={{ auto: true, duration: 3000 }} className="shopping_mall_samples">
						{samples.map((el, k) => (
							<img src={el} key={k} className="inventory_sample w-full rounded-xl" />
						))}
					</Carousel>
				</Container>
			</div>
		</Layout>
	);
}
