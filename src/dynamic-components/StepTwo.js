import React, { Component } from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import { Container } from "react-bootstrap"
import StateViewer from "./StateViewer"
import { Link } from "gatsby"

export class Details extends Component {
  render() {
    const { companyCity, companyState, handleChange } = this.props
    return (
      <Layout>
        <SEO title="Details" />
        <Container>
          <StateViewer {...this.props} />
          <h1>Details</h1>
          <p>Change Company City Below: </p>
          <input
            type="text"
            name="companyCity"
            placeholder=""
            value={companyCity}
            onChange={handleChange}
          />
          <p>Change Company State below: </p>
          <input
            type="text"
            name="companyState"
            placeholder=""
            value={companyState}
            onChange={handleChange}
          />
          <div className="mt-4">
            <Link to={`/calculator/onboarding`}>Back</Link>
          </div>
        </Container>
      </Layout>
    )
  }
}

export default Details
