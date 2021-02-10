const path = require("path")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    query {
      promos: allPromosJson {
        edges {
          node {
            slug
          }
        }
      }
      recipes: allRecipesJson {
        edges {
          node {
            slug
          }
        }
      }
      valentines: allValentinesJson {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  data.promos.edges.forEach(({ node }) => {
    createPage({
      path: `promos/${node.slug}`,
      component: path.resolve("./src/templates/promos-template.js"),
      context: {
        slug: node.slug,
      },
    })
  })
  data.recipes.edges.forEach(({ node }) => {
    createPage({
      path: `recipes/${node.slug}`,
      component: path.resolve("./src/templates/recipes-template.js"),
      context: {
        slug: node.slug,
      },
    })
  })
  data.valentines.edges.forEach(({ node }) => {
    createPage({
      path: `valentines/${node.slug}`,
      component: path.resolve("./src/templates/valentine-template.js"),
      context: {
        slug: node.slug,
      },
    })
  })
}
