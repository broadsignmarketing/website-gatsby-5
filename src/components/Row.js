import React, { useMemo } from "react";
import classnames from "classnames";

import "@sass/components/Row.scss";

export default function Row(props) {
	const { id, className, children } = props;

	const colsNum = useMemo(() => {
		if (children && children.length) {
			return Object.values(children).filter((e) => e !== "").length;
		}
		return 1;
	}, [children]);

	return (
		<div className={classnames("Row", className, `cols-${colsNum}`)} id={id}>
			{children}
		</div>
	);
}
