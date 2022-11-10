import React, { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

import PropTypes from "prop-types"
import classnames from "classnames"
import { getTranslations, strIs } from "@assets/annex"

import HubSpotForm from "react-hubspot-form"
import Loading from "./Loading"

import "@sass/components/Form.scss"

export default function Form({
	className,
	form,
	bg,
	fields,
	redirectUrl,
	onSubmit,
	thankYouMessage,
	hidePlaceholders,
}) {
	const data = useStaticQuery(graphql`
		query formComponentQuery {
			site {
				siteMetadata {
					siteUrl
				}
			}
		}
	`)

	const [loaded, setLoaded] = useState(false)

	const l = T.translate("key") || "en"

	const debug = process.env.DEBUG_FORMS || false

	const formIDs = getTranslations(`${l}/components/Form`)

	const campaignIDs = useMemo(() => {
		try {
			const out = require("../assets/salesforce_campaigns.json")
			return out
		} catch (e) {
			console.error(e)
		}

		return []
	}, [])

	const formId = useMemo(() => {
		if (strIs(form, "formID")) {
			return form
		}

		try {
			return formIDs[form]
		} catch (e) {
			if (form.match(/form/)) {
				console.error(
					`Error : formId seems to lack a translation (${formId}) in /components/Form.js. Either verify that the ID is correct, or it might be worth trying a hard rebuild of the site if the translation files have failed to update.`
				)
			}

			console.error(`Cannot find form id ${form}`)
		}

		return ""
	}, [form])

	const sfCampaignId = useMemo(() => {
		if (
			campaignIDs &&
			campaignIDs[form] &&
			strIs(campaignIDs[form], "sfCampaignID")
		) {
			return campaignIDs[form]
		}

		return ""
	}, [form])

	const wrapperID = useMemo(() => {
		const uid = Math.ceil(Math.random() * 1000000)
		return `form-wrapper-${formId}-${uid}`
	}, [formId])

	const redirect = useMemo(() => {
		if (!onSubmit && redirectUrl) {
			let domain = "https://broadsign.com"
			if (
				data &&
				data.site &&
				data.site.siteMetadata &&
				data.site.siteMetadata.siteUrl
			) {
				domain = data.site.siteMetadata.siteUrl.replace(/\/$/, "")
			}

			return `${domain}/${redirectUrl.replace(/^\//, "")}`
		}

		return ""
	}, [data, redirectUrl])

	const tyMsg = thankYouMessage || undefined

	const formFieldErrorHandler = field => {
		let p = field.parentNode.parentNode

		setTimeout(() => {
			if (Object.values(field.classList).indexOf("error") >= 0) {
				p.classList.add("error")
			} else {
				p.classList.remove("error")
			}

			let f = document.getElementsByClassName("field")
			for (let c = 0; c < f.length; c++) {
				f[c].classList.remove("error")
			}

			let errorMsgs = document.getElementsByClassName("hs-error-msgs")
			for (let b = 0; b < errorMsgs.length; b++) {
				let m = errorMsgs[b]
				if (
					Object.values(m.parentNode.classList).indexOf("field") >= 0
				) {
					m.parentNode.classList.add("error")
				}

				let a = m.querySelector("label a")
				if (a && a.innerHTML.match(/opt back in/)) {
					a.classList.add("resubscribe_error")
				}
			}
		}, 300)
	}

	const formFieldChangeHandler = field => {
		let p = field.parentNode.parentNode
		if (field.value !== "" && field.value.length > 0) {
			p.classList.add("field_not_empty")
		} else {
			p.classList.remove("field_not_empty")
		}
	}

	const formFieldFocusHandler = field => {
		let p = field.parentNode.parentNode
		p.classList.add("field_focused")
	}

	const formFieldBlurHandler = field => {
		let p = field.parentNode.parentNode
		p.classList.remove("field_focused")
	}

	const hideHidden = () => {
		/*
			This very inaptly named function ensures that all "hidden" fields are actually hidden, and don't have
			leftover margins or whatnot. This is necessary since the CSS :visible selector doesn't actually exist.
		*/

		const _forms = document.querySelectorAll(".hsForm_" + formId)

		for (const form of _forms) {
			const fields = form.querySelectorAll(".field")

			for (let field of fields) {
				const fieldset =
					field.parentNode.nodeName === "FIELDSET"
						? field.parentNode
						: false
				if (fieldset) {
					if (field.style.display === "none") {
						fieldset.classList.add("m-0")
						fieldset.classList.add("p-0")
					} else {
						fieldset.classList.remove("m-0")
						fieldset.classList.remove("p-0")
					}
				}
			}
		}
	}

	const onFormSubmitAction = useCallback(event => {
		try {
			if (onSubmit) {
				onSubmit()
			}
		} catch (e) {
			console.log(event)
		}
	}, [])

	const initiateListeners = () => {
		const s = document.querySelector(`#hsForm_${formId}`)

		if (s) {
			if (onFormSubmitAction) {
				s.addEventListener("submit", event => {
					const checkErrorsAndSubmit = () => {
						let errors = false

						if (!!document.querySelector(".hs-form-field.error")) {
							errors = true
						}

						if (!!document.querySelector(".hs-error-msgs")) {
							errors = true
						}

						if (false === errors) {
							onFormSubmitAction(event)
						}
					}

					setTimeout(checkErrorsAndSubmit, 400)
				})
			}

			let f = s.querySelectorAll("input, select, textarea")

			for (let a = 0; a < f.length; a++) {
				if (f[a].value !== "") {
					formFieldChangeHandler(f[a])
				}
				f[a].addEventListener("change", event => {
					formFieldChangeHandler(event.target)
					formFieldErrorHandler(event.target)
				})
				f[a].addEventListener("focus", event => {
					formFieldFocusHandler(event.target)
				})
				f[a].addEventListener("blur", event => {
					formFieldBlurHandler(event.target)
				})
				f[a].addEventListener("invalid", event => {
					formFieldErrorHandler(event.target)
				})

				new MutationObserver(event => {
					formFieldErrorHandler(event[0].target)
				}).observe(f[a], {
					attributes: true,
					attributeFilter: ["class"],
					childList: false,
					characterData: false,
				})
			}
		}
	}

	const hideFieldPlaceholders = useMemo(() => {
		return hidePlaceholders || false
	}, [hidePlaceholders])

	useEffect(() => {
		setLoaded(true)
	}, [])

	if (formId === "") {
		return null
	}

	const hsFormProps = {
		portalId: "297064",
		formId: formId,
		target: `#${wrapperID}`,
		sfdcCampaignId: sfCampaignId !== "" ? sfCampaignId : undefined,
		onReady: f => {
			initiateListeners()
			hideHidden()
		},
		redirectUrl: redirect !== "" ? redirect : undefined,
		inlineMessage:
			tyMsg === "delete" ? undefined : tyMsg !== "" ? tyMsg : undefined,
	}

	return (
		<div
			id={wrapperID}
			className={classnames(
				"Form",
				className,
				`bg_${bg}`,
				`fields_${fields}`,
				loaded ? "loaded" : "",
				hideFieldPlaceholders ? "hide_placeholders" : ""
			)}
			data-form-id={debug ? formId : ""}
			data-campaign-id={debug ? sfCampaignId : ""}
			data-redirect-url={debug ? redirect : ""}
			data-thank-you-msg={debug ? tyMsg : ""}
		>
			<Loading />
			<HubSpotForm {...hsFormProps} />
		</div>
	)
}

Form.propTypes = {
	className: PropTypes.string,
	form: PropTypes.string.isRequired,
	bg: PropTypes.string.isRequired,
	fields: PropTypes.string.isRequired,
	redirectUrl: PropTypes.string,
	dspPage: PropTypes.string,
}
