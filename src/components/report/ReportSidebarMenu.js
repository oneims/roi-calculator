import React from "react"
import { colors } from "../../theme/variables"
import {
  StyledLogoBox,
  StyledLogo,
  StyledSidebarMenuCard,
  StyledSidebarMenuIcon,
  StyledSidebarMenuTitle,
} from "../StyledElements"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledReportSidebarMenu = styled.aside`
  display: flex;
  flex-direction: column;
  border-right: 1px solid #eceff2;
  background: ${colors.white};
  box-shadow: 1px 0 5px rgb(0 0 0 / 1%);
  width: 100%;
  max-width: 280px;
  color: #606e74;
  transition: 0.3s ease-in-out;
  font-weight: 500;
  font-size: 0.9rem;
  z-index: 9999;
`

const StyledReportSidebarMenuHeader = styled.div`
  border-bottom: 1px solid #eee;
  padding: 1rem;
`

const StyledReportSidebarMenuFooter = styled.div`
  border-top: 1px solid #eee;
  padding: 0.25rem 0;
`

const StyledReportSidebarMenuWrap = styled.div`
  height: 100%;
`

const ReportSidebarMenu = ({ reportID }) => {
  return (
    <>
      <StyledReportSidebarMenu>
        <StyledReportSidebarMenuHeader>
          <StyledLogoBox>
            <Link to="/">
              <StyledLogo Small className="ml-auto mr-auto">
                <span>++</span>
              </StyledLogo>
            </Link>
          </StyledLogoBox>
        </StyledReportSidebarMenuHeader>
        <StyledReportSidebarMenuWrap>
          <Link
            className="no-styles"
            activeClassName="active-link"
            to={`/report/${reportID}`}
          >
            <StyledSidebarMenuCard>
              <StyledSidebarMenuIcon>D</StyledSidebarMenuIcon>
              <StyledSidebarMenuTitle>Dashboard</StyledSidebarMenuTitle>
            </StyledSidebarMenuCard>
          </Link>
          <Link
            className="no-styles"
            activeClassName="active-link"
            to={`/editor/${reportID}`}
          >
            <StyledSidebarMenuCard>
              <StyledSidebarMenuIcon>E</StyledSidebarMenuIcon>
              <StyledSidebarMenuTitle>Editor</StyledSidebarMenuTitle>
            </StyledSidebarMenuCard>
          </Link>
        </StyledReportSidebarMenuWrap>
        <StyledReportSidebarMenuFooter>
          <StyledSidebarMenuCard>
            <StyledSidebarMenuIcon>@</StyledSidebarMenuIcon>
            <StyledSidebarMenuTitle>
              Email Me This Report
            </StyledSidebarMenuTitle>
          </StyledSidebarMenuCard>
        </StyledReportSidebarMenuFooter>
      </StyledReportSidebarMenu>
    </>
  )
}

export default ReportSidebarMenu
