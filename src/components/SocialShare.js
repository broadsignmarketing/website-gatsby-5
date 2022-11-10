import React from "react"
import { StaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";
import { EmailShareButton, FacebookShareButton, LinkedinShareButton} from "react-share";
import facebook_logo from "@icons/facebook_round_grey.svg";
import linkedin_logo from "@icons/linkedin_round_grey.svg";
import mail_logo from "@icons/mail_round_grey.svg";

export default function SocialShare({type, link, quote="", summary=""}) {
	return (
		<StaticQuery
			query={graphql`
				query HeadingQuery {
					site {
						siteMetadata {
							title
							siteUrl
						}
					}
				}
			`}
			render={data => {
				const shareLink = data.site.siteMetadata.siteUrl + "/" + link;

				switch (type) {
					case "email" : return (
							<EmailShareButton url={shareLink}>
								<img style={{width:32 + 'px'}} src={mail_logo} alt="" />
							</EmailShareButton>
						);
					case "facebook" : return (
							<FacebookShareButton url={shareLink} quote={quote}>
								<img style={{width:32 + 'px'}} src={facebook_logo} alt="" />
							</FacebookShareButton>
						);
					case "linkedin" : return (
							<LinkedinShareButton url={shareLink} summary={summary}>
								<img style={{width:32 + 'px'}} src={linkedin_logo} alt="" />
							</LinkedinShareButton>
						);
					default: return null;
				}
			}}
		/>
	)
}

SocialShare.propTypes = {
	type: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
}
