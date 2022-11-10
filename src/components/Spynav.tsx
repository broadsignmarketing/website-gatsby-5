import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import classnames from "classnames";

import { Link as ScrollLink } from "react-scroll";

import "@sass/components/Spynav.scss";

type Breakpoint = "none" | "xs" | "sm" | "md" | "lg" | "xl";
type Section = { id: string; label: string; element: Element; coords: DOMRect };
type EmptySection = { id: string; label: string };

interface SpynavProps {
	className: string;
	id: string;
	sections: Section[];
	default: string;
	breakpoint: Breakpoint;
}

interface DeviceSpynavProps {
	className: string;
	id: string;
	sections: Section[];
	spyingSection: string;
}

function MobileSpynav({ id, className, sections, spyingSection }: DeviceSpynavProps) {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	function toggleIsOpen() {
		setIsOpen(!isOpen);
	}

	let spyingSectionObject: EmptySection | Section = { id: "", label: "Careers" };
	if (spyingSection !== "") {
		spyingSectionObject = sections.find((s) => s.id === spyingSection) || spyingSectionObject;
	}

	return (
		<div id={id} className={classnames("Spynav", "mobile", isOpen ? "active" : "", className)} role="navigation">
			<div className="container">
				<div className="btn_wrapper">
					{sections.map((section) => (
						<button onClick={() => toggleIsOpen()} className={classnames(spyingSection === section.id ? "active" : "")} key={section.id}>
							{section.label}
						</button>
					))}
				</div>
				<ul className={classnames("subnav")}>
					{sections.map((section) => (
						<li className={classnames("spylink", `spylink_${section.id}`, spyingSection === section.id ? "active" : "")} key={section.id}>
							<ScrollLink to={section.id} spy={true} smooth={true} duration={600} offset={-80} onClick={() => setIsOpen(false)}>
								{section.label}
							</ScrollLink>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

function DesktopSpynav({ id = "", className = "", sections = [], spyingSection = "" }: DeviceSpynavProps) {
	const selfRef: React.MutableRefObject<HTMLDivElement | null> = useRef(null);

	const repositionSpyBar = useCallback((): void => {
		if (selfRef?.current?.style && typeof document !== "undefined") {
			const HeaderPos = Math.max((document.querySelector("header.Header") as HTMLElement).getBoundingClientRect().x, 0);
			(selfRef.current.style as React.CSSProperties).left = `${HeaderPos}px`;
		}
	}, [selfRef]);

	useEffect(() => {
		if (typeof window !== "undefined") {
			window.addEventListener("resize", repositionSpyBar);
			repositionSpyBar();

			return () => {
				window.removeEventListener("resize", repositionSpyBar);
			};
		}
	}, []);

	return (
		<div id={id} className={classnames("Spynav", "desktop", className)} role="navigation" ref={selfRef}>
			<div className={`container active_${spyingSection}`}>
				{sections.map((section) => (
					<div className={classnames("spylink", `spylink_${section.id}`, spyingSection === section.id ? "active" : "")} key={section.id}>
						<ScrollLink to={section.id} spy={true} smooth={true} duration={600} offset={-120}>
							{section.label}
						</ScrollLink>
					</div>
				))}
			</div>
		</div>
	);
}

export default function Spynav({ id = "", className = "", sections = [], defaultValue = "", breakpoint = "sm" }: SpynavProps) {
	const [spyingSection, setSpyingSection] = useState<string>(defaultValue);

	const markSpyableAsActive = useCallback((sectionID: string): void => {
		// Give the class "active" to the section currently being spied.
		// If it's the first time scrolling to that section, also give it the "scrolled" class.
		const allSpyables = document.querySelectorAll(".spyable");
		for (let spyable of allSpyables) {
			if (Object.values(spyable.classList).includes(sectionID)) {
				spyable.classList.add("active");
				spyable.classList.add("scrolled");
			} else {
				spyable.classList.remove("active");
			}
		}
	}, []);

	const handleScroll = useCallback((): void => {
		function getSpyLine() {
			// The amount of scrolling required to consider the section as "spying".
			// Here by default the section is "spying" after scrolling up half of the screen
			return window.innerHeight * 0.5;
		}

		function getSectionID(element: Element): string {
			if (element.classList) {
				return Array.from(element.classList).find((c) => !c.match(/TODO|container|spy|scrolled/));
			}
			return "";
		}

		function getAllSpyableSections() {
			return Array.from(document.querySelectorAll(".spyable")).map((element) => ({
				id: getSectionID(element),
				element,
				coords: element.getBoundingClientRect(),
			}));
		}

		if (typeof document !== "undefined") {
			const spyLine = getSpyLine();
			const allSpyableSections = getAllSpyableSections();
			allSpyableSections.forEach((section: Section): void => {
				if (section.coords.top < spyLine && section.coords.bottom > spyLine) {
					setSpyingSection(section.id);
				}
			});
		}
	}, []);

	useEffect(() => {
		if (typeof window !== "undefined") {
			window.addEventListener("scroll", handleScroll, { passive: true });

			return () => {
				window.removeEventListener("scroll", handleScroll);
			};
		}
	}, []);

	useEffect(() => {
		markSpyableAsActive(spyingSection);
	}, [spyingSection]);

	return (
		<>
			<MobileSpynav id={id} className={className} sections={sections} spyingSection={spyingSection}></MobileSpynav>
			<DesktopSpynav id={id} className={className} sections={sections} spyingSection={spyingSection}></DesktopSpynav>
		</>
	);
}
