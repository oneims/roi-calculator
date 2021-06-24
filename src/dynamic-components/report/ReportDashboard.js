import React, { Component } from "react"
import SEO from "../../components/Seo"
import { Container, Row, Col, Table } from "react-bootstrap"
import {
  Section,
  ContentCard,
  SubHeading,
  ChildHeading,
  StyledLoaderWrapper,
  StyledLoader,
} from "../../components/StyledElements"

export class ReportDashboard extends Component {
  componentDidMount() {
    this.props.handleUpdateIDState(this.props.id)
    this.props.handleGetDataByID(this.props.id)
  }
  render() {
    const {
      loading,
      error,
      conversion_rate,
      average_qualified_leads_per_month,
      average_new_customers_per_month,
      average_monthly_online_marketing_investment,
      average_cost_per_lead,
      cost_per_customer_acquisition,
      net_new_revenue,
      conversion_rate_CALCULATION,
      average_qualified_leads_per_month_CALCULATION,
      average_new_customers_per_month_CALCULATION,
      average_monthly_online_marketing_investment_CALCULATION,
      average_cost_per_lead_CALCULATION,
      cost_per_customer_acquisition_CALCULATION,
      net_new_revenue_CALCULATION,
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
                        <td>{average_new_customers_per_month}</td>
                        <td
                          className="text-info"
                          dangerouslySetInnerHTML={{
                            __html: average_new_customers_per_month_CALCULATION,
                          }}
                        />
                      </tr>
                      <tr>
                        <td>Average Monthly Online Marketing Investment</td>
                        <td>${average_monthly_online_marketing_investment}</td>
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
                    </tbody>
                  </Table>

                  {/* <Row>
                    <Col lg="4" className="mb-4">
                      <ContentCard>
                        <ChildHeading>
                          Conversion Rate: {conversion_rate}
                        </ChildHeading>
                      </ContentCard>
                    </Col>
                    <Col lg="4" className="mb-4">
                      <ContentCard>
                        <ChildHeading>
                          Average Qualified Leads Per Month:{" "}
                          {average_qualified_leads_per_month}
                        </ChildHeading>
                      </ContentCard>
                    </Col>
                    <Col lg="4" className="mb-4">
                      <ContentCard>
                        <ChildHeading>
                          Average New Customers Per Month:{" "}
                          {average_new_customers_per_month}
                        </ChildHeading>
                      </ContentCard>
                    </Col>
                  </Row> */}
                </Container>
              )}
            </>
          )}
        </Section>
      </>
    )
  }
}

export default ReportDashboard
