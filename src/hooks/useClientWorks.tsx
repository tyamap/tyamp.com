import { useStaticQuery, graphql } from "gatsby"

export const useClientWorks = () => {
  const data = useStaticQuery<Queries.Query>(graphql`
    query {
      allContentfulClientWork(
        filter: { node_locale: { eq: "en-US" } }
      ) {
        totalCount
      }
    }
  `);

  return data.allContentfulClientWork
}