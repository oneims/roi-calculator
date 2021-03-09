import React, { Component } from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import { Container } from "react-bootstrap"
import StateViewer from "./StateViewer"
import { Link } from "gatsby"
import {
  Section,
  ContentBox,
  PageHeading,
  Subtitle,
  ProgressBarWrapper,
  ProgressBar,
} from "../components/StyledElements"

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
      <Layout
        App
        backDestination="/"
        nextDestination="/onboarding/step-two"
        nextButtonText="Next"
      >
        <SEO title="Onboarding" />
        <Section>
          <Container>
            <ContentBox MW800 className="text-center ml-auto mr-auto">
              <PageHeading GradientText>Onboarding</PageHeading>
              <Subtitle>Please fill out the details below</Subtitle>
            </ContentBox>
            <ContentBox MW600 className="ml-auto mr-auto mt-4">
              <ProgressBarWrapper>
                <ProgressBar Filled />
                <ProgressBar />
                <ProgressBar />
              </ProgressBarWrapper>
            </ContentBox>
          </Container>
        </Section>
      </Layout>
    )
  }
}

export default Onboarding
