import { GatsbySeo } from "gatsby-plugin-next-seo"
import React, { Component } from "react"
import { Col, Container, Row } from "react-bootstrap"
import DatePicker from "react-datepicker"
import NumberFormat from "react-number-format"
import Select from "react-select"
import SimpleReactValidator from "simple-react-validator"
import {
  ColorStyles,
  ContentCard,
  FormWrapper,
  Label,
  Section,
  StyledChoiceColumn,
  StyledChoiceItem,
  StyledChoiceWrapper,
  StyledField,
  StyledFieldWrapper,
  StyledInfoText,
  StyledFormWrapper,
  StyledInput,
  StyledLoader,
  StyledLoaderWrapper,
  SubHeading,
} from "src/components/StyledElements"
import { checkAllValid, convertMBtoInt, convertToInt } from "src/util/helpers"
import { STATIC_Industries } from "src/util/STATIC_Data"

const title = "Editor | ROI Calculator"
const description =
  "See the numbers and measure your success with the ROI Calculator from the future!"
const seoURL = "https://roicalculator.ai/editor/"

const SEO = () => {
  return (
    <GatsbySeo
      title={title}
      description={description}
      canonical={seoURL}
      noindex={true}
      nofollow={true}
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

const options = STATIC_Industries

class ReportEditor extends Component {
  componentWillMount() {
    this.validator = new SimpleReactValidator()
  }

  componentDidMount() {
    this.props.handleUpdateIDState(this.props.id)
    this.props.handleGetDataByID(this.props.id)
  }
  render() {
    const {
      loading,
      error,
      industry,
      setValidForm,
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
      average_revenue_per_customer,
      gross_margin_per_sale,
      average_conversion_rate_on_meetings_to_opportunities,
      average_close_ratio_from_opportunities_to_deals,
      estimated_sales_cycle,
      estimated_sales_cycle_selector,
      average_monthly_website_traffic,
      average_monthly_leads_from_website,
      average_monthly_leads_from_all_other_sources,
      percentage_of_qualified_leads,
      current_annual_marketing_budget,
      percentage_of_marketing_budget_spent_on_online_advertisement,
    } = this.props

    return (
      <>
        <SEO title="Editor" />
        <Section MinHeight Small>
          {loading ? (
            <StyledLoaderWrapper>
              <StyledLoader />
            </StyledLoaderWrapper>
          ) : (
            <>
              {error ? (
                <Container>
                  <div className="modal-notification">
                    <div className="modal-notification__body modal-notification__body-error">
                      <strong>Error</strong>
                      Hm, something doesn't look right. Please try again later.
                    </div>
                  </div>
                </Container>
              ) : (
                <Container fluid>
                  <Row>
                    <Col lg="6" className="mb-4">
                      <ContentCard>
                        <SubHeading>Step One</SubHeading>
                        <FormWrapper>
                          <StyledFormWrapper NoMinHeight>
                            <StyledFieldWrapper>
                              <StyledField>
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
                            </StyledFieldWrapper>
                            <StyledFieldWrapper>
                              <StyledField>
                                <Label
                                  htmlFor="current_annual_revenue"
                                  className="mb-0"
                                >
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
                                      current_annual_revenue_selector ===
                                      "million"
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
                                        setValidForm
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
                                        onClick={e => {
                                          handleSelectorChoice(e)
                                          checkAllValid(
                                            this.validator,
                                            "current_annual_revenue",
                                            setValidForm
                                          )
                                        }}
                                        className={
                                          current_annual_revenue_selector ===
                                          "million"
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
                                        onClick={e => {
                                          handleSelectorChoice(e)
                                          checkAllValid(
                                            this.validator,
                                            "current_annual_revenue",
                                            setValidForm
                                          )
                                        }}
                                        className={
                                          current_annual_revenue_selector ===
                                          "billion"
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
                              <StyledField>
                                <Label
                                  htmlFor="yoy_growth_rate"
                                  className="mb-0"
                                >
                                  YOY Growth Rate in %
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
                                        setValidForm
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
                            </StyledFieldWrapper>
                            <StyledFieldWrapper>
                              <StyledField>
                                <Label
                                  htmlFor="revenue_growth_goal"
                                  className="mb-0"
                                >
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
                                        setValidForm
                                      )
                                    }}
                                  />
                                  <StyledChoiceWrapper>
                                    <StyledChoiceColumn>
                                      <StyledChoiceItem
                                        data-parent-name="revenue_growth_goal"
                                        data-parent-value={
                                          revenue_growth_goal.split(" ")[0] +
                                          " Million"
                                        }
                                        data-name="revenue_growth_goal_selector"
                                        data-value="million"
                                        onClick={e => {
                                          handleSelectorChoice(e)
                                          checkAllValid(
                                            this.validator,
                                            "revenue_growth_goal",
                                            setValidForm
                                          )
                                        }}
                                        className={
                                          revenue_growth_goal_selector ===
                                          "million"
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
                                          revenue_growth_goal.split(" ")[0] +
                                          " Billion"
                                        }
                                        data-name="revenue_growth_goal_selector"
                                        data-value="billion"
                                        onClick={e => {
                                          handleSelectorChoice(e)
                                          checkAllValid(
                                            this.validator,
                                            "revenue_growth_goal",
                                            setValidForm
                                          )
                                        }}
                                        className={
                                          revenue_growth_goal_selector ===
                                          "billion"
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
                                  selected={
                                    new Date(target_date_to_reach_revenue)
                                  }
                                  name="target_date_to_reach_revenue"
                                  onFocus={e => e.target.blur()}
                                  onChange={date =>
                                    handleDateChange(
                                      date,
                                      "target_date_to_reach_revenue"
                                    )
                                  }
                                  minDate={new Date()}
                                  dateFormat="MM/yyyy"
                                  showMonthYearPicker
                                />
                              </StyledField>
                            </StyledFieldWrapper>
                          </StyledFormWrapper>
                        </FormWrapper>
                      </ContentCard>
                    </Col>

                    <Col lg="6" className="mb-4">
                      <ContentCard>
                        <SubHeading>Step Two</SubHeading>
                        <FormWrapper>
                          <StyledFormWrapper NoMinHeight>
                            <StyledFieldWrapper>
                              <StyledField>
                                <Label
                                  htmlFor="average_revenue_per_customer"
                                  className="mb-0"
                                >
                                  Average Revenue Per Customer or Deal
                                </Label>
                                <StyledInfoText className="mb-2">
                                  in USD
                                </StyledInfoText>
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
                                        setValidForm
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
                            </StyledFieldWrapper>
                            <StyledFieldWrapper>
                              <StyledField>
                                <Label
                                  htmlFor="gross_margin_per_sale"
                                  className="mb-0"
                                >
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
                                        setValidForm
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
                              <StyledField>
                                <Label
                                  htmlFor="average_conversion_rate_on_meetings_to_opportunities"
                                  className="mb-0"
                                >
                                  Average Conversion Rate on Meetings to
                                  Opportunities
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
                                        setValidForm
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
                            </StyledFieldWrapper>
                            <StyledFieldWrapper>
                              <StyledField>
                                <Label
                                  htmlFor="average_close_ratio_from_opportunities_to_deals"
                                  className="mb-0"
                                >
                                  Average Close Ratio from Opportunities to
                                  Deals
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
                                        setValidForm
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
                                <Label
                                  htmlFor="estimated_sales_cycle"
                                  className="mb-0"
                                >
                                  Estimated Sales Cycle
                                </Label>
                                <StyledInfoText className="mb-2">
                                  in Months or Years
                                </StyledInfoText>
                                <StyledInput>
                                  <NumberFormat
                                    suffix={
                                      estimated_sales_cycle_selector ===
                                      "months"
                                        ? " Months"
                                        : " Years"
                                    }
                                    placeholder={
                                      estimated_sales_cycle_selector ===
                                      "months"
                                        ? "In Months"
                                        : "In Years"
                                    }
                                    name="estimated_sales_cycle"
                                    value={estimated_sales_cycle}
                                    decimalSeparator={false}
                                    isAllowed={({ value }) => value <= 100}
                                    onChange={e => {
                                      handleChange(e)
                                      checkAllValid(
                                        this.validator,
                                        "estimated_sales_cycle",
                                        setValidForm
                                      )
                                    }}
                                  />
                                  <StyledChoiceWrapper>
                                    <StyledChoiceColumn>
                                      <StyledChoiceItem
                                        data-parent-name="estimated_sales_cycle"
                                        data-parent-value={
                                          estimated_sales_cycle.split(" ")[0] +
                                          " Months"
                                        }
                                        data-name="estimated_sales_cycle_selector"
                                        data-value="months"
                                        onClick={handleSelectorChoice}
                                        className={
                                          estimated_sales_cycle_selector ===
                                          "months"
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
                                          estimated_sales_cycle.split(" ")[0] +
                                          " Years"
                                        }
                                        data-name="estimated_sales_cycle_selector"
                                        data-value="years"
                                        onClick={handleSelectorChoice}
                                        className={
                                          estimated_sales_cycle_selector ===
                                          "years"
                                            ? "active"
                                            : ""
                                        }
                                      >
                                        Years
                                      </StyledChoiceItem>
                                    </StyledChoiceColumn>
                                  </StyledChoiceWrapper>
                                </StyledInput>
                                {this.validator.message(
                                  "estimated_sales_cycle",
                                  convertToInt(estimated_sales_cycle),
                                  "required|between:1,100,num",
                                  { className: "validation-error" }
                                )}
                              </StyledField>
                            </StyledFieldWrapper>
                          </StyledFormWrapper>
                        </FormWrapper>
                      </ContentCard>
                    </Col>

                    <Col lg="12" className="mb-4">
                      <ContentCard>
                        <SubHeading>Step Three</SubHeading>
                        <FormWrapper>
                          <StyledFormWrapper NoMinHeight>
                            <StyledFieldWrapper>
                              <StyledField TwoColumn>
                                <Label
                                  htmlFor="average_monthly_website_traffic"
                                  className="mb-0"
                                >
                                  Average Monthly Website Traffic
                                </Label>
                                <StyledInfoText className="mb-2">
                                  Required
                                </StyledInfoText>
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
                                        setValidForm
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
                                <StyledInfoText className="mb-2">
                                  Required
                                </StyledInfoText>
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
                                        setValidForm
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
                                    value={
                                      average_monthly_leads_from_all_other_sources
                                    }
                                    decimalSeparator={false}
                                    onChange={e => {
                                      handleChange(e)
                                      checkAllValid(
                                        this.validator,
                                        "average_monthly_leads_from_all_other_sources",
                                        setValidForm
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
                                        setValidForm
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
                                <StyledInfoText className="mb-2">
                                  in USD
                                </StyledInfoText>
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
                                        setValidForm
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
                                        setValidForm
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
                      </ContentCard>
                    </Col>
                  </Row>
                </Container>
              )}
            </>
          )}
        </Section>
      </>
    )
  }
}

export default ReportEditor
