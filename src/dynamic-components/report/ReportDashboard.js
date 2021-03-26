import React, { Component } from "react"
import SEO from "../../components/Seo"
import { Container } from "react-bootstrap"
import {
  Section,
  ContentBox,
  PageHeading,
  StyledLoaderWrapper,
  StyledLoader,
} from "../../components/StyledElements"

export class ReportDashboard extends Component {
  componentDidMount() {
    this.props.handleUpdateIDState(this.props.id)
    this.props.handleGetDataByID(this.props.id)
  }
  render() {
    const { loading, data, error } = this.props
    return (
      <>
        <SEO title="Onboarding" />
        <Section Small>
          <Container>
            <ContentBox MW800 className="text-center ml-auto mr-auto">
              <PageHeading GradientText>Render Raw Data</PageHeading>
              <div className="json-data mt-4">
                {loading ? (
                  <StyledLoaderWrapper White>
                    <StyledLoader />
                  </StyledLoaderWrapper>
                ) : (
                  <div>
                    {error
                      ? "404. No report found."
                      : JSON.stringify(data, null, 2)}
                  </div>
                )}
              </div>
            </ContentBox>
          </Container>
        </Section>
      </>
    )
  }
}

export default ReportDashboard
