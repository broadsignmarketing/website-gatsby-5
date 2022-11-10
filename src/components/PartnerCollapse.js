import React from "react";
import classnames from "classnames";

import Collapse from "@components/Collapse";
import Form from "@components/Form";
import Link from "@components/LocalizedLink";
import Panel from "@components/Panel";

import "@sass/components/ImgFlank.scss";

export default function PartnerCollapse({ id, src, alt, invert, className, children, form, collapseTitle, thankYouMessage, to }) {
	return (
		<div id={id} className={classnames("ImgFlank wrapperCollapse", { invert: invert }, className)}>
			<aside>
				<Link to={to}>
					<img src={src} alt={alt} />
				</Link>
			</aside>
			<Panel color="whisper" className="lead">
				{children}
				<Collapse title={collapseTitle}>
					<Form fields="boxes" bg="light" form={form} thankYouMessage={thankYouMessage || ""} />
				</Collapse>
			</Panel>
		</div>
	);
}
