import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = ({ location: { pathname } }) => {
  return (
    <Layout location={pathname}>
      <SEO title="About" />
      <h1>About page</h1>
    </Layout>
  )
}

export default About
