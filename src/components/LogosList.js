import React, { useEffect, useMemo, useState } from "react";
import Logo from "./Logo";
import Tank from "./Tank";
import classnames from "classnames";
import PropTypes from "prop-types";
import { shuffle } from "@assets/annex";

import "@sass/components/LogosList.scss";

export default function LogosList({
	id,
	className,
	list,
	title,
	tagline,
	length = 15,
	variation = "",
	columns = false,
	display = "rotate",
	randomized = true,
	children,
}) {
	const [displayedLogos, setDisplayedLogos] = useState([]);
	const [unusedLogos, setUnusedLogos] = useState([]);
	const [inc, setInc] = useState(0);
	const [indexesOrder, setIndexesOrder] = useState(0);

	const logos = useMemo(() => {
		let out = [];
		switch (list) {
			case "brands":
				out = [
					"bmo",
					"frito_lay",
					"general_mills",
					"ikea",
					"jaguar",
					"loblaws",
					"mcdonalds",
					"mobilia",
					"nissan",
					"public_mobile",
					"redbull",
					"tangerine",
					"td_bank",
					"telus",
					"the_keg",
					"warner_brothers",
					"ymca",
				];
				break;
			case "campsite":
				out = ["acura", "amplifi", "adviso", "cossette", "dentsu_aegis", "hellofresh", "ia_financial_group", "omnicom", "publicis", "ubisoft"];
				break;
			case "dsps":
				out = [
					"active_agent",
					"adelphic",
					"aform",
					"adobe",
					"adomni",
					"aquick",
					"amobee",
					"bidtheatre",
					"bitposter",
					"caasie",
					"displayce",
					"display_video_360",
					"fivetier",
					"hawk",
					"lemma",
					"magnite",
					"mediamath",
					"moving_walls",
					"outmoove",
					"pladway",
					"platform161",
					"pulsepoint",
					"roku",
					"rtbmarkt",
					"sage_archer",
					"scoota",
					"sito",
					"splicky",
					"taptap",
					"the_neuron",
					"the_trade_desk",
					"tps",
					"ubimo",
					"urbaniq",
					"yahoo",
				];
				break;
			case "media_buyers":
				out = [
					"acura",
					"citroen",
					"cocacola",
					"loreal",
					"honda",
					"ikea",
					"mazda",
					"nestle",
					"nickelodeon",
					"peugeot",
					"shell",
					"ubisoft",
					"ufc",
					"unilever",
					"volkswagen",
					"westjet",
				];
				break;
			case "media_owners":
				out = [
					"astral",
					"cinemark",
					"cineplex",
					"clear_channel",
					"global",
					"hmn",
					"jcd",
					"lamar",
					"outfront",
					"pattison",
					"rouge_media",
					"stingray",
					"stroer",
					"vgi",
					"dpaa",
					"iab",
					"oohmedia",
				];
				break;
			default:
				out = [];
		}

		if (variation.match(/(reflex)/)) {
			out = out.map((o) => `${o}_${variation}`);
		} else if (variation.match(/(white|grey)/)) {
			out = out.map((o) => `${o}_white`);
		}

		return out;
	}, [list, variation]);

	const siblingElements = useMemo(() => {
		return [].concat.apply([], [children]);
	}, [children]);

	const cols = useMemo(() => {
		if (columns) {
			return columns;
		} else if (children && children.length > 0) {
			// Filter out false children
			const _children = children.filter(Boolean);
			if (_children.length > 0) {
				return _children.length;
			}
		} else {
			switch (parseInt(length)) {
				case 3:
				case 9:
					return 3;
				case 4:
				case 8:
					return 4;
				case 6:
				case 12:
				case 18:
					return 6;
				case 5:
				case 15:
				case 20:
				default:
					return 5;
			}
		}
	}, [children, columns, length]);

	const db2r = useMemo(() => {
		return length % 2;
	}, [length]);

	const db3r = useMemo(() => {
		return length % 3;
	}, [length]);

	useEffect(() => {
		if (display === "rotate") {
			if (logos && logos.length > 0) {
				setDisplayedLogos(logos.slice(0, length));
				setUnusedLogos(logos.slice(length, logos.length));

				let initIndexesOrder = [];
				for (let x = 0; x < length; x++) {
					initIndexesOrder.push(x);
				}

				setIndexesOrder(shuffle(initIndexesOrder));
			}
		}

		if (display === "all") {
			if (randomized) {
				setDisplayedLogos(shuffle(logos));
			} else {
				setDisplayedLogos(logos);
			}
		}
	}, [display, logos, length]);

	useEffect(() => {
		if (display === "rotate") {
			const interval = setInterval(() => {
				if (displayedLogos.length > 5 && unusedLogos.length > 0) {
					const indexToChange = indexesOrder[inc];
					const replacement = Math.floor(Math.random() * unusedLogos.length);

					const newDisplayedLogosList = displayedLogos;
					const newUnusedLogosList = unusedLogos;

					const putLogoOnDisplay = unusedLogos[replacement];
					const putLogoOutOfDisplay = displayedLogos[indexToChange];

					newDisplayedLogosList.splice(indexToChange, 1, putLogoOnDisplay);
					newUnusedLogosList.splice(replacement, 1, putLogoOutOfDisplay);

					setDisplayedLogos(newDisplayedLogosList);
					setUnusedLogos(newUnusedLogosList);

					if (inc >= indexesOrder.length - 1) {
						setInc(0);
					} else {
						setInc(inc + 1);
					}
				}
			}, 1000);

			return () => clearInterval(interval);
		}
	}, [display, displayedLogos, unusedLogos, inc, indexesOrder]);

	if (logos.length === 0) {
		return (
			<Tank div className={classnames("LogosList", variation, className)}>
				{title && <h2 className="title">{title}</h2>}
				{tagline && <p className="tagline">{tagline}</p>}
				<div id={id} className={classnames("logos", `cols_${cols}`, `db3r_${db3r}`, `db2r_${db2r}`)}>
					{children}
				</div>
			</Tank>
		);
	}

	return (
		<Tank div className={classnames("LogosList", "animate_switch", list, variation, className)}>
			{siblingElements.length > 0 && siblingElements.filter((node) => node && node.props && node.props.before)}
			<div id={id} className={classnames("logos", `cols_${cols}`, `db3r_${db3r}`, `db2r_${db2r}`)}>
				{displayedLogos.length > 0 &&
					displayedLogos.map((logo) => {
						return <Logo id={logo} key={logo} />;
					})}
			</div>
			{siblingElements.length > 0 && siblingElements.filter((node) => node && node.props && node.props.after)}
		</Tank>
	);
}

LogosList.propTypes = {
	length: PropTypes.oneOf([3, 4, 5, 6, 8, 9, 10, 12, 15, 18, 20]),
};
