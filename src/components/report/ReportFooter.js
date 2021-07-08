import React from "react"
import { Container } from "react-bootstrap"
import { colors } from "src/theme/variables"
import styled from "styled-components"

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

const Footer = () => {
  return (
    <>
      <StyledFooter>
        <Container className="text-center">
          <StyledText>
            Copyright © {new Date().getFullYear()} ROI Calculator.
          </StyledText>
        </Container>
      </StyledFooter>
    </>
  )
}

export default Footer
