import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Container from "react-bootstrap/Container"
import { Link } from "gatsby"
import {
  Section,
  PageHeading,
  Subtitle,
  Button,
} from "../components/StyledElements"

const NotFoundPage = () => (
  <Layout>
    <Section MinHeight VerticallyCentered>
      <SEO
        title={`404 - Not Found`}
        description={`You just hit a route which does not exist. Hmmm.`}
      />
      <Container className="text-center">
        <PageHeading>404. Not Found!</PageHeading>
        <Subtitle>Oops, you just hit a route which does not exist.</Subtitle>
        <Link to="/">
          <Button className="mt-3">Navigate to Home</Button>
        </Link>
      </Container>
    </Section>
  </Layout>
)

export default NotFoundPage
