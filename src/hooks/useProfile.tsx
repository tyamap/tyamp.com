import { useStaticQuery, graphql } from "gatsby"

export const useProfile = () => {
  const data = useStaticQuery<Queries.Query>(graphql`
    query  {
      contentfulProfile(userId: {eq: "tyamap"}) {
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
  `)

  return data.contentfulProfile
}