import React from "react";
import { GatsbyImage as Img } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import classnames from "classnames";
import "@sass/components/EventBox.scss";

import chevron from "@img/controls/chevron_right_teal.svg";

export default function EventBox({ id, className, headerImg, startDate, endDate, title, location, description, ctaText, lang }) {
	const scrollToAnchor = (target, chosenEvent) => {
		function doEvent(obj, name) {
			let event;
			try {
				event = new Event(name, { target: obj, bubbles: true });
				return obj ? obj.dispatchEvent(event) : false;
			} catch (e) {
				event = document.createEvent("Event");
				event.initEvent(name, true, true);
				obj.dispatchEvent(event);
			}
		}

		let to = document.getElementsByName(target);
		if (to.length) {
			window.scrollTo({
				behavior: "smooth",
				left: 0,
				top: to[0].offsetTop,
			});
		}

		/* On this page, scrolling to the bottom form also has the perk of preselecting the event that was clicked. */

		const select = document.querySelector("#shin_form .hs_event_interest select");
		let preselect = select.options;
		if (preselect.length) {
			for (let x = 0; x < preselect.length; x++) {
				preselect[x].selected = false;
				if (preselect[x].value === chosenEvent) {
					preselect[x].selected = true;
				}
			}

			doEvent(select, "change");
			doEvent(select, "input");
			doEvent(select, "blur");
		}
	};

	const getHeaderDate = (start) => {
		const d = new Date(start);
		const day = d.getDate();
		const month = d.toLocaleString(lang, { month: "short" }).replace(/\./g, "");

		return (
			<div className="date">
				<span className="day">{day}</span>
				<span className="month">{month}</span>
			</div>
		);
	};

	const getHullDates = (start, end) => {
		const a = new Date(start);
		const b = new Date(end);

		const dayA = a.getDate();
		const dayB = b.getDate();

		const monthA = a.toLocaleString(lang, { month: "long" });
		const monthB = b.toLocaleString(lang, { month: "long" });

		const year = a.getFullYear();

		if (monthA === monthB) {
			if (dayA === dayB) {
				switch (lang) {
					case "fr":
						return dayA + " " + monthA + " " + year;
					case "en":
					default:
						return monthA + " " + dayA + ", " + year;
				}
			} else {
				switch (lang) {
					case "fr":
						return dayA + " - " + dayB + " " + monthA + " " + year;
					case "en":
					default:
						return monthA + " " + dayA + " - " + dayB + ", " + year;
				}
			}
		} else {
			switch (lang) {
				case "fr":
					return dayA + " " + monthA + " - " + dayB + " " + monthB + " " + year;
				case "en":
				default:
					return monthA + " " + dayA + " - " + monthB + " " + dayB + ", " + year;
			}
		}
	};

	const headerDate = getHeaderDate(startDate);
	const hullDates = getHullDates(startDate, endDate);

	return (
		<div className={classnames("EventBox", className)} id={id}>
			<div className="timeline_point">
				<div className="p1">
					<div className="p2">
						<div className="p3"></div>
					</div>
				</div>
			</div>
			<header>
				{headerDate}
				<Img image={headerImg} alt={title} />
			</header>
			<div className="hull">
				<h2 className="title">{title}</h2>
				<p className="location">{location}</p>
				<p className="date">{hullDates}</p>
				<p className="description">{description}</p>
				<p className="cta_link">
					<button onClick={() => scrollToAnchor("shin_form", title)}>
						<img src={chevron} alt="" />
						{ctaText}
					</button>
				</p>
			</div>
		</div>
	);
}

/* Add isRequired() */

EventBox.propTypes = {
	id: PropTypes.string,
	className: PropTypes.string,
	headerImg: PropTypes.object,
	startDate: PropTypes.string,
	endDate: PropTypes.string,
	title: PropTypes.string,
	location: PropTypes.string,
	description: PropTypes.string,
	ctaText: PropTypes.string,
	lang: PropTypes.string,
};
