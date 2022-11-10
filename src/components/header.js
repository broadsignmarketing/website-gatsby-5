import React, { useEffect, useState } from "react"

import classnames from "classnames"

import { useL } from "@hooks/useDico"
import { getTranslations } from "@annex"

import CTA from "@components/CTA"
import Link from "@components/LocalizedLink"
import Container from "@components/Container"
import Modal from "@components/Modal"
import DesktopNav from "@components/Nav/DesktopNav"
import MobileNav from "@components/Nav/MobileNav"
import NavReducer from "@components/Nav/NavReducer"

const Form = React.lazy(() => import("@components/Form"))
const LangSelector = React.lazy(() => import("@components/LangSelector"))

import logo_broadsign from "@img/broadsign/broadsign.svg"
import icon_log_in from "@icons/log_in_cerulean.svg"

import "@sass/components/Header.scss"

function BrandLogo() {
	return (
		<Link className="branding w-160px" to={route("index")}>
			<img
				src={logo_broadsign}
				alt="Broadsign"
				title="Broadsign"
				className="broadsign_logo"
				width="160"
				height="70"
			/>
		</Link>
	)
}

function LoginBar() {
	const [isActive, setIsActive] = useState(false)

	return (
		<div className="bg-reflex w-full align-self-start z-5">
			<Container className="flex flex-nowrap align-items-center justify-content-end py-2">
				<div
					className={classnames(
						"log_in_link",
						isActive ? "active" : ""
					)}
					onMouseEnter={() => setIsActive(true)}
					onMouseLeave={() => setIsActive(false)}
					onBlur={() => setIsActive(false)}
				>
					<button
						className="div flex flex-nowrap align-items-center"
						onMouseOver={() => setIsActive(true)}
					>
						<img className="log_in_icon" src={icon_log_in} />
						<span className="text-cerulean text-16 ml-2 line-height-100">
							{T.translate("nav.logIn")}
						</span>
					</button>
					<div
						className={classnames(
							"log_in_collapse bg-white absolute flex flex-column overflow-hidden shadow-B rounded-xl px-6",
							isActive ? "active py-5" : ""
						)}
					>
						<Link
							to="https://buy.broadsign.com/"
							className="flex flex-nowrap align-items-center text-14 text-ash py-2 hover:text-reflex"
						>
							<span>{T.translate("nav.broadsignAds")}</span>{" "}
							<span className="tag bg-campsite-green text-12 text-white font-reguler uppercase rounded-md px-3 py-1">
								{T.translate("nav.formerlyCampsite")}
							</span>
						</Link>
						<Link
							to="https://broadsign.force.com/"
							className="flex flex-nowrap align-items-center text-14 text-ash py-2 hover:text-reflex"
						>
							{T.translate("nav.broadsignCommunity")}
						</Link>
					</div>
				</div>
			</Container>
		</div>
	)
}

export default function Header({ path }) {
	const [showContactUsModal, setShowContactUsModal] = useState(false)
	const [hasSpynav, setHasSpynav] = useState(false)

	useEffect(() => {
		if (document.querySelector(".Spynav")) {
			setHasSpynav(true)
		}
	}, [])

	return (
		<header
			sitetitle="Broadsign"
			className={classnames("Header", hasSpynav ? "has_spynav" : "")}
		>
			<NavReducer />
			<LoginBar></LoginBar>
			<Container className="grid flex-nowrap align-items-center justify-content-between my-0 z-1 md:hidden">
				<BrandLogo></BrandLogo>
				<MobileNav
					setShowContactUsModal={val => setShowContactUsModal(val)}
				></MobileNav>
			</Container>
			<Container className="hidden grid flex-nowrap align-items-center justify-content-between my-0 z-1 md:flex">
				<BrandLogo></BrandLogo>
				<DesktopNav></DesktopNav>
				<React.Suspense>
					<LangSelector path={path}></LangSelector>
				</React.Suspense>
				<CTA
					className="contact_us bg-reflex text-white text-14 line-height-100 pill hover:bg-cerulean overflow-visible nowrap uppercase px-5 py-2 hidden md:inline-flex"
					onClick={() => setShowContactUsModal(true)}
				>
					{T.translate("nav.contactUs")}
				</CTA>
			</Container>
			{showContactUsModal && (
				<Modal
					id="contact_us_popup"
					className="contact_us_form submit_teal"
					variant="form"
					onClose={() => setShowContactUsModal(false)}
				>
					<React.Suspense>
						<Form
							form={T.translate("contactUsFormID")}
							fields="boxes"
							bg="light"
							redirectUrl={route("thankYouContact")}
						></Form>
					</React.Suspense>
				</Modal>
			)}
		</header>
	)
}
