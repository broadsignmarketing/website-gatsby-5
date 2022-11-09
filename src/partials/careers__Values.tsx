import React, { useCallback, useEffect, useMemo, useState } from "react"
import { StaticQuery, graphql } from "gatsby"

import classnames from "classnames"

import { GatsbyImage as Img } from "gatsby-plugin-image"
import { Row, Column } from "@components/Grid"
import Quote from "@components/Quote"

import values_empower from "@img/ui/careers_values_empower.svg"
import values_empower_active from "@img/ui/careers_values_empower_active.svg"
import values_great_things from "@img/ui/careers_values_great_things.svg"
import values_great_things_active from "@img/ui/careers_values_great_things_active.svg"
import values_respect from "@img/ui/careers_values_respect.svg"
import values_respect_active from "@img/ui/careers_values_respect_active.svg"
import values_right_thing from "@img/ui/careers_values_right_thing.svg"
import values_right_thing_active from "@img/ui/careers_values_right_thing_active.svg"
import values_say_do from "@img/ui/careers_values_say_do.svg"
import values_say_do_active from "@img/ui/careers_values_say_do_active.svg"

type Value = {
	icon_active: string
	icon_normal: string
	id: string
	text: string
}

interface CareersSectionValuesProps {
	values: Value[]
	onChangeValue?: Function
}

// interface ValuesSectionProps {}

function ValuesTable({ values, onChangeValue }: CareersSectionValuesProps) {
	const [activeValue, setActiveValue] = useState<string>("empower")

	const handleChangeValue = useCallback(newValue => {
		setActiveValue(newValue)
		onChangeValue(newValue)
	}, [])

	return (
		<div className="values_table">
			<Row>
				{values.map((value, k) => (
					<Column key={k}>
						<button
							className={classnames(
								"value_icon",
								"div",
								activeValue === value.id ? "active" : ""
							)}
							onClick={() => handleChangeValue(value.id)}
							onMouseOver={() => handleChangeValue(value.id)}
						>
							<img src={value.icon_normal} className="normal" />
							<img src={value.icon_active} className="active" />
						</button>
					</Column>
				))}
			</Row>
			<hr className="gradient" />
			<div className="values_descriptions">
				{values &&
					values.map((value, k) => (
						<div
							className={classnames(
								"value_description",
								activeValue === value.id ? "active" : ""
							)}
							key={k}
						>
							<span>{value.text}</span>
						</div>
					))}
			</div>
		</div>
	)
}

export default function careers__Values() {
	const [activeValue, setActiveValue] = useState<string>("empower")
	const [quote, setQuote] = useState<object[]>([])

	const values = useMemo(() => {
		if (T?.texts?.values?.list) {
			return T.texts.values.list.map(v => {
				let add = {}
				switch (v.id) {
					case "empower":
						add = {
							icon_normal: values_empower,
							icon_active: values_empower_active,
						}
						break
					case "great_things":
						add = {
							icon_normal: values_great_things,
							icon_active: values_great_things_active,
						}
						break
					case "respect":
						add = {
							icon_normal: values_respect,
							icon_active: values_respect_active,
						}
						break
					case "right_thing":
						add = {
							icon_normal: values_right_thing,
							icon_active: values_right_thing_active,
						}
						break
					case "say_do":
						add = {
							icon_normal: values_say_do,
							icon_active: values_say_do_active,
						}
						break
				}
				return { ...v, ...add }
			})
		}
		return {}
	}, [])

	useEffect(() => {
		setQuote([])
		setTimeout(() => {
			setQuote([values.find(v => v.id === activeValue).quote])
		}, 10)
	}, [activeValue])

	return (
		<StaticQuery
			query={graphql`
				query CareersValuesQuery {
					picture_empower: file(
						relativePath: { eq: "ui/careers_values_empower.jpg" }
					) {
						childImageSharp {
							gatsbyImageData
						}
					}
					picture_great_things: file(
						relativePath: {
							eq: "ui/careers_values_great_things.jpg"
						}
					) {
						childImageSharp {
							gatsbyImageData
						}
					}
					picture_respect: file(
						relativePath: { eq: "ui/careers_values_respect.jpg" }
					) {
						childImageSharp {
							gatsbyImageData
						}
					}
					picture_right_thing: file(
						relativePath: {
							eq: "ui/careers_values_right_thing.jpg"
						}
					) {
						childImageSharp {
							gatsbyImageData
						}
					}
					picture_say_do: file(
						relativePath: { eq: "ui/careers_values_say_do.jpg" }
					) {
						childImageSharp {
							gatsbyImageData
						}
					}
				}
			`}
			render={data => {
				return (
					<>
						<p className="subtitle-1 gradient text-center">
							{T.translate("values.overtitle")}
						</p>
						<h2 className="h4 text-center">
							{T.translate("values.title")}
						</h2>
						<p className="text-center">
							{T.translate("values.par")}
						</p>
						<div className="columns_wrapper">
							<div className="col left">
								{Object.values(values).length && (
									<ValuesTable
										values={values}
										onChangeValue={newValue =>
											setActiveValue(newValue)
										}
									/>
								)}
								<Img
									alt=""
									className="values_photo"
									image={
										data[`picture_${activeValue}`]
											.childImageSharp.gatsbyImageData
									}
								/>
							</div>
							<div className="col right">
								{quote.length > 0 && <Quote quotes={quote} />}
							</div>
						</div>
					</>
				)
			}}
		/>
	)
}
