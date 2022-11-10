import React from "react";

// import { GatsbyImage as Img } from "gatsby-plugin-image";

interface AdaptiveImageProps {
	className: string;
	id: string;
	img: string;
}

export default function AdaptiveImage({ className, id, src }: AdaptiveImageProps) {
	if (typeof src === "string") {
		return <img src={src} id={id} className={className} />;
	}

	// This needs to know how to detect an instance of a Gatsby Image
	// if (src instanceof GatsbyImageProps) {
	// 	return <Img alt="" image={src} className={className} />;
	// }

	return (
		<div id={id} className={className}>
			Image of unsupported type
		</div>
	);
}
