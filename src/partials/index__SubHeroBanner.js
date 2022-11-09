import React, { useMemo } from "react"

import CTA from "@components/CTA"
import Link from "@components/LocalizedLink"
import Tank from "@components/Tank"

import "@sass/components/HomepageSubHeroBanner.scss"

import main_en from "@img/pages/index/sub_hero_banner_main_en.svg"

export default function index__SubHeroBanner({ to }) {
	const l = "en"

	const route = txt => {
		return txt
	}

	const text = useMemo(() => {
		const texts = {
			en: {
				overtitle: "Broadsign for System-on-Chip has arrived",
				title: "Manage smart screens — the Broadsign way",
				par: "Our intelligent ad-based content and campaign management solution is now available for system-on-chip. Get more revenue, scalability and flexibility from your network of smart screens.",
				cta: "Find out more!",
			},
			fr: {
				overtitle: "Broadsign pour système sur puce est là",
				title: "La gestion de l'affichage à système sur puce signée Broadsign",
				par: "Notre solution intelligente de gestion de contenu et de campagnes publicitaires est maintenant offerte pour les systèmes sur puce. Tirez plus de revenus de votre réseau d'écrans intelligents tout en augmentant son extensibilité et sa flexibilité.",
				cta: "Apprenez-en davantage!",
			},
			es: {
				overtitle: "Llegó Broadsign para SoC",
				title: "Gestione pantallas con sistema en chip, a la manera de Broadsign",
				par: "Nuestra solución inteligente de contenido basado en publicidad y gestión de campañas ahora está disponible para sistema en chip. Obtenga mayores ingresos, adaptabilidad y flexibilidad de su red de pantallas inteligentes.",
				cta: "¡Descubra más!",
			},
			de: {
				overtitle: "Broadsign für SoC ist da",
				title: "Verwalten Sie System-on-Chip-Displays - mit der Broadsign-Methode",
				par: "Unsere intelligente werbebasierte Content- und Kampagnenmanagementlösung ist jetzt auch für System-on-Chip verfügbar. Holen Sie mehr Umsatz, Skalierbarkeit und Flexibilität aus Ihrem Netzwerk von Smart Screens.",
				cta: "Mehr herausfinden",
			},
		}

		return texts[l] || texts.en
	}, [l])

	return (
		<Link className="Tank HSHB theme_carolina" to={route("systemOnChip")}>
			<img className="main" src={main_en} />
			<span className="inner">
				<span className="subtitle-1 gradient inline-block m-0">
					{text.overtitle}
				</span>
				<p className="title mt-0 font-bold">{text.title}</p>
				<p className="description">{text.par}</p>
				<span className="CTA blue pill">{text.cta}</span>
			</span>
		</Link>
	)
}
