import React, { useState } from "react";
import { useL } from "@hooks/useDico";
import classnames from "classnames";
import CTA from "@components/CTA";

interface PanelProps {
	title: string;
	par: string;
	cta: string;
	onClick: Function;
}

export default function BroadsignAdsReflexPanel({ title = "", par = "", cta = "", onClick }: PanelProps) {
	const l = useL();

	const __ =
		l === "fr"
			? {
					title: "Lancez-vous avec Broadsign Ads",
					par: "Notre équipe d'experts est là pour vous aider à créer, à mettre en œuvre et à gérer vos campagnes. Après tout, notre plateforme a été créée pour l'affichage extérieur par des spécialistes de l'affichage extérieur.",
					cta: "Faisons équipe",
			  }
			: {
					title: "Get started with Broadsign Ads",
					par: "Our team of experts is here to help you create, execute, and manage campaigns. After all, our platform was built for OOH by the people who know OOH best.",
					cta: "Let's connect",
			  };

	return (
		<div className="bg-reflex rounded-xl px-5 py-8 sm:px-10">
			<div className="grid">
				<div className="col-12 sm:col-8 sm:pr-4">
					<h3 className="h4 text-white mb-3">{__.title}</h3>
					<p className="text-white m-0">{__.par}</p>
				</div>
				<div className="col-12 sm:col-4 sm:flex sm:align-items-center sm:justify-content-center">
					<CTA className="reflex text-12 pill border-white letter-spacing-10 sm:text-14" onClick={() => onClick()}>
						{__.cta}
					</CTA>
				</div>
			</div>
		</div>
	);
}
