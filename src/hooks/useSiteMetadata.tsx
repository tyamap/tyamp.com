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
          }
        }
      }
    }
  `)

  return data!.site!.siteMetadata
}