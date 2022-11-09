import React, { useMemo, useState } from "react"
import classnames from "classnames"

import Tank from "@components/Tank"

import cta_arrow_full from "@img/pages/index/arrow_right_red.svg"
import quote_sign from "@img/pages/index/quote_round.svg"

export default function index__Quotes() {
	const [quotePosition, setQuotePosition] = useState(0)

	const allQuotes = useMemo(() => {
		if (T.texts.quotes) {
			return Object.values(T.texts.quotes)
		}
		return []
	}, [T.texts])

	const allQuotesQty = useMemo(() => {
		return allQuotes.length
	}, [allQuotes])

	const nextQuote = () => {
		let out = quotePosition + 1
		if (out >= allQuotesQty) {
			out = 0
		}
		setQuotePosition(out)
	}

	return (
		<Tank fluid className={classnames("quotes", "pos_" + quotePosition)}>
			<img
				className="quote_sign"
				src={quote_sign}
				alt=""
				height="30"
				width="30"
			/>
			{Object.values(allQuotes).map((q, k) => {
				return (
					<blockquote
						className={classnames(
							"Tank",
							k === quotePosition ? "active" : ""
						)}
						key={k}
					>
						<p className="font_size_2_4 font-light font-serif">
							{q.quote}
						</p>
						<span className={classnames("cite", q.id)}></span>
					</blockquote>
				)
			})}
			<div className="quote_num">
				<span style={{ color: "#FFF" }}>
					{(quotePosition + 1).toString().padStart(2, "0")}
				</span>
				/{allQuotesQty.toString().padStart(2, "0")}
			</div>
			<button className="CTA next pink" onClick={() => nextQuote()}>
				{T.translate("next")}
				<img src={cta_arrow_full} alt="" height="10" width="23" />
			</button>
		</Tank>
	)
}
