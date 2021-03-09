import React from "react"
import { Container } from "react-bootstrap"
import { colors } from "../theme/variables"
import styled from "styled-components"
import { Button, LinkButton } from "./StyledElements"
import { Link } from "gatsby"

const StyledHeader = styled.header`
  background-color: ${colors.white};
  position: fixed;
  z-index: 999;
  width: 100%;
  top: 0;
  box-shadow: 0 1px 0 rgb(0 0 0 / 5%);
`

const StyledHeaderWrap = styled.div`
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledLogoBox = styled.div``

const StyledLogo = styled.div`
  width: 45px;
  height: 45px;
  background: ${colors.primary};
  position: relative;
  span {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    font-weight: 700;
    color: ${colors.white};
    font-size: 1.6rem;
    line-height: 1rem;
    padding-top: 0.2rem;
  }
`

const Header = ({ App, backDestination, nextDestination, nextButtonText }) => {
  return (
    <>
      {App ? (
        <StyledHeader>
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
              <Link to={nextDestination}>
                <Button>{nextButtonText}</Button>
              </Link>
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
