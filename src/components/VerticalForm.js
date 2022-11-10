import React from "react"

import Form from "@components/Form"
import Tank from "@components/Tank"

import "@sass/components/VerticalForm.scss"

const VerticalForm = ({ children }) => {
	return (
		<section className="VerticalForm" id="VerticalForm">
			<Tank div className="form_zone">
				{children && children}
				<Form
					form="demo"
					fields="lines"
					bg="light"
					redirectUrl={route("thankYouDemo")}
					hidePlaceholders={true}
				></Form>
			</Tank>
		</section>
	)
}

export default VerticalForm
