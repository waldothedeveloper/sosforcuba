import { useStaticQuery, graphql } from "gatsby"

export const useFetchPhotos = () => {
  const data = useStaticQuery(graphql`
    {
      unsplash {
        results {
          urls {
            small
          }
          user {
            name
          }
          alt_description
        }
      }
    }
  `)

  return data.unsplash.results
}
