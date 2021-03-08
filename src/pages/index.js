import React, { Component } from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import HP__Hero from "../sections/HP__Hero"

export class IndexPage extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Homepage" />
        <HP__Hero />
      </Layout>
    )
  }
}

export default IndexPage
