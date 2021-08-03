import { useStaticQuery, graphql } from "gatsby"

export const useFetchProtests = () => {
  const data = useStaticQuery(graphql`
    {
      allProtest(filter: { approved: { eq: "true" } }) {
        edges {
          node {
            id
            name
            contact {
              email
              message
              phone_number
            }
            address {
              city
              country
              state
              street_address
              zipcode
            }
            _id
            time
            date
            # date(formatString: "dddd, MMM Do")
          }
        }
      }
    }
  `)
  return data.allProtest.edges
}
