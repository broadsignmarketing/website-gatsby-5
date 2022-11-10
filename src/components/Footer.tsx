import React, { useEffect, useRef, useState } from "react";
import classnames from "classnames";
import { useL } from "@hooks/useDico";
import { getTranslations, isScreenSize } from "@assets/annex";

import Container from "@components/Container";
import { Row, Column } from "@components/Grid";
import Link from "@components/LocalizedLink";

import logo_youtube from "@logos/youtube.svg";
import logo_linkedin from "@logos/linkedin.svg";
import logo_twitter from "@logos/twitter.svg";

import "@sass/components/Footer.scss";

export default function Footer() {
	const l = useL();
	const __ = getTranslations(`${l}/components/Nav`).footer || [];

	const [activeColumn, setActiveColumn] = useState("");

	const wrapperRef = useRef(null);

	const adjustColumnHeight = () => {
		if (wrapperRef.current) {
			const activeLinksListHeight = document.querySelector(".links.active").clientHeight;
			wrapperRef.current.style.minHeight = `${activeLinksListHeight}px`;
		}
	};

	const toggleActiveColumn = (columnID) => {
		if (isScreenSize("under", "xs")) {
			setActiveColumn(columnID);
			setTimeout(adjustColumnHeight, 100);
			setTimeout(adjustColumnHeight, 600);
		}
	};

	useEffect(() => {
		if (activeColumn === "") {
			setTimeout(() => {
				toggleActiveColumn("products");
			}, 2000);
		}
	}, [activeColumn]);

	if (["en", "fr", "es", "de"].includes(l)) {
		return (
			<footer className="Footer" data-lang={l}>
				<Container tag="nav" className="footer_nav">
					<div className="wrapper" ref={wrapperRef}>
						<Row>
							{__.columns.map((col) => (
								<Column className={classnames(col.id)} key={col.id}>
									<h3 role="button" onClick={() => toggleActiveColumn(col.id)}>
										{col.label}
									</h3>
									<div className={classnames("links", activeColumn === col.id ? "active" : "")}>
										{col.links.map((el, k) => (
											<Link to={el.to} key={`${col.id}-${k}`}>
												{el.label}
											</Link>
										))}
									</div>
								</Column>
							))}
						</Row>
					</div>
				</Container>
				<div className="footer_social">
					<div className="logos">
						<Link to="https://www.youtube.com/c/Broadsignofficial">
							<img className="logo youtube" src={logo_youtube} alt="Youtube" title={__.social.youtube.title} height="30" width="40" />
						</Link>
						<Link to="https://twitter.com/Broadsign">
							<img className="logo twitter" src={logo_twitter} alt="Twitter" title={__.social.twitter.title} height="50" width="60" />
						</Link>
						<Link to="https://www.linkedin.com/company/broadsign/">
							<img className="logo linkedin" src={logo_linkedin} alt="LinkedIn" title={__.social.linkedin.title} height="30" width="30" />
						</Link>
					</div>
				</div>
			</footer>
		);
	}

	return null;
}
