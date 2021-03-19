import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/index.scss"
import styled from "styled-components"
// Components
import Header from "./Header"
import Footer from "./Footer"

const StyledMain = styled.main`
  padding-top: 78.19px;
  min-height: 97vh;
`

class Layout extends Component {
  render() {
    const {
      children,
      backDestination,
      nextDestination,
      nextButtonText,
      currentStep,
    } = this.props
    return (
      <>
        {this.props.App ? (
          <Header
            App
            WithProgressBar
            currentStep={currentStep}
            backDestination={backDestination}
            nextDestination={nextDestination}
            nextButtonText={nextButtonText}
          />
        ) : (
          <Header />
        )}
        <StyledMain>{children}</StyledMain>
        {this.props.App ? (
          <Footer
            App
            nextButtonText={nextButtonText}
            nextDestination={nextDestination}
          />
        ) : (
          <Footer />
        )}
      </>
    )
  }
}

export default Layout
