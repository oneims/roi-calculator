import React from "react"
import { Container } from "react-bootstrap"
import { colors } from "src/theme/variables"
import styled, { css } from "styled-components"
import {
  Button,
  LinkButton,
  StyledToolTip,
  StyledLogoBox,
  StyledLogo,
} from "src/components/StyledElements"
import { Link } from "gatsby"
import ReactTooltip from "react-tooltip"

// Blocks
const WithProgressBar = `
  content: '';
  position: absolute;
  bottom: 0;
  width: 0;
  width: 100%;
  max-width: 0;
  transition: 0.4s ease;
  height: 3px;
  opacity: 0.5;
  background-color: ${colors.primary};
`

const StyledHeader = styled.header`
  background-color: ${colors.white};
  position: fixed;
  z-index: 999;
  width: 100%;
  top: 0;
  box-shadow: 0 1px 0 rgb(0 0 0 / 5%);
  &:before {
    ${props =>
      props.WithProgressBar
        ? css`
            ${WithProgressBar}
          `
        : ""}
  }
`

const StyledHeaderWrap = styled.div`
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Header = ({
  App,
  backDestination,
  nextDestination,
  nextButtonText,
  nextButtonState,
  nextButtonToolTip,
  currentStep,
  handleSubmit,
}) => {
  return (
    <>
      {App ? (
        <StyledHeader
          WithProgressBar
          currentStep={currentStep}
          className={currentStep}
        >
          <Container>
            <StyledHeaderWrap>
              <Link to={backDestination}>
                <LinkButton>
                  <svg
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M19 11H7.414l3.293-3.293a.999.999 0 1 0-1.414-1.414l-5 5a.999.999 0 0 0 0 1.414l5 5a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L7.414 13H19a1 1 0 1 0 0-2"
                    ></path>
                  </svg>
                  Back
                </LinkButton>
              </Link>
              <StyledToolTip data-tip={nextButtonToolTip}>
                {currentStep === "step__three" ? (
                  <Button onClick={handleSubmit} className={nextButtonState}>
                    {nextButtonText}
                  </Button>
                ) : (
                  <Link to={nextDestination} className={nextButtonState}>
                    <Button className={nextButtonState}>
                      {nextButtonText}
                    </Button>
                  </Link>
                )}
              </StyledToolTip>
              <ReactTooltip place="left" type="dark" effect="solid" />
            </StyledHeaderWrap>
          </Container>
        </StyledHeader>
      ) : (
        <StyledHeader>
          <Container>
            <StyledHeaderWrap>
              <StyledLogoBox>
                <Link to="/">
                  <StyledLogo>
                    <span>++</span>
                  </StyledLogo>
                </Link>
              </StyledLogoBox>
              <Link to="/onboarding/step-one">
                <Button>Get Started</Button>
              </Link>
            </StyledHeaderWrap>
          </Container>
        </StyledHeader>
      )}
    </>
  )
}

export default Header
