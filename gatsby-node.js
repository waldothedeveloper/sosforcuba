const fetch = require(`node-fetch`)

//
exports.sourceNodes = async ({
  actions: { createNode },
  createContentDigest,
}) => {
  // get photos from unsplash
  const result = await fetch(
    `https://api.unsplash.com/search/photos?per_page=30&query=cuba+cars&client_id=${process.env.unsplash_api_access_key}`
  )
  const resultData = await result.json()

  // get list of countries
  const countries = await fetch(`https://restcountries.com/v3.1/all`)
  const listOfCountries = await countries.json()

  // get raw covid data from github API
  const COVIDData = await fetch(
    `https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/latest/owid-covid-latest.json`
  )
  const CubaCovidData = await COVIDData.json()

  // create node for photos of Cuba
  createNode({
    results: resultData.results,
    id: `unsplash_sosforcuba`,
    parent: null,
    children: [],
    internal: {
      type: `Unsplash`,
      contentDigest: createContentDigest(resultData),
    },
  })
  // create node for list of countries
  createNode({
    countries: listOfCountries,
    id: `list_of_countries`,
    parent: null,
    children: [],
    internal: {
      type: `Countries`,
      contentDigest: createContentDigest(listOfCountries),
    },
  })
  // create node for COVID CUBA cases
  createNode({
    covid_cases_cuba: CubaCovidData,
    id: `cuba_covid_cases`,
    parent: null,
    children: [],
    internal: {
      type: `CubaCOVIDCases`,
      contentDigest: createContentDigest(CubaCovidData),
    },
  })
}

// get put this here so that no one visits the help center since donations are not needed
exports.onCreatePage = async ({ page, actions: { deletePage } }) => {
  if (page.path.match(/help_center/g)) {
    deletePage(page)
  }
}
