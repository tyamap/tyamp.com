import { useStaticQuery, graphql } from "gatsby";

export const useProfile = () => {
  const data = useStaticQuery<Queries.Query>(graphql`
    query {
      contentfulProfile(
        userId: { eq: "tyamap" }
        node_locale: { eq: "en-US" }
      ) {
        name
        userId
        label
        histories
        socials {
          link
          icon {
            file {
              url
            }
          }
        }
        avatar {
          description
          title
          gatsbyImageData
        }
      }
    }
  `);

  return data.contentfulProfile;
};
