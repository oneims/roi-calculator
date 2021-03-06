import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import styled from "styled-components"
import { ThemeProvider } from "styled-components"
import { Theme, GlobalStyle } from "src/styles/ThemeConfig"
// Components
import InfoDrawer from "src/components/InfoDrawer"
import ReportHeader from "src/components/report/ReportHeader"
import ReportSidebarMenu from "src/components/report/ReportSidebarMenu"
import ReportFooter from "src/components/report/ReportFooter"
import { ReportPaths } from "src/components/report/ReportPaths"

const { colors } = Theme

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
  min-height: 95vh;
  @media (min-width: 992px) {
    padding-top: 68px;
  }
`

class ReportLayout extends Component {
  state = {
    infoDrawer: false,
  }

  showInfoDrawer = () => {
    this.setState({ infoDrawer: true })
  }

  closeInfoDrawer = () => {
    this.setState({ infoDrawer: false })
  }

  render() {
    const { children, reportID } = this.props
    const paths = ReportPaths(reportID)
    return (
      <>
        <GlobalStyle />
        <ThemeProvider theme={Theme}>
          <StyledParentWrap>
            <DashboardWrapper>
              <ReportSidebarMenu
                paths={paths}
                showInfoDrawer={this.showInfoDrawer}
              />
              <Viewport>
                <ReportHeader
                  showInfoDrawer={this.showInfoDrawer}
                  paths={paths}
                />
                <Canvas>{children}</Canvas>
                <ReportFooter />
              </Viewport>
            </DashboardWrapper>
          </StyledParentWrap>
          <InfoDrawer
            active={this.state.infoDrawer ? "active" : ""}
            closeInfoDrawer={this.closeInfoDrawer}
          />
        </ThemeProvider>
      </>
    )
  }
}

export default ReportLayout
