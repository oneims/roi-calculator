import React, { Component } from "react"
import { navigate } from "gatsby"
import SEO from "src/components/Seo"
import { Container } from "react-bootstrap"
import NumberFormat from "react-number-format"
import SimpleReactValidator from "simple-react-validator"
import { convertToInt, checkAllValid } from "src/util/helpers"
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
  StyledInfoText,
  StyledField,
  StyledInput,
  StyledChoiceWrapper,
  StyledChoiceColumn,
  StyledChoiceItem,
} from "src/components/StyledElements"

export class StepTwo extends Component {
  componentWillMount() {
    this.validator = new SimpleReactValidator()
  }

  componentDidMount() {
    this.props.updateHeaderState(
      "step__two",
      "/onboarding/step-one",
      "/onboarding/step-three",
      "Next"
    )
    if (this.validator.allValid()) {
      this.props.stepTwoValidator(true)
    } else {
      this.props.stepTwoValidator(false)
    }
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
                      <Label
                        htmlFor="average_revenue_per_customer"
                        className="mb-0"
                      >
                        Average Revenue Per Customer or Deal
                      </Label>
                      <StyledInfoText className="mb-2">in USD</StyledInfoText>
                      <StyledInput>
                        <NumberFormat
                          thousandSeparator={true}
                          decimalSeparator={false}
                          placeholder="$"
                          prefix={"$"}
                          name="average_revenue_per_customer"
                          value={average_revenue_per_customer}
                          onChange={e => {
                            handleChange(e)
                            checkAllValid(
                              this.validator,
                              "average_revenue_per_customer",
                              this.props.stepTwoValidator
                            )
                          }}
                        />
                      </StyledInput>
                      {this.validator.message(
                        "average_revenue_per_customer",
                        average_revenue_per_customer,
                        "required",
                        { className: "validation-error" }
                      )}
                    </StyledField>
                    <StyledField TwoColumn>
                      <Label htmlFor="gross_margin_per_sale" className="mb-0">
                        Estimated Gross Margin Per Sale
                      </Label>
                      <StyledInfoText className="mb-2">
                        in Percentage
                      </StyledInfoText>
                      <StyledInput>
                        <NumberFormat
                          suffix={"%"}
                          placeholder="%"
                          name="gross_margin_per_sale"
                          decimalSeparator={false}
                          value={gross_margin_per_sale}
                          isAllowed={({ value }) => value <= 1000}
                          onChange={e => {
                            handleChange(e)
                            checkAllValid(
                              this.validator,
                              "gross_margin_per_sale",
                              this.props.stepTwoValidator
                            )
                          }}
                        />
                      </StyledInput>
                      {this.validator.message(
                        "gross_margin_per_sale",
                        convertToInt(gross_margin_per_sale),
                        "required|between:1,1000,num",
                        { className: "validation-error" }
                      )}
                    </StyledField>
                  </StyledFieldWrapper>

                  <StyledFieldWrapper>
                    <StyledField TwoColumn>
                      <Label
                        htmlFor="average_conversion_rate_on_meetings_to_opportunities"
                        className="mb-0"
                      >
                        Average Conversion Rate on Meetings to Opportunities
                      </Label>
                      <StyledInfoText className="mb-2">
                        in Percentage
                      </StyledInfoText>
                      <StyledInput>
                        <NumberFormat
                          suffix={"%"}
                          placeholder="%"
                          name="average_conversion_rate_on_meetings_to_opportunities"
                          isAllowed={({ value }) => value <= 100}
                          decimalSeparator={false}
                          value={
                            average_conversion_rate_on_meetings_to_opportunities
                          }
                          onChange={e => {
                            handleChange(e)
                            checkAllValid(
                              this.validator,
                              "average_conversion_rate_on_meetings_to_opportunities",
                              this.props.stepTwoValidator
                            )
                          }}
                        />
                      </StyledInput>
                      {this.validator.message(
                        "average_conversion_rate_on_meetings_to_opportunities",
                        convertToInt(
                          average_conversion_rate_on_meetings_to_opportunities
                        ),
                        "required|between:1,100,num",
                        { className: "validation-error" }
                      )}
                    </StyledField>
                    <StyledField TwoColumn>
                      <Label
                        htmlFor="average_close_ratio_from_opportunities_to_deals"
                        className="mb-0"
                      >
                        Average Close Ratio from Opportunities to Deals
                      </Label>
                      <StyledInfoText className="mb-2">
                        in Percentage
                      </StyledInfoText>
                      <StyledInput>
                        <NumberFormat
                          suffix={"%"}
                          placeholder="%"
                          decimalSeparator={false}
                          isAllowed={({ value }) => value <= 100}
                          name="average_close_ratio_from_opportunities_to_deals"
                          value={
                            average_close_ratio_from_opportunities_to_deals
                          }
                          onChange={e => {
                            handleChange(e)
                            checkAllValid(
                              this.validator,
                              "average_close_ratio_from_opportunities_to_deals",
                              this.props.stepTwoValidator
                            )
                          }}
                        />
                      </StyledInput>
                      {this.validator.message(
                        "average_close_ratio_from_opportunities_to_deals",
                        convertToInt(
                          average_close_ratio_from_opportunities_to_deals
                        ),
                        "required|between:1,100,num",
                        { className: "validation-error" }
                      )}
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
                          decimalSeparator={false}
                          isAllowed={({ value }) => value <= 100}
                          onChange={handleChange}
                        />
                        <StyledChoiceWrapper>
                          <StyledChoiceColumn>
                            <StyledChoiceItem
                              data-parent-name="estimated_sales_cycle"
                              data-parent-value={
                                estimated_sales_cycle.split(" ")[0] + " Months"
                              }
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
                              data-parent-name="estimated_sales_cycle"
                              data-parent-value={
                                estimated_sales_cycle.split(" ")[0] + " Years"
                              }
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
