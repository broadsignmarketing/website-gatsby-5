import React, { Children, useCallback, useEffect, useState } from "react"
import classnames from "classnames"
import { loopTo } from "@annex"

import "@sass/components/BroadsignAdsCarousel.scss"

type Loop = {
	duration: number
	auto: boolean
}

interface BroadsignAdsCarouselProps {
	className: string
	children: JSX.Element
	loop: Loop
}

export default function BroadsignAdsCarousel({
	className,
	children,
	loop = { auto: true, duration: 1000 },
}: BroadsignAdsCarouselProps) {
	const [activeIndex, setActiveIndex] = useState(0)
	const [autoloop, setAutoloop] = useState(loop.auto)

	const loopDuration = loop.duration

	const items = Children.toArray(children)
	const itemsQty = items.length

	const handleLoop = useCallback(
		(to: number) => {
			if (autoloop) {
				setActiveIndex(to)
			}
		},
		[autoloop]
	)

	useEffect(() => {
		const interval = setInterval(() => {
			if (autoloop) {
				handleLoop(loopTo("next", activeIndex, itemsQty))
			}
		}, loopDuration)

		return () => clearInterval(interval)
	}, [activeIndex, autoloop])

	useEffect(() => {
		if (loop.auto === false) {
			setAutoloop(false)
		}
	}, [loop])

	return (
		<div className={classnames("BroadsignAdsCarousel", className)}>
			<div className="grid flex-nowrap align-items-stretch">
				{Children.map(items, (el, k) => (
					<div
						className={classnames(
							"BroadsignAdsCarousel__item col-12 relative top-0 left-0",
							className,
							activeIndex === k
								? "active opacity-1 z-2"
								: "opacity-0 z-1"
						)}
						style={{ transform: `translateX(-${k * 100}%)` }}
						key={k}
					>
						{el}
					</div>
				))}
			</div>
			<div className="mt-5 flex justify-content-end">
				<button
					onClick={() => {
						setAutoloop(false)
						setActiveIndex(loopTo("prev", activeIndex, itemsQty))
					}}
					className="flex flex-center p-0 p-border-cerulean text-cerulean p-button-lg p-button-rounded p-button-outlined hover:bg-cerulean hover:text-white"
					icon="pi pi-arrow-left"
					style={{ height: "44px", width: "44px" }}
				/>
				<button
					onClick={() => {
						setAutoloop(false)
						setActiveIndex(loopTo("next", activeIndex, itemsQty))
					}}
					className="flex flex-center p-0 p-border-cerulean text-cerulean p-button-lg p-button-rounded p-button-outlined hover:bg-cerulean hover:text-white ml-3"
					icon="pi pi-arrow-right"
					style={{ height: "44px", width: "44px" }}
				/>
			</div>
		</div>
	)
}
