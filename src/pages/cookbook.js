import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderLogo from "../components/globals/header/HeaderLogo"
import Section from "../components/globals/section/Section"

const Cookbook = () => {
  return (
    <Layout>
      <SEO title="Cookbook" />
      <Section style={{ width: "100vw", margin: "4rem auto 1rem auto" }}>
        <HeaderLogo />
      </Section>
    </Layout>
  )
}

export default Cookbook
