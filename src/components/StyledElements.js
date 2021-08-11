// TODO -- Refactor Styled Components

import styled, { css } from "styled-components"
import { Theme } from "src/styles/ThemeConfig"

const { colors } = Theme

// Blocks
const VerticallyCentered = `
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

// Header
export const StyledLogoBox = styled.div`
  ${props =>
    props.OnlySmall
      ? `
    display: block;
    @media (min-width: 992px) {
      display: none;
    }
    
    `
      : ``}
`

export const StyledLogo = styled.div`
  width: ${props => (props.Small ? "35px" : "45px")};
  height: ${props => (props.Small ? "35px" : "45px")};
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
    font-size: ${props => (props.Small ? "1rem" : "1.6rem")};
    line-height: 1rem;
    padding-top: 0.2rem;
  }
`

// Drawer
export const StyledSidebarMenuCard = styled.div`
  display: flex;
  align-items: center;
  color: #606e74;
  padding: 8px;
  border-radius: 8px;
  background-color: #f7f8fc;
  border: 1px solid #eceff2;
  line-height: 1;
  cursor: pointer;
  transition: 0.2s ease;
  margin: 1rem;
  &:hover {
    background-color: #ecf0ff;
    transition: 0.2s ease;
  }
`

export const StyledSidebarMenuIcon = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  font-weight: 600;
  width: 34px;
  height: 34px;
  border-radius: 4px;
  background-color: #edf1fd;
  color: ${colors.primary};
  ${props =>
    props.Large
      ? css`
          width: 70px;
          height: 70px;
          font-size: 50px;
          font-weight: 800;
        `
      : ""}
`

