import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { isMobile } from "@annex";

import { GatsbyImage as Img, getSrc } from "gatsby-plugin-image";
import PlayBtn from "@components/PlayBtn";

import "@sass/components/Video.scss";

export default function Video({
	className,
	id,
	children,
	title,
	poster,
	forceStop,
	playBtnStyle = "lines",
	playBtnColor = "white",
	url = "",
	file = "",
	YTid = "",
	startAt = "",
}) {
	const YTidPattern = /[\w\d-]{10,12}/i;

	const [loading, setLoading] = useState(false);
	const [playing, setPlaying] = useState(false);
	const [videoSrc, setVideoSrc] = useState("");
	const selfRef = useRef(null);

	const startPlaying = () => {
		if (loading) {
			setLoading(false);
			setPlaying(true);
		}
	};

	useEffect(() => {
		if (forceStop) {
			setVideoSrc("");
			setPlaying(false);
			setLoading(false);
		} else {
			if (loading && !playing) {
				// console.log(file);
				if (url !== "") {
					setVideoSrc(url);
				} else if (YTidPattern.test(YTid)) {
					setVideoSrc(`https://www.youtube.com/embed/${YTid}?autoplay=1&rel=0&enablejsapi=1${startAt ? "&start=" + startAt : ""}`);
				} else if (file === "") {
					console.error("No proper video URL specified for [" + title + "]");
				}
			}

			if (videoSrc !== "") {
				if (!loading) {
					if (isMobile()) {
						setTimeout(() => {
							const clickEvent = new MouseEvent("click", {
								view: window,
								bubbles: true,
								cancelable: false,
							});

							selfRef.current.dispatchEvent(clickEvent);
						}, 200);

						// console.log("try to click");
					}
				}

				setPlaying(true);
			}

			if (playing) {
				setLoading(false);
			}
		}
	}, [loading, playing, videoSrc, forceStop, title, url, YTid, YTidPattern]);

	if (file !== "") {
		return (
			<video
				id={id}
				className={classnames(className, "Video", loading ? "loading" : "", playing ? "playing" : "")}
				src={file}
				poster={getSrc(poster)}
				controls
				preload="none"
				ref={selfRef}
				onClick={() => {
					if (selfRef && !playing) {
						selfRef.current.play();
						setPlaying(true);
					}
				}}></video>
		);
	}

	return (
		<div id={id} className={classnames(className, "Video", loading ? "loading" : "", playing ? "playing" : "")}>
			<div className="inner">
				<button
					className="div poster"
					onClick={() => {
						setLoading(true);
					}}>
					<Img image={poster} objectFit="cover" className="bg" alt="" />
					{playBtnStyle !== "none" && <PlayBtn color={playBtnColor} style={playBtnStyle} div />}
					<div className="tagline">{children}</div>
				</button>
				{YTid !== "" && (
					<iframe
						title={title}
						ref={selfRef}
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media;"
						allowFullScreen
						src={videoSrc}
						onLoad={() => {
							startPlaying();
						}}></iframe>
				)}
				{url !== "" && (
					<iframe
						title={title}
						frameBorder="0"
						allow="autoplay; encrypted-media"
						allowFullScreen
						src={videoSrc}
						ref={selfRef}
						onLoad={() => {
							startPlaying();
						}}></iframe>
				)}
			</div>
		</div>
	);
}

Video.propTypes = {
	className: PropTypes.string,
	id: PropTypes.string,
	title: PropTypes.string,
	url: PropTypes.string,
	YTid: PropTypes.string,
	poster: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
	forceStop: PropTypes.bool,
	playBtnStyle: PropTypes.oneOf(["lines", "semisolid", "solid", "none"]),
};
