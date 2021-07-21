import React, { Component } from "react"
import SEO from "src/components/Seo"
// Static Data
import { STATIC_Industry_Metrics } from "src/util/STATIC_Data"
// Helpers
import {
  removeSpecialChars,
  numberWithCommas,
  printIndustryNeatly,
  printCompanySizeAnnualRevenueNeatly,
  getDifferenceInMonths,
  parseISOString,
  getDifferenceBetweenTargetRevenueAndNewCustomers,
} from "src/util/helpers"
// Components
import { Container, Table, Row, Col } from "react-bootstrap"
import ReportFunnel from "src/components/report/ReportFunnel"
import InfoAlert from "src/components/InfoAlert"
import ReportAreaGraph from "src/components/report/ReportAreaGraph"
import ReportPieChart from "src/components/report/ReportPieChart"
import ReportSolidMetrics from "src/components/report/ReportSolidMetrics"
import ReportBarChart from "src/components/report/ReportBarChart"
import {
  Section,
  ContentCard,
  StyledLoaderWrapper,
  StyledLoader,
  StyledContentCardSpotlight,
} from "src/components/StyledElements"

export class ReportDashboard extends Component {
  componentDidMount() {
    this.props.handleUpdateIDState(this.props.id)
    this.props.handleGetDataByID(this.props.id)
  }
  render() {
    const {
      // Misc
      loading,
      error,
      // Base Data
      industry,
      company_size_in_revenue,
      revenue_growth_goal,
      current_annual_marketing_budget,
      average_revenue_per_customer,
      target_date_to_reach_revenue,
      current_annual_revenue,
      // Useful for funnel
      average_monthly_website_traffic,
      average_monthly_leads_from_website,
      // Values needed to build report
      conversion_rate,
      average_qualified_leads_per_month,
      average_new_customers_per_month,
      average_monthly_online_marketing_investment,
      average_cost_per_lead,
      cost_per_customer_acquisition,
      net_new_revenue,
      cost_per_lead,
      customers_needed_for_revenue_target,
      cost_per_new_customer,
      // Calculations
      conversion_rate_CALCULATION,
      average_qualified_leads_per_month_CALCULATION,
      average_new_customers_per_month_CALCULATION,
      average_monthly_online_marketing_investment_CALCULATION,
      average_cost_per_lead_CALCULATION,
      cost_per_customer_acquisition_CALCULATION,
      net_new_revenue_CALCULATION,
      cost_per_lead_CALCULATION,
      customers_needed_for_revenue_target_CALCULATION,
      cost_per_new_customer_CALCULATION,
      // Projections
      conversion_rate_PROJECTION,
      average_qualified_leads_per_month_PROJECTION,
      average_new_customers_per_month_PROJECTION,
      average_cost_per_lead_PROJECTION,
      // Projections Graph
      monthly_leads_PROJECTION_GRAPH,
      // Budget Optimizer
      budget_optimizer,
    } = this.props

    const dummyData = [
      {
        name: "A",
        Leads: 1400,
      },
      {
        name: "B",
        Leads: 400,
      },
      {
        name: "C",
        Leads: 4500,
      },
      {
        name: "D",
        Leads: 2500,
      },
      {
        name: "E",
        Leads: 9000,
      },
      {
        name: "F",
        Leads: 15000,
      },
      {
        name: "G",
        Leads: 2400,
      },
    ]

    const dummyDataTwo = [
      {
        name: "A",
        Leads: 480,
      },
      {
        name: "B",
        Leads: 15000,
      },
      {
        name: "C",
        Leads: 1500,
      },
      {
        name: "D",
        Leads: 2500,
      },
      {
        name: "E",
        Leads: 1500,
      },
      {
        name: "F",
        Leads: 9000,
      },
      {
        name: "G",
        Leads: 2400,
      },
    ]

    let DATA_current_funnel
    let DATA_optimized_funnel
    let DATA_comparison_bar_chart
    let monthsToReachTarget
    let deficitFromTargetRevenue

    if (!loading) {
      monthsToReachTarget = getDifferenceInMonths(
        new Date(),
        parseISOString(target_date_to_reach_revenue)
      )

      deficitFromTargetRevenue = getDifferenceBetweenTargetRevenueAndNewCustomers(
        Math.ceil(Number(customers_needed_for_revenue_target)),
        average_revenue_per_customer,
        revenue_growth_goal
      )

      DATA_comparison_bar_chart = [
        // {
        //   name: "Average Conversion Rate",
        //   Industry: STATIC_Industry_Metrics[industry].conversion_rate,
        //   Yours: removeSpecialChars(conversion_rate),
        // },
        {
          name: "Average Monthly Website Traffic",
          Industry:
            STATIC_Industry_Metrics[industry].average_monthly_website_traffic,
          Yours: removeSpecialChars(average_monthly_website_traffic),
        },
        {
          name: "Average New Customers Per Month",
          Industry:
            STATIC_Industry_Metrics[industry].average_new_customers_per_month,
          Yours: removeSpecialChars(average_new_customers_per_month),
        },
        {
          name: "Average Revenue Per Customer",
          Industry:
            STATIC_Industry_Metrics[industry].average_revenue_per_customer,
          Yours: removeSpecialChars(average_revenue_per_customer),
        },
      ]

      DATA_current_funnel = [
        {
          _id: "5de52b4ac4275a463f912042",
          item: "website_traffic",
          label: "Website Traffic",
          quantity: Number(removeSpecialChars(average_monthly_website_traffic)),
        },
        {
          _id: "5de52b4ac4275a463f912041",
          item: "website_conversion",
          label: "Website Conversions",
          quantity: Number(
            Math.floor(removeSpecialChars(average_monthly_leads_from_website))
          ),
        },
        {
          _id: "5de52b4ac4275a463f912040",
          item: "qualified_leads",
          label: "Qualified Leads",
          quantity: Number(
            Math.floor(removeSpecialChars(average_qualified_leads_per_month))
          ),
        },
        {
          _id: "5de52b4ac4275a463f91203f",
          item: "deals_won",
          label: "Deals Won",
          quantity: Number(
            Math.floor(removeSpecialChars(average_new_customers_per_month))
          ),
        },
      ]

      DATA_optimized_funnel = [
        {
          _id: "5de52b4ac4275a463f912042",
          item: "website_traffic",
          label: "Website Traffic",
          quantity: Number(
            removeSpecialChars(average_monthly_website_traffic) *
              monthsToReachTarget
          ),
        },
        {
          _id: "5de52b4ac4275a463f912041",
          item: "website_conversion",
          label: "Website Conversions",
          quantity: Number(
            Math.floor(
              removeSpecialChars(average_monthly_leads_from_website) *
                monthsToReachTarget
            )
          ),
        },
        {
          _id: "5de52b4ac4275a463f912040",
          item: "qualified_leads",
          label: "Qualified Leads",
          quantity: Number(
            Math.floor(
              removeSpecialChars(average_qualified_leads_per_month) *
                monthsToReachTarget
            )
          ),
        },
        {
          _id: "5de52b4ac4275a463f91203f",
          item: "deals_won",
          label: "Deals Won",
          quantity: Number(
            Math.floor(
              removeSpecialChars(average_new_customers_per_month) *
                monthsToReachTarget
            )
          ),
        },
      ]
    }

    return (
      <>
        <SEO title="Report" />
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
                <>
                  {/* BLOCK_01: Conversion Rate TIP */}
                  <Container fluid className="mb-4">
                    {conversion_rate >=
                    STATIC_Industry_Metrics[industry].conversion_rate ? (
                      <InfoAlert>
                        <strong>Great News!</strong> <br />
                        Your conversion rate is currently at{" "}
                        <strong>{conversion_rate}%</strong>, which is great! The
                        industry average for {printIndustryNeatly(industry)} is
                        about{" "}
                        <strong>
                          {STATIC_Industry_Metrics[industry].conversion_rate}%
                        </strong>
                      </InfoAlert>
                    ) : (
                      <InfoAlert Warning>
                        <strong>Optimization Tip:</strong> <br />
                        Your conversion rate is currently at{" "}
                        <strong>{conversion_rate}%</strong>, which is a little
                        too low than the industry average! The industry average
                        for {printIndustryNeatly(industry)} is about{" "}
                        <strong>
                          {STATIC_Industry_Metrics[industry].conversion_rate}%
                        </strong>
                      </InfoAlert>
                    )}
                  </Container>
                  {/* // BLOCK_01: Conversion Rate TIP */}

                  {/* BLOCK_02: Current Funnel */}
                  <Container fluid className="mb-4">
                    <ReportFunnel data={DATA_current_funnel} />
                  </Container>
                  {/* // BLOCK_02: Current Funnel */}

                  {/* BLOCK_03: Solid Metrics */}
                  <Container fluid className="mb-2">
                    <ReportSolidMetrics {...this.props} />
                  </Container>
                  {/* // BLOCK_03: Solid Metrics */}

                  {/* BLOCK_04: Road to Doubled Leads */}
                  <Container fluid className="mb-4">
                    <Row>
                      <Col lg="12">
                        <ContentCard>
                          <StyledContentCardSpotlight
                            Gradient
                            className="text-center mt-2 mb-1"
                          >
                            Path to{" "}
                            {numberWithCommas(
                              Number(
                                removeSpecialChars(
                                  average_monthly_leads_from_website
                                )
                              ) * 2
                            )}{" "}
                            Leads
                          </StyledContentCardSpotlight>
                          <p className="text-center f-400">
                            Based on your current monthly leads of{" "}
                            <span className="text-color-primary f-700">
                              {average_monthly_leads_from_website}
                            </span>
                          </p>
                          <ReportAreaGraph
                            data={monthly_leads_PROJECTION_GRAPH}
                          />
                        </ContentCard>
                      </Col>
                    </Row>
                  </Container>
                  {/* // BLOCK_04: Road to Doubled Leads */}

                  {/* BLOCK_05: Optimization Tip Cost Per Lead */}
                  <Container fluid className="mb-4">
                    {average_cost_per_lead <
                    STATIC_Industry_Metrics[industry].average_cost_per_lead[
                      company_size_in_revenue
                    ] ? (
                      <InfoAlert>
                        <strong>Great News!</strong> <br />
                        Your average cost per lead is currently at{" "}
                        <strong>${average_cost_per_lead}</strong>, which is
                        great! The industry average for{" "}
                        {printIndustryNeatly(industry)} is about{" "}
                        <strong>
                          $
                          {
                            STATIC_Industry_Metrics[industry]
                              .average_cost_per_lead[company_size_in_revenue]
                          }
                        </strong>{" "}
                        for companies with annual revenue being{" "}
                        {printCompanySizeAnnualRevenueNeatly(
                          company_size_in_revenue
                        )}{" "}
                        USD
                      </InfoAlert>
                    ) : (
                      <InfoAlert Warning>
                        <strong>Great News!</strong> <br />
                        Your average cost per lead is currently at{" "}
                        <strong>${average_cost_per_lead}</strong>, which is
                        high! The industry average for{" "}
                        {printIndustryNeatly(industry)} is about{" "}
                        <strong>
                          $
                          {
                            STATIC_Industry_Metrics[industry]
                              .average_cost_per_lead[company_size_in_revenue]
                          }
                        </strong>{" "}
                        for companies with annual revenue being{" "}
                        {printCompanySizeAnnualRevenueNeatly(
                          company_size_in_revenue
                        )}{" "}
                        USD
                      </InfoAlert>
                    )}
                  </Container>
                  {/* // BLOCK_05: Optimization Tip Cost Per Lead */}

                  {/* BLOCK_06: Comparison Bar Chart */}
                  <Container fluid className="mb-4">
                    <Row>
                      <Col lg="6">
                        <ContentCard>
                          <ReportBarChart data={DATA_comparison_bar_chart} />
                        </ContentCard>
                      </Col>
                      <Col lg="6" className="mt-4 mt-lg-0">
                        <ContentCard>
                          <ReportAreaGraph data={dummyDataTwo} />
                        </ContentCard>
                      </Col>
                    </Row>
                  </Container>
                  {/* // BLOCK_06: Comparison Bar Chart */}

                  {/* BLOCK_07: Report */}
                  <Container fluid className="mb-4">
                    <Row>
                      <Col lg="12">
                        <ContentCard>
                          <StyledContentCardSpotlight
                            Gradient
                            className="text-center mt-2 mb-1"
                          >
                            Budget Optimizer
                          </StyledContentCardSpotlight>
                          <p className="text-center f-400">
                            Based on your current goal to reach{" "}
                            <span className="text-color-primary f-700">
                              {revenue_growth_goal}
                            </span>{" "}
                            and your current marketing budget of{" "}
                            <span className="text-color-primary f-700">
                              {current_annual_marketing_budget}
                            </span>
                          </p>
                          <ReportPieChart data={budget_optimizer} />
                        </ContentCard>
                      </Col>
                    </Row>
                  </Container>
                  {/* // BLOCK_07: Comparison Bar Chart */}

                  {/* BLOCK_08: Optimization Tip Cost Per Lead */}
                  <Container fluid className="mb-4">
                    <InfoAlert Warning>
                      <strong>Optimization Tip:</strong> <br />
                      You need{" "}
                      <strong>
                        {Math.floor(customers_needed_for_revenue_target)}
                      </strong>{" "}
                      new customers in{" "}
                      <strong>
                        {getDifferenceInMonths(
                          new Date(),
                          parseISOString(target_date_to_reach_revenue)
                        )}{" "}
                        months
                      </strong>{" "}
                      to reach your target revenue of{" "}
                      <strong>{revenue_growth_goal}</strong>. That's about{" "}
                      <strong>
                        {Math.floor(
                          Math.floor(customers_needed_for_revenue_target) /
                            getDifferenceInMonths(
                              new Date(),
                              parseISOString(target_date_to_reach_revenue)
                            )
                        )}
                      </strong>{" "}
                      new customers every month. See how your funnel in{" "}
                      <strong>
                        {getDifferenceInMonths(
                          new Date(),
                          parseISOString(target_date_to_reach_revenue)
                        )}{" "}
                        months
                      </strong>{" "}
                      may look like to make up the{" "}
                      <strong>
                        ${numberWithCommas(deficitFromTargetRevenue)}
                      </strong>{" "}
                      target
                    </InfoAlert>
                  </Container>
                  {/* // BLOCK_08: Optimization Tip Cost Per Lead */}

                  {/* BLOCK_09: Current Funnel */}
                  <Container fluid className="mb-4">
                    <ReportFunnel data={DATA_optimized_funnel} />
                  </Container>
                  {/* // BLOCK_09: Current Funnel */}

                  <Container fluid>
                    <Table responsive>
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Value</th>
                          <th>How was this calculated?</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Conversion Rate</td>
                          <td>{conversion_rate}%</td>
                          <td
                            className="text-info"
                            dangerouslySetInnerHTML={{
                              __html: conversion_rate_CALCULATION,
                            }}
                          />
                        </tr>
                        <tr>
                          <td>Average Qualified Leads Per Month</td>
                          <td>{average_qualified_leads_per_month}</td>
                          <td
                            className="text-info"
                            dangerouslySetInnerHTML={{
                              __html: average_qualified_leads_per_month_CALCULATION,
                            }}
                          />
                        </tr>
                        <tr>
                          <td>Average New Customers Per Month</td>
                          <td>{Math.floor(average_new_customers_per_month)}</td>
                          <td
                            className="text-info"
                            dangerouslySetInnerHTML={{
                              __html: average_new_customers_per_month_CALCULATION,
                            }}
                          />
                        </tr>
                        <tr>
                          <td>Average Monthly Online Marketing Investment</td>
                          <td>
                            ${average_monthly_online_marketing_investment}
                          </td>
                          <td
                            className="text-info"
                            dangerouslySetInnerHTML={{
                              __html: average_monthly_online_marketing_investment_CALCULATION,
                            }}
                          />
                        </tr>
                        <tr>
                          <td>Average Cost Per Lead</td>
                          <td>${average_cost_per_lead}</td>
                          <td
                            className="text-info"
                            dangerouslySetInnerHTML={{
                              __html: average_cost_per_lead_CALCULATION,
                            }}
                          />
                        </tr>
                        <tr>
                          <td>Cost Per Customer Acquisiton</td>
                          <td>${cost_per_customer_acquisition}</td>
                          <td
                            className="text-info"
                            dangerouslySetInnerHTML={{
                              __html: cost_per_customer_acquisition_CALCULATION,
                            }}
                          />
                        </tr>
                        <tr>
                          <td>Net New Revenue</td>
                          <td>${net_new_revenue}</td>
                          <td
                            className="text-info"
                            dangerouslySetInnerHTML={{
                              __html: net_new_revenue_CALCULATION,
                            }}
                          />
                        </tr>
                        <tr>
                          <td>Cost Per Lead</td>
                          <td>${cost_per_lead}</td>
                          <td
                            className="text-info"
                            dangerouslySetInnerHTML={{
                              __html: cost_per_lead_CALCULATION,
                            }}
                          />
                        </tr>
                        <tr>
                          <td>Customers Needed to Reach Target</td>
                          <td>{customers_needed_for_revenue_target}</td>
                          <td
                            className="text-info"
                            dangerouslySetInnerHTML={{
                              __html: customers_needed_for_revenue_target_CALCULATION,
                            }}
                          />
                        </tr>
                        <tr>
                          <td>Cost Per New Customer</td>
                          <td>{cost_per_new_customer}</td>
                          <td
                            className="text-info"
                            dangerouslySetInnerHTML={{
                              __html: cost_per_new_customer_CALCULATION,
                            }}
                          />
                        </tr>
                      </tbody>
                    </Table>
                  </Container>
                  <Container fluid className="mt-5 text-center mb-3">
                    <h2>Projections</h2>
                  </Container>
                  <Container fluid className="mt-4">
                    <Table responsive className="no-min-width">
                      <thead>
                        <tr>
                          <th>Conversion Rate</th>
                          <th>Value</th>
                        </tr>
                      </thead>
                      <tbody>
                        {conversion_rate_PROJECTION &&
                          conversion_rate_PROJECTION.map((elem, index) => (
                            <tr key={index}>
                              <td
                                dangerouslySetInnerHTML={{
                                  __html: elem.description,
                                }}
                              />
                              <td className="text-success">{elem.value}%</td>
                            </tr>
                          ))}
                      </tbody>
                    </Table>
                  </Container>

                  <Container fluid className="mt-4">
                    <Table responsive className="no-min-width">
                      <thead>
                        <tr>
                          <th>Average Qualified Leads Per Month</th>
                          <th>Value</th>
                        </tr>
                      </thead>
                      <tbody>
                        {average_qualified_leads_per_month_PROJECTION &&
                          average_qualified_leads_per_month_PROJECTION.map(
                            (elem, index) => (
                              <tr key={index}>
                                <td
                                  dangerouslySetInnerHTML={{
                                    __html: elem.description,
                                  }}
                                />
                                <td className="text-success">{elem.value}</td>
                              </tr>
                            )
                          )}
                      </tbody>
                    </Table>
                  </Container>

                  <Container fluid className="mt-4">
                    <Table responsive className="no-min-width">
                      <thead>
                        <tr>
                          <th>Average New Customers Per Month</th>
                          <th>Value</th>
                        </tr>
                      </thead>
                      <tbody>
                        {average_new_customers_per_month_PROJECTION &&
                          average_new_customers_per_month_PROJECTION.map(
                            (elem, index) => (
                              <tr key={index}>
                                <td
                                  dangerouslySetInnerHTML={{
                                    __html: elem.description,
                                  }}
                                />
                                <td className="text-success">
                                  {Math.floor(elem.value)}
                                </td>
                              </tr>
                            )
                          )}
                      </tbody>
                    </Table>
                  </Container>

                  <Container fluid className="mt-4">
                    <Table responsive className="no-min-width">
                      <thead>
                        <tr>
                          <th>Average Cost Per Lead</th>
                          <th>Value</th>
                        </tr>
                      </thead>
                      <tbody>
                        {average_cost_per_lead_PROJECTION &&
                          average_cost_per_lead_PROJECTION.map(
                            (elem, index) => (
                              <tr key={index}>
                                <td
                                  dangerouslySetInnerHTML={{
                                    __html: elem.description,
                                  }}
                                />
                                <td className="text-success">{elem.value}</td>
                              </tr>
                            )
                          )}
                      </tbody>
                    </Table>
                  </Container>
                </>
              )}
            </>
          )}
        </Section>
      </>
    )
  }
}

export default ReportDashboard
