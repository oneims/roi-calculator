import React from "react"
import { Container } from "react-bootstrap"
import { colors } from "../theme/variables"
import styled from "styled-components"
import { Button, StyledToolTip } from "./StyledElements"
import { Link } from "gatsby"

const StyledFooter = styled.footer``

const StyledAppFooter = styled.footer`
  padding: 1rem 0;
  position: fixed;
  background-color: #fff;
  bottom: 0;
  left: 0;
  width: 100%;
  border-top: 2px solid #eee;
`

const StyledText = styled.p`
  font-size: 0.8rem;
  color: ${colors.silver};
`

const Footer = ({
  App,
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
        <StyledAppFooter>
          <Container className="text-center">
            <StyledToolTip data-tip={nextButtonToolTip}>
              {currentStep === "step__three" ? (
                <Button onClick={handleSubmit} className={nextButtonState}>
                  {nextButtonText}
                </Button>
              ) : (
                <Link to={nextDestination} className={nextButtonState}>
                  <Button className={nextButtonState}>{nextButtonText}</Button>
                </Link>
              )}
            </StyledToolTip>
          </Container>
        </StyledAppFooter>
      ) : (
        <StyledFooter>
          <Container className="text-center">
            <StyledText>
              Copyright © {new Date().getFullYear()} ROI Calculator.
            </StyledText>
          </Container>
        </StyledFooter>
      )}
    </>
  )
}

export default Footer