export const StyledSidebarMenuTitle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 12px;
`

// Containers
export const Section = styled.section`
  position: relative;
  overflow: hidden;
  padding: ${props => (props.Small ? "2.5rem 0" : "4rem 0")};
  padding-bottom: ${props => (props.AppSection ? "5rem" : "")};
  min-height: ${props => (props.MinHeight ? "90vh" : "")};
  ${props =>
    props.VerticallyCentered
      ? css`
          ${VerticallyCentered}
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
  color: ${props => (props.PrimaryColor ? colors.primary : "")};
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
  padding: ${props => (props.Dashboard ? `0.5rem 2.2rem` : `0.7rem 2.2rem`)};
  border-radius: 4px;
  background-color: ${props =>
    props.Secondary ? colors.secondary : colors.primary};
  background-color: ${props =>
    props.Tertiary ? colors.tertiary : colors.primary};
  box-shadow: ${props =>
    props.Secondary || props.Tertiary
      ? ""
      : "0 4px 14px 0 rgb(0 118 255 / 39%)"};
  color: #fff;
  font-weight: ${props => (props.Dashboard ? `500` : `800`)};
  -webkit-transition: 0.2s ease;
  transition: 0.2s ease;
  border: none;
  display: ${props => (props.Flex ? "flex" : "")};
  font-size: ${props => (props.Large ? "1.4rem" : "1rem")};
  svg {
    margin-right: 0.5rem;
  }
  &:hover {
    background-color: ${props =>
      props.Secondary ? colors.secondaryHover : colors.primaryHover};
    background-color: ${props =>
      props.Tertiary ? colors.tertiaryHover : colors.primaryHover};
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

export const ContentCard = styled.div`
  background-color: ${colors.white};
  padding: 1rem;
  border: 1px solid #eee;
  box-shadow: 1px 0 5px rgb(0 0 0 / 1%);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  height: 100%;
  ${props =>
    props.Clickable
      ? css`
          transition: 0.2s ease;
          &:hover {
            transition: 0.2s ease;
            transform: translateY(-5px);
            cursor: pointer;
            box-shadow: 1px 0 10px RGB(0 0 0 / 8%);
          }
        `
      : ""}
`

export const StyledContentCardLabel = styled.span`
  font-weight: 700;
  display: block;
`

export const StyledContentCardSpotlight = styled.span`
  font-weight: 700;
  display: block;
  font-size: 2rem;
  ${props =>
    props.Gradient
      ? css`
          background: linear-gradient(-70deg, #0055ff, #8dc1fd);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          -webkit-box-decoration-break: clone;
        `
      : ""}
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

export const StyledLoader = styled.div`
  animation: rotation 0.4s infinite linear;
  border: 1px solid ${colors.primary};
  border-radius: 50%;
  border-top-color: #fff;
  height: 3em;
  width: 3em;
  display: block;
`

export const StyledLoaderWrapper = styled.div`
  position: ${props => (props.Fixed ? "fixed" : "absolute")};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: ${props => (props.OverridePage ? "999999999999" : "999")};
  background-color: ${props => (props.White ? "rgba(255, 255, 255, 0.8)" : "")};
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  transition: 0.2s ease;
`

// Form

export const FormWrapper = styled.div``

export const StyledFormWrapper = styled.div`
  min-height: 80vh;
  min-height: ${props => (props.NoMinHeight ? "unset" : "")};
  @media (min-width: 768px) {
    min-height: 50vh;
    min-height: ${props => (props.NoMinHeight ? "unset" : "")};
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

export const StyledToolTip = styled.div``

// Input

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

export const StyledChoiceWrapper = styled.div`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  margin-left: -5px;
  margin-right: -5px;
`

export const StyledChoiceColumn = styled.div`
  padding-left: 5px;
  padding-right: 5px;
`

export const StyledChoiceItem = styled.div`
  border: 1px solid #7c98b6;
  background-color: #f5f8fa;
  padding: 0 0.5rem;
  font-size: 0.75rem;
  font-weight: 500;
  cursor: pointer;
  color: #425b76;
  &.active {
    background-color: #def7ff;
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

// Info Drawer
export const StyledInfoDrawer = styled.div`
  width: 100vw;
  @media (min-width: 576px) {
    width: 31.25rem;
  }
  transition-property: none;
  transition-duration: 150ms;
  position: fixed;
  top: 0px;
  bottom: 0px;
  z-index: 11111;
  right: ${props => (props.Left ? "unset" : "0")};
  left: ${props => (props.Left ? "0" : "unset")};
  background-color: #fff;
  box-shadow: -3px 0 8px 0 rgb(66 91 118 / 21%);
  overflow-y: scroll;
  transition: 0.2s ease;
  pointer-events: none;
  transform: translateX(100%);
  transform: ${props =>
    props.Left ? "translateX(-100%)" : "translateX(100%)"};
  &.active {
    transition: 0.3s ease;
    pointer-events: all;
    transform: translateX(0rem);
  }
`
export const StyledInfoDrawerWrapper = styled.div``
export const StyledInfoDrawerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #00bda5;
  background-image: linear-gradient(-303deg, #3165cc, #6287d0 56%, #758cbb);
  color: #fff;
  padding: 1.5rem 1rem;
`
export const StyledInfoDrawerBody = styled.div`
  padding: 1.5rem 1rem;
  position: relative;
  min-height: 80vh;
`
export const StyledInfoDrawerFooter = styled.div``

export const StyledInfoDrawerCloseButtonWrapper = styled.div``

export const StyledInfoDrawerCloseButton = styled.button`
  outline: none;
  border: none;
  background: transparent;
  padding: 0;
  background-color: #3b6ccd;
  border-radius: 0.25rem;
  padding: 0.25rem;
  border: 0.0625rem solid #3769cd;
  transition: 0.2s ease;
  &:hover {
    background-color: #305cb3;
    transition: 0.2s ease;
    border-color: #305cb3;
  }
  figure {
    margin: 0;
  }
  svg {
    path {
      fill: #fff;
    }
  }
`

export const TintedBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.75);
  transition: 0.2s ease;
  opacity: 0;
  z-index: 11111;
  pointer-events: none;
  &.active {
    opacity: 1;
    pointer-events: all;
    transition: 0.3s ease;
  }
`

// Article Card
export const ArticleCard = styled.div`
  height: 100%;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0 0.2rem 0.4rem #e8e9eb;
  background-color: #fff;
  transition: 0.2s ease;
  &:hover {
    transition: 0.2s ease;
    transform: translateY(-5px);
  }
  .gatsby-image-wrapper {
    height: 200px;
    img {
      border-top-right-radius: 10px;
      border-top-left-radius: 10px;
    }
  }
`

export const ArticleCardTop = styled.div``

export const ArticleCardBottom = styled.div`
  height: 100%;
  padding: 1rem;
`

export const ArticleCardTitle = styled.h3``

export const ArticleCardMeta = styled.span`
  font-size: 0.9rem;
  font-weight: 700;
`

export const ArticleCardDesc = styled.div`
  font-size: 0.9rem;
  a {
    display: block;
    margin-top: 1.5rem;
  }
`

export const ArticleCardLink = styled.span``

// Singular Article
export const ArticleWrapper = styled.article`
  img,
  iframe {
    max-width: 100%;
    border-radius: 5px;
    margin: 1rem 0;
  }
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 2.25rem;
    margin-bottom: 1.25rem;
  }
`

export const FeaturedImageWrapper = styled.div`
  img {
    border-radius: 5px;
  }
  .gatsby-image-wrapper {
    max-height: 500px;
    border-radius: 5px;
  }
`
