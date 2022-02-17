import Closings from "../components/closing"
// import CallToHelp from "../components/call-to-help"
import CovidCrisis from "../components/covid-crisis"
import Facts from "../components/facts"
import Hero from "../components/hero"
import Layout from "../components/layout"
import LogRocket from "logrocket"
import NoUSEmbargo from "../components/no-us-embargo"
import React from "react"
import Seo from "../components/seo"
import setupLogRocketReact from "logrocket-react"

//  Mr. LogRocket
LogRocket.init("0po6xe/sosforcuba")
setupLogRocketReact(LogRocket)

const IndexPage = () => (
  <>
    <Seo
      title="S.O.S. Cuba. The people of Cuba needs freedom. No more communism. No more dictatorship. No more abuse of human rights."
      description="The people of Cuba has suffered more than 62 years of human rights abuse. Harassment, incarceration, public acts of repudiation, beatings, intimidation, repression, surveillance, and arbitrary detentions are just a few. The list of prohibitions that Cubans have faced is actually much worse. Support our cause making a generous donation today."
    />
    <Layout>
      <Hero />
      <Facts />
      <NoUSEmbargo />
      {/* <CallToHelp /> */}
      <CovidCrisis />
      <Closings />
      {/* <CallToHelp /> */}
    </Layout>
  </>
)

export default IndexPage
