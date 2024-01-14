import { useStaticQuery, graphql } from "gatsby";

export const useProfile = (locale: "ja" | "en-US" = "en-US") => {
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
        description {
          description
        }
        skills {
          name
          category
          level
          icon {
            file {
              url
            }
          }
        }
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
