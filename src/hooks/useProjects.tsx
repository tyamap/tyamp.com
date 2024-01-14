import { useStaticQuery, graphql } from "gatsby"

export const useProjects = () => {
  const data = useStaticQuery<Queries.Query>(graphql`
    query {
      allContentfulProject(
        sort: { startDate: DESC }
        filter: { node_locale: { eq: "en-US" } }
      ) {
        totalCount
        nodes {
          description {
            description
          }
          name
          githubLink
          url
          startDate
          tags
          thumbnail {
            gatsbyImageData
          }
        }
      }
    }
  `);

  return data.allContentfulProject
}