import { useStaticQuery, graphql } from "gatsby"

export const useMazorra = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { name: { regex: "/mazorra/" } }) {
        edges {
          node {
            id
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
            }
            name
          }
        }
      }
    }
  `)
  return data.allFile.edges
}
