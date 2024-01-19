import { useStaticQuery, graphql } from "gatsby"

export const useProjects = () => {
  const data = useStaticQuery<Queries.Query>(graphql`
    query {
      allContentfulProject(
        filter: { node_locale: { eq: "en-US" } }
      ) {
        totalCount
      }
    }
  `);

  return data.allContentfulProject
}