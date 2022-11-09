import React, { useMemo } from "react"
import { useStaticQuery, graphql } from "gatsby"

// import {GatsbyImage as Img} from "gatsby-plugin-image";
import Link from "@components/LocalizedLink"
import Tank from "@components/Tank"

import "@sass/components/HomepageSubHeroBanner.scss"

import main from "@img/ui/homepage_sub_hero_banner_main.svg"

export default function index__SubHeroBanner({ to }) {
	const l = useMemo(() => {
		let out = T.translate("key")
		return out === "key" ? "en" : out
	}, [])

	const text = useMemo(() => {
		const texts = {
			en: {
				title: "Influence buying decisions with contextual storytelling",
				par: "Create an innovative and unique shopping experience for customers while delivering impactful impressions for branded goods",
				cta: "Find out more!",
			},
			fr: {
				title: "Influencez les décisions d'achat grâce à la narration contextuelle",
				par: "Créez une expérience d'achat innovante et unique pour vos clients tout en offrant des impressions percutantes pour les produits de marque.",
				cta: "En savoir plus",
			},
			es: {
				title: "Influya en las decisiones de compra con narraciones contextuales",
				par: "Cree una experiencia de compra innovadora y única para los clientes, al mismo tiempo que se ofrecen impresiones impactantes para los productos de marca.",
				cta: "Aprende más",
			},
		}

		return texts[l] || texts.en
	}, [l])

	return (
		<Link className="Tank HSHB" to={to}>
			<img className="main" src={main} alt="" />
			<span className="inner">
				<p className="title">{text.title}</p>
				<p>{text.par}</p>
				<p className="cta">{text.cta}</p>
			</span>
		</Link>
	)
}
