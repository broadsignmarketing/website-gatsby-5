import React, { useEffect, useRef, useState } from "react";
import classnames from "classnames";

import "@sass/components/LogosMarkup.scss";

interface LogosMarkupProps {
	id?: string;
	className?: string;
	speed: number;
	logos: any;
}

export default function LogosMarkup({ id = "", className = "", speed = 1000, logos }: LogosMarkupProps) {
	const [isVisible, setIsVisible] = useState(true);
	const selfRef = useRef(null);

	useEffect(() => {
		function detectIsVisible() {
			if (typeof window !== "undefined" && selfRef?.current) {
				if (selfRef.current.getBoundingClientRect().top <= window.innerHeight && selfRef.current.getBoundingClientRect().bottom > 0) {
					if (!isVisible) {
						setIsVisible(true);
					}
				} else {
					if (isVisible) {
						setIsVisible(false);
					}
				}
			}
		}

		detectIsVisible();

		if (typeof window !== "undefined") {
			window.addEventListener("scroll", detectIsVisible, { passive: true });

			return () => {
				window.removeEventListener("scroll", detectIsVisible);
			};
		}
	}, [isVisible]);

	useEffect(() => {
		const interval = setInterval(() => {
			if (isVisible && typeof document !== undefined && selfRef?.current) {
				const firstLogo = selfRef.current.querySelector(".logo:first-child");

				if (firstLogo.dataset.size > 0) {
					const newSize = parseFloat(firstLogo.dataset.size) - 0.2;
					const _marginRight = `calc(min(${(newSize / 41) * 14}vw, ${(newSize / 41) * 80}px))`;
					firstLogo.dataset.size = newSize;
					firstLogo.style.maxHeight = `${newSize}px`;
					firstLogo.style.marginRight = _marginRight;
				} else {
					const markup = selfRef.current.querySelector(".LogosMarkup_grid");
					firstLogo.remove();
					firstLogo.dataset.size = 41;
					firstLogo.style.maxHeight = "";
					firstLogo.style.marginRight = "";
					markup.appendChild(firstLogo);
				}
			}
		}, 1000 / speed);

		return () => clearInterval(interval);
	}, [isVisible]);

	return (
		<div className="LogosMarkup w-full overflow-x-hidden flex align-items-center" ref={selfRef}>
			<div id={id} className={classnames("LogosMarkup_grid grid flex-flow flex-nowrap align-items-center", className)}>
				{logos.map((logo, k) => (
					<img className="logo" data-size={41} key={k} src={logo} />
				))}
			</div>
		</div>
	);
}
