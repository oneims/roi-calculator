import React from "react"
// Helpers
import { numberWithCommas } from "src/util/helpers"
// Components
import { Row, Col } from "react-bootstrap"
import ReactTooltip from "react-tooltip"
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
  average_monthly_online_marketing_investment,
  average_cost_per_lead,
  cost_per_customer_acquisition,
  customers_needed_for_revenue_target,
  showInfoDrawer,
  net_new_revenue,
  months_to_reach_target,
}) => {
  return (
    <Row>
      <Col lg="6" xl="4" className="mb-3">
        <ContentCard
          Clickable
          onClick={() =>
            showInfoDrawer(
              "Conversion Rate",
              "This metric represents your average conversion rate. This is calculated by dividing the <strong>Monthly Leads</strong> with <strong>Monthly Website Traffic.</strong>"
            )
          }
        >
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
        <ContentCard
          Clickable
          onClick={() =>
            showInfoDrawer(
              "Average Qualified Leads",
              "This metric represents your <strong>Average Qualified Leads Per Month</strong>. This is calculated by multiplying the <strong>Monthly Leads</strong> you provided with the <strong>Percentage of Qualified Leads.</strong>"
            )
          }
        >
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
        <ContentCard
          Clickable
          onClick={() =>
            showInfoDrawer(
              "Average New Customers",
              "This metric represents your <strong>Average New Customers Per Month</strong>. This is calculated by multiplying <strong>Qualified Leads</strong> with the <strong>Average Close Ratio</strong>"
            )
          }
        >
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
        <ContentCard
          Clickable
          onClick={() =>
            showInfoDrawer(
              "Online Marketing Investment",
              "This metric represents your <strong>Average Monthly Online Marketing Investment</strong>. This is derived by your <strong>Annual Marketing Budget</strong>, and the percent of it being used on <strong>Online Advertisement</strong>."
            )
          }
        >
          <div className="d-flex align-center">
            <StyledSidebarMenuIcon Large className="mr-3">
              A
            </StyledSidebarMenuIcon>
            <div>
              <StyledContentCardLabel>
                Marketing Investment
              </StyledContentCardLabel>
              <StyledContentCardSpotlight Gradient>
                $
                {numberWithCommas(
                  Number(average_monthly_online_marketing_investment)
                )}
              </StyledContentCardSpotlight>
            </div>
          </div>
        </ContentCard>
      </Col>

      <Col lg="6" xl="4" className="mb-3">
        <ContentCard
          Clickable
          onClick={() =>
            showInfoDrawer(
              "Cost Per Lead",
              "This metric represents your <strong>Average Cost Per Lead</strong>. This is calculated by dividing <strong>Monthly Leads</strong> with <strong>Monthly Marketing Online Investment</strong>."
            )
          }
        >
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
        <ContentCard
          Clickable
          onClick={() =>
            showInfoDrawer(
              "Cost Per Customer",
              "This metric represents your <strong>Average Cost Per Customer Acquisition</strong>. This is calculated by multiplying <strong>Qualified Leads</strong> with <strong>Average Close Ratio</strong>."
            )
          }
        >
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
        <ContentCard
          Clickable
          onClick={() =>
            showInfoDrawer(
              "New Customers Needed",
              "This metric represents <strong>Customers Needed to Reach Target</strong>. This is calculated by taking your <strong>Revenue Growth Goal</strong> and subtracting the <strong>Current Annual Revenue</strong> from it. The remainder is then divided by the average <strong>Revenue Per Customer</strong>."
            )
          }
        >
          <div className="d-flex align-center">
            <StyledSidebarMenuIcon Large className="mr-3">
              C
            </StyledSidebarMenuIcon>
            <div>
              <StyledContentCardLabel>
                Customers to Reach Goal
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

      <Col lg="6" xl="4" className="mb-3">
        <ContentCard
          Clickable
          onClick={() =>
            showInfoDrawer(
              "Revenue Per Month",
              "This metric represents your <strong>Net Revenue Per Month</strong>. This is calculated by multiplying <strong>Average New Customers</strong> with <strong>Revenue Per Customer</strong>."
            )
          }
        >
          <div className="d-flex align-center">
            <StyledSidebarMenuIcon Large className="mr-3">
              N
            </StyledSidebarMenuIcon>
            <div>
              <StyledContentCardLabel>Monthly Revenue</StyledContentCardLabel>
              <StyledContentCardSpotlight Gradient>
                {numberWithCommas(Math.floor(Number(net_new_revenue)))}
              </StyledContentCardSpotlight>
            </div>
          </div>
        </ContentCard>
      </Col>

      <Col lg="6" xl="4" className="mb-3">
        <ContentCard
          Clickable
          onClick={() =>
            showInfoDrawer(
              "Expected Revenue By Target Date",
              `This metric represents the <strong>Expected Revenue by Target Date</strong>. This is calculated by multiplying the current <strong>Net Revenue</strong> with <strong>${months_to_reach_target}</strong> (months to reach target date).`
            )
          }
        >
          <div className="d-flex align-center">
            <StyledSidebarMenuIcon Large className="mr-3">
              E
            </StyledSidebarMenuIcon>
            <div>
              <StyledContentCardLabel>Expected Revenue</StyledContentCardLabel>
              <StyledContentCardSpotlight Gradient>
                $
                {numberWithCommas(
                  Math.floor(net_new_revenue * months_to_reach_target)
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
