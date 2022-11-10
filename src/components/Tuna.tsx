import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useReducedMotion } from "@hooks/useReducedMotion";
import classnames from "classnames";
import { screenSize } from "@annex";

import "@sass/components/Tuna.scss";

interface TunaProps {
	className: string;
	id: string;
	shift: number;
	blockScreenSizes: string[];
	children: Object;
}

export default function Tuna({ id = "", className = "", shift = 0, blockScreenSizes = [], children }: TunaProps) {
	const [position, setPosition] = useState({ top: "0", transform: "none" });
	const prefersReducedMotion = useReducedMotion();

	const selfRef = useRef<HTMLDivElement>(null);

	const isMovePrevented = useCallback(() => {
		// Do not do the animation if the user prefers lesser motion
		if (prefersReducedMotion) {
			return true;
		}

		// Do not do the animation on blocked screen sizes
		if (blockScreenSizes.includes(screenSize())) {
			return true;
		}

		return false;
	}, []);

	const move = useCallback(() => {
		if (isMovePrevented()) {
			return;
		}

		if (selfRef.current) {
			const parent: ParentNode = selfRef.current.parentNode!;
			const parentRect: DOMRect = (parent as HTMLElement).getBoundingClientRect();

			const viewTop: number = window.scrollY;
			const viewBottom: number = viewTop + window.innerHeight;
			const elementTop: number = parentRect.top + viewTop;
			const elementBottom: number = elementTop + parentRect.height;

			if (viewTop <= elementBottom && viewBottom > elementTop) {
				if (parent) {
					const percentPassed = Math.round(((viewBottom - elementTop) / (window.innerHeight + parentRect.height)) * 100);

					const top = `calc(${100 - percentPassed + ((50 - percentPassed) * shift) / 50}vh + 40px)`;
					const transform = `translateY(${-percentPassed}vh)`;

					setPosition({ top, transform });
				}
			}
		}
	}, []);

	useEffect(() => {
		if (typeof window !== "undefined") {
			window.addEventListener("scroll", move, { passive: true });

			move();

			return () => {
				window.removeEventListener("scroll", move);
			};
		}
	}, []);

	return (
		<div ref={selfRef} id={id} className={classnames("Tuna", className)} style={position}>
			{children}
		</div>
	);
}
