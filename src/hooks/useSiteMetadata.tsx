import { useStaticQuery, graphql } from "gatsby"

export const useSiteMetadata = () => {
  const data = useStaticQuery<Queries.Query>(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          twitterUsername
          image
          siteUrl
        }
      }
    }
  `)

  return data!.site!.siteMetadata
}