const path = require("path")
const chunk = require(`lodash/chunk`)

exports.createPages = async gatsbyUtilities => {
  // console.log(`Actions: ${gatsbyUtilities.actions}`)
  const posts = await getPosts(gatsbyUtilities)
  if (posts.length) {
    // If there are posts, create pages for them
    await createIndividualBlogPostPages({ posts, gatsbyUtilities })
    // And a paginated archive
    await createBlogPostArchive({ posts, gatsbyUtilities })
  }
  const pages = await getPagesMD(gatsbyUtilities)
  // If there are no pages in MD, don't do anything
  if (pages.length) {
    await createIndividualMDPages({ pages, gatsbyUtilities })
  }
}

/**
 * This function creates all the individual pages from markdown in the site
 */
async function createIndividualMDPages({ pages, gatsbyUtilities }) {
  const templates = {
    HomepageTemplate: path.resolve("./src/templates/HomepageTemplate.js"),
  }
  // Create pages for each markdown file.
  console.log(templates.HomepageTemplate)
  return Promise.all(
    pages.map(async ({ node }) => {
      const path = node.frontmatter.path
      await gatsbyUtilities.actions.createPage({
        path:
          node.frontmatter.template === "HomepageTemplate" ? `/` : `${path}`,
        component: templates.HomepageTemplate,
        context: {
          pagePath: path,
        },
      })
    })
  )
}

/**
 * This function creates all the individual blog pages in this site
 */
const createIndividualBlogPostPages = async ({ posts, gatsbyUtilities }) =>
  Promise.all(
    posts.map(({ previous, post, next }) =>
      gatsbyUtilities.actions.createPage({
        path: post.uri,
        component: path.resolve(`./src/templates/BlogPost.js`),
        context: {
          id: post.id,
          previousPostId: previous ? previous.id : null,
          nextPostId: next ? next.id : null,
        },
      })
    )
  )

/**
 * This function creates all the individual blog pages in this site
 */
async function createBlogPostArchive({ posts, gatsbyUtilities }) {
  const graphqlResult = await gatsbyUtilities.graphql(/* GraphQL */ `
    {
      wp {
        readingSettings {
          postsPerPage
        }
      }
    }
  `)

  const { postsPerPage } = graphqlResult.data.wp.readingSettings

  const postsChunkedIntoArchivePages = chunk(posts, postsPerPage)
  const totalPages = postsChunkedIntoArchivePages.length

  return Promise.all(
    postsChunkedIntoArchivePages.map(async (_posts, index) => {
      const pageNumber = index + 1

      const getPagePath = page => {
        if (page > 0 && page <= totalPages) {
          return page === 1 ? `/resources` : `/resources/${page}`
        }
        return null
      }

      await gatsbyUtilities.actions.createPage({
        path: getPagePath(pageNumber),
        component: path.resolve(`./src/templates/BlogArchive.js`),
        context: {
          offset: index * postsPerPage,
          postsPerPage,
          nextPagePath: getPagePath(pageNumber + 1),
          previousPagePath: getPagePath(pageNumber - 1),
        },
      })
    })
  )
}

/**
 * This function queries Gatsby's GraphQL server and asks for
 * All WordPress blog posts. If there are any GraphQL error it throws an error
 * Otherwise it will return the posts 🙌
 *
 * We're passing in the utilities we got from createPages.
 * So see https://www.gatsbyjs.com/docs/node-apis/#createPages for more info!
 */
async function getPosts({ graphql, reporter }) {
  const graphqlResult = await graphql(/* GraphQL */ `
    query WpPosts {
      # Query all WordPress blog posts sorted by date
      allWpPost(sort: { fields: [date], order: DESC }) {
        edges {
          previous {
            id
          }

          # note: this is a GraphQL alias. It renames "node" to "post" for this query
          # We're doing this because this "node" is a post! It makes our code more readable further down the line.
          post: node {
            id
            uri
          }

          next {
            id
          }
        }
      }
    }
  `)

  if (graphqlResult.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      graphqlResult.errors
    )
    return
  }

  return graphqlResult.data.allWpPost.edges
}

/**
 * This function gets pages from Markdown
 */
async function getPagesMD({ graphql, reporter }) {
  const graphqlResult = await graphql(
    `
      {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                path
                template
              }
            }
          }
        }
      }
    `
  )

  if (graphqlResult.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      graphqlResult.errors
    )
    return
  }

  return graphqlResult.data.allMarkdownRemark.edges
}
