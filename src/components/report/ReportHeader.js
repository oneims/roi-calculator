import React from "react"
import { Container } from "react-bootstrap"
import { colors } from "src/theme/variables"
import {
  StyledSidebarMenuCard,
  StyledSidebarMenuIcon,
  StyledLogoBox,
  StyledLogo,
  StyledSidebarMenuTitle,
} from "src/components/StyledElements"
import ReportMobileMenu from "src/components/report/ReportMobileMenu"
import { Link } from "gatsby"
import styled from "styled-components"

// Blocks

const StyledReportHeaderParent = styled.div`
  width: 100%;
  position: sticky;
  z-index: 999;
  right: 0;
  top: 0;
  background-color: ${colors.white};
  @media (min-width: 992px) {
    position: absolute;
  }
`

const StyledReportHeader = styled.header`
  background-color: ${colors.white};
  box-shadow: 0 1px 0 rgb(0 0 0 / 5%);
`

const StyledReportHeaderWrap = styled.div`
  display: flex;
  height: 68px;
  padding: 0.5rem 0;
  font-weight: 500;
  font-size: 0.83216312801rem;
  justify-content: space-between;
  @media (min-width: 992px) {
    justify-content: flex-end;
  }
`

const ReportHeader = ({ paths }) => {
  return (
    <>
      <StyledReportHeaderParent>
        <StyledReportHeader>
          <Container fluid>
            <StyledReportHeaderWrap>
              <StyledLogoBox OnlySmall>
                <Link to="/">
                  <StyledLogo>
                    <span>++</span>
                  </StyledLogo>
                </Link>
              </StyledLogoBox>
              <StyledSidebarMenuCard className="mt-0 mb-0 mr-0 ml-0">
                <StyledSidebarMenuIcon>@</StyledSidebarMenuIcon>
                <StyledSidebarMenuTitle>
                  Email Me This Report
                </StyledSidebarMenuTitle>
              </StyledSidebarMenuCard>
            </StyledReportHeaderWrap>
          </Container>
        </StyledReportHeader>
        <ReportMobileMenu OnlySmall paths={paths} />
      </StyledReportHeaderParent>
    </>
  )
}

export default ReportHeader
