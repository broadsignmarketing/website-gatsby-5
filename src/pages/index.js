import React, { useState } from "react";
import { graphql } from "gatsby";
import classnames from "classnames";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";

import CTA from "@components/CTA";
import Form from "@components/Form";
import Hero from "@components/Hero";
import { GatsbyImage as Img } from "gatsby-plugin-image";
import Layout from "@components/layout";
const LogosList = React.lazy(() => import("@components/LogosList"));
import Link from "@components/LocalizedLink";
import Modal from "@components/Modal";
import SubHeroBanner from "@partials/index__SubHeroBanner";
import Tank from "@components/Tank";
import VideoPoster from "@components/VideoPoster";

// const BlogPosts = React.lazy(() => import("@partials/index__BlogPosts"))
// const EBooks = React.lazy(() => import("@partials/index__EBooks"))
// const Quotes = React.lazy(() => import("@partials/index__Quotes"))

import cta_arrow_slim from "@img/pages/index/arrow_right_slim_midnightBlue.svg";
import media_buyers from "@img/pages/index/icon_media_buyers.svg";
import media_owners from "@img/pages/index/icon_media_owners.svg";

import "@sass/components/ImgFlank.scss";
import "@sass/pages/home.scss";

export default function IndexPage({ pageContext: { language, dicoPath }, location: { pathname }, data }) {
	const [openModal, setOpenModal] = useState(false);

	if (language === "cn") {
		return <Layout path={pathname} />;
	}

	const T = {
		translate: (txt) => {
			return txt;
		},
	};

	const route = (txt = "", l = "") => {
		return txt;
	};

	const { t } = useTranslation();

	console.log(data);

	return (
		<Layout path={pathname} id="home">
			<Hero>
				<Tank div>
					<div className="text">
						<h1 className="title">{t("Hero__title")}</h1>
						<p className="tagline">{t("Hero__tagline")}</p>
						<div className="ctas version_lp">
							<Link className={classnames("hero_cta", `lang_${language}`, "free_trial", "cta_lp")} to={route("freeTrial", language)}>
								<CTA className="span custom">{t("Hero__ctaFreeTrial")}</CTA>
								<CTA className="span custom arrow">
									<img src={cta_arrow_slim} height="20" width="20" alt="" />
								</CTA>
							</Link>
							<button
								className={classnames("hero_cta", `lang_${language}`, "free_trial", "cta_modal")}
								onClick={() => {
									setOpenModal(true);
								}}>
								<CTA className="span custom">{t("Hero__ctaFreeTrial")}</CTA>
								<CTA className="span custom arrow">
									<img src={cta_arrow_slim} height="20" width="20" alt="" />
								</CTA>
							</button>
						</div>
					</div>
				</Tank>
				<Img
					alt=""
					className="hero bg hidden sm:inline-block"
					image={data.Hero.childImageSharp.gatsbyImageData}
					objectPosition="center bottom"
					loading="eager"
					style={{
						bottom: "0px",
						position: "absolute",
						transformOrigin: "center bottom",
						top: "auto",
					}}
				/>
				<Img
					alt=""
					className="hero bg inline-block sm:hidden"
					image={data.HeroMobile.childImageSharp.gatsbyImageData}
					objectPosition="center bottom"
					loading="eager"
					style={{
						bottom: "0px",
						position: "absolute",
						transformOrigin: "center bottom",
						top: "auto",
					}}
				/>
			</Hero>
			{/* {language !== "es" && (
				<section className="branches Tank">
					<Link className="branch" to={route("broadsignPlatform")}>
						<img src={media_owners} className="icon" alt="Media owners" height="80" width="80" loading="lazy" />
						<div className="desc">
							<h2 className="media_type font_size_3">{t("branches.mediaOwners.title")}</h2>
							<p className="font_size_2">{t("branches.mediaOwners.p")}</p>
							<hr />
							<span className="cta text-reflex font_size_1_6 uppercase font-black">{t("branches.mediaOwners.cta")}</span>
						</div>
					</Link>
					<Link className="branch" to={route("launchPDOOHCampaign")}>
						<img src={media_buyers} className="icon" alt="Media buyers" height="80" width="80" loading="lazy" />
						<div className="desc">
							<h2 className="media_type font_size_3">{t("branches.mediaBuyers.title")}</h2>
							<p className="font_size_2">{t("branches.mediaBuyers.p")}</p>
							<hr />
							<span className="cta text-reflex font_size_1_6 uppercase font-black">{t("branches.mediaBuyers.cta")}</span>
						</div>
					</Link>
				</section>
			)} */}
			{/* <SubHeroBanner /> */}
			{/* {["es"].includes(language) && (
				<Link to={`${route("resources", "es")}?w=iem`} className="ilumina_el_mundo_banner">
					<div className="flash" />
					<div className="inner">
						<p>Conozca nuestra plataforma</p>
						<CTA className="span round cerulean">Mira Aquí</CTA>
					</div>
				</Link>
			)} */}
			{/* <VideoPoster
				title={t("videoTitle")}
				className="client_reel"
				YTid="mWA31Igrvk0"
				playBtnStyle="solid"
				bg="transparent"
				poster={data.clientReelVideoPoster.childImageSharp.gatsbyImageData}>
				<span className="client_reel_title">{t("videoTitle")}</span>
			</VideoPoster> */}
			{/* <React.Suspense>
				<Quotes></Quotes>
			</React.Suspense> */}
			{/* <React.Suspense>
				<BlogPosts posts={data.posts.nodes}></BlogPosts>
			</React.Suspense> */}
			{/* <React.Suspense>
				<EBooks></EBooks>
			</React.Suspense> */}
			{/* <React.Suspense>
				<LogosList list="media_owners" variation="grey">
					<h2 before="true" className="font_size_3_4">
						{t("logosList.title")}
					</h2>
				</LogosList>
			</React.Suspense> */}
			{/* <section className="shin">
				<Tank div>
					<CTA className="pink" to={route("freeTrial")}>
						{t("shin.freeTrial")}
					</CTA>
					<CTA className="custom" to={route("demo")}>
						{t("shin.demo")}
					</CTA>
				</Tank>
			</section> */}
			{/* {openModal && (
				<Modal variant="form" onClose={() => setOpenModal(false)}>
					<Form form="freeTrial" fields="boxes" bg="light"></Form>
				</Modal>
			)} */}
		</Layout>
	);
}

