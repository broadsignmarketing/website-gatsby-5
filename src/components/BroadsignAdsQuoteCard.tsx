import React from "react";
import { GatsbyImage as Img, IGatsbyImageData } from "gatsby-plugin-image";

type CardContent = {
	name: string;
	title: string;
	company: string;
	quote: string;
};

interface CardProps {
	portrait: IGatsbyImageData;
	content: CardContent;
	logo: IGatsbyImageData;
}

export default function BroadsignAdsQuoteCard({ content, portrait, logo }: CardProps) {
	const { name, title, company, quote } = content;

	if (name && title && company && quote) {
		return (
			<div className="quote_card grid m-0 h-full rounded-xl overflow-hidden flex-column flex-nowrap sm:flex-row">
				<div className="quote_card__author_wrapper bg-campsite-green col-12 p-8 sm:col-3">
					<div className="grid sm:h-full sm:h-auto">
						<div className="col_portrait flex flex-center sm:col-12 sm:mb-5">
							<div className="quote_card__portrait_wrapper p-1 sm:p-2">
								<Img alt="" image={portrait} className="quote_card__portrait" />
							</div>
						</div>
						<cite className="col_author_cite text-left flex flex-column justify-content-center pl-4 sm:col-12 sm:text-center sm:justify-content-start sm:pl-0">
							{content.name && <div className="quote_card__name text-14 text-white uppercase mt-auto mb-2 line-height-120">{content.name}</div>}
							{content.title && <div className="quote_card__title text-14 text-white line-height-100">{content.title}</div>}
							{content.company && (
								<>
									<Img
										alt=""
										image={logo}
										className="quote_card__company mt-4 mb-auto sm:hidden"
										objectFit="contain"
										objectPosition="left top"
									/>
									<Img
										alt=""
										image={logo}
										className="quote_card__company mt-4 mb-auto hidden sm:block"
										objectFit="contain"
										objectPosition="center top"
									/>
								</>
							)}
						</cite>
					</div>
				</div>
				<div className="quote_card__blockquote_wrapper bg-reflex col-12 px-7 py-5 flex align-items-start sm:col-9 sm:align-items-center sm:text-20 sm:p-20">
					<blockquote>
						<p className="text-white line-height-180 font-serif m-0">{quote}</p>
					</blockquote>
				</div>
			</div>
		);
	}

	return null;
}
