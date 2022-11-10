import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

import "@sass/components/Video.scss";

export default function HubspotVideo({ id, className, url, poster }) {
	return (
		<div id={id} className={classnames(className, "Video", "HubspotVideo")}>
			<video controls poster={poster}>
				<source
					src={"https://f.hubspotusercontent10.net/hubfs/297064/" + url + "_hq.mp4?t=" + Math.ceil(Math.random() * 1000000000)}
					type="video/mp4"
				/>
				<source
					src={"https://f.hubspotusercontent10.net/hubfs/297064/" + url + "_lq.mp4?t=" + Math.ceil(Math.random() * 1000000000)}
					type="video/mp4"
				/>
			</video>
		</div>
	);
}

HubspotVideo.propTypes = {
	className: PropTypes.string,
	id: PropTypes.string,
	url: PropTypes.string,
};
