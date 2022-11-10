import React, { useMemo } from "react"

import PropTypes from "prop-types"

import Link from "./LocalizedLink"

import icon_playbook from "@icons/dsp_sidenav_playbook.jpg"
import what_icon from "@img/heroes/hero_dsp_what_is_programmatic_dooh.jpg"
import add_icon from "@img/heroes/header_article_4_dsp.jpg"
import buy_icon from "@img/heroes/header_article_3_dsp_header.jpg"
import include_icon from "@img/heroes/hero_dsp_why_next_campaign_should_include_dooh.jpg"

import "@sass/components/SideBar.scss"

export default function DspSideBar({ exclude, ty_page }) {
	const l = useMemo(() => {
		let out = T.translate("key")
		return out === "key" ? "en" : out
	}, [])

	return (
		<div className="SideBar">
			<Link
				activeClass="active"
				className="anchor_button_free_trial"
				to="ebookDOOHPlaybookForProgrammaticBuyers"
			>
				<div className="download">
					<h5>Download</h5>
					<img src={icon_playbook} alt="" />
					<p>
						Everything you need to launch a programmatic DOOH
						campaign
					</p>
				</div>
			</Link>
			{ty_page ? (
				<h3>Dive deeper into programmatic digital out-of-home:</h3>
			) : (
				<h5>Read more</h5>
			)}
			<div className="dsps">
				{exclude !== "add" && (
					<div className="dsp_wrapper">
						<Link to={route("MobileDigitalOutOfHome", l)}>
							<img src={add_icon} alt="" />
							<p>
								Why you should add programmatically digital
								out-of-home to your mobile campaign
							</p>
						</Link>
					</div>
				)}
				{exclude !== "buy" && (
					<div className="dsp_wrapper">
						<Link
							to={route(
								"DigitalOutOfHomeMediaProgrammatically",
								l
							)}
						>
							<img src={buy_icon} alt="" />
							<p>
								How can I buy digital out-of-home media
								programmatically ?
							</p>
						</Link>
					</div>
				)}
				{exclude !== "what" && (
					<div className="dsp_wrapper">
						<Link to={route("whatisDOOH", l)}>
							<img src={what_icon} alt="" />
							<p>What is programmatic digital out-of-home?</p>
						</Link>
					</div>
				)}
				{exclude !== "include" && (
					<div className="dsp_wrapper">
						<Link to={route("includeDigitalOutOfHome", l)}>
							<img src={include_icon} alt="" />
							<p>
								Why your next programmatic media campaign should
								include digital out-of-home
							</p>
						</Link>
					</div>
				)}
			</div>
		</div>
	)
}

DspSideBar.propTypes = {
	exclude: PropTypes.string,
	ty_page: PropTypes.bool,
}
