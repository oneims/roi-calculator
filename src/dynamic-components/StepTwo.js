import React, { Component } from "react"
import { navigate } from "gatsby"
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
  StyledChoiceWrapper,
  StyledChoiceColumn,
  StyledChoiceItem,
} from "../components/StyledElements"

export class StepTwo extends Component {
  componentDidMount() {
    this.props.updateHeaderState(
      "step__two",
      "/onboarding/step-one",
      "/onboarding/step-three",
      "Next"
    )
    this.props.updateStepTwoButtonState()
    if (!this.props.clearedStepOne) {
      if (typeof window !== `undefined`) {
        navigate(`/onboarding/step-one`)
      }
    }
  }

  render() {
    const {
      average_revenue_per_customer,
      gross_margin_per_sale,
      average_conversion_rate_on_meetings_to_opportunities,
      average_close_ratio_from_opportunities_to_deals,
      estimated_sales_cycle,
      estimated_sales_cycle_selector,
      handleChange,
      handleSelectorChoice,
    } = this.props
    return (
      <>
        <SEO title="Onboarding" />
        <Section Small AppSection>
          <Container>
            <ContentBox MW800 className="text-center ml-auto mr-auto">
              <PageHeading GradientText>Additional Information</PageHeading>
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
                          suffix={
                            estimated_sales_cycle_selector === "months"
                              ? " Months"
                              : " Years"
                          }
                          placeholder={
                            estimated_sales_cycle_selector === "months"
                              ? "In Months"
                              : "In Years"
                          }
                          name="estimated_sales_cycle"
                          value={estimated_sales_cycle}
                          onChange={handleChange}
                        />
                        <StyledChoiceWrapper>
                          <StyledChoiceColumn>
                            <StyledChoiceItem
                              data-name="estimated_sales_cycle_selector"
                              data-value="months"
                              onClick={handleSelectorChoice}
                              className={
                                estimated_sales_cycle_selector === "months"
                                  ? "active"
                                  : ""
                              }
                            >
                              Months
                            </StyledChoiceItem>
                          </StyledChoiceColumn>
                          <StyledChoiceColumn>
                            <StyledChoiceItem
                              data-name="estimated_sales_cycle_selector"
                              data-value="years"
                              onClick={handleSelectorChoice}
                              className={
                                estimated_sales_cycle_selector === "years"
                                  ? "active"
                                  : ""
                              }
                            >
                              Years
                            </StyledChoiceItem>
                          </StyledChoiceColumn>
                        </StyledChoiceWrapper>
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

export default StepTwo
