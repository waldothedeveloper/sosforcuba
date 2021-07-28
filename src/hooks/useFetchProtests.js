import { useStaticQuery, graphql } from "gatsby"

export const useFetchProtests = () => {
  const data = useStaticQuery(graphql`
    {
      allProtest {
        edges {
          node {
            id
            name
            location
            date
            organizer
          }
        }
      }
    }
  `)
  return data.allProtest.edges
}
