// https://api.unsplash.com/search/photos?page=3&query=cuba&client_id=SAXDT2rCjOxKovyMu9lx-8envaXhWg5n37WXade5Q3U
const fetch = require(`node-fetch`)

exports.sourceNodes = async ({
  actions: { createNode },
  createContentDigest,
}) => {
  // get data from GitHub API at build time
  const result = await fetch(
    `https://api.unsplash.com/search/photos?page=3&query=cuba&client_id=${process.env.unsplash_api_access_key}`
  )
  const resultData = await result.json()

  // create node for build time data example in the docs
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
  })
}
