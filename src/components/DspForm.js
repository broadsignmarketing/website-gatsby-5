import React from "react"

import Column from "@components/Column"
import Form from "@components/Form"
import Row from "@components/Row"
import Tank from "@components/Tank"

import "@sass/components/DspForm.scss"

export default function DspForm({
	title,
	tagline,
	bg = "dark",
	formImg,
	dspPage,
	domain,
	variant,
}) {
	return (
		<div className="DspForm">
			<Tank div className="form_zone">
				<Row>
					<Column className="image_container">
						{formImg === "dspLunchAndLearn" ? (
							<img className="lunch" src={formImg} alt="" />
						) : (
							<img className="ebook" src={formImg} alt="" />
						)}
					</Column>
					<Column className="form_container">
						<h3>{title}</h3>
						<p>{tagline}</p>
						<Form
							fields="lines"
							bg={bg}
							form={form}
							campaign="7010L000001EhFkQAK"
							dspPage={dspPage}
							domain={domain}
						/>
					</Column>
				</Row>
			</Tank>
		</div>
	)
}
