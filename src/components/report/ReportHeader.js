import React from "react"
import { Container } from "react-bootstrap"
import { colors } from "../../theme/variables"
import {
  StyledSidebarMenuCard,
  StyledSidebarMenuIcon,
  StyledSidebarMenuTitle,
} from "../StyledElements"
import styled from "styled-components"

// Blocks

const StyledReportHeader = styled.header`
  background-color: ${colors.white};
  z-index: 999;
  width: 100%;
  top: 0;
  box-shadow: 0 1px 0 rgb(0 0 0 / 5%);
  position: absolute;
  right: 0;
`

const StyledReportHeaderWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 68px;
  padding: 0.5rem 0;
  font-weight: 500;
  font-size: 0.83216312801rem;
`

const ReportHeader = () => {
  return (
    <>
      <StyledReportHeader>
        <Container fluid>
          <StyledReportHeaderWrap>
            <StyledSidebarMenuCard className="mt-0 mb-0">
              <StyledSidebarMenuIcon>@</StyledSidebarMenuIcon>
              <StyledSidebarMenuTitle>
                Email Me This Report
              </StyledSidebarMenuTitle>
            </StyledSidebarMenuCard>
          </StyledReportHeaderWrap>
        </Container>
      </StyledReportHeader>
    </>
  )
}

export default ReportHeader
