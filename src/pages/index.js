import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Header from "./header"
import July11 from "./section-jul-11"

const IndexPage = () => (
  <>
    <Seo title="sos cuba" />
    <Layout>
      <div className="bg-gray-800">
        <Header />

        <July11 />
      </div>
    </Layout>
  </>
)

export default IndexPage
