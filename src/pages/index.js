import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"
import Facts from "../components/facts"

// import SectionWrapper from "./section-wrapper"

const IndexPage = () => (
  <>
    <Seo title="sos cuba" />
    <Layout>
      <Hero />
      <Facts />

      {/* <SectionWrapper /> */}
    </Layout>
  </>
)

export default IndexPage
