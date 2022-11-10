import React, { useCallback, useEffect, useState } from "react";
import { useL } from "@hooks/useDico";
import { Helmet } from "react-helmet";

export default function NavReducer({ path }) {
	const [reducedNav, setReducedNav] = useState(false);
	const l = useL();

	const handleScroll = useCallback(() => {
		if (typeof window !== "undefined") {
			if (window.scrollY > 400 && !reducedNav) {
				setReducedNav(true);
			} else if (window.scrollY < 400 && reducedNav) {
				setReducedNav(false);
			}
		}
	}, [reducedNav]);

	useEffect(() => {
		if (typeof window !== "undefined") {
			window.addEventListener("scroll", handleScroll, { passive: true });

			handleScroll();

			return () => {
				window.removeEventListener("scroll", handleScroll);
			};
		}
	}, [reducedNav]);

	return (
		<Helmet>
			<html lang={l} data-reduced-nav={reducedNav} />
		</Helmet>
	);
}
