import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { useL } from "@hooks/useDico";
import { getTranslations } from "@annex";

import { IGatsbyImageData } from "gatsby-plugin-image";
import Carousel from "@components/BroadsignAdsCarousel";
import QuoteCard from "@components/BroadsignAdsQuoteCard";

type Quote = {
	id: string;
	quote: string;
	name: string;
	title: string;
	company: string;
};

type Testimonial = {
	id: string;
	quote: string;
	name: string;
	title: string;
	company: string;
	portrait?: IGatsbyImageData;
	logo?: IGatsbyImageData;
};

export default function BroadsignAdsTestimonials({ autoplay = true, shuffled = false }) {
	return (
		<StaticQuery
			query={graphql`
				query BroadsignAdsTestimonialsQuery {
					portrait_cookit: file(relativePath: { eq: "pages/broadsign-ads/quote_portrait_cookit.png" }) {
						childImageSharp {
							gatsbyImageData
						}
					}
					portrait_mainandlocal: file(relativePath: { eq: "pages/broadsign-ads/quote_portrait_mainandlocal.png" }) {
						childImageSharp {
							gatsbyImageData
						}
					}
					portrait_republik: file(relativePath: { eq: "pages/broadsign-ads/quote_portrait_republik.png" }) {
						childImageSharp {
							gatsbyImageData
						}
					}
					portrait_treehouse: file(relativePath: { eq: "pages/broadsign-ads/quote_portrait_treehouse.png" }) {
						childImageSharp {
							gatsbyImageData
						}
					}
					portrait_peoplespint: file(relativePath: { eq: "pages/broadsign-ads/quote_portrait_peoplespint.png" }) {
						childImageSharp {
							gatsbyImageData
						}
					}
					portrait_flames: file(relativePath: { eq: "pages/broadsign-ads/quote_portrait_flames.png" }) {
						childImageSharp {
							gatsbyImageData
						}
					}
					portrait_cheil: file(relativePath: { eq: "pages/broadsign-ads/quote_portrait_cheil.png" }) {
						childImageSharp {
							gatsbyImageData
						}
					}
					company_cookit: file(relativePath: { eq: "pages/broadsign-ads/quote_company_cookit.png" }) {
						childImageSharp {
							gatsbyImageData
						}
					}
					company_mainandlocal: file(relativePath: { eq: "pages/broadsign-ads/quote_company_mainandlocal.png" }) {
						childImageSharp {
							gatsbyImageData
						}
					}
					company_republik: file(relativePath: { eq: "pages/broadsign-ads/quote_company_republik.png" }) {
						childImageSharp {
							gatsbyImageData
						}
					}
					company_treehouse: file(relativePath: { eq: "pages/broadsign-ads/quote_company_treehouse.png" }) {
						childImageSharp {
							gatsbyImageData
						}
					}
					company_peoplespint: file(relativePath: { eq: "pages/broadsign-ads/quote_company_peoplespint.png" }) {
						childImageSharp {
							gatsbyImageData
						}
					}
					company_flames: file(relativePath: { eq: "pages/broadsign-ads/quote_company_flames.png" }) {
						childImageSharp {
							gatsbyImageData
						}
					}
					company_cheil: file(relativePath: { eq: "pages/broadsign-ads/quote_company_cheil.png" }) {
						childImageSharp {
							gatsbyImageData
						}
					}
				}
			`}
			render={(data) => {
				const l = useL();
				const __: Testimonial[] = getTranslations(`${l}/components/BroadsignAdsTestimonials`);

				const testimonials: Testimonial[] = __.map((quote) => {
					const portrait: IGatsbyImageData = data[`portrait_${quote.id}`].childImageSharp.gatsbyImageData;
					const logo: IGatsbyImageData = data[`company_${quote.id}`].childImageSharp.gatsbyImageData;

					return {
						...quote,
						portrait,
						logo,
					};
				});

				return (
					<Carousel loop={{ auto: autoplay, duration: 8000 }} className="BroadsignAdsTestimonials">
						{testimonials.map((testimonial) => (
							<QuoteCard content={testimonial} portrait={testimonial.portrait} logo={testimonial.logo} key={testimonial.id} />
						))}
					</Carousel>
				);
			}}
		/>
	);
}
