import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import { colors } from "../theme/variables"

// Containers
export const Section = styled.section`
  padding: 4rem 0;
`

export const ContentBox = styled.div`
  max-width: ${props => (props.MW1000 ? "1000px" : "")};
  max-width: ${props => (props.MW900 ? "900px" : "")};
  max-width: ${props => (props.MW800 ? "800px" : "")};
  max-width: ${props => (props.MW700 ? "700px" : "")};
  max-width: ${props => (props.MW600 ? "600px" : "")};
  max-width: ${props => (props.MW500 ? "500px" : "")};
`

// Elements
export const PageHeading = styled.h1`
  font-weight: 900;
  @media (min-width: 992px) {
    font-size: 3.5rem;
  }
  @media (min-width: 1200px) {
    font-size: 4.5rem;
  }
`

export const Subtitle = styled.p`
  font-size: 1.2rem;
  @media (min-width: 768px) {
    font-size: 1.8rem;
  }
`

export const SubHeading = styled.h2``

export const ChildHeading = styled.h3``

export const Button = styled.button`
  margin: 0;
  padding: 0.7rem 2.2rem;
  border-radius: 4px;
  background-color: ${colors.primary};
  box-shadow: 0 4px 14px 0 rgb(0 118 255 / 39%);
  color: #fff;
  font-weight: 800;
  -webkit-transition: 0.2s ease;
  transition: 0.2s ease;
  border: none;
  font-size: ${props => (props.Large ? "1.4rem" : "1rem")};
  &:hover {
    background-color: ${colors.primaryHover};
    transition: 0.2s ease;
  }
`
