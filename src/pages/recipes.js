import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderLogo from "../components/globals/header/HeaderLogo"
import Section from "../components/globals/section/Section"
import Promos from "../components/promos/PromosList"
import Intro from "../components/Intro"
import Gallery from "../components/gallery"

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
          margin: "4rem auto 4rem auto",
          flexWrap: "wrap",
        }}
      >
        <Promos />
      </Section>
      <Intro />
      <Gallery />
    </Layout>
  )
}

export default Recipes
