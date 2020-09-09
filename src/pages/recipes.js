import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderLogo from "../components/globals/header/HeaderLogo"
import Section from "../components/globals/section/Section"
import RecipeList from "../components/recipes/RecipeList"

const Recipes = () => {
  return (
    <Layout>
      <SEO title="Recipes" />
      <Section style={{ width: "100vw", margin: "4rem auto 1rem auto" }}>
        <HeaderLogo />
      </Section>
      <Section
        style={{
          width: "100vw",
          margin: "4rem auto 6rem auto",
          flexWrap: "wrap",
        }}
      >
        <RecipeList />
      </Section>
    </Layout>
  )
}

export default Recipes
