import React, { Component } from "react"
import SEO from "src/components/Seo"
import { Container, Table, Row, Col } from "react-bootstrap"
import ReportFunnel from "src/components/report/ReportFunnel"
import {
  Section,
  ContentCard,
  StyledLoaderWrapper,
  StyledLoader,
  StyledSidebarMenuIcon,
  StyledContentCardLabel,
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
    } = this.props

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
                  <Container fluid className="mb-4">
                    <ReportFunnel
                      average_monthly_website_traffic={
                        average_monthly_website_traffic
                      }
                      average_monthly_leads_from_website={
                        average_monthly_leads_from_website
                      }
                      average_qualified_leads_per_month={
                        average_qualified_leads_per_month
                      }
                      average_new_customers_per_month={
                        average_new_customers_per_month
                      }
                    />
                  </Container>
                  <Container fluid className="mb-4">
                    <Row>
                      <Col lg="6" xl="4" className="mb-3">
                        <ContentCard>
                          <div className="d-flex align-center">
                            <StyledSidebarMenuIcon Large className="mr-3">
                              C
                            </StyledSidebarMenuIcon>
                            <div>
                              <StyledContentCardLabel>
                                Conversion Rate
                              </StyledContentCardLabel>
                              <StyledContentCardSpotlight Gradient>
                                {conversion_rate}%
                              </StyledContentCardSpotlight>
                            </div>
                          </div>
                        </ContentCard>
                      </Col>
                      <Col lg="6" xl="4" className="mb-3">
                        <ContentCard>
                          <div className="d-flex align-center">
                            <StyledSidebarMenuIcon Large className="mr-3">
                              A
                            </StyledSidebarMenuIcon>
                            <div>
                              <StyledContentCardLabel>
                                Average Qualified Leads
                              </StyledContentCardLabel>
                              <StyledContentCardSpotlight Gradient>
                                {average_qualified_leads_per_month}
                              </StyledContentCardSpotlight>
                            </div>
                          </div>
                        </ContentCard>
                      </Col>

                      <Col lg="6" xl="4" className="mb-3">
                        <ContentCard>
                          <div className="d-flex align-center">
                            <StyledSidebarMenuIcon Large className="mr-3">
                              A
                            </StyledSidebarMenuIcon>
                            <div>
                              <StyledContentCardLabel>
                                Average New Customers
                              </StyledContentCardLabel>
                              <StyledContentCardSpotlight Gradient>
                                {Math.floor(average_new_customers_per_month)}
                              </StyledContentCardSpotlight>
                            </div>
                          </div>
                        </ContentCard>
                      </Col>

                      <Col lg="6" xl="4" className="mb-3">
                        <ContentCard>
                          <div className="d-flex align-center">
                            <StyledSidebarMenuIcon Large className="mr-3">
                              O
                            </StyledSidebarMenuIcon>
                            <div>
                              <StyledContentCardLabel>
                                Online Marketing Investment
                              </StyledContentCardLabel>
                              <StyledContentCardSpotlight Gradient>
                                $
                                {Number(
                                  average_monthly_online_marketing_investment
                                )
                                  .toFixed(2)
                                  .replace(/\d(?=(\d{3})+\.)/g, "$&,")}
                              </StyledContentCardSpotlight>
                            </div>
                          </div>
                        </ContentCard>
                      </Col>

                      <Col lg="6" xl="4" className="mb-3">
                        <ContentCard>
                          <div className="d-flex align-center">
                            <StyledSidebarMenuIcon Large className="mr-3">
                              A
                            </StyledSidebarMenuIcon>
                            <div>
                              <StyledContentCardLabel>
                                Average Cost Per Lead
                              </StyledContentCardLabel>
                              <StyledContentCardSpotlight Gradient>
                                $
                                {Number(average_cost_per_lead)
                                  .toFixed(2)
                                  .replace(/\d(?=(\d{3})+\.)/g, "$&,")}
                              </StyledContentCardSpotlight>
                            </div>
                          </div>
                        </ContentCard>
                      </Col>

                      <Col lg="6" xl="4" className="mb-3">
                        <ContentCard>
                          <div className="d-flex align-center">
                            <StyledSidebarMenuIcon Large className="mr-3">
                              A
                            </StyledSidebarMenuIcon>
                            <div>
                              <StyledContentCardLabel>
                                Cost Per Customer
                              </StyledContentCardLabel>
                              <StyledContentCardSpotlight Gradient>
                                $
                                {Number(cost_per_customer_acquisition)
                                  .toFixed(2)
                                  .replace(/\d(?=(\d{3})+\.)/g, "$&,")}
                              </StyledContentCardSpotlight>
                            </div>
                          </div>
                        </ContentCard>
                      </Col>
                    </Row>
                  </Container>
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
