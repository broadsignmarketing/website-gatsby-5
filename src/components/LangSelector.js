import React, { useEffect, useMemo, useRef, useState } from "react"
import PropTypes from "prop-types"

import langs from "@i18n/configs"
import { useL } from "@hooks/useDico"
import classnames from "classnames"
import { sanitizePath } from "@annex"

export default function LangSelector({ path }) {
	const [isActive, setIsActive] = useState(false)
	const [numberOfLanguages, setNumberOfLanguages] = useState(0)

	const l = useL()

	const langMenu = useRef(null)

	const items = useMemo(() => {
		if (T?.texts?.translations) {
			let out = []

			for (let lang of langs) {
				const { name, code } = lang
				if (code !== l && T.texts.translations[code]) {
					out.push({
						label: name,
						code: code,
						url: sanitizePath(T.texts.translations[code]),
						className: "LangSelector__link",
					})
				}
			}

			return out
		}

		return {
			en: "/",
			fr: "fr",
			es: "es",
			de: "de",
		}
	}, [T.texts])

	// console.log(T.texts.translations);

	useEffect(() => {
		if (items.length) {
			setNumberOfLanguages(items.length)
		}
	}, [items])

	const openLangSelector = evt => {
		langMenu.current.show(evt)
		setIsActive(true)
	}

	const closeLangSelector = evt => {
		langMenu.current.hide(evt)
		setIsActive(false)
	}

	if (T?.texts?.lang) {
		if (numberOfLanguages < 1) {
			return (
				<div className="LangSelector disabled align-items-stretch justify-content-center mr-0 ml-auto disabled hidden md:flex">
					<div className="LangSelector__current_lang flex align-items-center justify-content-center">
						<span className="state_normal font-regular">
							{T.translate("lang")}
						</span>
					</div>
				</div>
			)
		}

		return (
			<div
				className={classnames(
					"LangSelector flex align-items-stretch justify-content-center mr-0 ml-auto",
					isActive ? "active" : ""
				)}
				onMouseOver={evt => {
					openLangSelector(evt)
				}}
				onFocus={evt => {
					openLangSelector(evt)
				}}
				onMouseLeave={evt => {
					closeLangSelector(evt)
				}}
				onBlur={evt => {
					closeLangSelector(evt)
				}}
			>
				<div
					className={classnames(
						"LangSelector__current_lang flex align-items-center justify-content-center"
					)}
				>
					<span className="state_hover font-bold">
						{T.translate("lang")}
					</span>
					<span className="state_normal font-regular">
						{T.translate("lang")}
					</span>
				</div>
				{/* <Menu ref={langMenu} className="LangSelector__menu" model={items} popup></Menu> */}
			</div>
		)
	}

	return null
}

LangSelector.propTypes = {
	path: PropTypes.string.isRequired,
}
