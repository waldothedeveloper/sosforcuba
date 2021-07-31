import { useStaticQuery, graphql } from "gatsby"

const useCountries = () => {
  const countries = useStaticQuery(graphql`
    {
      countries {
        countries {
          name
          flag
          alpha3Code
          numericCode
        }
      }
    }
  `)
  return countries.countries
}

export default useCountries
