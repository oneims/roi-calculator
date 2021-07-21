import React, { Component } from "react"
import SEO from "src/components/Seo"
import { Container } from "react-bootstrap"
import { STATIC_Industries } from "src/util/STATIC_Data"
import Select from "react-select"
import NumberFormat from "react-number-format"
import DatePicker from "react-datepicker"
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
  StyledChoiceWrapper,
  StyledChoiceColumn,
  StyledChoiceItem,
} from "src/components/StyledElements"

const options = STATIC_Industries

export class StepOne extends Component {
  componentDidMount() {
    this.props.updateHeaderState(
      "step__one",
      "/",
      "/onboarding/step-two",
      "Next"
    )
    this.props.updateStepOneButtonState()
  }

  render() {
    const {
      industry,
      current_annual_revenue,
      current_annual_revenue_selector,
      yoy_growth_rate,
      revenue_growth_goal,
      revenue_growth_goal_selector,
      target_date_to_reach_revenue,
      handleChange,
      handleSelectChange,
      handleSelectorChoice,
      handleDateChange,
    } = this.props
    return (
      <>
        <SEO title="Onboarding" />
        <Section Small AppSection>
          <Container>
            <ContentBox MW800 className="text-center ml-auto mr-auto">
              <PageHeading GradientText>Basics</PageHeading>
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
                          placeholder="$"
                          prefix={"$"}
                          suffix={
                            current_annual_revenue_selector === "million"
                              ? " Million"
                              : " Billion"
                          }
                          name="current_annual_revenue"
                          value={current_annual_revenue}
                          onChange={handleChange}
                        />
                        <StyledChoiceWrapper>
                          <StyledChoiceColumn>
                            <StyledChoiceItem
                              data-parent-name="current_annual_revenue"
                              data-parent-value={
                                current_annual_revenue.split(" ")[0] +
                                " Million"
                              }
                              data-name="current_annual_revenue_selector"
                              data-value="million"
                              onClick={handleSelectorChoice}
                              className={
                                current_annual_revenue_selector === "million"
                                  ? "active"
                                  : ""
                              }
                            >
                              Mill
                            </StyledChoiceItem>
                          </StyledChoiceColumn>
                          <StyledChoiceColumn>
                            <StyledChoiceItem
                              data-parent-name="current_annual_revenue"
                              data-parent-value={
                                current_annual_revenue.split(" ")[0] +
                                " Billion"
                              }
                              data-name="current_annual_revenue_selector"
                              data-value="billion"
                              onClick={handleSelectorChoice}
                              className={
                                current_annual_revenue_selector === "billion"
                                  ? "active"
                                  : ""
                              }
                            >
                              Bill
                            </StyledChoiceItem>
                          </StyledChoiceColumn>
                        </StyledChoiceWrapper>
                      </StyledInput>
                    </StyledField>
                  </StyledFieldWrapper>

                  <StyledFieldWrapper>
                    <StyledField TwoColumn>
                      <Label htmlFor="yoy_growth_rate">
                        YOY Growth Rate in %
                      </Label>
                      <StyledInput>
                        <NumberFormat
                          suffix={"%"}
                          placeholder="%"
                          name="yoy_growth_rate"
                          value={yoy_growth_rate}
                          onChange={handleChange}
                        />
                      </StyledInput>
                    </StyledField>
                    <StyledField TwoColumn>
                      <Label htmlFor="revenue_growth_goal">
                        Revenue Growth Goal
                      </Label>
                      <StyledInput>
                        <NumberFormat
                          thousandSeparator={true}
                          placeholder="$"
                          prefix={"$"}
                          suffix={
                            revenue_growth_goal_selector === "million"
                              ? " Million"
                              : " Billion"
                          }
                          name="revenue_growth_goal"
                          value={revenue_growth_goal}
                          onChange={handleChange}
                        />
                        <StyledChoiceWrapper>
                          <StyledChoiceColumn>
                            <StyledChoiceItem
                              data-parent-name="revenue_growth_goal"
                              data-parent-value={
                                revenue_growth_goal.split(" ")[0] + " Million"
                              }
                              data-name="revenue_growth_goal_selector"
                              data-value="million"
                              onClick={handleSelectorChoice}
                              className={
                                revenue_growth_goal_selector === "million"
                                  ? "active"
                                  : ""
                              }
                            >
                              Mill
                            </StyledChoiceItem>
                          </StyledChoiceColumn>
                          <StyledChoiceColumn>
                            <StyledChoiceItem
                              data-parent-name="revenue_growth_goal"
                              data-parent-value={
                                revenue_growth_goal.split(" ")[0] + " Billion"
                              }
                              data-name="revenue_growth_goal_selector"
                              data-value="billion"
                              onClick={handleSelectorChoice}
                              className={
                                revenue_growth_goal_selector === "billion"
                                  ? "active"
                                  : ""
                              }
                            >
                              Bill
                            </StyledChoiceItem>
                          </StyledChoiceColumn>
                        </StyledChoiceWrapper>
                      </StyledInput>
                    </StyledField>
                  </StyledFieldWrapper>
                  <StyledFieldWrapper>
                    <StyledField>
                      <Label htmlFor="target_date_to_reach_revenue">
                        Target Date to Reach Revenue
                      </Label>
                      <DatePicker
                        selected={new Date(target_date_to_reach_revenue)}
                        name="target_date_to_reach_revenue"
                        onFocus={e => e.target.blur()}
                        onChange={date =>
                          handleDateChange(date, "target_date_to_reach_revenue")
                        }
                        minDate={new Date()}
                        dateFormat="MM/yyyy"
                        showMonthYearPicker
                      />
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

export default StepOne
