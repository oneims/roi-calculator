import React, { Component } from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import { Container } from "react-bootstrap"
import { Link } from "gatsby"

export class IndexPage extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Homepage" />
        <Container>
          <h1>Homepage</h1>
          <div className="mt-4">
            <Link to={`/calculator/onboarding`}>Start</Link>
          </div>
        </Container>
      </Layout>
    )
  }
}

export default IndexPage
