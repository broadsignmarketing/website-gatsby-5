import React, { useState } from "react";
import classnames from "classnames";
import QuoteBlock from "@components/QuoteBlock";

import arrow_left from "@img/controls/arrow_left_light_blue.png";
import arrow_right from "@img/controls/arrow_right_light_blue.png";

import "@sass/components/Carousel.scss";

export default function Carousel(props) {
	const [current, setCurrent] = useState(0);
	const [change, setChange] = useState("current");

	const adjustCurrent = (val) => {
		const slidesLength = Object.keys(props.slides).length;
		if (val < 0) {
			val = slidesLength - 1;
		}
		if (val >= slidesLength) {
			val = 0;
		}
		setCurrent(val);
	};

	const move = (pos) => {
		setChange("current");
		adjustCurrent(current + pos);
	};

	return (
		<div className="base_carousel">
			<button
				aria-label="Previous"
				className="arrow prev div"
				onClick={() => {
					move(-1);
				}}>
				<img src={arrow_left} alt="" />
			</button>
			<button
				aria-label="Next"
				className="arrow next div"
				onClick={() => {
					move(1);
				}}>
				<img src={arrow_right} alt="" />
			</button>

			{Object.keys(props.slides).map((key, i) => (
				<div className={classnames("carousel_item", i === current ? change : "")} key={key}>
					<QuoteBlock sign={props.slides[key].sign}>{props.slides[key].text}</QuoteBlock>
				</div>
			))}
		</div>
	);
}
