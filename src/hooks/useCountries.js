import { graphql, useStaticQuery } from "gatsby"

const useCountries = () => {
  const countries = useStaticQuery(graphql`
    {
      allCountries {
        nodes {
          countries {
            name {
              official
            }
            flag
            cca3
            ccn3
          }
        }
      }
    }
  `)
  return countries.allCountries.nodes[0].countries
}

export default useCountries
