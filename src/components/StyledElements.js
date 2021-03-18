import styled, { css } from "styled-components"
import { colors } from "../theme/variables"

// Blocks
const VerticallyCenetered = `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const GradientText = `
  background: ${colors.gradientText};
  -webkit-background-clip: text; 
  background-clip: text; 
  -webkit-text-fill-color: transparent; 
  -webkit-box-decoration-break: clone;
`

const PatternWrapperFull = `
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
`

// Containers
export const Section = styled.section`
  position: relative;
  overflow: hidden;
  padding: ${props => (props.Small ? "2rem 0" : "4rem 0")};
  min-height: ${props => (props.MinHeight ? "90vh" : "")};
  ${props =>
    props.VerticallyCentered
      ? css`
          ${VerticallyCenetered}
        `
      : ""}
`

export const ContentBox = styled.div`
  position: relative;
  max-width: ${props => (props.MW1000 ? "1000px" : "")};
  max-width: ${props => (props.MW900 ? "900px" : "")};
  max-width: ${props => (props.MW800 ? "800px" : "")};
  max-width: ${props => (props.MW700 ? "700px" : "")};
  max-width: ${props => (props.MW600 ? "600px" : "")};
  max-width: ${props => (props.MW500 ? "500px" : "")};
`

export const PatternWrapper = styled.div`
  svg {
    height: 100%;
    @media (min-width: 992px) {
      width: 100%;
      height: auto;
    }
  }
  ${props =>
    props.PatternWrapperFull
      ? css`
          ${PatternWrapperFull}
        `
      : ""}
`

// Elements
export const PageHeading = styled.h1`
  font-weight: 900;
  ${props =>
    props.GradientText
      ? css`
          ${GradientText}
        `
      : ""}
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
  display: ${props => (props.Flex ? "flex" : "")};
  font-size: ${props => (props.Large ? "1.4rem" : "1rem")};
  svg {
    margin-right: 0.5rem;
  }
  &:hover {
    background-color: ${colors.primaryHover};
    transition: 0.2s ease;
  }
`

export const LinkButton = styled.button`
  margin: 0;
  padding: 0;
  background: transparent;
  font-weight: 800;
  -webkit-transition: 0.2s ease;
  border: none;
  display: flex;
  font-size: 1.2rem;
  align-items: center;
  svg {
    margin-right: 0.5rem;
  }
  &:hover {
    color: ${colors.primary};
    text-decoration: none;
  }
`

// Progress Bar

export const ProgressBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const ProgressBar = styled.div`
  display: flex;
  width: 100%;
  max-width: 32%;
  height: 8px;
  border-radius: 100px;
  background-color: ${props => (props.Filled ? colors.primary : "#ddd")};
`

// Form

export const FormWrapper = styled.div``

export const StyledFormWrapper = styled.div`
  min-height: 80vh;
  @media (min-width: 768px) {
    min-height: 50vh;
  }
`
export const StyledFieldWrapper = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
    align-items: center;
  }
`

export const Label = styled.label`
  font-weight: 600;
  font-size: 0.9rem;
`

export const StyledField = styled.div`
  width: 100%;
  margin-bottom: 1.5rem;
  @media (min-width: 768px) {
    width: ${props => (props.TwoColumn ? "49%" : "100%")};
    margin-bottom: 0;
  }
`

// Inpiut

export const StyledInput = styled.div`
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background-color: white;
  border-color: hsl(0, 0%, 80%);
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  cursor: default;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex-wrap: wrap;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  min-height: 50px;
  outline: 0 !important;
  position: relative;
  -webkit-transition: all 100ms;
  transition: all 100ms;
  box-sizing: border-box;
  font-weight: 600;
  padding: 0 0.6rem;
  width: 100%;
  position: relative;
  overflow: hidden;
  span {
    position: relative;
    z-index: 1;
  }
  input {
    width: 100%;
    border: none;
    outline: none;
    font-weight: inherit;
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    top: 0;
    width: 100%;
    height: 100%;
    padding: 0 0.6rem;
  }
`

// Select

const dot = (color = "#ccc") => ({
  alignItems: "center",
  display: "flex",

  ":before": {
    backgroundColor: color,
    borderRadius: 10,
    content: '" "',
    display: "block",
    marginRight: 8,
    height: 10,
    width: 10,
  },
})

export const ColorStyles = {
  control: styles => ({
    ...styles,
    backgroundColor: "white",
    minHeight: "50px",
  }),
  option: (styles, { isDisabled, isFocused, isSelected }) => {
    const color = colors.primary
    return {
      ...styles,
      backgroundColor: isDisabled
        ? null
        : isSelected
        ? colors.primary
        : isFocused
        ? `#eee`
        : null,
      color: isDisabled
        ? "#ccc"
        : isSelected
        ? 10 > 2
          ? "white"
          : "black"
        : `#000`,
      cursor: isDisabled ? "not-allowed" : "default",

      ":active": {
        ...styles[":active"],
        backgroundColor: !isDisabled && (isSelected ? colors.primary : "#eee"),
      },
    }
  },
  input: styles => ({ ...styles, ...dot() }),
  placeholder: styles => ({ ...styles, ...dot() }),
  singleValue: (styles, { data }) => ({ ...styles, ...dot(colors.primary) }),
}
