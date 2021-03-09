import React from "react"
import { Container } from "react-bootstrap"
import { colors } from "../theme/variables"
import styled from "styled-components"

const StyledFooter = styled.footer``

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
