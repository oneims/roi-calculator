import { navigate } from "gatsby"
import { GatsbySeo } from "gatsby-plugin-next-seo"
import React, { Component } from "react"
import { Container } from "react-bootstrap"
import NumberFormat from "react-number-format"
import SimpleReactValidator from "simple-react-validator"
import {
  ContentBox,
  FormWrapper,
  Label,
  PageHeading,
  ProgressBar,
  ProgressBarWrapper,
  Section,
  StyledField,
  StyledFieldWrapper,
  StyledFormWrapper,
  StyledInfoText,
  StyledInput,
  Subtitle,
} from "src/components/StyledElements"
import { checkAllValid, convertToInt } from "src/util/helpers"

const title = "Onboarding - Step Three | ROI Calculator"
const description =
  "See the numbers and measure your success with the ROI Calculator from the future!"
const seoURL = "https://roicalculator.ai/onboarding/step-three"

const SEO = () => {
  return (
    <GatsbySeo
      title={title}
      description={description}
      canonical={seoURL}
      openGraph={{
        url: seoURL,
        title: title,
        description: description,
        images: [
          {
            url: "/calculator-ss.jpg",
            width: 800,
            height: 600,
            alt: title,
          },
          {
            url: "/calculator-ss.jpg",
            width: 900,
            height: 800,
            alt: title,
          },
          { url: "/calculator-ss.jpg" },
          { url: "/calculator-ss.jpg" },
        ],
      }}
    />
  )
}

class StepThree extends Component {
  componentWillMount() {
    this.validator = new SimpleReactValidator()
  }

  componentDidMount() {
    this.props.updateHeaderState(
      "step__three",
      "/onboarding/step-two",
      "",
      "Build My Report"
    )
    if (this.validator.allValid()) {
      this.props.stepThreeValidator(true)
    } else {
      this.props.stepThreeValidator(false)
    }
    this.props.updateStepThreeButtonState()
    if (!this.props.clearedStepTwo) {
      if (typeof window !== `undefined`) {
        navigate(`/onboarding/step-two`)
      }
    }
  }

