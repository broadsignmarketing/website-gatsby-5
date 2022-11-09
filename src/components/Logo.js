import React, { useMemo } from "react";
import classnames from "classnames";

export default function Logo({ id, className, style, alt = "", title = "" }) {
	const logoShape = useMemo(() => {
		const squares = [
			"acura",
			"adelphic",
			"adomni",
			"carrefour",
			"citroen",
			"cleardm",
			"elan",
			"flix",
			"frito_lay",
			"global",
			"hmn",
			"honda",
			"lightbox",
			"mazda",
			"mediamath",
			"nissan",
			"plaxma",
			"publicis",
			"shell",
			"sito",
			"sito",
			"tps",
			"unilever",
			"viadirect",
			"vgi",
			"volkswagen",
			"warner_brothers",
			"ymca",
		];

		const wides = [
			"active_agent",
			"auchan",
			"cartology",
			"intersection",
			"lumo",
			"nickelodeon",
			"omnicom",
			"platform161",
			"sainsburys",
			"screenfeed",
			"starlite",
			"taptap",
			"tesco",
			"westjet",
		];

		// Look for square logos
		if (
			squares.find((imgID) => {
				const searchFormatRegExp = new RegExp(`${imgID}(_(white|grey))?`);
				if (id.match(searchFormatRegExp)) {
					return true;
				}
				return false;
			})
		) {
			return "square";
		}

		// Look for wide logos
		if (
			wides.find((imgID) => {
				const searchFormatRegExp = new RegExp(`${imgID}(_(white|grey))?`);
				if (id.match(searchFormatRegExp)) {
					return true;
				}
				return false;
			})
		) {
			return "wide";
		}

		return "regular";
	}, [id]);

	const format = useMemo(() => {
		const pngs = [
			"aclub",
			"adelphic",
			"adomni",
			"aform",
			"amobee",
			"amplifi",
			"aquick",
			"arrow",
			"asiaray",
			"aspace",
			"avixa",
			"bidtheatre",
			"bitposter",
			"blue_bite",
			"bo",
			"caasie",
			"cartology",
			"clearchannel",
			"cleardm",
			"cleardm_symbol",
			"clubdm",
			"display_video_360",
			"displayce",
			"dsf",
			"elan",
			"fepe",
			"fivetier",
			"flix",
			"form_srping_2019_logo",
			"frito_lay",
			"g2d",
			"global",
			"google_ad_manager",
			"gpo_vallas",
			"gv",
			"infini",
			"juice_cover",
			"laysa",
			"lemma",
			"lightbox_dark",
			"lumo",
			"magnite",
			"massiva",
			"mediamath",
			"moving_walls",
			"mp",
			"oh",
			"omnicom",
			"oohmedia",
			"ooh_orange",
			"outcome_health",
			"outfront",
			"pattison",
			"plan_b",
			"plaxma",
			"publicis",
			"public_mobile",
			"pulsepoint",
			"qms",
			"quividi",
			"rajawali",
			"rtbmarkt",
			"rzk_digital",
			"sage_archer",
			"sawa",
			"scoota",
			"screenfeed",
			"shopper",
			"shuttle",
			"sito",
			"splash_cover",
			"starlite",
			"taptap",
			"the_keg",
			"the_neuron",
			"tint",
			"tmtfactory",
			"tps",
			"ubimo",
			"urbaniq",
			"vgi",
			"viadirect",
			"vmo",
			"westfield",
			"xite",
		];

		if (
			pngs.find((imgID) => {
				const searchPNGsRegExp = new RegExp(`^${imgID}(_(white|grey|reflex))?$`);
				if (id.match(searchPNGsRegExp)) {
					return true;
				}
				return false;
			})
		) {
			return "png";
		}

		return "svg";
	});

	const alts = require("../assets/logos_alts.json");
	const pureID = id.replace(/(_white|_grey|_reflex)/g, "");

	if (alts[pureID]) {
		if (title === "") {
			title = alts[pureID];
		}

		if (alt === "") {
			alt = `${alts[pureID]} Logo`;
		}
	}

	return (
		<div className={classnames("logo", id, `id_${pureID}`, className, "shape_" + logoShape)} style={style}>
			<img src={`/img/logos/${id}.${format}`} className={id} width="160" height="80" alt={alt} title={title} loading="lazy" />
		</div>
	);
}
