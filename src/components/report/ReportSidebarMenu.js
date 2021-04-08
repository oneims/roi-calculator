import React from "react"
import { Container } from "react-bootstrap"
import { colors } from "../../theme/variables"
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
`

const StyledReportSidebarMenuHeader = styled.div`
  border-bottom: 1px solid #eee;
  padding: 1rem;
`

const StyledReportSidebarMenuFooter = styled.div`
  border-top: 1px solid #eee;
  padding: 0.25rem 0;
`

const StyledReportSidebarMenuCard = styled.div`
  display: flex;
  align-items: center;
  color: #606e74;
  padding: 8px;
  border-radius: 8px;
  background-color: #f7f8fc;
  border: 1px solid #eceff2;
  line-height: 1;
  cursor: pointer;
  transition: 0.2s ease;
  margin: 1rem;
  &:hover {
    background-color: #ecf0ff;
    transition: 0.2s ease;
  }
`

const StyledReportSidebarMenuIcon = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  font-weight: 600;
  width: 34px;
  height: 34px;
  border-radius: 4px;
  background-color: #edf1fd;
  color: ${colors.primary};
`

const StyledReportSidebarMenuTitle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 12px;
`

const StyledReportSidebarMenuWrap = styled.div`
  height: 100%;
`

const StyledLogoBox = styled.div``

const StyledLogo = styled.div`
  width: 35px;
  height: 35px;
  background: ${colors.primary};
  position: relative;
  margin-left: auto;
  margin-right: auto;
  span {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    font-weight: 700;
    color: ${colors.white};
    font-size: 1rem;
    line-height: 1rem;
    padding-top: 0.2rem;
  }
`

const ReportSidebarMenu = () => {
  return (
    <>
      <StyledReportSidebarMenu>
        <StyledReportSidebarMenuHeader>
          <StyledLogoBox>
            <Link to="/">
              <StyledLogo>
                <span>++</span>
              </StyledLogo>
            </Link>
          </StyledLogoBox>
        </StyledReportSidebarMenuHeader>
        <StyledReportSidebarMenuWrap>
          <Link>
            <StyledReportSidebarMenuCard>
              <StyledReportSidebarMenuIcon>D</StyledReportSidebarMenuIcon>
              <StyledReportSidebarMenuTitle>
                Dashboard
              </StyledReportSidebarMenuTitle>
            </StyledReportSidebarMenuCard>
          </Link>
          <Link>
            <StyledReportSidebarMenuCard>
              <StyledReportSidebarMenuIcon>E</StyledReportSidebarMenuIcon>
              <StyledReportSidebarMenuTitle>
                Editor
              </StyledReportSidebarMenuTitle>
            </StyledReportSidebarMenuCard>
          </Link>
        </StyledReportSidebarMenuWrap>
        <StyledReportSidebarMenuFooter>
          <StyledReportSidebarMenuCard>
            <StyledReportSidebarMenuIcon>@</StyledReportSidebarMenuIcon>
            <StyledReportSidebarMenuTitle>
              Email This Report To Me
            </StyledReportSidebarMenuTitle>
          </StyledReportSidebarMenuCard>
        </StyledReportSidebarMenuFooter>
      </StyledReportSidebarMenu>
    </>
  )
}

export default ReportSidebarMenu
