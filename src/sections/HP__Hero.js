import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { Container } from "react-bootstrap"
import {
  Section,
  ContentBox,
  PageHeading,
  Subtitle,
  Button,
} from "../components/StyledElements"

const HP__Hero = ({
  heading,
  subtitle,
  buttonText,
  buttonDestination,
  image,
}) => {
  return (
    <Section>
      <Container>
        <ContentBox className="ml-auto mr-auto text-center">
          {heading ? <PageHeading>{heading}</PageHeading> : ``}
          {subtitle ? <Subtitle>{subtitle}</Subtitle> : ``}
          {buttonText ? (
            <Link to={buttonDestination}>
              <Button Large className="mt-2">
                {buttonText}
              </Button>
            </Link>
          ) : (
            ``
          )}
        </ContentBox>
        {image ? (
          <Img
            className="mt-5 mt-md-5 BoxShadowActive"
            fluid={image}
            alt="ROI Calculator App Screen"
          />
        ) : (
          ``
        )}
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
