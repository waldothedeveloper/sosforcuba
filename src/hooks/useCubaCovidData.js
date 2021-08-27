import { useStaticQuery, graphql } from "gatsby"

export const useCubaCovidData = () => {
  const data = useStaticQuery(graphql`
    {
      cubaCovidCases {
        covid_cases_cuba {
          CUB {
            hospital_beds_per_thousand
            location
            new_cases
            new_deaths
            total_cases
            total_deaths
            last_updated_date(fromNow: true)
            population
          }
        }
      }
    }
  `)

  const stats = [
    {
      name: "Total cases",
      stat: data?.cubaCovidCases?.covid_cases_cuba?.CUB?.total_cases,
    },
    {
      name: "New cases",
      stat: data?.cubaCovidCases?.covid_cases_cuba?.CUB?.new_cases,
    },
    {
      name: "Deaths",
      stat: data?.cubaCovidCases?.covid_cases_cuba?.CUB?.total_deaths,
    },
    {
      name: "New deaths",
      stat: data?.cubaCovidCases?.covid_cases_cuba?.CUB?.new_deaths,
    },
    {
      name: "Hospital Beds per thousand",
      stat: data?.cubaCovidCases?.covid_cases_cuba?.CUB
        ?.hospital_beds_per_thousand,
    },
    {
      name: "Population",
      stat: data?.cubaCovidCases?.covid_cases_cuba?.CUB?.population,
    },
  ]

  return stats
}
