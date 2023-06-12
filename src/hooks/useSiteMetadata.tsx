import { useStaticQuery, graphql } from "gatsby"

export const useSiteMetadata = () => {
  const data = useStaticQuery<Queries.Query>(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          image
          siteUrl
          social {
            twitter
            github
          }
          profile {
            id
            name
            labels
          }
        }
      }
    }
  `)

  return data!.site!.siteMetadata
}