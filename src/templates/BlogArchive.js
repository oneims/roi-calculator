import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "src/components/Layout"
import SEO from "src/components/Seo"
import Pattern from "src/images/pattern.svg"
import parse from "html-react-parser"
import { Container, Row, Col } from "react-bootstrap"
import {
  Section,
  ContentBox,
  PageHeading,
  Subtitle,
  Button,
  PatternWrapper,
  ArticleCard,
  ArticleCardTop,
  ArticleCardTitle,
  ArticleCardMeta,
  ArticleCardBottom,
  ArticleCardDesc,
  ArticleCardLink,
} from "src/components/StyledElements"

const BlogArchive = ({
  data,
  pageContext: { nextPagePath, previousPagePath },
}) => {
  const posts = data.allWpPost.nodes

  console.log(posts)

  if (!posts.length) {
    return (
      <Layout isHomePage>
        <Seo title="All posts" />
        <Section>
          <Container>
            <p>
              No blog posts found. Add posts to your WordPress site and they'll
              appear here!
            </p>
          </Container>
        </Section>
      </Layout>
    )
  }

  return (
    <Layout>
      <SEO title="All Resources" />
      <Section Small>
        <PatternWrapper PatternWrapperFull>
          <Pattern />
        </PatternWrapper>
        <Container>
          <ContentBox className="ml-auto mr-auto text-center">
            <PageHeading GradientText>Resources</PageHeading>
            <Subtitle>Explore financial articles below</Subtitle>
          </ContentBox>
        </Container>
        <Container className="mt-4 pt-4">
          <Row>
            {posts.map(post => {
              const title = post.title
              const featuredImage = {
                fluid:
                  post.featuredImage?.node?.localFile?.childImageSharp?.fluid,
                alt: post.featuredImage?.node?.alt || title,
              }
              const excerpt =
                post.excerpt.replace(/(<([^>]+)>)/gi, "").substring(0, 120) +
                "..."
              return (
                <Col md="6" lg="4" key={post.uri} className="mb-4">
                  <Link to={post.uri} className="no-styles">
                    <ArticleCard itemScope itemType="http://schema.org/Article">
                      <ArticleCardTop>
                        {featuredImage.fluid && (
                          <Img
                            className=""
                            fluid={featuredImage.fluid}
                            alt={featuredImage.alt}
                          />
                        )}
                      </ArticleCardTop>
                      <ArticleCardBottom>
                        <ContentBox className="mb-3">
                          <Link to={post.uri}>
                            <ArticleCardTitle>{parse(title)}</ArticleCardTitle>
                          </Link>
                          <ArticleCardMeta className="mt-2 mb-2 d-block">
                            <p>{post.date}</p>
                          </ArticleCardMeta>
                        </ContentBox>
                        <ContentBox>
                          <ArticleCardDesc>{parse(excerpt)}</ArticleCardDesc>
                        </ContentBox>
                        <ContentBox className="mt-3">
                          <ArticleCardLink>
                            <Link to={post.uri}>Read More</Link>
                          </ArticleCardLink>
                        </ContentBox>
                      </ArticleCardBottom>
                    </ArticleCard>
                  </Link>
                </Col>
              )
            })}
          </Row>
        </Container>

        {previousPagePath && (
          <>
            <Link to={previousPagePath}>Previous page</Link>
            <br />
          </>
        )}
        {nextPagePath && <Link to={nextPagePath}>Next page</Link>}
      </Section>
    </Layout>
  )
}

export default BlogArchive

export const pageQuery = graphql`
  query WordPressPostArchive($offset: Int!, $postsPerPage: Int!) {
    allWpPost(
      sort: { fields: [date], order: DESC }
      limit: $postsPerPage
      skip: $offset
    ) {
      nodes {
        excerpt
        uri
        date(formatString: "MMMM DD, YYYY")
        title
        featuredImage {
          node {
            altText
            localFile {
              childImageSharp {
                fluid(maxWidth: 1000, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
