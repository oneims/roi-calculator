import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "../../styles/index.scss"
import styled from "styled-components"
// Components
import ReportHeader from "src/components/report/ReportHeader"
import ReportSidebarMenu from "src/components/report/ReportSidebarMenu"
import { colors } from "src/theme/variables"
import ReportFooter from "src/components/report/ReportFooter"
import { ReportPaths } from "src/components/report/ReportPaths"

const StyledParentWrap = styled.div``

const DashboardWrapper = styled.main`
  display: flex;
`

const Viewport = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  background-color: ${colors.dashboardBackground};
  position: relative;
`

const Canvas = styled.div`
  @media (min-width: 992px) {
    padding-top: 68px;
  }
`

class ReportLayout extends Component {
  render() {
    const { children, reportID } = this.props
    const paths = ReportPaths(reportID)
    return (
      <>
        <StyledParentWrap>
          <DashboardWrapper>
            <ReportSidebarMenu paths={paths} />
            <Viewport>
              <ReportHeader paths={paths} />
              <Canvas>{children}</Canvas>
              <ReportFooter />
            </Viewport>
          </DashboardWrapper>
        </StyledParentWrap>
      </>
    )
  }
}

export default ReportLayout
