import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "../../styles/index.scss"
import styled from "styled-components"
// Components
import ReportHeader from "./ReportHeader"
import ReportSidebarMenu from "./ReportSidebarMenu"
import { colors } from "../../theme/variables"
import ReportFooter from "./ReportFooter"

const StyledMain = styled.main``

const DashboardWrapper = styled.div`
  display: flex;
`

const Viewport = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  background-color: ${colors.dashboardBackground};
`

const Canvas = styled.div``

class ReportLayout extends Component {
  render() {
    const { children } = this.props
    return (
      <>
        <StyledMain>
          <DashboardWrapper>
            <ReportSidebarMenu />
            <Viewport>
              <ReportHeader />
              <Canvas>{children}</Canvas>
            </Viewport>
          </DashboardWrapper>
        </StyledMain>
      </>
    )
  }
}

export default ReportLayout
