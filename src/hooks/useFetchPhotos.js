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
            username
          }
          alt_description
        }
      }
    }
  `)

  return data.unsplash.results
}
