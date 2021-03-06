import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "react-datepicker/dist/react-datepicker.css"
import styled from "styled-components"
import { ThemeProvider } from "styled-components"
import { Theme, GlobalStyle } from "src/styles/ThemeConfig"
// Components
import Header from "src/components/Header"
import Footer from "src/components/Footer"

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
        <GlobalStyle />
        <ThemeProvider theme={Theme}>
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
        </ThemeProvider>
      </>
    )
  }
}

export default Layout
