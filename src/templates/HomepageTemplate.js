import React, { Component } from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import HP__Hero from "../sections/HP__Hero"
import { graphql } from "gatsby"

export class IndexPage extends Component {
  render() {
    const { frontmatter } = this.props.data.pageData
    const { description, title, HP__Hero_data } = frontmatter
    return (
      <Layout>
        <SEO title={title} description={description} />
        <HP__Hero
          heading={HP__Hero_data.heading}
          subtitle={HP__Hero_data.subtitle}
          buttonText={HP__Hero_data.buttonText}
          buttonDestination={HP__Hero_data.buttonDestination}
          image={HP__Hero_data.image.childImageSharp.fluid}
        />
      </Layout>
    )
  }
}

export default IndexPage

export const query = graphql`
  query($path: String!) {
    pageData: markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        path
        description
        template
        HP__Hero_data {
          heading
          subtitle
          buttonText
          buttonDestination
          image {
            childImageSharp {
              fluid(maxWidth: 4000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
