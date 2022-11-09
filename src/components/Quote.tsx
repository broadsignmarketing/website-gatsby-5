import React from "react";
import { StaticQuery, graphql } from "gatsby";
import classnames from "classnames";

import { GatsbyImage as Img } from "gatsby-plugin-image";

import quote_mark from "@img/ui/quote_round_reflex.svg";

import "@sass/components/Quote.scss";

type Quote = { id?: string; quote: string; sign: string; portrait: string };
interface QuoteProps {
	id?: string;
	className?: string;
	quotes: Quote[];
	resetAnimationOnChange: boolean;
}

export default function Quote({ id = "", className = "", quotes = [], resetAnimationOnChange = false }: QuoteProps) {
	return (
		<StaticQuery
			query={graphql`
				query QuotePortraitsQuery {
					portrait_ben: file(relativePath: { eq: "ui/portrait_ben.png" }) {
						childImageSharp {
							gatsbyImageData
						}
					}
					portrait_danny: file(relativePath: { eq: "ui/portrait_danny.png" }) {
						childImageSharp {
							gatsbyImageData
						}
					}
					portrait_karoliina: file(relativePath: { eq: "ui/portrait_karoliina.png" }) {
						childImageSharp {
							gatsbyImageData
						}
					}
					portrait_khadija: file(relativePath: { eq: "ui/portrait_khadija.png" }) {
						childImageSharp {
							gatsbyImageData
						}
					}
					portrait_khalil: file(relativePath: { eq: "ui/portrait_khalil.png" }) {
						childImageSharp {
							gatsbyImageData
						}
					}
					portrait_kyle: file(relativePath: { eq: "ui/portrait_kyle.png" }) {
						childImageSharp {
							gatsbyImageData
						}
					}
					portrait_matthew: file(relativePath: { eq: "ui/portrait_matthew.png" }) {
						childImageSharp {
							gatsbyImageData
						}
					}
					portrait_natalia: file(relativePath: { eq: "ui/portrait_natalia.png" }) {
						childImageSharp {
							gatsbyImageData
						}
					}
					portrait_pira: file(relativePath: { eq: "ui/portrait_pira.png" }) {
						childImageSharp {
							gatsbyImageData
						}
					}
					portrait_raj: file(relativePath: { eq: "ui/portrait_raj.png" }) {
						childImageSharp {
							gatsbyImageData
						}
					}
				}
			`}
			render={(data) => {
				quotes.forEach((quote) => {
					if (typeof quote.portrait === "undefined" || typeof data[`portrait_${quote.portrait}`] === "undefined") {
						console.error("Quote component cannot find portrait.", quote);
						return null;
					}
				});

				return (
					<div className={classnames("Quote", className)}>
						<div className="Quote_inner">
							<img className="Quote_mark" src={quote_mark} />
							{quotes.map((quote, k) => (
								<blockquote key={k}>
									<p>{quote.quote}</p>
									{quote.sign && (
										<cite>
											<Img alt="" className="Quote_portrait" image={data[`portrait_${quote.portrait}`].childImageSharp.gatsbyImageData} />
											<span>{quote.sign}</span>
										</cite>
									)}
								</blockquote>
							))}
						</div>
					</div>
				);
			}}
		/>
	);
}
