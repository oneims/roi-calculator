import "bootstrap/dist/css/bootstrap.min.css"
import React, { Component } from "react"
// Components
import InfoDrawer from "src/components/InfoDrawer"
import ReportFooter from "src/components/report/ReportFooter"
import ReportHeader from "src/components/report/ReportHeader"
import { ReportPaths } from "src/components/report/ReportPaths"
import ReportSidebarMenu from "src/components/report/ReportSidebarMenu"
import { GlobalStyle, Theme } from "src/styles/ThemeConfig"
import styled, { ThemeProvider } from "styled-components"
// Axios
import axios from "axios"

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

const timer = 300

class ReportLayout extends Component {
  state = {
    infoDrawer: false,
    hasEmail: false,
    email_address: "",
    loading: false,
    success: false,
    error: false,
    id: null,
    strapiID: null,
    canSubmit: false,
    errorResponse: null,
  }

  checkCanSubmit = () => {
    setTimeout(() => {
      this.state.email_address.length > 0
        ? this.setState({ canSubmit: true })
        : this.setState({ canSubmit: false })
    }, 50)
  }

  handleGetDataByID = id => {
    this.setState({
      loading: true,
      id: this.props.reportID,
    })
    axios
      .get(`${process.env.GATSBY_API_URL}/reports?record_uid=${id}`, {
        headers: {
          Authorization: `Bearer ${process.env.JWT_SECRET}`,
        },
      })
      .then(res => {
        if (res.data.length > 0) {
          const data = res.data[0]
          setTimeout(() => {
            this.setState({
              loading: false,
              strapiID: data.id,
              hasEmail: false,
            })
            if (data.email_address !== null && data.email_address.length > 1) {
              this.setState({
                email_address: data.email_address,
                hasEmail: true,
              })
            }
            this.checkCanSubmit()
          }, timer)
        } else {
          throw new Error(`No report found with id ${id}`)
        }
      })
      .catch(err => {
        setTimeout(() => {
          if (err.response) {
            console.log(err.response.data)
          }
          this.setState({
            error: true,
            loading: false,
          })
        }, timer)
      })
  }

  showInfoDrawer = () => {
    this.setState({
      infoDrawer: true,
      success: false,
      error: false,
    })
    this.handleGetDataByID(this.props.reportID)
  }

  closeInfoDrawer = () => {
    this.setState({ infoDrawer: false })
    this.checkCanSubmit()
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
    this.checkCanSubmit()
  }

  handleSubmit = event => {
    event.preventDefault()
    this.setState({
      loading: true,
    })
    const data = {
      email_address: this.state.email_address,
    }

    const emailData = {
      email_address: this.state.email_address,
      report_URL: `https://roicalculator.ai/report/${this.state.id}`,
    }

    axios
      .all([
        axios.post(`${process.env.GATSBY_API_URL}/emails`, emailData, {
          headers: {
            Authorization: `Bearer ${process.env.JWT_SECRET}`,
          },
        }),
        axios.put(
          `${process.env.GATSBY_API_URL}/reports/${this.state.strapiID}`,
          data,
          {
            headers: {
              Authorization: `Bearer ${process.env.JWT_SECRET}`,
            },
          }
        ),
      ])
      .then(
        axios.spread((data1, data2) => {
          setTimeout(() => {
            this.setState({
              loading: false,
              success: true,
              error: false,
            })
          }, timer)
        })
      )
      .catch(err => {
        setTimeout(() => {
          if (err.response) {
            console.log(err.response.data)
          }
          console.log(err)
          this.setState({
            error: true,
            success: false,
            loading: false,
            errorResponse: err.response.data.message,
          })
        }, timer)
      })
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
            errorResponse={this.state.errorResponse}
            canSubmit={this.state.canSubmit}
            success={this.state.success}
            error={this.state.error}
            hasEmail={this.state.hasEmail}
            loading={this.state.loading}
            email_address={this.state.email_address}
            handleChange={this.handleChange}
            active={this.state.infoDrawer ? "active" : ""}
            closeInfoDrawer={this.closeInfoDrawer}
            handleSubmit={this.handleSubmit}
          />
        </ThemeProvider>
      </>
    )
  }
}

export default ReportLayout
