import React, { Component } from "react"
import SEO from "src/components/Seo"
import Select from "react-select"
import { Container, Row, Col } from "react-bootstrap"
import { STATIC_Industries } from "src/util/STATIC_Data"
import NumberFormat from "react-number-format"
import DatePicker from "react-datepicker"
import {
  Section,
  ContentCard,
  SubHeading,
  StyledLoaderWrapper,
  StyledLoader,
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

export class ReportEditor extends Component {
  componentDidMount() {
    this.props.handleUpdateIDState(this.props.id)
    this.props.handleGetDataByID(this.props.id)
  }
  render() {
    const {
      loading,
      error,
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
                        <SubHeading>Basics</SubHeading>
                        <FormWrapper>
                          <StyledFormWrapper NoMinHeight>
                            <StyledFieldWrapper>
                              <StyledField>
                                <Label htmlFor="industry">
                                  Select Industry
                                </Label>
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
                                <Label htmlFor="current_annual_revenue">
                                  Current Annual Revenue
                                </Label>
                                <StyledInput>
                                  <NumberFormat
                                    thousandSeparator={true}
                                    placeholder="$"
                                    prefix={"$"}
                                    suffix={
                                      current_annual_revenue_selector ===
                                      "million"
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
                                        onClick={handleSelectorChoice}
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
                              </StyledField>
                            </StyledFieldWrapper>
                            <StyledFieldWrapper>
                              <StyledField>
                                <Label htmlFor="yoy_growth_rate">
                                  YOY Growth Rate in %
                                </Label>
                                <StyledInput>
                                  <NumberFormat
                                    suffix={"%"}
                                    placeholder="%"
                                    allowNegative={false}
                                    isAllowed={({ value }) => value <= 100}
                                    name="yoy_growth_rate"
                                    value={yoy_growth_rate}
                                    onChange={handleChange}
                                  />
                                </StyledInput>
                              </StyledField>
                            </StyledFieldWrapper>
                            <StyledFieldWrapper>
                              <StyledField>
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
                                          revenue_growth_goal.split(" ")[0] +
                                          " Million"
                                        }
                                        data-name="revenue_growth_goal_selector"
                                        data-value="million"
                                        onClick={handleSelectorChoice}
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
                                        onClick={handleSelectorChoice}
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
                              </StyledField>
                            </StyledFieldWrapper>
                            <StyledFieldWrapper>
                              <StyledField>
                                <Label htmlFor="target_date_to_reach_revenue">
                                  Target Date to Reach Revenue
                                </Label>
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
                        <SubHeading>Additional</SubHeading>
                        <FormWrapper>
                          <StyledFormWrapper NoMinHeight>
                            <StyledFieldWrapper>
                              <StyledField>
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
                            </StyledFieldWrapper>
                            <StyledFieldWrapper>
                              <StyledField>
                                <Label htmlFor="gross_margin_per_sale">
                                  Estimated Gross Margin Per Sale
                                </Label>
                                <StyledInput>
                                  <NumberFormat
                                    suffix={"%"}
                                    placeholder="%"
                                    allowNegative={false}
                                    isAllowed={({ value }) => value <= 100}
                                    name="gross_margin_per_sale"
                                    value={gross_margin_per_sale}
                                    onChange={handleChange}
                                  />
                                </StyledInput>
                              </StyledField>
                            </StyledFieldWrapper>
                            <StyledFieldWrapper>
                              <StyledField>
                                <Label htmlFor="average_conversion_rate_on_meetings_to_opportunities">
                                  Average Conversion Rate on Meetings to
                                  Opportunities
                                </Label>
                                <StyledInput>
                                  <NumberFormat
                                    suffix={"%"}
                                    placeholder="%"
                                    allowNegative={false}
                                    isAllowed={({ value }) => value <= 100}
                                    name="average_conversion_rate_on_meetings_to_opportunities"
                                    value={
                                      average_conversion_rate_on_meetings_to_opportunities
                                    }
                                    onChange={handleChange}
                                  />
                                </StyledInput>
                              </StyledField>
                            </StyledFieldWrapper>
                            <StyledFieldWrapper>
                              <StyledField>
                                <Label htmlFor="average_close_ratio_from_opportunities_to_deals">
                                  Average Close Ratio from Opportunities to
                                  Deals
                                </Label>
                                <StyledInput>
                                  <NumberFormat
                                    suffix={"%"}
                                    placeholder="%"
                                    allowNegative={false}
                                    isAllowed={({ value }) => value <= 100}
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
                                    onChange={handleChange}
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
                              </StyledField>
                            </StyledFieldWrapper>
                          </StyledFormWrapper>
                        </FormWrapper>
                      </ContentCard>
                    </Col>

                    <Col lg="12" className="mb-4">
                      <ContentCard>
                        <SubHeading>Final</SubHeading>
                        <FormWrapper>
                          <StyledFormWrapper NoMinHeight>
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
                                    value={
                                      average_monthly_leads_from_all_other_sources
                                    }
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
                                    allowNegative={false}
                                    isAllowed={({ value }) => value <= 100}
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
                                    allowNegative={false}
                                    isAllowed={({ value }) => value <= 100}
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
