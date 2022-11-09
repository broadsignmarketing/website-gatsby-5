import React from "react";
import { useScreen } from "@hooks/useScreen";

import Container from "@components/Container";
import Why from "@components/Inventory__Why";
import Layout from "@components/LayoutInventory";

export default function inventory__Beauty({ vertical, className }) {
	const isMobile = useScreen();
	const why = [
		{
			title: "For offline campaign reach",
			par: "Hands usually tucked under a cape or nails being tended to, these locations offer one of the rare times where the audience is not on their personal digital device. DOOH extends campaign reach and frequency by delivering messaging to the audience when other channels are unavailable.",
		},
		{
			title: "For a targeted audience",
			par: "Each location – hair salons, barbershops, nail salons and more – has its own particular customer base. This gives brands to the opportunity to deliver the right message to the right audience by bidding on only the appropriate gender, income level and interest categories.",
		},
		{
			title: "For captive viewers",
			par: "Screens in beauty and grooming locations often mix advertising messages in with informative and entertaining content, keeping the audience interested and captivated. A well-targeted and contextual creative will definitely catch the audience's attention.",
		},
	];

	return (
		<Layout vertical={vertical} className={className}>
			<Container className="intro">
				<h2 className="h3 font-superbold sm:text-center sm:mb-4">DOOH in Beauty and Grooming:</h2>
				<h3 className="h6 sm:text-center sm:mb-10">Specs, Audiences and Inspiration</h3>
				<p>
					Beauty and grooming locations are an ideal opportunity for brands to reach their target audience. With appointments of an hour or more, and
					visitors often having little other to do than look around, the audience is very receptive to on-screen messaging. For beauty and lifestyle
					brands, these are especially contextual environments, with messaging fitting right into the overall atmosphere of each location.
				</p>
			</Container>
			<Container className="why">
				<h4 className="text-24 mb-8 sm:text-34 sm:text-center sm:mb-10">Why chose the beauty and grooming environment?</h4>
				<Why elements={why} />
			</Container>
		</Layout>
	);
}
