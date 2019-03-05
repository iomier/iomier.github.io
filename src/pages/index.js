import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "bootstrap/dist/css/bootstrap.min.css"
import "../assets/css/main.css"
const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" keywords={[`iomi`, `blog`, `developer`]} />
    </Layout>
  )
}
export default IndexPage
