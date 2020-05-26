import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = ({ location: { pathname } }) => {
  return (
    <Layout location={pathname}>
      <SEO title="Contact" />
      <h1>Contact page</h1>
    </Layout>
  )
}

export default Contact
