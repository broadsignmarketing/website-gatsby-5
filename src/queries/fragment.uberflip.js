import { graphql } from "gatsby";

export const fragmentUberflip = graphql`
	fragment ufItem on UberflipItem {
		id
		title
		author {
			full_name
		}
		date
		description
		language
		slug
		thumbnail
	}

	fragment ufItems on UberflipItemConnection {
		nodes {
			id
			title
			author {
				full_name
			}
			date
			description
			language
			slug
			thumbnail
		}
	}
`;
