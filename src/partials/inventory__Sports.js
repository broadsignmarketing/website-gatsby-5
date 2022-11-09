import React from "react";
import { useScreen } from "@hooks/useScreen";

import Carousel from "@components/BroadsignAdsCarousel";
import Container from "@components/Container";
import EnvironmentReview from "@components/Inventory__EnvironmentReview";
import InspirationCard from "@components/Inventory__InspirationCard";
import Specs from "@components/Inventory__Specs";
import Why from "@components/Inventory__Why";
import Layout from "@components/LayoutInventory";

import inspiration_york from "@static/img/broadsign-ads-inspiration/york.jpg";
import inspiration_scotia_bank from "@static/img/broadsign-ads-inspiration/scotia_bank.jpg";
import inspiration_terminator from "@static/img/broadsign-ads-inspiration/terminator.jpg";

export default function inventory__Sports({ vertical, className }) {
	const isMobile = useScreen();
	const environmentReview = [
		{ value: "Lobbies, Snack Bars, Viewing Galleries", id: "screenPlacement", key: "Screen Placement" },
		{ value: "120 seconds – 30-40 minutes", id: "avgDwellTime", key: "AVG. Dwell Time" },
		{ value: "3 - 10 feet", id: "proximityToScreen", key: "Proximity to Screen" },
		{ value: "CPM", id: "preferredBuyingMetric", key: "Preferred Buying Metric" },
	];

	const why = [
		{
			title: "For the High Frequency of Exposure",
			par: "Many recreational center visitors go several times a week and at very specific times. Not only can you customize your messaging based on the time they'll be viewed (think children's after school activities, daily workouts or weekend classes) but you can be assured that a consumer will see your messages at various points during the entire week. Community Recreational Centers are busy places. They operate year-round providing community programming seven days per week, typically from 6 am to 11 pm.",
		},
		{
			title: "For the High Dwell Times",
			par: "The typical recreational center visitor spends more than 60 minutes at a facility during each visit and attends on average twice per week, making it an excellent opportunity to advertise. Long dwell times mean that visitors will have many opportunities to come across your messages no matter what they are there to do: attending a fitness class or dropping off the kids at a practice.",
		},
		{
			title: "For the High Potential Reach",
			par: "Add the multiple community activities, tournaments and celebrations taking place at a typical Recreational Center and the variety of people attending these activities and be assured that your target market will be reached.",
		},
	];

	const inspiration = [
		{
			thumbnail: inspiration_york,
			title: "York region",
			par: "Week after week, players and supporters flock arenas to support their team. This network is definitely a great fit when you want to reach health-conscious individuals or talk about health care. Half of the visitors are there to accompany their child. It is definitely a great move to provide them with relevant information on child care.",
		},
		{
			thumbnail: inspiration_scotia_bank,
			title: "Scotiabank",
			par: "Although banks are major companies, local branches are often involved in their community. Sharing footage of past events, where young & old are having fun with activities organized by Scotiabank, is a great way to entice more people to get on board with the upcoming activities. Especially if there's a chance that P.K. Subban shows up to grab a bite with the fam jam.",
		},
		{
			thumbnail: inspiration_terminator,
			title: "Terminator",
			par: "Promoting this movie with the help of visual effects and great sound design is a sure bet: it grabs the attention and says a great deal about what you can expect from the movie. Simple, yet effective. All that is left to say is Hasta la vista, baby.",
		},
	];

	return (
		<Layout vertical={vertical} className={className}>
			<Container className="intro">
				<h2 className="h3 font-superbold sm:text-center sm:mb-4">DOOH in Sports & Recreational Centers:</h2>
				<h3 className="h6 sm:text-center sm:mb-10">Specs, Audiences and Inspiration</h3>
				<p>
					Sports and Recreational Center environment attracts a wide array of individuals. Every single day, instructors/coaches, supporting parents,
					members of recreational leagues, hopeful and determined youngsters spend quality time together in these facilities. The typical visitor is
					usually present at least twice a week, for over an hour each time. There are many opportunities to advertise in a sports and recreational
					center whether you look at it in manner of rooms or surfaces.
				</p>
			</Container>
			<div className="bg-alice">
				<Container className="environment">
					<EnvironmentReview elements={environmentReview} />
				</Container>
			</div>
			<Container className="why">
				<h4 className="text-24 mb-8 sm:text-34 sm:text-center sm:mb-10">Why choose the Sports Building Environment?</h4>
				<p className="sm:text-center sm:mx-auto sm:w-10">
					Advertising in an environment where there's a strong sense of community can be quite effective for a company. Whether you're looking to
					promote a small local business or make a local impact as a global brand, you'll get a massive head start by reaching consumers during their
					daily routines. Not to mention that you can get downright specific in your targeting. Beyond their home address, you can select your
					audience based on their household income, education level, or primary occupation.
				</p>
				<Why elements={why} />
			</Container>
			<Container className="inspiration">
				<h4 className="text-24 mb-8 sm:text-34 sm:text-center sm:mb-10">Inspiration</h4>
				<p className="mb-10 sm:text-center sm:mx-auto sm:w-10 sm:mb-0">
					While different ads have different needs, it's undeniable that there are some principles and guidelines that should always be observed.
					These examples represent industry benchmarks for the most current, innovative and efficient practices in digital out-of-home.
				</p>
				{isMobile ? (
					inspiration.map((el, k) => <InspirationCard thumbnail={el.thumbnail} title={el.title} par={el.par} key={k} />)
				) : (
					<Carousel loop={{ auto: true, duration: 5000 }} className="sports_inspiration">
						{inspiration.map((el, k) => (
							<InspirationCard thumbnail={el.thumbnail} title={el.title} par={el.par} key={k} />
						))}
					</Carousel>
				)}
			</Container>
		</Layout>
	);
}
