import React from "react"
// Helpers
import { numberWithCommas } from "src/util/helpers"
// Components
import { Row, Col } from "react-bootstrap"
import {
  ContentCard,
  StyledSidebarMenuIcon,
  StyledContentCardLabel,
  StyledContentCardSpotlight,
} from "src/components/StyledElements"

const ReportSolidMetrics = ({
  conversion_rate,
  average_qualified_leads_per_month,
  average_new_customers_per_month,
  average_cost_per_lead,
  cost_per_customer_acquisition,
  customers_needed_for_revenue_target,
}) => {
  return (
    <Row>
      <Col lg="6" xl="4" className="mb-3">
        <ContentCard>
          <div className="d-flex align-center">
            <StyledSidebarMenuIcon Large className="mr-3">
              C
            </StyledSidebarMenuIcon>
            <div>
              <StyledContentCardLabel>Conversion Rate</StyledContentCardLabel>
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
              A
            </StyledSidebarMenuIcon>
            <div>
              <StyledContentCardLabel>
                Average Cost Per Lead
              </StyledContentCardLabel>
              <StyledContentCardSpotlight Gradient>
                ${numberWithCommas(Number(average_cost_per_lead))}
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
              <StyledContentCardLabel>Cost Per Customer</StyledContentCardLabel>
              <StyledContentCardSpotlight Gradient>
                ${numberWithCommas(Number(cost_per_customer_acquisition))}
              </StyledContentCardSpotlight>
            </div>
          </div>
        </ContentCard>
      </Col>

      <Col lg="6" xl="4" className="mb-3">
        <ContentCard>
          <div className="d-flex align-center">
            <StyledSidebarMenuIcon Large className="mr-3">
              C
            </StyledSidebarMenuIcon>
            <div>
              <StyledContentCardLabel>
                Total New Customers Needed
              </StyledContentCardLabel>
              <StyledContentCardSpotlight Gradient>
                {numberWithCommas(
                  Math.floor(Number(customers_needed_for_revenue_target))
                )}
              </StyledContentCardSpotlight>
            </div>
          </div>
        </ContentCard>
      </Col>
    </Row>
  )
}

export default ReportSolidMetrics