  render() {
    const {
      average_monthly_website_traffic,
      average_monthly_leads_from_website,
      average_monthly_leads_from_all_other_sources,
      percentage_of_qualified_leads,
      current_annual_marketing_budget,
      percentage_of_marketing_budget_spent_on_online_advertisement,
      handleChange,
    } = this.props
    return (
      <>
        <SEO />
        <Section Small AppSection>
          <Container>
            <ContentBox MW800 className="text-center ml-auto mr-auto">
              <PageHeading GradientText>Final Step</PageHeading>
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
                        htmlFor="average_monthly_website_traffic"
                        className="mb-0"
                      >
                        Average Monthly Website Traffic
                      </Label>
                      <StyledInfoText className="mb-2">Required</StyledInfoText>
                      <StyledInput>
                        <NumberFormat
                          thousandSeparator={true}
                          placeholder=""
                          decimalSeparator={false}
                          name="average_monthly_website_traffic"
                          value={average_monthly_website_traffic}
                          onChange={e => {
                            handleChange(e)
                            checkAllValid(
                              this.validator,
                              "average_monthly_website_traffic",
                              this.props.stepThreeValidator
                            )
                          }}
                        />
                      </StyledInput>
                      {this.validator.message(
                        "average_monthly_website_traffic",
                        average_monthly_website_traffic,
                        "required",
                        { className: "validation-error" }
                      )}
                    </StyledField>
                    <StyledField TwoColumn>
                      <Label
                        htmlFor="average_monthly_leads_from_website"
                        className="mb-0"
                      >
                        Average Monthly Leads from Website
                      </Label>
                      <StyledInfoText className="mb-2">Required</StyledInfoText>
                      <StyledInput>
                        <NumberFormat
                          thousandSeparator={true}
                          name="average_monthly_leads_from_website"
                          value={average_monthly_leads_from_website}
                          decimalSeparator={false}
                          onChange={e => {
                            handleChange(e)
                            checkAllValid(
                              this.validator,
                              "average_monthly_leads_from_website",
                              this.props.stepThreeValidator
                            )
                          }}
                        />
                      </StyledInput>
                      {this.validator.message(
                        "average_monthly_leads_from_website",
                        average_monthly_leads_from_website,
                        "required",
                        { className: "validation-error" }
                      )}
                    </StyledField>
                  </StyledFieldWrapper>

                  <StyledFieldWrapper>
                    <StyledField TwoColumn>
                      <Label
                        htmlFor="average_monthly_leads_from_all_other_sources"
                        className="mb-0"
                      >
                        Average Monthly Leads From All Other Sources
                      </Label>
                      <StyledInfoText className="mb-2">
                        Excludes Site Traffic
                      </StyledInfoText>
                      <StyledInput>
                        <NumberFormat
                          thousandSeparator={true}
                          name="average_monthly_leads_from_all_other_sources"
                          value={average_monthly_leads_from_all_other_sources}
                          decimalSeparator={false}
                          onChange={e => {
                            handleChange(e)
                            checkAllValid(
                              this.validator,
                              "average_monthly_leads_from_all_other_sources",
                              this.props.stepThreeValidator
                            )
                          }}
                        />
                      </StyledInput>
                      {this.validator.message(
                        "average_monthly_leads_from_all_other_sources",
                        average_monthly_leads_from_all_other_sources,
                        "required",
                        { className: "validation-error" }
                      )}
                    </StyledField>
                    <StyledField TwoColumn>
                      <Label
                        htmlFor="percentage_of_qualified_leads"
                        className="mb-0"
                      >
                        Percentage of Qualified Leads
                      </Label>
                      <StyledInfoText className="mb-2">
                        in Percentage
                      </StyledInfoText>
                      <StyledInput>
                        <NumberFormat
                          suffix={"%"}
                          placeholder="%"
                          name="percentage_of_qualified_leads"
                          value={percentage_of_qualified_leads}
                          decimalSeparator={false}
                          isAllowed={({ value }) => value <= 100}
                          onChange={e => {
                            handleChange(e)
                            checkAllValid(
                              this.validator,
                              "percentage_of_qualified_leads",
                              this.props.stepThreeValidator
                            )
                          }}
                        />
                      </StyledInput>
                      {this.validator.message(
                        "percentage_of_qualified_leads",
                        convertToInt(percentage_of_qualified_leads),
                        "required|between:1,100,num",
                        { className: "validation-error" }
                      )}
                    </StyledField>
                  </StyledFieldWrapper>

                  <StyledFieldWrapper>
                    <StyledField>
                      <Label
                        htmlFor="current_annual_marketing_budget"
                        className="mb-0"
                      >
                        Current Annual Marketing Budget
                      </Label>
                      <StyledInfoText className="mb-2">in USD</StyledInfoText>
                      <StyledInput>
                        <NumberFormat
                          thousandSeparator={true}
                          placeholder="$"
                          prefix={"$"}
                          name="current_annual_marketing_budget"
                          value={current_annual_marketing_budget}
                          decimalSeparator={false}
                          onChange={e => {
                            handleChange(e)
                            checkAllValid(
                              this.validator,
                              "current_annual_marketing_budget",
                              this.props.stepThreeValidator
                            )
                          }}
                        />
                      </StyledInput>
                      {this.validator.message(
                        "current_annual_marketing_budget",
                        current_annual_marketing_budget,
                        "required",
                        { className: "validation-error" }
                      )}
                    </StyledField>
                  </StyledFieldWrapper>

                  <StyledFieldWrapper>
                    <StyledField>
                      <Label
                        htmlFor="percentage_of_marketing_budget_spent_on_online_advertisement"
                        className="mb-0"
                      >
                        Percentage of Marketing Budget Spent on Online
                        Advertisement
                      </Label>
                      <StyledInfoText className="mb-2">
                        in Percentage
                      </StyledInfoText>
                      <StyledInput>
                        <NumberFormat
                          name="percentage_of_marketing_budget_spent_on_online_advertisement"
                          suffix={"%"}
                          placeholder="%"
                          isAllowed={({ value }) => value <= 100}
                          value={
                            percentage_of_marketing_budget_spent_on_online_advertisement
                          }
                          decimalSeparator={false}
                          onChange={e => {
                            handleChange(e)
                            checkAllValid(
                              this.validator,
                              "percentage_of_marketing_budget_spent_on_online_advertisement",
                              this.props.stepThreeValidator
                            )
                          }}
                        />
                      </StyledInput>
                      {this.validator.message(
                        "percentage_of_marketing_budget_spent_on_online_advertisement",
                        convertToInt(
                          percentage_of_marketing_budget_spent_on_online_advertisement
                        ),
                        "required|between:1,100,num",
                        { className: "validation-error" }
                      )}
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
