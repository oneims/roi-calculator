import React, { Component } from "react"
import { navigate } from "gatsby"
import SEO from "src/components/Seo"
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
} from "src/components/StyledElements"

export class StepThree extends Component {
  componentDidMount() {
    this.props.updateHeaderState(
      "step__three",
      "/onboarding/step-two",
      "",
      "Build My Report"
    )
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
        <SEO title="Onboarding" />
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
                      <Label htmlFor="average_monthly_website_traffic">
                        Average Monthly Website Traffic
                      </Label>
                      <StyledInput>
                        <NumberFormat
                          thousandSeparator={true}
                          placeholder=""
                          name="average_monthly_website_traffic"
                          value={average_monthly_website_traffic}
                          onChange={handleChange}
                        />
                      </StyledInput>
                    </StyledField>
                    <StyledField TwoColumn>
                      <Label htmlFor="average_monthly_leads_from_website">
                        Average Monthly Leads from Website
                      </Label>
                      <StyledInput>
                        <NumberFormat
                          thousandSeparator={true}
                          name="average_monthly_leads_from_website"
                          value={average_monthly_leads_from_website}
                          onChange={handleChange}
                        />
                      </StyledInput>
                    </StyledField>
                  </StyledFieldWrapper>

                  <StyledFieldWrapper>
                    <StyledField TwoColumn>
                      <Label htmlFor="average_monthly_leads_from_all_other_sources">
                        Average Monthly Leads From All Other Sources
                      </Label>
                      <StyledInput>
                        <NumberFormat
                          thousandSeparator={true}
                          name="average_monthly_leads_from_all_other_sources"
                          value={average_monthly_leads_from_all_other_sources}
                          onChange={handleChange}
                        />
                      </StyledInput>
                    </StyledField>
                    <StyledField TwoColumn>
                      <Label htmlFor="percentage_of_qualified_leads">
                        Percentage of Qualified Leads
                      </Label>
                      <StyledInput>
                        <NumberFormat
                          suffix={"%"}
                          placeholder="%"
                          name="percentage_of_qualified_leads"
                          value={percentage_of_qualified_leads}
                          onChange={handleChange}
                        />
                      </StyledInput>
                    </StyledField>
                  </StyledFieldWrapper>

                  <StyledFieldWrapper>
                    <StyledField>
                      <Label htmlFor="current_annual_marketing_budget">
                        Current Annual Marketing Budget
                      </Label>
                      <StyledInput>
                        <NumberFormat
                          thousandSeparator={true}
                          placeholder="$"
                          prefix={"$"}
                          name="current_annual_marketing_budget"
                          value={current_annual_marketing_budget}
                          onChange={handleChange}
                        />
                      </StyledInput>
                    </StyledField>
                  </StyledFieldWrapper>

                  <StyledFieldWrapper>
                    <StyledField>
                      <Label htmlFor="percentage_of_marketing_budget_spent_on_online_advertisement">
                        Percentage of Marketing Budget Spent on Online
                        Advertisement
                      </Label>
                      <StyledInput>
                        <NumberFormat
                          name="percentage_of_marketing_budget_spent_on_online_advertisement"
                          suffix={"%"}
                          placeholder="%"
                          value={
                            percentage_of_marketing_budget_spent_on_online_advertisement
                          }
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
