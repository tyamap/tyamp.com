import { useStaticQuery, graphql } from "gatsby"

export const useProjects = () => {
  const data = useStaticQuery<Queries.Query>(graphql`
    query  {
      allContentfulProject {
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
  `)

  return data.allContentfulProject
}