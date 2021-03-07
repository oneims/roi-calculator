import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { colors } from "../theme/variables"
const StyledButton = styled.button`
  margin: 0;
  padding: 0.6rem 2rem;
  border-radius: 4px;
  background-color: ${colors.primary};
  box-shadow: 0 4px 14px 0 rgb(0 118 255 / 39%);
  color: #fff;
  font-weight: 800;
  -webkit-transition: 0.2s ease;
  transition: 0.2s ease;
  border: none;
`

const Button = ({ title }) => {
  return (
    <>
      <StyledButton type="button">{title}</StyledButton>
    </>
  )
}

export default Button

Button.propTypes = {
  title: PropTypes.string,
}

Button.defaultProps = {
  title: "Get Started",
}
