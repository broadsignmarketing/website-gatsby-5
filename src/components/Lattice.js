import React from "react";
import "@sass/components/Lattice.scss";

export function Lattice({ children, id }) {
	return (
		<div id={id} className="Lattice">
			{children}
		</div>
	);
}

export function LatticePane({ children, id }) {
	return (
		<div id={id} className="Pane">
			{children}
		</div>
	);
}
