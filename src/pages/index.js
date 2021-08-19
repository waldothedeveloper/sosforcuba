import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"
import Facts from "../components/facts"
import CallToHelp from "../components/call-to-help"
import CovidCrisis from "../components/covid-crisis"
import Closings from "../components/closing"
// import SectionWrapper from "./section-wrapper"

const IndexPage = () => (
  <>
    <Seo title="sos cuba" />
    <Layout>
      <Hero />
      <Facts />
      <CallToHelp />
      <CovidCrisis />
      <CallToHelp />
      <Closings />
      {/* <SectionWrapper /> */}
    </Layout>
  </>
)

export default IndexPage
