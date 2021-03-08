import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Container } from "react-bootstrap"
import {
  Section,
  ContentBox,
  PageHeading,
  Subtitle,
  Button,
} from "../components/StyledElements"

const HP__Hero = ({ heading, subtitle, buttonText }) => {
  return (
    <Section>
      <Container>
        <ContentBox MW800 className="ml-auto mr-auto text-center">
          {heading ? <PageHeading>{heading}</PageHeading> : ``}
          {subtitle ? <Subtitle>{subtitle}</Subtitle> : ``}
          {buttonText ? <Button Large>{buttonText}</Button> : ``}
        </ContentBox>
      </Container>
    </Section>
  )
}

export default HP__Hero

HP__Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  buttonText: PropTypes.string,
}

HP__Hero.defaultProps = {
  heading: "Always interactive, lightning fast design.",
  subtitle:
    "Bring your creative ideas to life with Brunö, the best tool for interactive design. Create responsive layouts, design realistic prototypes, and bring everything closer to production—all in one place.",
  buttonText: "Get Started",
}
