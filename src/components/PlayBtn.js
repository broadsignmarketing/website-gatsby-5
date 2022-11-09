import React from "react";
import classnames from "classnames";

import "@sass/components/PlayBtn.scss";

const PlayBtnInner = ({ color, style }) => {
	return (
		<>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<img src={`/img/controls/play_btn_${style}_${color}.svg`} alt="Play" />
		</>
	);
};

export default function PlayBtn({ color = "white", style = "lines", id, className, div, onClick }) {
	if (div) {
		return (
			<div role="button" id={id} className={classnames("div", "PlayBtn", className, color, style)} onClick={onClick} onKeyDown={onClick} tabIndex={0}>
				<PlayBtnInner color={color} style={style} />
			</div>
		);
	}

	return (
		<button id={id} className={classnames("div", "PlayBtn", className, color, style)} onClick={onClick} onKeyDown={onClick} tabIndex={0}>
			<PlayBtnInner color={color} style={style} />
		</button>
	);
}
