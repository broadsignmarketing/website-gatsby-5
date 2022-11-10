import React from "react";
import { GatsbyImage as Img } from "gatsby-plugin-image";
import Tank from "./Tank";

import "@sass/components/Hero.scss";
import d from "@img/broadsign/broadsign_icon.svg";

export default function ProductHero({ id, personImg, img, children }) {
	return (
		<section className="Hero product">
			{img && <Img alt="" image={img} className="bg" alt="" />}
			{personImg && <Img alt="" placeholderClassName="not-yet-loaded" image={personImg} className="person" alt="" />}
			<img src={d} className="d" alt="" />
			<Tank div>{children}</Tank>
		</section>
	);
}
