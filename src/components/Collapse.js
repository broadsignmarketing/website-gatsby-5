import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import "@sass/components/Collapse.scss";

export default function Collapse({ className, id, title, name, children, active = false }) {
	const [open, setOpen] = useState(active);
	const [openHeight, setOpenHeight] = useState("0px");
	const collapseContent = useRef(null);

	function toggleOpen() {
		const toggle = !open;
		setOpen(toggle);
	}

	useEffect(() => {
		if (collapseContent) {
			const h = `${collapseContent.current.scrollHeight}px`;
			setOpenHeight(h);
		}
	}, [open]);

	/* 2021-02-23 - LeKevoid says : Isn't that extremely redundant ??? */
	useEffect(() => {
		if (active) {
			setOpen(true);
		}
	}, [active]);

	return (
		<div id={id} name={name} className={classnames("collapse", className, open ? "open" : "")}>
			<div className="title_container">
				<button className="div" onClick={() => toggleOpen()}>
					<h3 className="title">{title}</h3>
				</button>
			</div>
			<div className="content" ref={collapseContent} style={{ maxHeight: open ? openHeight : "0px" }}>
				{children}
			</div>
		</div>
	);
}

Collapse.propTypes = {
	className: PropTypes.string,
	id: PropTypes.string,
	title: PropTypes.string.isRequired,
};
