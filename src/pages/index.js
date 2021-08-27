import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"
import Facts from "../components/facts"
import CallToHelp from "../components/call-to-help"
import CovidCrisis from "../components/covid-crisis"
import Closings from "../components/closing"
import NoUSEmbargo from "../components/no-us-embargo"
import LogRocket from "logrocket"
import setupLogRocketReact from "logrocket-react"

//  Mr. LogRocket
LogRocket.init("0po6xe/sosforcuba")
setupLogRocketReact(LogRocket)

const IndexPage = () => (
  <>
    <Seo title="sos cuba" />
    <Layout>
      <Hero />
      <Facts />
      <NoUSEmbargo />
      <CallToHelp />
      <CovidCrisis />
      <Closings />
      <CallToHelp />
    </Layout>
  </>
)

export default IndexPage