export const queryIndex = graphql`
	query ($language: String!) {
		locales: allLocale(filter: { language: { eq: $language }, ns: { in: ["index"] } }) {
			edges {
				node {
					ns
					data
					language
				}
			}
		}

		Hero: file(relativePath: { eq: "pages/index/hero_desktop.jpg" }) {
			childImageSharp {
				gatsbyImageData
			}
		}

		HeroMobile: file(relativePath: { eq: "pages/index/hero_mobile.jpg" }) {
			childImageSharp {
				gatsbyImageData
			}
		}

		clientReelVideoPoster: file(relativePath: { eq: "pages/index/poster_client_reel.jpg" }) {
			childImageSharp {
				gatsbyImageData
			}
		}
	}
`;
/*
export const queryIndex = graphql`
	query ($language: String!) {
			locales: locale(ns: { eq: "index" }, language: { eq: $language }) {
			id
			ns
			data
			language
		}

		Hero: file(relativePath: { eq: "pages/index/hero_desktop.jpg" }) {
			childImageSharp {
				gatsbyImageData
			}
		}
		HeroMobile: file(relativePath: { eq: "pages/index/hero_mobile.jpg" }) {
			childImageSharp {
				gatsbyImageData
			}
		}

		clientReelVideoPoster: file(
			relativePath: { eq: "pages/index/poster_client_reel.jpg" }
		) {
			childImageSharp {
				gatsbyImageData
			}
		}

		posts: allUberflipItem(
			limit: 2
			sort: { fields: date, order: DESC }
			filter: {
				language: { eq: $language }
				stream: { eq: "blog" }
				date: { ne: "2022-08-18" }
			}
		) {
			...ufItems
		}
	}
`
 */
