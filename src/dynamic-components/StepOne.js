import React, { Component } from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import { Container } from "react-bootstrap"
import Select from "react-select"
import NumberFormat from "react-number-format"
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
  StyledInput,
} from "../components/StyledElements"

const options = [
  {
    industry: [
      { value: "retail", label: "Retail" },
      { value: "finance", label: "Finance" },
      { value: "trade", label: "Trade" },
      { value: "transport", label: "Transport" },
      { value: "construction", label: "Construction" },
      { value: "health_care", label: "Health Care" },
    ],
  },
]

export class Onboarding extends Component {
  render() {
    const {
      industry,
      current_annual_revenue,
      average_revenue_per_customer_or_order,
      estimated_gross_margin_per_sale,
      handleChange,
      handleSelectChange,
    } = this.props
    return (
      <Layout
        App
        backDestination="/"
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
                <ProgressBar />
                <ProgressBar />
              </ProgressBarWrapper>
            </ContentBox>
            <ContentBox MW800 className="mt-5 ml-auto mr-auto">
              <FormWrapper>
                <StyledFormWrapper>
                  <StyledFieldWrapper>
                    <StyledField TwoColumn>
                      <Label htmlFor="industry">Select Industry</Label>
                      <Select
                        className="roi-input roi-input__select"
                        name="industry"
                        styles={ColorStyles}
                        value={industry}
                        onChange={handleSelectChange}
                        options={options[0].industry}
                      />
                    </StyledField>
                    <StyledField TwoColumn>
                      <Label htmlFor="current_annual_revenue">
                        Current Annual Revenue
                      </Label>
                      <StyledInput>
                        <NumberFormat
                          thousandSeparator={true}
                          prefix={"$"}
                          name="current_annual_revenue"
                          value={current_annual_revenue}
                          onChange={handleChange}
                        />
                      </StyledInput>
                    </StyledField>
                  </StyledFieldWrapper>

                  <StyledFieldWrapper>
                    <StyledField TwoColumn>
                      <Label htmlFor="average_revenue_per_customer_or_order">
                        YOY Growth Rate
                      </Label>
                      <Select
                        className="roi-input roi-input__select"
                        name="average_revenue_per_customer_or_order"
                        styles={ColorStyles}
                        options={options}
                      />
                    </StyledField>
                    <StyledField TwoColumn>
                      <Label htmlFor="estimated_gross_margin_per_sale">
                        Revenue Growth Goal
                      </Label>
                      <Select
                        className="roi-input roi-input__select"
                        name="estimated_gross_margin_per_sale"
                        styles={ColorStyles}
                        options={options}
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

export default Onboarding
