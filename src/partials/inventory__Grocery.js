import React from "react";
import { useScreen } from "@hooks/useScreen";

import Carousel from "@components/BroadsignAdsCarousel";
import Container from "@components/Container";
import EnvironmentReview from "@components/Inventory__EnvironmentReview";
import InspirationCard from "@components/Inventory__InspirationCard";
import Specs from "@components/Inventory__Specs";
import Why from "@components/Inventory__Why";
import Layout from "@components/LayoutInventory";

import inspiration_perrier from "@static/img/broadsign-ads-inspiration/perrier.mp4";
import inspiration_yankees from "@static/img/broadsign-ads-inspiration/yankees.mp4";
import inspiration_twix from "@static/img/broadsign-ads-inspiration/twix.mp4";

export default function inventory__Grocery({ vertical, className }) {
	const isMobile = useScreen();
	const environmentReview = [
		{ value: "In front of the cash registers", id: "screenPlacement", key: "Screen Placement" },
		{ value: "3:12 minutes", id: "avgDwellTime", key: "AVG. Dwell Time" },
		{ value: "2 to 4 meters", id: "proximityToScreen", key: "Proximity to Screen" },
		{ value: "Cost per View (CPV)", id: "preferredBuyingMetric", key: "Preferred Buying Metric" },
		{ value: "32” LCD landscape", id: "screenDimensionOrientation", key: "Screen Dimension & Orientation" },
		{ value: "10 - 30 seconds", id: "suggestedAdCreativeLength", key: "Suggested Ad Creative Length" },
	];

	const why = [
		{
			title: "The decision-making mode",
			par: "A consumer in “grocery shopping mode” is in the process of planning and actively making selections. The screens are a direct communication tool for brands, products and services to reach the primary grocery shoppers (and, chances are, the household decision makers) exactly during that decision-making process.",
		},
		{
			title: "The local crowd",
			par: "When it comes to grocery shopping, most people have a preferred location and more often than not, is close to their primary residence. This means that advertising in this environment not only allows you to stand out in the shopping experience, but gives you the opportunity to do so in a community setting as well. Whether you are looking for a suburban thirtysomething or a downtown student, you will be able to reach out to the person you are specifically looking for.",
		},
		{
			title: "The inevitable weekly exposure",
			par: "Let's be honest, nobody needs to be convinced that most of the population regularly goes to the grocery store. This environment offers multiple opportunities to consistently communicate with primary grocery shoppers, since every customer who enters the store must go through the check-out to exit, often doing-so several times a month.",
		},
	];

	const inspiration = [
		{
			thumbnail: inspiration_perrier,
			title: "Perrier",
			par: "Having a Garden Party this weekend? Are you thirsty after all that grocery shopping? This ad will spark interest either way! Upbeat music, warm ambiance and beautiful people having fun; who wouldn't want to join in?",
		},
		{
			thumbnail: inspiration_yankees,
			title: "Yankees",
			par: "Having a Garden Party this weekend? Are you thirsty after all that grocery shopping? This ad will spark interest either way! Upbeat music, warm ambiance and beautiful people having fun; who wouldn't want to join in?",
		},
		{
			thumbnail: inspiration_twix,
			title: "Twix",
			par: "Twix bets on the right stuff to ensure impulsive buys; it's raining small delicious little bits of cookies covered in caramel and milk chocolate on a beautiful golden background. We'll take 2 bags at the check-out please.",
		},
	];

	return (
		<Layout vertical={vertical} className={className}>
			<Container className="intro">
				<h2 className="h3 font-superbold sm:text-center sm:mb-4">DOOH in Groceries:</h2>
				<h3 className="h6 sm:text-center sm:mb-10">Specs, Audiences and Inspiration</h3>
				<p>
					Campsite's grocery environment is powered by a true 21st century place-based digital network, offering a well-balanced entertaining loop of
					ads and branded content to customers where “a little wait” is always inescapable: the check-out line. Statistically speaking, 95% of
					Canadians visited a grocery store an average of 1.6 times in the past week; all of them having to make a stop at the cash register. Whether
					your brand is looking to drive impulse purchases, reinforce a product's user-friendly image or simply gain notoriety, this is a location
					where people definitely line up to see your ad.
				</p>
			</Container>
			<div className="bg-alice">
				<Container className="environment">
					<EnvironmentReview elements={environmentReview} />
				</Container>
			</div>
			<Container className="why">
				<h4 className="text-24 mb-8 sm:text-34 sm:text-center sm:mb-10">Why choose the groceries environment?</h4>
				<p className="sm:text-center sm:mx-auto sm:w-10">
					When asked if watching the content on these screens helps pass the time more effectively, 84% of shoppers agreed. Entertaining customers at
					the checkout line is the main opportunity, but keep in mind that cash register lanes are also visible throughout the grocery shopping trip.
					That's right; an IPSOS study revealed that shoppers see an average of 2.5 screens during their grocery store visit. Whether the customers
					are doing a general stock up trip or a quick-paced pit stop, the catchy wall of HD screens will always greet them before the cashier does or
					suggest a product before they continue to the next aisle.
				</p>
				<Why elements={why} />
			</Container>
			<div className="bg-alice">
				<Container className="specs">
					<h5 className="text-center">Specifications</h5>
					<p className="text-center md:mx-auto md:w-10">
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
					<Carousel loop={{ auto: true, duration: 5000 }} className="grocery_inspiration">
						{inspiration.map((el, k) => (
							<InspirationCard thumbnail={el.thumbnail} title={el.title} par={el.par} key={k} />
						))}
					</Carousel>
				)}
			</Container>
			{/*
			<div className="bg-alice">
				<Container className="samples">
					<Carousel loop={{ auto: true, duration: 3000 }} className="grocery_samples">
						{samples.map((el, k) => (
							<img src={el} key={k} className="inventory_sample w-full rounded-xl" />
						))}
					</Carousel>
				</Container>
			</div>
			 */}
		</Layout>
	);
}
