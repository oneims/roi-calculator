import React, { Component } from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import { Container } from "react-bootstrap"
import Select from "react-select"
import {
  Section,
  ContentBox,
  PageHeading,
  Subtitle,
  ProgressBarWrapper,
  ProgressBar,
  FormWrapper,
  StyledFormWrapper,
  StyledFieldWrapper,
  Label,
  StyledField,
  ColorStyles,
} from "../components/StyledElements"

export class Details extends Component {
  render() {
    const {
      companyCity,
      companyState,
      handleChange,
      handleSelectChange,
    } = this.props
    return (
      <Layout
        App
        backDestination="/onboarding/step-one"
        nextDestination="/onboarding/step-two"
        nextButtonText="Next"
      >
        <SEO title="Onboarding" />
        <Section Small>
          <Container>
            <ContentBox MW800 className="text-center ml-auto mr-auto">
              <PageHeading GradientText>Onboarding</PageHeading>
              <Subtitle>Please fill out the details below</Subtitle>
            </ContentBox>
            <ContentBox MW600 className="ml-auto mr-auto mt-4">
              <ProgressBarWrapper>
                <ProgressBar Filled />
                <ProgressBar Filled />
                <ProgressBar />
              </ProgressBarWrapper>
            </ContentBox>
            <ContentBox MW800 className="mt-5 ml-auto mr-auto">
              <FormWrapper>
                <StyledFormWrapper>
                  <StyledFieldWrapper>
                    <StyledField TwoColumn>
                      <Label htmlFor="revenue_growth_goal">
                        Revenue Growth Goal
                      </Label>
                      <Select
                        className="roi-input roi-input__select"
                        name="revenue_growth_goal"
                        styles={ColorStyles}
                        value=""
                        onChange={handleSelectChange}
                        options=""
                      />
                    </StyledField>
                    <StyledField TwoColumn>
                      <Label htmlFor="growth_rate">Average Close Ratio</Label>
                      <Select
                        className="roi-input roi-input__select"
                        name="average_close_ratio"
                        styles={ColorStyles}
                        value=""
                        onChange={handleSelectChange}
                        options=""
                      />
                    </StyledField>
                  </StyledFieldWrapper>

                  <StyledFieldWrapper>
                    <StyledField TwoColumn>
                      <Label htmlFor="average_conversion_rate">
                        Average Conversion Rate
                      </Label>
                      <Select
                        className="roi-input roi-input__select"
                        name="average_conversion_rate"
                        styles={ColorStyles}
                        options=""
                      />
                    </StyledField>
                    <StyledField TwoColumn>
                      <Label htmlFor="expected_industry_growth_rate">
                        Expected Industry Growth Rate
                      </Label>
                      <Select
                        className="roi-input roi-input__select"
                        name="expected_industry_growth_rate"
                        styles={ColorStyles}
                        options=""
                      />
                    </StyledField>
                  </StyledFieldWrapper>
                </StyledFormWrapper>
              </FormWrapper>
            </ContentBox>
          </Container>
        </Section>
      </Layout>
    )
  }
}

export default Details
