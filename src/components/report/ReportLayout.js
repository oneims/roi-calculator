import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "../../styles/index.scss"
import styled from "styled-components"
// Components
import ReportHeader from "./ReportHeader"
import ReportSidebarMenu from "./ReportSidebarMenu"
import { colors } from "../../theme/variables"
import ReportFooter from "./ReportFooter"

const StyledParentWrap = styled.div``

const DashboardWrapper = styled.div`
  display: flex;
`

const Viewport = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  background-color: ${colors.dashboardBackground};
  position: relative;
`

const Canvas = styled.main`
  padding-top: 68px;
`

class ReportLayout extends Component {
  render() {
    const { children, reportID } = this.props
    return (
      <>
        <StyledParentWrap>
          <DashboardWrapper>
            <ReportSidebarMenu reportID={reportID} />
            <Viewport>
              <ReportHeader />
              <Canvas>{children}</Canvas>
            </Viewport>
          </DashboardWrapper>
        </StyledParentWrap>
      </>
    )
  }
}

export default ReportLayout
