import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "src/components/Layout"
import SEO from "src/components/Seo"
import parse from "html-react-parser"
import Pattern from "src/images/pattern.svg"
import { Container, Row, Col } from "react-bootstrap"
import {
  Section,
  ContentBox,
  PageHeading,
  ArticleWrapper,
  Button,
  PatternWrapper,
  FeaturedImageWrapper,
  ArticleCard,
  ArticleCardTop,
  ArticleCardTitle,
  ArticleCardMeta,
  ArticleCardBottom,
  ArticleCardDesc,
  ArticleCardLink,
} from "src/components/StyledElements"

const relatedArticlesStyles = {
  backgroundColor: "#fff",
  borderTop: "2px solid #eee",
}

const BlogPost = ({ data: { post, relatedArticles } }) => {
  relatedArticles = relatedArticles.nodes.filter(elem => elem.id != post.id)
  console.log(relatedArticles)
  relatedArticles = relatedArticles.slice(0, 3)
  const featuredImage = {
    fluid: post.featuredImage?.node?.localFile?.childImageSharp?.fluid,
    alt: post.featuredImage?.node?.alt || ``,
  }

  return (
    <Layout>
      <SEO title={post.title} description={post.title} />
      {!!post.content && (
        <>
          <Section Small>
            <PatternWrapper PatternWrapperFull>
              <Pattern />
            </PatternWrapper>
            <Container>
              <ArticleWrapper>
                <ContentBox className="ml-auto mr-auto text-center">
                  <PageHeading PrimaryColor>{post.title}</PageHeading>
                </ContentBox>
                <ContentBox className="mt-4 mb-4">
                  {featuredImage.fluid && (
                    <FeaturedImageWrapper>
                      <Img
                        fluid={featuredImage.fluid}
                        alt={featuredImage.alt}
                      />
                    </FeaturedImageWrapper>
                  )}
                </ContentBox>
                <ContentBox className="mw-700 ml-auto mr-auto">
                  <ArticleCardMeta className="mt-2 mb-2 d-block">
                    <p>
                      <time>{post.date}</time>
                    </p>
                  </ArticleCardMeta>
                  {parse(post.content)}
                </ContentBox>
              </ArticleWrapper>
            </Container>
          </Section>
          <Section Small style={relatedArticlesStyles}>
            <Container>
              <ContentBox className="mw-600 ml-auto mr-auto text-center">
                <h2 style={{ fontSize: "2.25rem" }}>Explore More</h2>
                <p>View more articles from our catalog</p>
              </ContentBox>
            </Container>
            <Container className="mt-4 pt-4">
              <Row>
                {relatedArticles.map(post => {
                  const title = post.title
                  const featuredImage = {
                    fluid:
                      post.featuredImage?.node?.localFile?.childImageSharp
                        ?.fluid,
                    alt: post.featuredImage?.node?.alt || title,
                  }
                  const excerpt =
                    post.excerpt
                      .replace(/(<([^>]+)>)/gi, "")
                      .substring(0, 120) + "..."
                  return (
                    <Col md="6" lg="4" key={post.uri} className="mb-4">
                      <Link to={post.uri} className="no-styles">
                        <ArticleCard
                          itemScope
                          itemType="http://schema.org/Article"
                        >
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
                                <ArticleCardTitle>
                                  {parse(title)}
                                </ArticleCardTitle>
                              </Link>
                              <ArticleCardMeta className="mt-2 mb-2 d-block">
                                <p>{post.date}</p>
                              </ArticleCardMeta>
                            </ContentBox>
                            <ContentBox>
                              <ArticleCardDesc>
                                {parse(excerpt)}
                              </ArticleCardDesc>
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
          </Section>
        </>
      )}
    </Layout>
  )
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostById(
    # these variables are passed in via createPage.pageContext in gatsby-node.js
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    # selecting the current post by id
    post: wpPost(id: { eq: $id }) {
      id
      excerpt
      content
      title
      date(formatString: "MMMM DD, YYYY")

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

    # this randomly gets 10 articles
    relatedArticles: allWpPost(
      sort: { fields: [date], order: DESC }
      limit: 10
    ) {
      nodes {
        id
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

    # this gets us the previous post by id (if it exists)
    previous: wpPost(id: { eq: $previousPostId }) {
      uri
      title
    }

    # this gets us the next post by id (if it exists)
    next: wpPost(id: { eq: $nextPostId }) {
      uri
      title
    }
  }
`
