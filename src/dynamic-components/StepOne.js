import React, { Component } from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import { Container } from "react-bootstrap"
import Select from "react-select"
import styled from "styled-components"
import { colors } from "../theme/variables"
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

const options = [
  {
    annual_revenue_as_a_range: [
      { value: "100-200", label: "$100K to $200K" },
      { value: "200-300", label: "$200Kto $300K" },
      { value: "300-400", label: "$300K to $400K" },
      { value: "400-500", label: "$400K to $500K" },
    ],
    growth_rate: [
      { value: "5%", label: "5%" },
      { value: "10%", label: "10%" },
      { value: "15%", label: "15%" },
      { value: "20%", label: "20%" },
    ],
  },
]

export class Onboarding extends Component {
  render() {
    const {
      annual_revenue_as_a_range,
      growth_rate,
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
                      <Label htmlFor="annual_revenue_as_a_range">
                        Annual Revenue as a Range
                      </Label>
                      <Select
                        className="roi-input roi-input__select"
                        name="annual_revenue_as_a_range"
                        styles={ColorStyles}
                        value={annual_revenue_as_a_range}
                        onChange={handleSelectChange}
                        options={options[0].annual_revenue_as_a_range}
                      />
                    </StyledField>
                    <StyledField TwoColumn>
                      <Label htmlFor="growth_rate">Growth Rate</Label>
                      <Select
                        className="roi-input roi-input__select"
                        name="growth_rate"
                        styles={ColorStyles}
                        value={growth_rate}
                        onChange={handleSelectChange}
                        options={options[0].growth_rate}
                      />
                    </StyledField>
                  </StyledFieldWrapper>

                  <StyledFieldWrapper>
                    <StyledField TwoColumn>
                      <Label htmlFor="average_revenue_per_customer_or_order">
                        Average revenue per customer or order
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
                        Estimated Gross Margin Per Sale
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
