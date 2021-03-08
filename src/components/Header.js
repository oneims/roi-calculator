import React from "react"
import { Container } from "react-bootstrap"
import { colors } from "../theme/variables"
import styled from "styled-components"
import { Button } from "./StyledElements"

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

const Header = () => {
  return (
    <>
      <StyledHeader>
        <Container>
          <StyledHeaderWrap>
            <StyledLogoBox>
              <StyledLogo>
                <span>ca.</span>
              </StyledLogo>
            </StyledLogoBox>
            <Button>Get Started</Button>
          </StyledHeaderWrap>
        </Container>
      </StyledHeader>
    </>
  )
}

export default Header
