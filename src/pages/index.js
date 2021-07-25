import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Header from "./header"
import SectionWrapper from "./section-wrapper"

const IndexPage = () => (
  <>
    <Seo title="sos cuba" />
    <Layout>
      <div className="bg-gray-800">
        <Header />
        <SectionWrapper />
      </div>
    </Layout>
  </>
)

export default IndexPage
