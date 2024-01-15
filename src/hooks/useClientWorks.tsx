import { useStaticQuery, graphql } from "gatsby"

export const useClientWorks = () => {
  const data = useStaticQuery<Queries.Query>(graphql`
    query {
      allContentfulClientWork(
        sort: { startDate: DESC }
        filter: { node_locale: { eq: "en-US" } }
      ) {
        totalCount
        nodes {
          tags
          client
          name
          startDate
          url
        }
      }
    }
  `);

  return data.allContentfulClientWork
}