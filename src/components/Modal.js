import React, { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import useDelayedRender from "use-delayed-render";
import classnames from "classnames";

import "@sass/components/Modal.scss";

export default function Modal({ children, className, onClose, show = true, variant = "med" }) {
	const [isOpen, setIsOpen] = useState(false);
	const [isVisible, setIsVisible] = useState(false);

	const handleClose = useCallback(() => {
		setIsVisible(false);
		setIsOpen(false);
		onClose && setTimeout(onClose, 600);
	}, []);

	const { mounted } = useDelayedRender(isOpen, {
		exitDelay: 600,
	});

	useEffect(() => {
		setIsOpen(show);
		let isVisibleTimeout = setTimeout(() => setIsVisible(show), 50);

		return () => {
			clearTimeout(isVisibleTimeout);
		};
	}, [show]);

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflowY = "hidden";
		} else {
			document.body.style.overflowY = "unset";
		}
	}, [isOpen]);

	return mounted
		? createPortal(
				<div className={classnames("Modal", `variant_${variant}`, isVisible ? "visible" : "", className)}>
					<div role="button" className="bg" onClick={handleClose} aria-hidden="true" />
					<div className="card">
						<button className="close" onClick={handleClose} aria-label="Close">
							&times;
						</button>
						{typeof children.type === "object" && children.type.hasOwnProperty("displayName") && children.type.displayName === "video"
							? React.cloneElement(children, { forceStop: true })
							: children}
					</div>
				</div>,
				document.getElementById("modal-portal")
		  )
		: null;
}
