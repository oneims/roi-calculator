import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "../../styles/index.scss"
import styled from "styled-components"
// Components
import ReportHeader from "./ReportHeader"
import ReportFooter from "./ReportFooter"

const StyledMain = styled.main`
  padding-top: 78.19px;
  min-height: 97vh;
`

class ReportLayout extends Component {
  render() {
    const { children } = this.props
    return (
      <>
        <ReportHeader />
        <StyledMain>{children}</StyledMain>
      </>
    )
  }
}

export default ReportLayout
