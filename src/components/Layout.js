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
      nextButtonState,
      nextButtonToolTip,
      currentStep,
      handleSubmit,
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
            nextButtonState={nextButtonState}
            nextButtonToolTip={nextButtonToolTip}
            handleSubmit={handleSubmit}
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
            nextButtonState={nextButtonState}
            nextButtonToolTip={nextButtonToolTip}
            handleSubmit={handleSubmit}
            currentStep={currentStep}
          />
        ) : (
          <Footer />
        )}
      </>
    )
  }
}

export default Layout
