import { useStaticQuery, graphql } from "gatsby"

export const useClientWorks = () => {
  const data = useStaticQuery<Queries.Query>(graphql`
    query  {
      allContentfulClientWork(sort: {startDate: DESC}) {
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
  `)

  return data.allContentfulClientWork
}