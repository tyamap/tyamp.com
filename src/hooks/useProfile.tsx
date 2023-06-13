import { useStaticQuery, graphql } from "gatsby"

export const useProfile = () => {
  const data = useStaticQuery<Queries.Query>(graphql`
    query  {
      contentfulProfile(userId: {eq: "tyamap"}) {
        name
        userId
        label
        description {
          description
        }
        skills {
          link
          icon {
            gatsbyImageData
          }
        }
        socials {
          link
          icon {
            gatsbyImageData
          }
        }
        avatar {
          description
          title
          gatsbyImageData
        }
      }
    }
  `)

  return data.contentfulProfile
}