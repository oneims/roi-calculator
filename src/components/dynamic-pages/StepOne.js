import React, { Component } from "react"
import { Container } from "react-bootstrap"
import DatePicker from "react-datepicker"
import NumberFormat from "react-number-format"
import Select from "react-select"
import SimpleReactValidator from "simple-react-validator"
import SEO from "src/components/Seo"
import {
  ColorStyles,
  ContentBox,
  FormWrapper,
  Label,
  PageHeading,
  ProgressBar,
  ProgressBarWrapper,
  Section,
  StyledChoiceColumn,
  StyledChoiceItem,
  StyledChoiceWrapper,
  StyledField,
  StyledFieldWrapper,
  StyledFormWrapper,
  StyledInfoText,
  StyledInput,
  Subtitle,
} from "src/components/StyledElements"
import { checkAllValid, convertMBtoInt, convertToInt } from "src/util/helpers"
import { STATIC_Industries } from "src/util/STATIC_Data"

const options = STATIC_Industries

export class StepOne extends Component {
  componentWillMount() {
    this.validator = new SimpleReactValidator()
  }

  componentDidMount() {
    this.props.updateHeaderState(
      "step__one",
      "/",
      "/onboarding/step-two",
      "Next"
    )
    if (this.validator.allValid()) {
      this.props.stepOneValidator(true)
    } else {
      this.props.stepOneValidator(false)
    }
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
                      <Label htmlFor="industry" className="mb-0">
                        Select Industry
                      </Label>
                      <StyledInfoText className="mb-2">
                        Industry of your business
                      </StyledInfoText>
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
                      <Label htmlFor="current_annual_revenue" className="mb-0">
                        Current Annual Revenue
                      </Label>
                      <StyledInfoText className="mb-2">
                        Annual Revenue in Millions or Billions
                      </StyledInfoText>
                      <StyledInput>
                        <NumberFormat
                          thousandSeparator={true}
                          placeholder="$"
                          decimalScale={2}
                          prefix={"$"}
                          suffix={
                            current_annual_revenue_selector === "million"
                              ? " Million"
                              : " Billion"
                          }
                          name="current_annual_revenue"
                          value={current_annual_revenue}
                          onChange={e => {
                            handleChange(e)
                            checkAllValid(
                              this.validator,
                              "current_annual_revenue",
                              this.props.stepOneValidator
                            )
                          }}
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
                      {this.validator.message(
                        "current_annual_revenue",
                        convertMBtoInt(current_annual_revenue),
                        "required|min:1,num",
                        { className: "validation-error" }
                      )}
                    </StyledField>
                  </StyledFieldWrapper>

                  <StyledFieldWrapper>
                    <StyledField TwoColumn>
                      <Label htmlFor="yoy_growth_rate" className="mb-0">
                        YOY Growth Rate
                      </Label>
                      <StyledInfoText className="mb-2">
                        In percentage
                      </StyledInfoText>
                      <StyledInput>
                        <NumberFormat
                          suffix={"%"}
                          placeholder="%"
                          name="yoy_growth_rate"
                          value={yoy_growth_rate}
                          isAllowed={({ value }) => value <= 1000}
                          decimalSeparator={false}
                          onChange={e => {
                            handleChange(e)
                            checkAllValid(
                              this.validator,
                              "yoy_growth_rate",
                              this.props.stepOneValidator
                            )
                          }}
                        />
                      </StyledInput>
                      {this.validator.message(
                        "yoy_growth_rate",
                        convertToInt(yoy_growth_rate),
                        "required|between:1,1000,num",
                        { className: "validation-error" }
                      )}
                    </StyledField>
                    <StyledField TwoColumn>
                      <Label htmlFor="revenue_growth_goal" className="mb-0">
                        Revenue Growth Goal
                      </Label>
                      <StyledInfoText className="mb-2">
                        Must be greater than Current Annual Revenue
                      </StyledInfoText>
                      <StyledInput>
                        <NumberFormat
                          thousandSeparator={true}
                          decimalScale={2}
                          placeholder="$"
                          prefix={"$"}
                          suffix={
                            revenue_growth_goal_selector === "million"
                              ? " Million"
                              : " Billion"
                          }
                          name="revenue_growth_goal"
                          value={revenue_growth_goal}
                          onChange={e => {
                            handleChange(e)
                            checkAllValid(
                              this.validator,
                              "revenue_growth_goal",
                              this.props.stepOneValidator
                            )
                          }}
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
                      {this.validator.message(
                        "revenue_growth_goal",
                        convertMBtoInt(revenue_growth_goal),
                        `required|min:${convertMBtoInt(
                          current_annual_revenue
                        )},num`,
                        { className: "validation-error" }
                      )}
                    </StyledField>
                  </StyledFieldWrapper>
                  <StyledFieldWrapper>
                    <StyledField>
                      <Label
                        htmlFor="target_date_to_reach_revenue"
                        className="mb-0"
                      >
                        Target Date to Reach Revenue
                      </Label>
                      <StyledInfoText className="mb-2">
                        Select date to reach target revenue
                      </StyledInfoText>
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
