import React, { useEffect, useState } from "react";
import classnames from "classnames";
import { isScreenSize } from "@annex";
import { useScreen } from "@hooks/useScreen";

import chevron from "@img/controls/chevron_down_ash.svg";

type CollapseProps = { title: string; par: string };

function Collapse({ title = "", par = "" }: CollapseProps) {
	const [isActive, setIsActive] = useState(false);

	return (
		<div className={classnames("collapse", isActive ? "active" : "")}>
			<p
				className="q text-reflex flex align-items-center justify-content-between my-3"
				onClick={() => {
					setIsActive(!isActive);
				}}>
				{title}
				<span className="unfold">
					<img src={chevron} />
				</span>
			</p>
			<p className="a text-ash">{par}</p>
		</div>
	);
}

export default function Inventory__Why({ className = "", elements = [] }) {
	const [activeTab, setActiveTab] = useState("0");
	const isMobile = useScreen();

	if (isMobile) {
		return (
			<div className={classnames("Inventory__Why bg-alice rounded-xl overflow-hidden py-4 px-5 mt-5", className)}>
				{elements.map((el, k) => (
					<Collapse title={el.title} par={el.par} key={k} />
				))}
			</div>
		);
	}

	return (
		<div className={classnames("Inventory__Why mt-18", className)}>
			<div className="grid flex-nowrap justify-content-around">
				{elements.map((el, k) => (
					<button
						className={classnames(
							"Inventory__Why__tab div text-reflex text-16 py-2 mx-4",
							`blah_${k}_${activeTab}`,
							String(k) === activeTab ? "active" : ""
						)}
						onClick={() => setActiveTab(String(k))}
						key={k}>
						{el.title}
					</button>
				))}
			</div>
			<div className="relative mt-18 bg-alice rounded-xl">
				{elements.map((el, k) => (
					<div className={classnames("Inventory__Why__par px-12 py-10", String(k) === activeTab ? "active" : "")} key={k}>
						<p className="m-0">{el.par}</p>
					</div>
				))}
			</div>
		</div>
	);
}
