import React from "react"
import Layout from "src/components/Layout"
import { GatsbySeo } from "gatsby-plugin-next-seo"
import HP__Hero from "src/components/sections/HP__Hero"
import { graphql } from "gatsby"

const HomepageTemplate = props => {
  const { frontmatter } = props.data.pageData
  const { description, title, HP__Hero_data, seoURL } = frontmatter
  return (
    <Layout>
      <GatsbySeo
        title={title}
        description={description}
        canonical={seoURL}
        openGraph={{
          url: { seoURL },
          title: { title },
          description: { description },
          images: [
            {
              url: "/calculator-ss.jpg",
              width: 800,
              height: 600,
              alt: { title },
            },
            {
              url: "/calculator-ss.jpg",
              width: 900,
              height: 800,
              alt: { title },
            },
            { url: "/calculator-ss.jpg" },
            { url: "/calculator-ss.jpg" },
          ],
        }}
      />
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

export default HomepageTemplate

export const query = graphql`
  query($path: String!) {
    pageData: markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        path
        description
        template
        seoURL
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
