import { graphql } from "gatsby";

export const fragmentCommon = graphql`
	fragment img on File {
		childImageSharp {
			gatsbyImageData
		}
	}
`;
