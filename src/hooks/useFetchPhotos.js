import { useStaticQuery, graphql } from "gatsby"

export const useFetchPhotos = () => {
  const data = useStaticQuery(graphql`
    {
      unsplash {
        results {
          urls {
            small
          }
        }
      }
    }
  `)

  return data.unsplash.results
}
