const fetch = require(`node-fetch`)

exports.sourceNodes = async ({
  actions: { createNode },
  createContentDigest,
}) => {
  // get photos from unsplash
  const result = await fetch(
    `https://api.unsplash.com/search/photos?page=3&query=cuba&client_id=${process.env.unsplash_api_access_key}`
  )
  const resultData = await result.json()

  // get list of countries
  const countries = await fetch(`https://restcountries.eu/rest/v2/all`)

  const listOfCountries = await countries.json()
  

  // create node for photos of Cuba
  createNode({
    results: resultData.results,
    // required fields
    id: `unsplash_sosforcuba`,
    parent: null,
    children: [],
    internal: {
      type: `Unsplash`,
      contentDigest: createContentDigest(resultData),
    },
  }),
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
}
