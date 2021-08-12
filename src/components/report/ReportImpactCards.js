import React from "react"
// Helpers
import { numberWithCommas } from "src/util/helpers"
// Components
import { Row, Col } from "react-bootstrap"
import {
  ContentCard,
  StyledInfoText,
  StyledContentCardSpotlight,
} from "src/components/StyledElements"

const ReportImpactCards = props => {
  const { data, className } = props
  return (
    <Row className={className}>
      <Col lg="6" xl="4" className="mb-3">
        <ContentCard style={{ backgroundColor: "#f5f6f9" }}>
          <div className="text-center">
            <StyledContentCardSpotlight Gradient>
              + ${numberWithCommas(data.cr_increase[5].value)}
            </StyledContentCardSpotlight>
            <StyledInfoText>With 1% Increase in Conversion Rate</StyledInfoText>
          </div>
        </ContentCard>
      </Col>
      <Col lg="6" xl="4" className="mb-3">
        <ContentCard style={{ backgroundColor: "#f5f6f9" }}>
          <div className="text-center">
            <StyledContentCardSpotlight Gradient>
              + ${numberWithCommas(data.traffic_increase[5].value)}
            </StyledContentCardSpotlight>
            <StyledInfoText>
              With 30% increase in Website Traffic
            </StyledInfoText>
          </div>
        </ContentCard>
      </Col>
      <Col lg="6" xl="4" className="mb-3">
        <ContentCard style={{ backgroundColor: "#f5f6f9" }}>
          <div className="text-center">
            <StyledContentCardSpotlight Gradient>
              + ${numberWithCommas(data.cr_and_traffic_increase[5].value)}
            </StyledContentCardSpotlight>
            <StyledInfoText>
              With 1% Increase in Conversion Rate & 30% in Website Traffic
            </StyledInfoText>
          </div>
        </ContentCard>
      </Col>
    </Row>
  )
}

export default ReportImpactCards
