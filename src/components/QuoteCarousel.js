import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { StaticQuery, graphql } from "gatsby";
import { GatsbyImage as Img } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import classnames from "classnames";

import left_arrow from "@img/controls/carousel_arrow_left.svg";
import right_arrow from "@img/controls/carousel_arrow_right.svg";
import left_arrow_72c0d0 from "@img/controls/carousel_arrow_left_72c0d0.svg";
import right_arrow_72c0d0 from "@img/controls/carousel_arrow_right_72c0d0.svg";

import "@sass/components/QuoteCarousel.scss";

/**
 * A carousel that orbits through an array of quotes from customers, partners etc.
 * @param	{String}	className	A CSS class
 * @param	{String}	id			A CSS ID
 * @param	{Array}		quotes		A JSON array of the quotes. Each item should have at least a quote property and a sign or signature property.
 * @param	{String}	theme		A theme to display. Available themes are [disco, lightpanel]
 */

export default function QuoteCarousel({ className, quotes = [], title = "", theme = "lightpanel" }) {
	if (quotes.length === 0) {
		console.error("No quotes provided to QuoteCarousel.");
		return <div class="QuoteCarousel error">No quotes provided...</div>;
	}

	const [pos, setPos] = useState(0);
	const maxPos = quotes.length;
	const [carouselHeight, setCarouselHeight] = useState(0);

	const quotesWrapperRef = useRef(null);

	function next() {
		let newPos = pos + 1;
		if (newPos >= maxPos) {
			newPos = 0;
		}
		setPos(newPos);
	}

	function prev() {
		let newPos = pos - 1;
		if (newPos < 0) {
			newPos = maxPos - 1;
		}
		setPos(newPos);
	}

	const resizeCarousel = useCallback(() => {
		const blockquotes = Object.values(quotesWrapperRef.current.children).filter((el) => el.localName === "blockquote");
		let highest = 0;
		blockquotes.forEach((el) => {
			if (el.clientHeight > highest) {
				highest = el.clientHeight;
			}
		});
		setCarouselHeight(highest);
	});

	useEffect(() => {
		setTimeout(() => {
			resizeCarousel();
		}, 1000);
	}, [quotesWrapperRef]);

	useEffect(() => {
		if (window) {
			window.addEventListener("resize", resizeCarousel);
		}
	}, []);

	return (
		<StaticQuery
			query={graphql`
				query QuoteCarouselQuery {
					bgDisco: file(relativePath: { eq: "bg/quotes_carousel_disco.jpg" }) {
						childImageSharp {
							gatsbyImageData
						}
					}
				}
			`}
			render={(data) => {
				return (
					<div className={classnames("QuoteCarousel", `theme_${theme}`, className)}>
						{theme === "disco" && <Img alt="" image={data.bgDisco.childImageSharp.gatsbyImageData} className="bg" />}
						{title !== "" && <h3>{title}</h3>}
						<div className="quotes" ref={quotesWrapperRef} style={{ minHeight: `${carouselHeight}px` }}>
							<div className="arrows_wrapper">
								<button className="arrow left" onClick={() => prev()}>
									{theme === "disco" && <img src={left_arrow} />}
									{theme === "lightpanel" && <img src={left_arrow_72c0d0} />}
								</button>
								<button className="arrow right" onClick={() => next()}>
									{theme === "disco" && <img src={right_arrow} />}
									{theme === "lightpanel" && <img src={right_arrow_72c0d0} />}
								</button>
							</div>
							{quotes.map((quote, k) => (
								<blockquote className={classnames(k === pos ? "active" : "")} key={`quote_${k}`}>
									<div className="quote">{quote.quote}</div>
									<cite>{quote.sign}</cite>
								</blockquote>
							))}
						</div>
					</div>
				);
			}}
		/>
	);
}

QuoteCarousel.propTypes = {
	quotes: PropTypes.array.isRequired,
	theme: PropTypes.oneOf(["disco", "lightpanel"]),
};
