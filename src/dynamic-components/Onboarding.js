import React, { Component } from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import { Container } from "react-bootstrap"
import StateViewer from "../dynamic-components/StateViewer"
import { Link } from "gatsby"

export class Onboarding extends Component {
  render() {
    const {
      companySize,
      companyName,
      handleChange,
      companyCity,
      companyState,
    } = this.props
    return (
      <Layout>
        <SEO title="Onboarding" />
        <Container>
          <StateViewer {...this.props} />
          <h1>Onboarding</h1>
          <p>Change Company Size below: </p>
          <input
            type="text"
            name="companySize"
            placeholder=""
            value={companySize}
            onChange={handleChange}
          />
          <p>Change Company Name below: </p>
          <input
            type="text"
            name="companyName"
            placeholder=""
            value={companyName}
            onChange={handleChange}
          />
          <div className="mt-4">
            <Link to={`/calculator/details`}>Step Two</Link>
          </div>
        </Container>
      </Layout>
    )
  }
}

export default Onboarding
