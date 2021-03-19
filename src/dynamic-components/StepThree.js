import React, { Component } from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import { Container } from "react-bootstrap"
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
  StyledInput,
} from "../components/StyledElements"

export class StepThree extends Component {
  componentDidMount() {
    this.props.updateHeaderState(
      "step__three",
      "/onboarding/step-two",
      "",
      "Build My Report"
    )
  }

  render() {
    const {
      average_revenue_per_customer,
      handleChange,
      gross_margin_per_sale,
      average_conversion_rate_on_meetings_to_opportunities,
      average_close_ratio_from_opportunities_to_deals,
      estimated_sales_cycle,
    } = this.props
    return (
      <>
        <SEO title="Onboarding" />
        <Section Small>
          <Container>
            <ContentBox MW800 className="text-center ml-auto mr-auto">
              <PageHeading GradientText>Let's Do This!</PageHeading>
              <Subtitle>
                Almost There! Please complete the details below
              </Subtitle>
            </ContentBox>
            <ContentBox MW600 className="ml-auto mr-auto mt-4">
              <ProgressBarWrapper>
                <ProgressBar Filled />
                <ProgressBar Filled />
                <ProgressBar Filled />
              </ProgressBarWrapper>
            </ContentBox>
            <ContentBox MW800 className="mt-5 ml-auto mr-auto">
              <FormWrapper>
                <StyledFormWrapper>
                  <StyledFieldWrapper>
                    <StyledField TwoColumn>
                      <Label htmlFor="average_revenue_per_customer">
                        Average Revenue Per Customer or Deal
                      </Label>
                      <StyledInput>
                        <NumberFormat
                          thousandSeparator={true}
                          placeholder="$"
                          prefix={"$"}
                          name="average_revenue_per_customer"
                          value={average_revenue_per_customer}
                          onChange={handleChange}
                        />
                      </StyledInput>
                    </StyledField>
                    <StyledField TwoColumn>
                      <Label htmlFor="gross_margin_per_sale">
                        Estimated Gross Margin Per Sale
                      </Label>
                      <StyledInput>
                        <NumberFormat
                          suffix={"%"}
                          placeholder="%"
                          name="gross_margin_per_sale"
                          value={gross_margin_per_sale}
                          onChange={handleChange}
                        />
                      </StyledInput>
                    </StyledField>
                  </StyledFieldWrapper>

                  <StyledFieldWrapper>
                    <StyledField TwoColumn>
                      <Label htmlFor="average_conversion_rate_on_meetings_to_opportunities">
                        Average Conversion Rate on Meetings to Opportunities
                      </Label>
                      <StyledInput>
                        <NumberFormat
                          suffix={"%"}
                          placeholder="%"
                          name="average_conversion_rate_on_meetings_to_opportunities"
                          value={
                            average_conversion_rate_on_meetings_to_opportunities
                          }
                          onChange={handleChange}
                        />
                      </StyledInput>
                    </StyledField>
                    <StyledField TwoColumn>
                      <Label htmlFor="average_close_ratio_from_opportunities_to_deals">
                        Average Close Ratio from Opportunities to Deals
                      </Label>
                      <StyledInput>
                        <NumberFormat
                          suffix={"%"}
                          placeholder="%"
                          name="average_close_ratio_from_opportunities_to_deals"
                          value={
                            average_close_ratio_from_opportunities_to_deals
                          }
                          onChange={handleChange}
                        />
                      </StyledInput>
                    </StyledField>
                  </StyledFieldWrapper>

                  <StyledFieldWrapper>
                    <StyledField>
                      <Label htmlFor="estimated_sales_cycle">
                        Estimated Sales Cycle
                      </Label>
                      <StyledInput>
                        <NumberFormat
                          suffix={" Months"}
                          placeholder="In Months"
                          name="estimated_sales_cycle"
                          value={estimated_sales_cycle}
                          onChange={handleChange}
                        />
                      </StyledInput>
                    </StyledField>
                  </StyledFieldWrapper>
                </StyledFormWrapper>
              </FormWrapper>
            </ContentBox>
          </Container>
        </Section>
      </>
    )
  }
}

export default StepThree
